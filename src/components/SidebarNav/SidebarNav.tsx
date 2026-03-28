import React from 'react';
import { cx } from '../../lib/cx';

export type SidebarNavItem = {
  id: string;
  label: React.ReactNode;
  href?: string;
  dot?: string;
  active?: boolean;
  onClick?: () => void;
};

export type SidebarNavSection = {
  label?: React.ReactNode;
  items: SidebarNavItem[];
};

export type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  sections: SidebarNavSection[];
};

export function SidebarNav({ sections, className, ...props }: SidebarNavProps) {
  return (
    <nav className={cx('bolha-sidebar-nav', className)} {...props}>
      {sections.map((section, i) => (
        <div key={i} className="bolha-sidebar-nav__section">
          {section.label ? (
            <span className="bolha-sidebar-nav__label">{section.label}</span>
          ) : null}

          {section.items.map((item) => {
            const ItemComponent = item.href ? 'a' : 'button';
            return (
              <ItemComponent
                key={item.id}
                href={item.href}
                type={item.href ? undefined : 'button'}
                onClick={item.onClick}
                className={cx(
                  'bolha-sidebar-nav__item',
                  item.active && 'bolha-sidebar-nav__item--active'
                )}
              >
                {item.dot ? (
                  <span
                    className="bolha-sidebar-nav__dot"
                    style={{ background: item.dot }}
                    aria-hidden="true"
                  />
                ) : null}
                {item.label}
              </ItemComponent>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
