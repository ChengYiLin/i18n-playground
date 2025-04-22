
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
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
    // Resources with translations
    resources: {
      'zh-TW': {
        translation: {
          header: {
            home: '首頁',
            about: '關於我們',
            contact: '聯絡我們',
            language: '語言'
          },
          footer: {
            copyright: '© 2025 i18n示範應用. 版權所有.',
            privacy: '隱私政策',
            terms: '使用條款'
          },
          home: {
            title: '歡迎來到我們的多語言應用',
            subtitle: '這是一個使用react-i18next的國際化示範',
            description: '本應用程式示範了如何使用react-i18next建立多語言網站。您可以通過點擊頂部的語言切換器來更改語言。',
            button: '了解更多'
          },
          about: {
            title: '關於我們',
            subtitle: '了解我們的團隊和使命',
            description: '我們是一個致力於創建優秀國際化應用的團隊。我們相信語言不應該成為技術的障礙，每個人都應該能夠以自己的母語使用應用程式。',
            mission: '我們的使命',
            missionText: '讓每個用戶都能夠以自己喜歡的語言無縫地使用我們的應用程式。',
            vision: '我們的願景',
            visionText: '創建一個沒有語言障礙的數位世界。'
          },
          contact: {
            title: '聯絡我們',
            subtitle: '我們很樂意收到您的來信',
            name: '姓名',
            email: '電子郵件',
            message: '訊息',
            send: '發送',
            address: '地址',
            addressLine: '台北市信義區信義路5段7號',
            phone: '電話',
            phoneNumber: '02-1234-5678',
            emailAddress: '電子郵件',
            emailAddressValue: 'contact@i18ndemo.com'
          },
          languageSwitcher: {
            english: '英文',
            chineseTraditional: '繁體中文'
          }
        }
      },
      en: {
        translation: {
          header: {
            home: 'Home',
            about: 'About Us',
            contact: 'Contact',
            language: 'Language'
          },
          footer: {
            copyright: '© 2025 i18n Demo App. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
          },
          home: {
            title: 'Welcome to our Multilingual App',
            subtitle: 'This is an internationalization demo using react-i18next',
            description: 'This application demonstrates how to create a multilingual website using react-i18next. You can change the language by clicking on the language switcher at the top.',
            button: 'Learn More'
          },
          about: {
            title: 'About Us',
            subtitle: 'Learn about our team and mission',
            description: 'We\'re a team dedicated to creating excellent internationalized applications. We believe language should not be a barrier to technology, and everyone should be able to use applications in their native language.',
            mission: 'Our Mission',
            missionText: 'To enable every user to seamlessly use our application in their preferred language.',
            vision: 'Our Vision',
            visionText: 'To create a digital world without language barriers.'
          },
          contact: {
            title: 'Contact Us',
            subtitle: 'We\'d love to hear from you',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            address: 'Address',
            addressLine: '5 Information Road, Tech City',
            phone: 'Phone',
            phoneNumber: '123-456-7890',
            emailAddress: 'Email',
            emailAddressValue: 'contact@i18ndemo.com'
          },
          languageSwitcher: {
            english: 'English',
            chineseTraditional: 'Traditional Chinese'
          }
        }
      }
    },
    // Detection options - prioritize localStorage
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage']
    },
    // Common namespace
    defaultNS: 'translation',
    // Interpolation options
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;
