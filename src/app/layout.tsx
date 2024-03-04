import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Aleksei Kuznetsov',
  description: 'Aleksei Kuznetsov, full-stack developer',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
