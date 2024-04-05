import { config } from '~/app/config';

export function sendContact(subject: string, message: string, token: string) {
  const url = `${config.common.apiBaseUrl}/contact`;

  return fetch(url, {
    body: JSON.stringify({ subject, message, token }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}
