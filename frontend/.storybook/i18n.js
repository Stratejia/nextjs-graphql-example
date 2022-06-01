import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n.use(HttpApi).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  defaultNS: 'common',
});

export default i18n;
