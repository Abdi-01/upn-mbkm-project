import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
    id: { default: require('./locales/id/index.json') },
    en: { default: require('./locales/en/index.json') }
}

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    defaultNS: 'default',
    lng: 'id',
    ns: ['default'],
    interpolation: {
        escapeValue: false
    },
    resources
})

export default i18next;