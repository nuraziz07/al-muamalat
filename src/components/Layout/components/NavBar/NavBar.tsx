import {Logo} from '@/assets/Images/Svg';
import {ChevronDown, Divide, LogOut, Menu, X} from "lucide-react";
import {Link, useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {USA} from '@/assets/Images/Png/Flags'
import {useTranslation} from 'react-i18next'
import {Avatar, Divider, Popover, Select} from "antd";
import LanguageSelect from "@/components/Layout/components/NavBar/components";
import {useAuth} from "@/hooks/custom/useAuth.ts";
import { Button } from "@/components/ui/button";

export const NavBar = () => {

    const navItems = [
        {label: "Home", path: "/"},
        {label: "Programs", path: "/programs", hasDropdown: true},
        {label: "Finance tools", path: "/finance"},
        {label: "Contact", path: "/contact"},
    ];

    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState("en");

    const {user} = useAuth()
    const handleLogout = () => {
        window.localStorage.removeItem('userToken')
        navigate({to: '/signin'})
    }

    const content = (
        <div className="min-w-[250px]">
            <div className="flex items-center gap-3">
                <Avatar style={{backgroundColor: "teal"}} shape="square" size={48}>
                    {user?.full_name?.[0]?.toUpperCase()}
                </Avatar>

                <div>
                    <p className="font-semibold text-gray-900">
                        {user?.full_name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {user?.phone_number}
                    </p>
                </div>
            </div>

            <Divider  className="my-3" />

            <Button
                variant="destructive"
                icon={<LogOut size={18} />}
                className="flex w-full items-center justify-start"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    )

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

                    {user?.user_id ? <Popover content={content}><Avatar onClick={() => navigate({to: '/profile'})} style={{backgroundColor: "teal"}} shape={'square'} size={40}>{user?.full_name[0]}</Avatar></Popover> : <button onClick={() => navigate({to: '/signin'})}
                                                                   className="rounded-lg bg-teal-600 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-teal-700">
                        Sign in
                    </button>}
                </div>
            </div>
        </nav>
    );
};
