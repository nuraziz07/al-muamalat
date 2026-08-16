import React from 'react';
import { Send, Phone, MapPin, Mail} from "lucide-react";
import {Logo} from '@/assets/Images/Svg';
import {Link} from "@tanstack/react-router";

const quickLinks = [
    {label: "AAOIFI Registration", href: "/aaoifi-registration"},
    {label: "Training Courses", href: "/training"},
    {label: "Online courses", href: "/online-courses"},
    {label: "Services", href: "/services"},
    {label: "Contact", href: "/contact"},
];

const socialLinks = [
    {icon: Send, href: "#", label: "LinkedIn"},
    {icon: Send, href: "#", label: "Instagram"},
    {icon: Send, href: "#", label: "Facebook"},
    {icon: Send, href: "#", label: "Telegram"},
];

const contactInfo = [
    {icon: Phone, text: "+998 93 073 08 54", href: "tel:+998930730854"},
    {icon: MapPin, text: "Tashkent city, Mirzo Ulugbek district, Lashkarbegi MFY, 59 Independence"},
    {icon: Mail, text: "info@al-muamalat.uz", href: "mailto:info@al-muamalat.uz"},
];

export const Footer = () => {
    return (
        <footer className="w-full bg-[#0c2a20] px-4 py-10 sm:px-6 sm:py-12 md:py-16">
            <div className="mx-auto max-w-7xl rounded-3xl bg-white/[0.03] px-5 py-8 sm:px-8 sm:py-10 md:px-14 md:py-14">

                {/* Top: logo + description (left) / contact button (right) */}
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
                    <div className="max-w-md">
                        <a href="/" className="mb-6 inline-block">
                            <img
                                src={Logo}
                                alt="Al Muamalat Consulting"
                                className="h-16 w-auto object-contain"
                            />
                        </a>

                        <p className="mb-6 text-base leading-relaxed text-white/60">
                            Al-Muamalat – Innovative solutions in Islamic finance! Achieve
                            financial success through training, consulting, and global
                            partnerships!
                        </p>

                        <div className="flex items-center gap-3">
                            {socialLinks.map(({icon: Icon, href, label}) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 !text-white transition-colors hover:bg-white/20"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <a
                        href="/contact"
                        className="shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-semibold !text-white shadow-lg shadow-orange-900/30 transition hover:brightness-110"
                    >
                        Contact
                    </a>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-white/10"/>

                {/* Bottom: Quick Links / Get in Touch */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                        <h4 className="mb-5 text-lg font-semibold !text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map(({label, href}) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="!text-white/60 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-5 text-lg font-semibold text-white">Get in Touch</h4>
                        <ul className="space-y-4">
                            {contactInfo.map(({icon: Icon, text, href}) => (
                                <li key={text} className="flex items-start gap-3">
                                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" strokeWidth={1.75}/>
                                    {href ? (
                                        <Link to={href} className="!text-white/70 transition-colors hover:text-white">
                                            {text}
                                        </Link>
                                    ) : (
                                        <span className="!text-white/70">{text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;