import "i18next";
import en from "./assets/Locales/En/common.json";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "translation";

        resources: {
            translation: typeof en;
        };
    }
}