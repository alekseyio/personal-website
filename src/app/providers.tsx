'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem attribute="data-theme" themes={['light', 'dark']}>
      {children}
    </ThemeProvider>
  );
}
