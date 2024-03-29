'use client';

import { ComponentType } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { ArrowLeft, GitHub, LinkedIn, Telegram } from '~/common/components/icons';

import { ThemeSelector } from './theme-selector';

export function Header() {
  const pathname = usePathname();
  const shouldRenderBackBtn = pathname !== '/';

  return (
    <header className="-mx-1.5 flex items-center gap-2">
      {shouldRenderBackBtn && <BackButton />}
      <IconLink
        href="https://linkedin.com/in/alekseyio"
        icon={LinkedIn}
        title="LinkedIn"
      />
      <IconLink href="https://github.com/alekseyio" icon={GitHub} title="GitHub" />
      <IconLink href="https://t.me/alekseyio" icon={Telegram} title="Telegram" />
      <ThemeSelector className={clsx(!shouldRenderBackBtn && 'ml-auto')} />
    </header>
  );
}

function IconLink({
  href,
  title,
  icon: Icon,
}: {
  href: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a
      className="rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-800"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      <Icon className="h-7 w-7 text-black dark:text-zinc-100" />
    </a>
  );
}

function BackButton() {
  return (
    <Link
      className="mr-auto inline-flex items-center gap-1.5 px-1.5 font-medium text-black hover:text-gray-600 dark:text-zinc-50 dark:hover:text-zinc-300"
      href="/"
    >
      <ArrowLeft className="h-5 w-5" />
      Go back
    </Link>
  );
}
