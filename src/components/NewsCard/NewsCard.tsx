import React from 'react';
import { cx } from '../../lib/cx';

export type NewsCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div';
  category?: React.ReactNode;
  excerpt?: React.ReactNode;
  /** @deprecated — use voteBar slot instead */
  index?: React.ReactNode;
  meta?: React.ReactNode;
  readTime?: React.ReactNode;
  title?: React.ReactNode;
  titleSlot?: React.ReactNode;
  /** Slot for the VoteBar component */
  voteBar?: React.ReactNode;
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
  voteBar,
  ...props
}: NewsCardProps) {
  const Component = as || 'article';

  return (
    <Component className={cx('bolha-news-card', className)} {...props}>
      {/* Vote bar on the left, falls back to old index prop */}
      {voteBar ?? (index ? <span style={{ flexShrink: 0, fontSize: 12, color: 'var(--bolha-subtle)', width: 28 }}>{index}</span> : null)}

      <div className="bolha-news-card__body">
        {(category || readTime) ? (
          <div className="bolha-news-card__top">
            {category ? <span>{category}</span> : null}
            {readTime ? <span>{readTime}</span> : null}
          </div>
        ) : null}

        {titleSlot ? (
          <div className="bolha-news-card__title-slot">{titleSlot}</div>
        ) : null}
        {!titleSlot && title ? (
          <h2 className="bolha-news-card__title">{title}</h2>
        ) : null}

        {excerpt ? <p className="bolha-news-card__excerpt">{excerpt}</p> : null}
        {meta ? <div className="bolha-news-card__meta">{meta}</div> : null}
      </div>
    </Component>
  );
}
