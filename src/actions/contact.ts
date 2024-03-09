'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { config } from '~/app/config';
import { rateLimit } from '~/common/external/redis';
import { sendMessage } from '~/common/external/telegram';
import { getClientIp } from '~/common/util';

interface ContactRequestPayload {
  subject: string;
  message: string;
}

function createContactRateLimit(ip: string) {
  return rateLimit(
    'create-contact',
    ip,
    config.rateLimit.createContact.maxAttempts,
    config.rateLimit.createContact.durationSeconds,
  );
}

function redirectToSuccess(): void {
  redirect('/contact/success');
}

function redirectToError(): void {
  redirect('/contact/error');
}

export async function createContactRequest(payload: ContactRequestPayload) {
  const clientIp = getClientIp(headers());

  if (typeof clientIp === 'string') {
    const result = await createContactRateLimit(clientIp);

    if (!result.success) {
      redirectToError();
    }
  }

  let hasError = false;

  try {
    await sendMessage(payload.subject, payload.message);
  } catch (err) {
    hasError = true;

    console.log('Send Telegram message failed', err);
  }

  if (hasError) {
    redirectToError();
  }

  redirectToSuccess();
}
