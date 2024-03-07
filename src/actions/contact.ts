'use server';

export async function createContactRequest(formData: FormData): Promise<void> {
  const subject = formData.get('subject');
  const message = formData.get('message');

  console.log({ subject, message });
}
