import 'dayjs/locale/fr';

import dayjs from 'dayjs';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './data/en';
import frTranslations from './data/fr';

i18n.on('languageChanged', (lng) => {
    dayjs.locale(lng);
});

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: frTranslations,
        },
        en: {
            translation: enTranslations,
        },
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
