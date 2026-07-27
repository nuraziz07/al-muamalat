import React from 'react';
import {Select} from "antd";
import {USA} from "@/assets/Images/Png/Flags";

const LanguageSelect = () => {

    const languages = [
        {value: "en", label: <div className={'flex gap-3'}><img src={USA} className={'w-6 h-6'} alt=""/><span>ENG</span></div>},
        {value: "uz", label: <div className={'flex gap-3'}><img src={USA} className={'w-6 h-6'} alt=""/><span>O'ZB</span></div>},
        {value: "ru", label: <div className={'flex gap-3'}><img src={USA} className={'w-6 h-6'} alt=""/><span>RUS</span></div>},
    ];


    return (
        <div>
            <Select defaultValue={'en'} options={languages} />
        </div>
    );
};

export default LanguageSelect;