import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrandLockup } from '../BrandLockup/BrandLockup';
import { SiteHeader } from './SiteHeader';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const meta = {
  title: 'Navigation/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SiteHeader
      brand={<BrandLockup />}
      actions={
        <>
          <a href="/">Links</a>
          <a href="/">Infra</a>
          <ThemeToggle />
        </>
      }
    />
  ),
};
