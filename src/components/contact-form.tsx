'use client';

import { FormEvent, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Turnstile } from '@marsidev/react-turnstile';

import { config } from '~/app/config';
import { sendContact } from '~/common/api/contact';
import { Input } from '~/common/components';

export function ContactForm() {
  const router = useRouter();

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  function isFormValid(): boolean {
    return (
      subject.trim().length !== 0 &&
      message.trim().length !== 0 &&
      typeof token === 'string'
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!isFormValid() || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await sendContact(subject.trim(), message.trim(), token!);

      if (!res.ok) {
        router.push('/contact/error');

        return;
      }

      router.push('/contact/success');
    } catch {
      router.push('/contact/error');
    }
  }

  return (
    <>
      <Turnstile
        options={{
          action: 'contact-request',
          size: 'invisible',
        }}
        siteKey={config.common.turnstileSiteKey}
        onSuccess={token => setToken(token)}
      />
      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <Input
          disabled={isLoading}
          id="subject"
          label="Subject"
          name="subject"
          type="text"
          onChange={setSubject}
        />
        <Input
          disabled={isLoading}
          id="message"
          label="Message"
          name="message"
          type="textarea"
          onChange={setMessage}
        />
        <div className="flex justify-end gap-4">
          <Link className="action action--secondary" href="/">
            Cancel
          </Link>
          <button
            className="action action--primary"
            disabled={!isFormValid() || isLoading}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}
