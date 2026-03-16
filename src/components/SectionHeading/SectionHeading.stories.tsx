import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Eyebrow } from '../Eyebrow/Eyebrow';
import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Content/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Eyebrow>Open source • leitura limpa • tecnologia</Eyebrow>
      <SectionHeading
        title="Notícias de tecnologia sem excesso de interface."
        description="Um feed direto ao ponto, com foco em leitura confortável, curadoria e navegação simples."
      />
    </div>
  ),
};
