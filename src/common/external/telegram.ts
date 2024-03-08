import TelegramBot from 'node-telegram-bot-api';

import { config } from '~/app/config';

const bot = new TelegramBot(config.telegram.botAccessToken, { polling: false });

export function sendMessage(subject: string, message: string) {
  /**
   * No need to do anything with projected content,
   * Telegram API will fail if someone wants to inject some nasty scripts
   */
  const text = `<b>${subject}</b>\n\n${message}`;

  return bot.sendMessage(config.telegram.chatId, text, { parse_mode: 'HTML' });
}
