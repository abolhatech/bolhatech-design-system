import React from 'react';
import { cx } from '../../lib/cx';

export type BrandMarkProps = React.SVGAttributes<SVGElement> & {
  title?: string;
};

export function BrandMark({ className, title = 'AbolhaTech', ...props }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 84 84" aria-hidden={title ? undefined : true} role="img" className={cx('bolha-mark', className)} {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="48" cy="42" r="30" />
      <rect x="7" y="22" width="15" height="42" rx="7.5" transform="rotate(-62 14.5 43)" />
      <rect x="13" y="7" width="15" height="42" rx="7.5" transform="rotate(28 20.5 28)" />
    </svg>
  );
}
