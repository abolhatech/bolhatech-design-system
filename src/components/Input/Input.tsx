import React from 'react';
import { cx } from '../../lib/cx';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{ fontSize: 13, fontWeight: 500, color: 'var(--bolha-text)' }}
        >
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={cx('bolha-input', error && 'bolha-input--error', className)}
        style={error ? { borderColor: 'var(--bolha-down)' } : undefined}
        {...props}
      />

      {hint && !error ? (
        <span style={{ fontSize: 12, color: 'var(--bolha-subtle)' }}>{hint}</span>
      ) : null}

      {error ? (
        <span style={{ fontSize: 12, color: 'var(--bolha-down)' }} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
