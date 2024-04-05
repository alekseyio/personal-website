import { Handler } from 'hono';
import { env } from 'hono/adapter';
import { z } from 'zod';

import { Env } from '../env';
import { sendMessage } from '../external/telegram';
import { validateTurnstileToken } from '../helpers';

const contactSchema = z.object({
  subject: z.string({
    required_error: 'Subject is required',
    invalid_type_error: 'Subject must be a string',
  }),
  message: z.string({
    required_error: 'Message is required',
    invalid_type_error: 'Message must be a string',
  }),
  token: z.string({
    required_error: 'Token is required',
    invalid_type_error: 'Token must be a string',
  }),
});

export const contact: Handler = async c => {
  const isJSON = c.req.header('content-type')?.includes('application/json');

  if (!isJSON) {
    c.status(400);
    return c.json({
      error: 'Expected JSON payload, received nothing',
    });
  }

  const json: unknown = await c.req.json();
  const parseResult = contactSchema.safeParse(json);

  if (!parseResult.success) {
    c.status(422);
    return c.json(
      parseResult.error.flatten(issue => ({
        errorCode: issue.code,
        message: issue.message,
      })).fieldErrors,
    );
  }

  const payload = parseResult.data;
  const config = env<Env>(c);

  /**
   * Turnstile token verification
   */
  try {
    const ip = c.req.header('CF-Connecting-IP');

    const isValid = await validateTurnstileToken(
      config.TURNSTILE_SECRET_KEY,
      payload.token,
      ip,
    );

    if (!isValid) {
      c.status(400);
      return c.json({ error: 'Token is invalid' });
    }
  } catch (err) {
    console.log('Failed to validate token');
    console.log(err);

    c.status(500);
    return c.json({ error: 'Failed to validate token' });
  }

  /**
   * Send telegram message
   */
  try {
    await sendMessage(payload.subject, payload.message, {
      accessToken: config.TELEGRAM_BOT_ACCESS_TOKEN,
      chatId: config.TELEGRAM_CHAT_ID,
    });

    c.status(200);
    return c.json({});
  } catch (err) {
    console.log('Failed to send Telegram message');
    console.log(err);

    c.status(500);
    return c.json({ error: 'Failed to send Telegram message' });
  }
};
