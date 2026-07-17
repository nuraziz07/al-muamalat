import {Globe, Mail, Send, Share2} from "lucide-react";
import FooterNavLinks from "@/components/Layout/components/Footer/FooterNavLinks";
import FooterSocialLinks from "@/components/Layout/components/Footer/FooterSocialLinks";
import {Footer_Logo} from '@/assets/Images/Png'

const footerLinks = {
    company: [
        {label: "About us", href: "/"},
        {label: "Our team", href: "/"},
        {label: "Careers", href: "/"},
        {label: "Blog", href: "/"},
    ],
    programs: [
        {label: "Islamic Finance", href: "/programs"},
        {label: "Shariah Compliance", href: "/programs"},
        {label: "Banking & Capital", href: "/programs"},
        {label: "Certifications", href: "/programs"},
    ],
    resources: [
        {label: "Finance tools", href: "/finance"},
        {label: "Documentation", href: "/"},
        {label: "FAQ", href: "/contact"},
        {label: "Support", href: "/contact"},
    ],
};

const socialLinks = [
    {icon: Share2, href: "#", label: "Facebook"},
    {icon: Globe, href: "#", label: "Twitter"},
    {icon: Send, href: "#", label: "Instagram"},
    {icon: Mail, href: "#", label: "LinkedIn"},
    {icon: Send, href: "#", label: "Telegram"},
];

export const Footer = () => {
    return (
        <footer className="w-full bg-teal-600 px-6 py-14">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img src={Footer_Logo} alt="Dior design" className="h-12 w-12 object-contain" />
                    <span className="text-2xl font-bold leading-tight text-white">
            Dior
            <br />
            design
          </span>
                </a>

                {/* Nav links */}
                <FooterNavLinks />

                {/* Social links */}
                <FooterSocialLinks />

                {/* Divider */}
                <div className="h-px w-full bg-white/30" />

                {/* Copyright */}
                <p className="text-sm text-white/70">Copyright Satyam Studio</p>
            </div>
        </footer>
    );
};
