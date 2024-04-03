import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { cors } from 'hono/cors';

import { Env } from './env';
import { contact } from './handlers/contact';
import { healthcheck } from './handlers/healthcheck';

export const app = new Hono();

/**
 * Middleware
 */
app.use(
  '*',
  cors({
    origin(_, c) {
      const config = env<Env>(c);

      return config.APP_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://alekseikuznetsov.com'; // TODO: remove hardcoded values
    },
  }),
);

/**
 * Handlers
 */
app.get('/healthcheck', healthcheck);
app.post('/contact', contact);
