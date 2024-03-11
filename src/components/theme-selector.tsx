'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import { Moon, Sun } from '~/common/components/icons';

export function ThemeSelector({ className }: { className?: string }) {
  const { themes } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(
            'rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-zinc-800',
            className,
          )}
          title="Change theme"
          type="button"
        >
          <span className="sr-only">Change theme</span>
          <Sun className="h-6 w-6 text-black dark:hidden dark:text-zinc-100" />
          <Moon className="hidden h-6 w-6 text-black dark:block dark:text-zinc-100" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="rounded-lg bg-white p-1 drop-shadow dark:bg-zinc-800"
          onCloseAutoFocus={() => undefined}
        >
          {themes.map(t => (
            <ThemeOption key={t} theme={t} />
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function ThemeOption({ theme }: { theme: string }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Item
      className={clsx(
        'rounded-md py-1.5 pl-2.5 pr-14 text-sm font-medium capitalize hover:cursor-pointer hover:bg-gray-200 hover:text-gray-700 hover:outline-none dark:hover:bg-zinc-700 dark:hover:text-zinc-300',
      )}
      onClick={() => setTheme(theme)}
    >
      {theme}
    </DropdownMenu.Item>
  );
}
