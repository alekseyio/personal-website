import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

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
    <html className={notoSans.variable} lang="en">
      <body>
        <div className="mx-auto w-full max-w-2xl px-6 py-16 max-sm:px-5 max-sm:py-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
