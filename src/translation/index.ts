import i18next from 'i18next';

import en from './en';

export interface Translation {
  initializeTranslation(): void;
  changeLanguage(language: string): void;
}

function initializeTranslation() {
  i18next.init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: false,
    resources: {
      en: {
        translation: en,
      },
    },
  });
}

export function changeLanguage(languageCode: string) {
  i18next.changeLanguage(languageCode);
}

const translation: Translation = {
  initializeTranslation,
  changeLanguage,
};

export default translation;
