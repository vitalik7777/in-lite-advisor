import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationNL from '../media/locales/nl/translation';
import translationUk from '../media/locales/uk/translation';

// the translations
const resources = {
    nl: {
        translation: translationNL
    },
    uk: {
        translation: translationUk
    }
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'uk',
        whitelist: ['uk', 'nl'],
        debug: false,
        detection: {
            order: ['path']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;