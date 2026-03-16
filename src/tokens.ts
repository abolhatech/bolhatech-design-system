export const bolhaTokens = {
  color: {
    light: {
      bg: '#f6f1e8',
      bgSoft: 'rgba(255, 255, 255, 0.66)',
      surface: 'rgba(255, 255, 255, 0.72)',
      surfaceStrong: 'rgba(255, 255, 255, 0.9)',
      text: '#171717',
      muted: '#5c5a56',
      line: 'rgba(23, 23, 23, 0.08)',
      accent: '#ffbc2d',
      accentStrong: '#db8b00',
      ambientPrimary: 'rgba(255, 188, 45, 0.18)',
      ambientSecondary: 'rgba(255, 188, 45, 0.12)'
    },
    dark: {
      bg: '#111111',
      bgSoft: 'rgba(26, 26, 26, 0.72)',
      surface: 'rgba(18, 18, 18, 0.78)',
      surfaceStrong: 'rgba(24, 24, 24, 0.94)',
      text: '#f6f2ea',
      muted: '#b8b1a8',
      line: 'rgba(246, 242, 234, 0.08)',
      accent: '#ffc53d',
      accentStrong: '#ffd978',
      ambientPrimary: 'rgba(255, 188, 45, 0.18)',
      ambientSecondary: 'rgba(255, 188, 45, 0.08)'
    }
  },
  font: {
    display: '"Sora", "Avenir Next", "Segoe UI", sans-serif',
    body: '"Instrument Sans", "Avenir Next", "Segoe UI", sans-serif'
  },
  radius: {
    sm: '16px',
    md: '24px',
    lg: '28px',
    pill: '999px'
  },
  shadow: {
    light: '0 24px 80px rgba(85, 70, 44, 0.12)',
    dark: '0 24px 80px rgba(0, 0, 0, 0.28)'
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  }
} as const;

export type BolhaTokens = typeof bolhaTokens;
