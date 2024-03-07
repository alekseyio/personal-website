import { ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

type HTMLInputProps = ComponentPropsWithoutRef<'input'>;

export function Input({
  label,
  id,
  name,
  required,
  type = 'text',
}: {
  label: string;
  id: string;
  name: HTMLInputProps['name'];
  required?: boolean;
  type: HTMLInputProps['type'] | 'textarea';
}) {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <label
        className="absolute left-[1.375rem] top-[0.875rem] z-10 cursor-text select-none text-sm font-medium text-gray-500"
        htmlFor={id}
      >
        {label}
      </label>
      <Component
        className={clsx(
          'block w-full rounded-2xl border-2 border-transparent bg-gray-200 px-5 pb-[0.875rem] pt-[2.375rem] font-medium text-black hover:border-gray-300 focus:border-black focus:shadow-none focus:ring-0',
          isTextarea && 'h-44 resize-none',
        )}
        id={id}
        name={name}
        required={required}
        type={isTextarea ? undefined : type}
      />
    </div>
  );
}
