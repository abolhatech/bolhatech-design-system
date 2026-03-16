import React from 'react';
import { cx } from '../../lib/cx';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { Text } from '../Text/Text';

export type ArticleHeaderProps = React.HTMLAttributes<HTMLElement> & {
  category: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  title: React.ReactNode;
};

export function ArticleHeader({
  category,
  className,
  description,
  meta,
  title,
  ...props
}: ArticleHeaderProps) {
  return (
    <header className={cx('bolha-article-header', className)} {...props}>
      <Eyebrow className="bolha-article-header__category">{category}</Eyebrow>
      <h1>{title}</h1>
      {description ? <Text>{description}</Text> : null}
      {meta ? <div className="bolha-article-header__meta">{meta}</div> : null}
    </header>
  );
}
