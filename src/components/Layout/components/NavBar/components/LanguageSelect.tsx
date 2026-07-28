import React from 'react';
import {Select} from "antd";
import {USA, Uzb, Russian} from "@/assets/Images/Png/Flags";
import {useTranslation} from "react-i18next";


const LanguageSelect = () => {

    const {i18n} = useTranslation()
    const onChangeLang = (value: string) => {
        i18n.changeLanguage(value)
    }

    const languages = [
        {value: "en", label: <div className={'flex gap-3'}><img src={USA} className={'w-6 h-6'} alt=""/><span>Eng</span></div>},
        {value: "uz", label: <div className={'flex gap-3'}><img src={Uzb} className={'w-6 h-6'} alt=""/><span>O'zb</span></div>},
        {value: "ru", label: <div className={'flex gap-3'}><img src={Russian} className={'w-6 h-6'} alt=""/><span>Рус</span></div>},
    ];


    return (
        <div>
            <Select onChange={onChangeLang} defaultValue={i18n.language} options={languages} />
        </div>
    );
};

export default LanguageSelect;