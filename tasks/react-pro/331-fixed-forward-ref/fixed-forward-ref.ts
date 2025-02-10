import { forwardRef, ForwardRefRenderFunction, PropsWithoutRef, RefAttributes } from 'react';
import type { ReactElement } from 'react';

export const fixedForwardRef = <T, P extends {}>(
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
) => {
  return forwardRef<T, P>(render) as (props: PropsWithoutRef<P> & RefAttributes<T>) => ReactElement;
};
