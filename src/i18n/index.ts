
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Initialize i18next
i18n
  // Use HTTP backend to load translations
  .use(Backend)
  // Use language detector to check localStorage first
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Default language
    fallbackLng: 'zh-TW',
    // Debug mode in development
    debug: process.env.NODE_ENV === 'development',
    // Define namespaces
    ns: ['common', 'home', 'about', 'contact'],
    defaultNS: 'common',
    // Backend configuration
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Detection options - prioritize localStorage
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage']
    },
    // Interpolation options
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
