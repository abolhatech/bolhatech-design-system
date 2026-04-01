import React from 'react';
import { cx } from '../../lib/cx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline' | 'contrast';
  size?: 'sm' | 'md';
  as?: 'button' | 'a';
  href?: string;
};

export function Button({
  className,
  variant = 'outline',
  size = 'md',
  as,
  href,
  ...props
}: ButtonProps) {
  const Component = as || (href ? 'a' : 'button') as React.ElementType;
  return (
    <Component
      href={href}
      className={cx(
        'bolha-button',
        `bolha-button--${variant}`,
        size === 'sm' && 'bolha-button--sm',
        className
      )}
      {...props}
    />
  );
}
