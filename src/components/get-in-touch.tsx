import Link from 'next/link';

import { createContactRequest } from '~/actions/contact';
import { Input } from '~/common/components';

export function GetInTouch() {
  return (
    <section>
      <h2>Let&apos;s get in touch!</h2>
      <p>
        If you&apos;re interested in getting to know me better, please feel free to
        leave your contact request here. I typically respond during weekdays, from 9 AM
        to 8 PM.
      </p>
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  return (
    <form action={createContactRequest} className="mt-6 space-y-5">
      <Input required id="subject" label="Subject" name="subject" type="text" />
      <Input required id="message" label="Message" name="message" type="textarea" />
      <div className="flex justify-end gap-4">
        <Link className="action action--secondary" href="..">
          Cancel
        </Link>
        <button className="action action--primary" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
