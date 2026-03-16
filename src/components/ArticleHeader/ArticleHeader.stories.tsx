import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticleHeader } from './ArticleHeader';

const meta = {
  title: 'Editorial/ArticleHeader',
  component: ArticleHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'Frontend',
    title: 'Frameworks JavaScript voltam a vender menos abstração e mais previsibilidade',
    description:
      'A maturidade do ecossistema empurra projetos para APIs mais transparentes e custo mental menor.',
    meta: (
      <>
        <span>Redação AbolhaTech</span>
        <span>15 de março de 2026</span>
        <span>6 min de leitura</span>
      </>
    ),
  },
};
