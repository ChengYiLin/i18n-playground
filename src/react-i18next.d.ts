
import 'react-i18next';

// This file tells TypeScript to accept string keys for the t function
declare module 'react-i18next' {
  interface CustomTypeOptions {
    allowStringInTranslationFunction: true;
  }
}
