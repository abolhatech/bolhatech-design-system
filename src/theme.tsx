import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type BolhaTheme = 'light' | 'dark';
export type BolhaThemeMode = BolhaTheme | 'system';

type BolhaThemeContextValue = {
  mode: BolhaThemeMode;
  resolvedTheme: BolhaTheme;
  setTheme: (theme: BolhaThemeMode) => void;
  toggleTheme: () => void;
};

type BolhaThemeProviderProps = {
  attribute?: string;
  children: React.ReactNode;
  defaultTheme?: BolhaThemeMode;
  storageKey?: string;
};

const DEFAULT_STORAGE_KEY = 'abolhatech-theme';
const DEFAULT_ATTRIBUTE = 'data-theme';

const BolhaThemeContext = createContext<BolhaThemeContextValue | null>(null);

function getSystemTheme(): BolhaTheme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(mode: BolhaThemeMode): BolhaTheme {
  return mode === 'system' ? getSystemTheme() : mode;
}

export function BolhaThemeProvider({
  attribute = DEFAULT_ATTRIBUTE,
  children,
  defaultTheme = 'system',
  storageKey = DEFAULT_STORAGE_KEY
}: BolhaThemeProviderProps) {
  const [mode, setMode] = useState<BolhaThemeMode>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    const storedMode = window.localStorage.getItem(storageKey);
    if (storedMode === 'light' || storedMode === 'dark' || storedMode === 'system') {
      return storedMode;
    }

    return defaultTheme;
  });

  const resolvedTheme = resolveTheme(mode);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute(attribute, resolvedTheme);
    window.localStorage.setItem(storageKey, mode);
  }, [attribute, mode, resolvedTheme, storageKey]);

  useEffect(() => {
    if (mode !== 'system' || typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      document.documentElement.setAttribute(attribute, mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [attribute, mode]);

  const value = useMemo<BolhaThemeContextValue>(
    () => ({
      mode,
      resolvedTheme,
      setTheme: setMode,
      toggleTheme: () => {
        setMode((current) => {
          const currentResolved = resolveTheme(current);
          return currentResolved === 'dark' ? 'light' : 'dark';
        });
      }
    }),
    [mode, resolvedTheme]
  );

  return <BolhaThemeContext.Provider value={value}>{children}</BolhaThemeContext.Provider>;
}

export function useBolhaTheme() {
  const context = useContext(BolhaThemeContext);

  if (!context) {
    throw new Error('useBolhaTheme must be used inside BolhaThemeProvider.');
  }

  return context;
}
