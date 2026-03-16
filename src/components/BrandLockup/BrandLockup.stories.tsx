import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrandLockup } from './BrandLockup';

const meta = {
  title: 'Brand/BrandLockup',
  component: BrandLockup,
  tags: ['autodocs'],
} satisfies Meta<typeof BrandLockup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    subtitle: 'Open source para o ecossistema AbolhaTech',
  },
};
