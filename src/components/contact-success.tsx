import { CatImage } from './cat-image';

export function ContactSuccess() {
  return (
    <section>
      <h2>Thanks! Your request has been submitted</h2>
      <p>
        Thank you for submitting your contact request!
        <br />
        I&apos;ll get back to you as soon as possible.
      </p>
      <p>Meanwhile, you deserve a nice photo of a cat!</p>
      <p>
        <CatImage />
      </p>
    </section>
  );
}
