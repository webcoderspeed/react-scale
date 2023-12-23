import React from 'react';
import { t } from 'i18next';
import { useLanguageTranslation } from '../contexts/useLanguageTranslation';

function LanguageSelector() {
  const { handleChangeLanguage } = useLanguageTranslation();

  return (
    <div className='px-4 py-6'>
      <h1 className='text-xl font-bold mb-4'>Language Selector</h1>

      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        className='border-2 border-black rounded-md'
      >
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='ar'>Arabic</option>
        <option value='san'>Sanskrit</option>
        <option value='fr'>French</option>
      </select>

      <div className='text-sm py-2 '>{t('quote')}</div>
    </div>
  );
}

export default LanguageSelector;
