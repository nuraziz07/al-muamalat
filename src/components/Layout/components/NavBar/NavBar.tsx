import {Logo} from '@/assets/Images/Svg';
import {ChevronDown, Menu, X} from "lucide-react";
import {Link} from "@tanstack/react-router";
import {useState} from "react";

const navItems = [
    {label: "Home", path: "/"},
    {label: "Programs", path: "/programs", hasDropdown: true},
    {label: "Finance tools", path: "/finance"},
    {label: "Contact", path: "/contact"},
];

const languages = [
    {value: "en", label: "ENG", flag: "🇬🇧"},
    {value: "uz", label: "UZB", flag: "🇺🇿"},
    {value: "ru", label: "RUS", flag: "🇷🇺"},
];

export const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [lang, setLang] = useState("en");

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src={Logo} alt="Al Muamalat" className="h-12 w-12 object-contain" />
                    <span className="text-xl font-bold tracking-wide text-teal-600">AL MUAMALAT</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="flex items-center gap-1 text-base font-semibold text-gray-700 transition-colors hover:text-teal-600 [&.active]:text-teal-600"
                        >
                            {item.label}
                            {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-5 md:flex">
                    <select
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        className="cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none focus:border-teal-500"
                    >
                        {languages.map((l) => (
                            <option key={l.value} value={l.value}>
                                {l.flag} {l.label}
                            </option>
                        ))}
                    </select>

                    <div className="h-6 w-px bg-gray-200" />

                    <button className="rounded-lg bg-teal-600 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-teal-700">
                        Sign in
                    </button>
                </div>

                <button
                    className="rounded-lg p-2 text-gray-700 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {mobileOpen && (
                <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                className="text-base font-semibold text-gray-700 hover:text-teal-600 [&.active]:text-teal-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="mt-2 w-full rounded-lg bg-teal-600 px-6 py-2.5 text-base font-medium text-white">
                            Sign in
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
