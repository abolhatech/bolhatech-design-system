import React from 'react';
import { cx } from '../../lib/cx';

export type BadgeVariant =
  | 'default'
  | 'accent'
  | 'ia'
  | 'frontend'
  | 'backend'
  | 'devops';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  dot?: boolean;
};

const communityDotColors: Record<string, string> = {
  ia: 'var(--bolha-community-ia)',
  frontend: 'var(--bolha-community-frontend)',
  backend: 'var(--bolha-community-backend)',
  devops: 'var(--bolha-community-devops)',
};

export function Badge({
  variant = 'default',
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const dotColor = communityDotColors[variant];

  return (
    <span className={cx('bolha-badge', `bolha-badge--${variant}`, className)} {...props}>
      {dot && dotColor ? (
        <span
          className="bolha-sidebar-nav__dot"
          style={{ background: dotColor }}
          aria-hidden="true"
        />
      ) : null}
      {children}
    </span>
  );
}

/** Convenience function — returns the Badge variant that corresponds to a community slug */
export function communityVariant(slug: string): BadgeVariant {
  const valid: BadgeVariant[] = ['ia', 'frontend', 'backend', 'devops'];
  return valid.includes(slug as BadgeVariant) ? (slug as BadgeVariant) : 'default';
}
