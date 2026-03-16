import React from 'react';
import { cx } from '../../lib/cx';

export function Text({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('bolha-text', className)} {...props} />;
}
