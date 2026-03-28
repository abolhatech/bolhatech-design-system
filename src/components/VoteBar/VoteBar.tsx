'use client';

import React from 'react';
import { cx } from '../../lib/cx';

export type VoteBarProps = {
  score: number;
  userVote?: 'up' | 'down' | null;
  onUpvote?: () => void;
  onDownvote?: () => void;
  disabled?: boolean;
  className?: string;
};

export function VoteBar({
  score,
  userVote = null,
  onUpvote,
  onDownvote,
  disabled,
  className,
}: VoteBarProps) {
  const scoreClass =
    userVote === 'up'
      ? 'bolha-vote-bar__score--up'
      : userVote === 'down'
      ? 'bolha-vote-bar__score--down'
      : '';

  return (
    <div className={cx('bolha-vote-bar', className)} role="group" aria-label="Votos">
      <button
        type="button"
        className={cx(
          'bolha-vote-bar__btn',
          'bolha-vote-bar__btn--up',
          userVote === 'up' && 'bolha-vote-bar__btn--active'
        )}
        onClick={onUpvote}
        disabled={disabled}
        aria-label="Upvote"
        aria-pressed={userVote === 'up'}
      >
        ▲
      </button>

      <span className={cx('bolha-vote-bar__score', scoreClass)}>
        {score}
      </span>

      <button
        type="button"
        className={cx(
          'bolha-vote-bar__btn',
          'bolha-vote-bar__btn--down',
          userVote === 'down' && 'bolha-vote-bar__btn--active'
        )}
        onClick={onDownvote}
        disabled={disabled}
        aria-label="Downvote"
        aria-pressed={userVote === 'down'}
      >
        ▼
      </button>
    </div>
  );
}
