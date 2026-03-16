import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Surface } from './Surface';
import { Text } from '../Text/Text';

const meta = {
  title: 'Layout/Surface',
  component: Surface,
  tags: ['autodocs'],
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Surface>
      <Text>
        Superfície base do ecossistema AbolhaTech, usada para cards, painéis e agrupamentos com vidro fosco.
      </Text>
    </Surface>
  ),
};
