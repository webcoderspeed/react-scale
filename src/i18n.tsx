import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import englishTranslation from './data/translations/en.json';
import hindiTranslation from './data/translations/hi.json';
import ArabicTranslation from './data/translations/ar.json';
import SanskritTranslation from './data/translations/san.json';
import FrenchTranslation from './data/translations/fr.json';

const resources = {
  en: {
    translation: englishTranslation,
  },
  hi: {
    translation: hindiTranslation,
  },
  ar: {
    translation: ArabicTranslation,
  },
  san: {
    translation: SanskritTranslation,
  },
  fr: {
    translation: FrenchTranslation,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
});

export default i18next;
