import React from 'react';
import { cx } from '../../lib/cx';

export type PromoCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  description?: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
};

export function PromoCard({
  className,
  description,
  icon,
  title,
  ...props
}: PromoCardProps) {
  return (
    <a className={cx('bolha-promo-card', className)} {...props}>
      {icon ? <span className="bolha-promo-card__icon">{icon}</span> : null}

      <span className="bolha-promo-card__content">
        <span className="bolha-promo-card__title">{title}</span>
        {description ? <span className="bolha-promo-card__description">{description}</span> : null}
      </span>
    </a>
  );
}
