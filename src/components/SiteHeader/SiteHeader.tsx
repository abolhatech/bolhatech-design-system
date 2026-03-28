import React from 'react';
import { cx } from '../../lib/cx';

export type SiteHeaderProps = React.HTMLAttributes<HTMLElement> & {
  actions?: React.ReactNode;
  brand?: React.ReactNode;
  search?: React.ReactNode;
};

export function SiteHeader({ actions, brand, search, className, ...props }: SiteHeaderProps) {
  return (
    <header className={cx('bolha-site-header', className)} {...props}>
      <div className="bolha-site-header__brand">{brand}</div>
      {search ? <div className="bolha-site-header__search">{search}</div> : null}
      {actions ? <div className="bolha-site-header__actions">{actions}</div> : null}
    </header>
  );
}
