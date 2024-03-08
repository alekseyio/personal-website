import { ContactForm } from './contact-form';

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
