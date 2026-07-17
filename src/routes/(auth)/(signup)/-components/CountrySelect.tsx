
import {Select} from "antd";

const countries = [
    { value: "UZ", label: "Uzbekistan", flag: "🇺🇿" },
    { value: "KZ", label: "Kazakhstan", flag: "🇰🇿" },
    { value: "KG", label: "Kyrgyzstan", flag: "🇰🇬" },
    { value: "TJ", label: "Tajikistan", flag: "🇹🇯" },
    { value: "TM", label: "Turkmenistan", flag: "🇹🇲" },
    { value: "RU", label: "Russia", flag: "🇷🇺" },
    { value: "TR", label: "Turkey", flag: "🇹🇷" },
    { value: "GB", label: "United Kingdom", flag: "🇬🇧" },
];

export default function CountrySelect() {

    return (
        <div>
            <Select options={countries} className={'w-[445px]'} />
        </div>
    );
}