import { config } from '~/app/config';

export function sendContact(subject: string, message: string) {
  const url = `${config.common.apiBaseUrl}/contact`;

  return fetch(url, {
    body: JSON.stringify({ subject, message }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}
