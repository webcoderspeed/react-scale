import React, { createContext, useContext } from 'react';

import themes from '../themes';
import { IThemeType } from '../interfaces/theme.interface';
import { applyTheme } from '../utils/themeUtils';
import useLocalStorage from '../hooks/useLocalStorage';

function useThemeStore() {
  const [themeType, setThemeType] = useLocalStorage<IThemeType>('theme', 'base');

  const selectTheme = (type: IThemeType) => {
    setThemeType(type);
    applyTheme(themes[type]);
  };

  return { themeType, selectTheme };
}

const ThemeContext = createContext<ReturnType<typeof useThemeStore> | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const store = useThemeStore();

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;

export function useTheme() {
  const values = useContext(ThemeContext);

  if (!values) throw new Error('Make sure to call useTheme inside a ThemeProvider');

  return values;
}
