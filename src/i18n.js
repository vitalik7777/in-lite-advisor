import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

const detectionOptions = {
    order: ['htmlTag']
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        detection: detectionOptions,
        fallbackLng: 'uk',
        whitelist: ['uk', 'nl', 'se', 'no', 'de', 'us', 'ca', 'fr', 'be'],
        ns: 'translation',
        defaultNS: 'translation',
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            wait: true,
            useSuspense: false,
        },
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/media/advisor/static/locales/{{lng}}/{{ns}}.json'
        }
    });

export default i18n;
