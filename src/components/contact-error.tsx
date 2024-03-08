import { CatImage } from './cat-image';

export function ContactError() {
  return (
    <section>
      <h2>Uh-oh! Something went wrong</h2>
      <p>
        It might be an internal error or you got rate limited due to high number of
        submitted contact requests from your side.
      </p>
      <p>Nevertheless, here&apos;s a photo of a cat so you won&apos;t feel down 😊</p>
      <p>
        <CatImage />
      </p>
    </section>
  );
}
