import { ITheme } from '../interfaces/theme.interface';

export function applyTheme(theme: { [key: string]: string }): void {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar: string) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({ primary, secondary }: ITheme) {
  return {
    '--theme-primary': primary,
    '--theme-secondary': secondary,
  };
}
