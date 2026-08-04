import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uz from '@/assets/Locales/Uz/common.json'
import ru from '@/assets/Locales/Ru/common.json'
import en from '@/assets/Locales/En/common.json'
import {DEFAULT_LOCALE, STORED_KEY_LOCALE, SUPPORTED_LOCALES} from "@/Configs/config.ts";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            ru: { translation: ru },
            en: { translation: en },
        },
        fallbackLng: DEFAULT_LOCALE,
        supportedLngs: SUPPORTED_LOCALES,
        debug: false,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            lookupLocalStorage: STORED_KEY_LOCALE
        },
    });

export default i18n;