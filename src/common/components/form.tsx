import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { useFormStatus } from 'react-dom';

type HTMLFormProps = ComponentPropsWithoutRef<'form'>;
type ChildrenRenderProp = (pending: boolean) => ReactNode;

function ChildrenWithStatus({ children }: { children: ChildrenRenderProp }) {
  const status = useFormStatus();

  return children(status.pending);
}

/**
 * Wrapper around `form` element,
 * also provides `pending` server action flag
 */
export function Form({
  children,
  ...props
}: Omit<HTMLFormProps, 'children'> & {
  children: ChildrenRenderProp;
}) {
  return (
    <form {...props}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <ChildrenWithStatus children={children} />
    </form>
  );
}
