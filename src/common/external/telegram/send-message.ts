import { config } from '~/app/config';

import { tgBot } from './client';

export function sendMessage(subject: string, message: string) {
  /**
   * No need to do anything with projected content,
   * Telegram API will fail if someone wants to inject some nasty scripts
   */
  const text = `<b>${subject}</b>\n\n${message}`;

  return tgBot.sendMessage(config.telegram.chatId, text, { parse_mode: 'HTML' });
}
