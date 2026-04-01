import React from 'react';
import { cx } from '../../lib/cx';

export type EditorialSignupProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  form: React.ReactNode;
};

export function EditorialSignup({
  className,
  description,
  eyebrow,
  form,
  ...props
}: EditorialSignupProps) {
  return (
    <section className={cx('bolha-editorial-signup', className)} {...props}>
      {(eyebrow || description) ? (
        <div className="bolha-editorial-signup__copy">
          {eyebrow ? <p className="bolha-editorial-signup__eyebrow">{eyebrow}</p> : null}
          {description ? <p className="bolha-editorial-signup__description">{description}</p> : null}
        </div>
      ) : null}

      <div className="bolha-editorial-signup__form">{form}</div>
    </section>
  );
}
