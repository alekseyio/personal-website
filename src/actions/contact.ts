'use server';

import { redirect } from 'next/navigation';

import { sendMessage } from '~/common/external/telegram';

interface ContactRequestPayload {
  subject: string;
  message: string;
}

export async function createContactRequest(payload: ContactRequestPayload) {
  let hasError = false;

  try {
    await sendMessage(payload.subject, payload.message);
  } catch (err) {
    hasError = true;

    console.log('Send Telegram message failed', err);
  }

  redirect(hasError ? '/contact/error' : '/contact/success');
}
