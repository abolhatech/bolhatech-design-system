import React from 'react';
import { cx } from '../../lib/cx';

export type CommentCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: React.ReactNode;
  content: React.ReactNode;
  timestamp?: React.ReactNode;
  avatarInitials?: string;
  avatarUrl?: string;
  actions?: React.ReactNode;
  depth?: number;
};

export function CommentCard({
  author,
  content,
  timestamp,
  avatarInitials,
  avatarUrl,
  actions,
  depth = 0,
  className,
  ...props
}: CommentCardProps) {
  return (
    <div
      className={cx('bolha-comment-card', className)}
      style={depth > 0 ? { marginLeft: `${depth * 20}px` } : undefined}
      {...props}
    >
      <div className="bolha-comment-card__avatar" aria-hidden="true">
        {avatarUrl ? (
          <img src={avatarUrl} alt="" width={28} height={28} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          avatarInitials ?? '?'
        )}
      </div>

      <div className="bolha-comment-card__body">
        <div className="bolha-comment-card__meta">
          <span className="bolha-comment-card__author">{author}</span>
          {timestamp ? <span>·</span> : null}
          {timestamp ? <span>{timestamp}</span> : null}
        </div>

        <p className="bolha-comment-card__content">{content}</p>

        {actions ? (
          <div className="bolha-comment-card__actions">{actions}</div>
        ) : null}
      </div>
    </div>
  );
}
