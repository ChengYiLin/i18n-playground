import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  withTolgee,
  Tolgee,
  I18nextPlugin,
  DevTools,
  BackendFetch,
} from "@tolgee/i18next";
import ICU from "i18next-icu";
import LanguageDetector from "i18next-browser-languagedetector";

const tolgee = Tolgee()
  .use(DevTools())
  .use(I18nextPlugin())
  // https://docs.tolgee.io/js-sdk/api/web_package/plugins#backendfetch
  .use(BackendFetch({ prefix: "/locales" }))
  .init({
    apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,
  });

// Initialize i18next
withTolgee(i18n, tolgee)
  // Use ICU format for tolgee
  .use(ICU)
  // Use language detector to check localStorage first
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    lng: "zh-TW",
    supportedLngs: ["zh-TW", "en"],
    defaultNS: "common",
    ns: ["common"],
    // Debug mode in development
    debug: process.env.NODE_ENV === "development",
    // Define namespaces
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    }
  });

export default i18n;
