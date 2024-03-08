'use client';

import { ComponentType } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { ArrowLeft, GitHub, LinkedIn, Telegram } from '~/common/components/icons';

import { ThemeToggle } from './theme-toggle';

export function Header() {
  const pathname = usePathname();
  const shouldRenderBackBtn = pathname !== '/';

  return (
    <header className="-mx-1.5 flex items-center gap-2">
      {shouldRenderBackBtn && <BackButton />}
      <IconLink href="/" icon={LinkedIn} title="LinkedIn" />
      <IconLink href="/" icon={GitHub} title="GitHub" />
      <IconLink href="/" icon={Telegram} title="Telegram" />
      <ThemeToggle className={clsx(!shouldRenderBackBtn && 'ml-auto')} />
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
    <Link className="rounded-lg p-1.5 hover:bg-gray-100" href={href} title={title}>
      <Icon className="h-7 w-7 text-black" />
    </Link>
  );
}

function BackButton() {
  return (
    <Link
      className="mr-auto inline-flex items-center gap-1.5 px-1.5 font-medium text-black hover:text-gray-600"
      href="/"
    >
      <ArrowLeft />
      Go back
    </Link>
  );
}
