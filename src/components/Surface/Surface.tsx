import React from 'react';
import { cx } from '../../lib/cx';

export type SurfaceProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Surface<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: SurfaceProps<T>) {
  const Component = as || 'div';
  return <Component className={cx('bolha-surface', className)} {...props} />;
}
