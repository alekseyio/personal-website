import Image from 'next/image';

export function CatImage() {
  return (
    <Image
      unoptimized
      alt="Random photo of a cat"
      height={256}
      src={`https://cataas.com/cat?width=320&height=256`}
      width={320}
    />
  );
}
