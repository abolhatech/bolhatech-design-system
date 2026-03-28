import React from 'react';
import { cx } from '../../lib/cx';

export type ContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
  /** Applies the 3-column layout grid inside the container */
  layout?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  layout,
  ...props
}: ContainerProps<T>) {
  const Component = as || 'div';
  return (
    <Component
      className={cx('bolha-container', layout && 'bolha-layout', className)}
      {...props}
    />
  );
}
