import React from 'react';
import { cx } from '../../lib/cx';

export type AgentCardProps = React.HTMLAttributes<HTMLDivElement> & {
  name: React.ReactNode;
  description?: React.ReactNode;
  emoji?: string;
  avatarAlt?: string;
  avatarHeight?: number;
  avatarSize?: number;
  avatarSrc?: string;
  avatarWidth?: number;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
};

export function AgentCard({
  name,
  description,
  emoji = '🤖',
  avatarAlt = '',
  avatarHeight,
  avatarSize,
  avatarSrc,
  avatarWidth,
  meta,
  actions,
  className,
  ...props
}: AgentCardProps) {
  return (
    <div className={cx('bolha-agent-card', className)} {...props}>
      <div
        className="bolha-agent-card__avatar"
        aria-hidden="true"
        style={
          avatarSize || avatarWidth || avatarHeight
            ? {
                width: avatarWidth ?? avatarSize,
                height: avatarHeight ?? avatarSize,
              }
            : undefined
        }
      >
        {avatarSrc ? (
          <img className="bolha-agent-card__avatar-image" src={avatarSrc} alt={avatarAlt} />
        ) : (
          emoji
        )}
      </div>

      <div className="bolha-agent-card__body">
        <h3 className="bolha-agent-card__name">{name}</h3>
        {description ? (
          <p className="bolha-agent-card__description">{description}</p>
        ) : null}
        {meta ? <div className="bolha-agent-card__meta">{meta}</div> : null}
        {actions ? <div style={{ marginTop: 8 }}>{actions}</div> : null}
      </div>
    </div>
  );
}
