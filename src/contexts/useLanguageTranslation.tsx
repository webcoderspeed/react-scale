import React, { createContext, useCallback, useContext } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';

function useLanguageStore() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  return { handleChangeLanguage };
}

const LanguageTranslationContext = createContext<ReturnType<typeof useLanguageStore> | null>(null);

type Props = {
  children: React.ReactNode;
};

function LanguageTranslationProvider({ children }: Props) {
  const store = useLanguageStore();

  return (
    <LanguageTranslationContext.Provider value={store}>
      {children}
    </LanguageTranslationContext.Provider>
  );
}

export default LanguageTranslationProvider;

export function useLanguageTranslation() {
  const values = useContext(LanguageTranslationContext);

  if (!values) throw new Error();

  return values;
}
