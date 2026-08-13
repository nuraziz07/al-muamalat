import {Globe} from "lucide-react";
import {Select} from "antd";
import {useTranslation} from "react-i18next";
import styles from "./LanguageSelect.module.scss";

const LANG_LABELS: Record<string, string> = {
    en: "EN",
    uz: "UZ",
    ru: "RU",
};

const LanguageSelect = () => {
    const {i18n} = useTranslation();

    const currentLang = i18n.language?.split("-")[0] ?? "en";

    const languages = [
        {value: "en", label: "EN"},
        {value: "uz", label: "UZ"},
        {value: "ru", label: "RU"},
    ];

    return (
        <div className={styles.wrapper}>
            <Select
                value={currentLang}
                onChange={(value) => i18n.changeLanguage(value)}
                options={languages}
                classNames={{popup: {root: styles.dropdown}}}
                labelRender={({value}) => (
                    <span className={styles.trigger}>
                        <Globe size={16} strokeWidth={1.75} />
                        <span>{LANG_LABELS[String(value)] ?? "EN"}</span>
                    </span>
                )}
            />
        </div>
    );
};

export default LanguageSelect;
