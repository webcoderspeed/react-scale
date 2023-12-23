import React from 'react';
import { t } from 'i18next';
import { useLanguageTranslation } from '../contexts/useLanguageTranslation';

function LanguageSelector() {
  const { handleChangeLanguage } = useLanguageTranslation();

  return (
    <>
      <h1>Language Selector</h1>

      <select style={{ width: 200 }} onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='ar'>Arabic</option>
        <option value='san'>Sanskrit</option>
        <option value='fr'>French</option>
      </select>

      <div className='paraStyle'>{t('quote')}</div>
    </>
  );
}

export default LanguageSelector;
