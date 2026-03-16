import React from 'react';
import { cx } from '../../lib/cx';

export type SectionHeadingProps = {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function SectionHeading({ className, title, description }: SectionHeadingProps) {
  return (
    <div className={cx('bolha-section-heading', className)}>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
