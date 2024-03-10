'use client';

import { useState } from 'react';

import Link from 'next/link';

import { createContactRequest } from '~/actions/contact';
import { Form, Input } from '~/common/components';

export function ContactForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function isFormValid(): boolean {
    return subject.trim().length !== 0 && message.trim().length !== 0;
  }

  return (
    <Form
      action={() => createContactRequest({ subject, message })}
      className="mt-6 space-y-5"
    >
      {pending => (
        <>
          <Input
            disabled={pending}
            id="subject"
            label="Subject"
            name="subject"
            type="text"
            onChange={setSubject}
          />
          <Input
            disabled={pending}
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
              disabled={!isFormValid() || pending}
              type="submit"
            >
              Send
            </button>
          </div>
        </>
      )}
    </Form>
  );
}
