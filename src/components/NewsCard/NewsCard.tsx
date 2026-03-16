import React from 'react';
import { Text } from '../Text/Text';
import { Surface } from '../Surface/Surface';
import { cx } from '../../lib/cx';

export type NewsCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div';
  category: React.ReactNode;
  excerpt: React.ReactNode;
  index?: React.ReactNode;
  meta?: React.ReactNode;
  readTime?: React.ReactNode;
  title?: React.ReactNode;
  titleSlot?: React.ReactNode;
};

export function NewsCard({
  as,
  category,
  className,
  excerpt,
  index,
  meta,
  readTime,
  title,
  titleSlot,
  ...props
}: NewsCardProps) {
  const Component = as || 'article';

  return (
    <Surface as={Component} className={cx('bolha-news-card', className)} {...props}>
      {index ? <span className="bolha-news-card__index">{index}</span> : null}
      <div>
        <div className="bolha-news-card__top">
          <span>{category}</span>
          {readTime ? <span>{readTime}</span> : null}
        </div>
        {titleSlot ? <div className="bolha-news-card__title-slot">{titleSlot}</div> : null}
        {!titleSlot && title ? <h2 className="bolha-news-card__title">{title}</h2> : null}
        <Text className="bolha-news-card__excerpt">{excerpt}</Text>
        {meta ? <p className="bolha-news-card__meta">{meta}</p> : null}
      </div>
    </Surface>
  );
}
