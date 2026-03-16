import React from 'react';
import { cx } from '../../lib/cx';

export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('bolha-eyebrow', className)} {...props} />;
}
