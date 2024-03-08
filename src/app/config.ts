import { assert } from '~/common/util';

assert(
  typeof process.env.TELEGRAM_BOT_ACCESS_TOKEN === 'string',
  '"TELEGRAM_BOT_ACCESS_TOKEN" environment variable is not defined',
);
assert(
  typeof process.env.TELEGRAM_CHAT_ID === 'string',
  '"TELEGRAM_CHAT_ID" environment variable is not defined',
);

export const config = {
  telegram: {
    botAccessToken: process.env.TELEGRAM_BOT_ACCESS_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
  },
};
