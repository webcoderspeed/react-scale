import React from 'react';
import { useTheme } from '../contexts/useTheme';
import { IThemeType } from '../interfaces/theme.interface';

function ThemeSelector() {
  const { themeType, selectTheme } = useTheme();

  return (
    <div
      className='container mx-auto max-w-md p-6  rounded-md shadow-md bg-primary text-white'
      data-cy='theme-container'
    >
      <h1 className='text-2xl font-bold mb-4 text-center'>Theme Selector</h1>

      <select
        value={themeType}
        onChange={(e) => selectTheme(e.target.value as IThemeType)}
        className='w-full border-2 border-gray-300 rounded-md p-2 text-secondary'
        data-cy='theme-select'
      >
        <option value='base'>Base Theme</option>
        <option value='dark'>Dark Theme</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
