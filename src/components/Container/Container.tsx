import React from 'react';
import { cx } from '../../lib/cx';

export type ContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as || 'div';
  return <Component className={cx('bolha-container', className)} {...props} />;
}
