import React from 'react';
import { cx } from '../../lib/cx';
import { Button } from '../Button/Button';

export type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel?: string;
  nextLabel?: string;
};

export function Pagination({
  className,
  currentPage,
  totalPages,
  onPageChange,
  previousLabel = 'Anterior',
  nextLabel = 'Próxima'
}: PaginationProps) {
  return (
    <nav className={cx('bolha-pagination', className)} aria-label="Paginação">
      <Button variant="ghost" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        {previousLabel}
      </Button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <Button variant="ghost" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        {nextLabel}
      </Button>
    </nav>
  );
}
