import i18next from 'i18next';
import english from './en.json';
import frensh from './fr.json';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: english,
  fr: frensh,
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
