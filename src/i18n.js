import 'dayjs/locale/fr';

import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './i18n/en';
import frTranslations from './i18n/fr';

i18n.on('languageChanged', (lng) => {
    dayjs.locale(lng);
});

const browserLang = navigator.language.split('-')[0];

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: frTranslations,
        },
        en: {
            translation: enTranslations,
        },
    },
    lng: browserLang,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
