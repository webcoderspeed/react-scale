// LanguageSelector.js

import React from 'react';
import { t } from 'i18next';
import { useLanguageTranslation } from '../contexts/useLanguageTranslation';

function LanguageSelector() {
  const { handleChangeLanguage } = useLanguageTranslation();

  return (
    <div
      className='container mx-auto max-w-md p-6 bg-white rounded-md shadow-md'
      data-cy='language-container'
    >
      <h1 className='text-2xl font-bold mb-4 text-center'>Language Selector</h1>

      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        className='w-full border-2 border-gray-300 rounded-md p-2'
        data-cy='language-select'
      >
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='ar'>Arabic</option>
        <option value='san'>Sanskrit</option>
        <option value='fr'>French</option>
      </select>

      <div className='text-sm mt-4 text-center' data-cy='quote-display'>
        {t('quote')}
      </div>
    </div>
  );
}

export default LanguageSelector;
