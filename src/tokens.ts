export const bolhaTokens = {
  color: {
    light: {
      bg: '#f4f4f5',
      surface: '#ffffff',
      surfaceHover: '#f9f9f9',
      line: '#e4e4e7',
      lineSubtle: '#f0f0f1',
      text: '#18181b',
      muted: '#71717a',
      subtle: '#a1a1aa',
      accent: '#ffbc2d',
      accentBg: '#fffbeb',
      accentText: '#92400e',
      up: '#16a34a',
      upBg: '#f0fdf4',
      down: '#dc2626',
      downBg: '#fef2f2',
    },
    dark: {
      bg: '#09090b',
      surface: '#18181b',
      surfaceHover: '#1f1f23',
      line: '#27272a',
      lineSubtle: '#202023',
      text: '#fafafa',
      muted: '#a1a1aa',
      subtle: '#71717a',
      accent: '#fbbf24',
      accentBg: '#1c1507',
      accentText: '#fcd34d',
      up: '#22c55e',
      upBg: '#052e16',
      down: '#ef4444',
      downBg: '#1f0d0d',
    }
  },
  community: {
    ia: { color: '#7c3aed', bg: '#f5f3ff' },
    frontend: { color: '#0284c7', bg: '#f0f9ff' },
    backend: { color: '#059669', bg: '#ecfdf5' },
    devops: { color: '#d97706', bg: '#fffbeb' },
  },
  font: {
    base: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
  }
} as const;

export type BolhaTokens = typeof bolhaTokens;

/** Returns the CSS custom property for a community color */
export function getCommunityColor(slug: string): string {
  const map: Record<string, string> = {
    ia: 'var(--bolha-community-ia)',
    frontend: 'var(--bolha-community-frontend)',
    backend: 'var(--bolha-community-backend)',
    devops: 'var(--bolha-community-devops)',
  };
  return map[slug] ?? 'var(--bolha-muted)';
}

/** Returns the CSS custom property for a community background color */
export function getCommunityBg(slug: string): string {
  const map: Record<string, string> = {
    ia: 'var(--bolha-community-ia-bg)',
    frontend: 'var(--bolha-community-frontend-bg)',
    backend: 'var(--bolha-community-backend-bg)',
    devops: 'var(--bolha-community-devops-bg)',
  };
  return map[slug] ?? 'var(--bolha-surface)';
}
