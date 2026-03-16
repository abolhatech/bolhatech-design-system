import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NewsCard } from './NewsCard';

const meta = {
  title: 'Editorial/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
} satisfies Meta<typeof NewsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: '01',
    category: 'IA',
    readTime: '4 min',
    title: 'OpenAI avança com agentes mais integrados a fluxos de trabalho corporativos',
    excerpt:
      'Ferramentas de IA começam a sair do modo assistente para operar tarefas com contexto, memória e aprovações humanas.',
    meta: 'Redação AbolhaTech • 15 de março de 2026',
  },
};

export const WithLinkSlot: Story = {
  render: () => (
    <NewsCard
      index="02"
      category="Open Source"
      readTime="5 min"
      excerpt="Projetos menores ganham força ao combinar foco editorial com identidade de produto."
      meta="Redação AbolhaTech • 15 de março de 2026"
      titleSlot={<a href="/">Linux em laptops premium ganha novo fôlego com fabricantes menores</a>}
    />
  ),
};
