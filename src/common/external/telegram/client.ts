import TelegramBot from 'node-telegram-bot-api';

import { config } from '~/app/config';

export const tgBot = new TelegramBot(config.telegram.botAccessToken, {
  polling: false,
});
