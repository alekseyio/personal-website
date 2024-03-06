import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';

const notoSans = Noto_Sans({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Aleksei Kuznetsov',
  description: 'Aleksei Kuznetsov, full-stack developer',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
