import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

import { config } from './config';
import './globals.css';
import { Providers } from './providers';

const notoSans = Noto_Sans({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.common.baseUrl),
  title: 'Aleksei Kuznetsov',
  description: 'Aleksei Kuznetsov, full-stack developer',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning className={notoSans.variable} lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/manifest.webmanifest" rel="manifest" />
      </head>
      <body className="dark:bg-zinc-900">
        <Providers>
          <div className="mx-auto w-full max-w-2xl px-6 py-16 max-sm:px-5 max-sm:py-8">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
