import React from 'react';
import { cx } from '../../lib/cx';
import { BrandMark } from '../BrandMark/BrandMark';

export type BrandLockupProps = React.HTMLAttributes<HTMLDivElement> & {
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
};

export function BrandLockup({
  className,
  subtitle,
  title = 'abolhatech',
  ...props
}: BrandLockupProps) {
  return (
    <div className={cx('bolha-brand', className)} {...props}>
      <BrandMark />
      <div>
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
    </div>
  );
}
