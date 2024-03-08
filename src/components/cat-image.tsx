import Image from 'next/image';

import crypto from 'crypto';

export function CatImage() {
  /**
   * Random int to provide in URL so that
   * every time users would get new image
   */
  const rand = crypto.randomInt(1000);

  return (
    <Image
      priority
      alt="Random photo of a cat"
      height={256}
      src={`https://cataas.com/cat?width=320&height=256&q=${rand}`}
      width={320}
    />
  );
}
