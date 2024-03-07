import clsx from 'clsx';

import { Sun } from '~/common/components/icons';

/**
 * TODO: implement theme toggle logic
 */
export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      className={clsx('rounded-lg p-2 hover:bg-gray-100 active:bg-gray-200', className)}
      title="Toggle theme"
      type="button"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className="h-6 w-6 text-black" />
    </button>
  );
}
