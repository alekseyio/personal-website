import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

type HTMLInputProps = ComponentPropsWithoutRef<'input'>;

export function Input({
  disabled,
  label,
  id,
  name,
  required,
  type = 'text',
  onChange,
}: {
  disabled?: boolean;
  label: string;
  id: string;
  name: HTMLInputProps['name'];
  required?: boolean;
  type: HTMLInputProps['type'] | 'textarea';
  onChange?: (value: string) => void;
}) {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label
        className="absolute left-[1.375rem] top-[0.875rem] z-10 cursor-text select-none text-sm font-medium text-gray-500 dark:text-zinc-400"
        htmlFor={id}
      >
        {label}
      </label>
      <Component
        className={clsx(
          'block w-full rounded-2xl border-2 border-transparent bg-gray-200 px-5 pb-[0.875rem] pt-[2.375rem] font-medium text-black enabled:hover:border-gray-300 enabled:focus:border-black enabled:focus:shadow-none enabled:focus:ring-0 disabled:cursor-not-allowed dark:bg-zinc-900 dark:text-zinc-50 dark:enabled:hover:border-zinc-700 dark:enabled:focus:border-zinc-50',
          isTextarea && 'h-44 resize-none',
        )}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        type={isTextarea ? undefined : type}
        onChange={e => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
}
