import {Logo} from '@/assets/Images/Svg';
import {ChevronDown, Menu, X} from "lucide-react";
import {Link, useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {USA} from '@/assets/Images/Png/Flags'
import {Select} from "antd";
import LanguageSelect from "@/components/Layout/components/NavBar/components";

const navItems = [
    {label: "Home", path: "/"},
    {label: "Programs", path: "/programs", hasDropdown: true},
    {label: "Finance tools", path: "/finance"},
    {label: "Contact", path: "/contact"},
];


export const NavBar = () => {
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState("en");

    const token = localStorage.getItem('userToken')

    console.log(token)

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src={Logo} alt="Al Muamalat" className="h-12 w-12 object-contain"/>
                    <span className="text-xl font-bold tracking-wide text-teal-600">AL MUAMALAT</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.label} to={item.path} className="flex items-center gap-1 text-base font-semibold text-gray-700 transition-colors hover:text-teal-600 [&.active]:text-teal-600">
                            {item.label}
                            {item.hasDropdown && <ChevronDown className="h-4 w-4"/>}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-5 md:flex">
                    <LanguageSelect />

                    <div className="h-6 w-px bg-gray-200"/>

                    <button onClick={() => navigate({to: '/signin'})}
                            className="rounded-lg bg-teal-600 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-teal-700">
                        Sign in
                    </button>
                </div>
            </div>
        </nav>
    );
};
