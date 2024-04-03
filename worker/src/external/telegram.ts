interface TelegramBotInitOptions {
  accessToken: string;
  chatId: string;
}

interface TelegramErrorResponse {
  ok: false;
  error_code: number;
  description: string;
}

export async function sendMessage(
  subject: string,
  message: string,
  options: TelegramBotInitOptions,
): Promise<void> {
  const URL = `https://api.telegram.org/bot${options.accessToken}/sendMessage`;
  /**
   * No need to do anything with projected content,
   * Telegram API will fail if someone wants to inject some nasty scripts
   */
  const text = `<b>${subject}</b>\n\n${message}`;

  const response = await fetch(URL, {
    body: JSON.stringify({
      chat_id: options.chatId,
      text,
      parse_mode: 'HTML',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (!response.ok) {
    const err: TelegramErrorResponse = await response.json();

    throw new Error(err.description, { cause: err });
  }
}
