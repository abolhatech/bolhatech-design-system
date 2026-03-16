import type { Preview } from '@storybook/react';
import React from 'react';
import { BolhaThemeProvider, Container } from '../src';
import '../src/styles.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BolhaThemeProvider defaultTheme="light">
        <Container>
          <Story />
        </Container>
      </BolhaThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
