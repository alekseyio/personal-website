import { assert } from '~/common/util';

assert(
  typeof process.env.RATE_LIMIT_CREATE_CONTACT_MAX_ATTEMPTS === 'string',
  '"RATE_LIMIT_CREATE_CONTACT_MAX_ATTEMPTS" environment variable is not defined',
);
assert(
  typeof process.env.RATE_LIMIT_CREATE_CONTACT_DURATION_SECONDS === 'string',
  '"RATE_LIMIT_CREATE_CONTACT_DURATION_SECONDS" environment variable is not defined',
);
assert(
  typeof process.env.REDIS_HOST === 'string',
  '"REDIS_HOST" environment variable is not defined',
);
assert(
  typeof process.env.REDIS_PORT === 'string',
  '"REDIS_PORT" environment variable is not defined',
);
assert(
  typeof process.env.REDIS_USERNAME === 'string',
  '"REDIS_USERNAME" environment variable is not defined',
);
assert(
  typeof process.env.REDIS_PASSWORD === 'string',
  '"REDIS_PASSWORD" environment variable is not defined',
);
assert(
  typeof process.env.TELEGRAM_BOT_ACCESS_TOKEN === 'string',
  '"TELEGRAM_BOT_ACCESS_TOKEN" environment variable is not defined',
);
assert(
  typeof process.env.TELEGRAM_CHAT_ID === 'string',
  '"TELEGRAM_CHAT_ID" environment variable is not defined',
);

export const config = {
  rateLimit: {
    createContact: {
      maxAttempts: parseInt(process.env.RATE_LIMIT_CREATE_CONTACT_MAX_ATTEMPTS, 10),
      durationSeconds: parseInt(
        process.env.RATE_LIMIT_CREATE_CONTACT_DURATION_SECONDS,
        10,
      ),
    },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
  telegram: {
    botAccessToken: process.env.TELEGRAM_BOT_ACCESS_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
  },
};
