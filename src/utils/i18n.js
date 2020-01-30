import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationNL from '../media/locales/nl/translation';
import translationEN from '../media/locales/en/translation';

// the translations
const resources = {
    nl: {
        translation: translationNL
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        whitelist: ['en', 'nl'],
        debug: false,
        detection: {
            order: ['path']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;