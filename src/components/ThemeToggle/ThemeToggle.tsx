import React from 'react';
import { cx } from '../../lib/cx';
import { useBolhaTheme } from '../../theme';
import { Button, type ButtonProps } from '../Button/Button';

export type ThemeToggleProps = Omit<ButtonProps, 'children'> & {
  darkLabel?: string;
  lightLabel?: string;
};

export function ThemeToggle({
  className,
  darkLabel = 'Dark',
  lightLabel = 'Light',
  variant = 'ghost',
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useBolhaTheme();

  return (
    <Button
      type="button"
      variant={variant}
      className={cx('bolha-theme-toggle', className)}
      aria-label="Alternar tema"
      onClick={toggleTheme}
      {...props}
    >
      {resolvedTheme === 'dark' ? lightLabel : darkLabel}
    </Button>
  );
}
