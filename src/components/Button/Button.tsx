import React from 'react';
import { cx } from '../../lib/cx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cx('bolha-button', `bolha-button--${variant}`, className)} {...props} />;
}
