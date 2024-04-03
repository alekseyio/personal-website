import { Handler } from 'hono';

export const healthcheck: Handler = c => {
  c.status(200);
  return c.text('Beep boop, me working...');
};
