import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uz from './public/Locales/Uz/common.json'
import ru from './public/Locales/Ru/common.json'
import en from './public/Locales/En/common.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            ru: { translation: ru },
            en: { translation: en },
        },
        fallbackLng: "uz",
        supportedLngs: ["uz", "ru", "en"],
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });

export default i18n;