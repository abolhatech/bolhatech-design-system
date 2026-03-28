import React from 'react';
import { cx } from '../../lib/cx';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
};

export function Skeleton({ width, height, circle, className, style, ...props }: SkeletonProps) {
  return (
    <div
      className={cx('bolha-skeleton', className)}
      style={{
        width,
        height: height ?? '1em',
        borderRadius: circle ? '50%' : undefined,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}

/** Skeleton block for a post card */
export function PostCardSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        padding: '12px 16px',
        background: 'var(--bolha-surface)',
        border: '1px solid var(--bolha-line)',
        borderRadius: 'var(--bolha-radius-md)',
      }}
    >
      {/* Vote column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 36 }}>
        <Skeleton width={28} height={28} />
        <Skeleton width={20} height={14} />
        <Skeleton width={28} height={28} />
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton width="40%" height={12} />
        <Skeleton width="85%" height={18} />
        <Skeleton width="60%" height={18} />
        <Skeleton width="50%" height={12} />
      </div>
    </div>
  );
}
