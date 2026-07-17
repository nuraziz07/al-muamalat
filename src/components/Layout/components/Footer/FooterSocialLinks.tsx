import { SoapDispenserDropletIcon } from "lucide-react";

const socialLinks = [
    { icon: SoapDispenserDropletIcon, href: "#", label: "YouTube", fillStyle: true },
    { icon: SoapDispenserDropletIcon, href: "#", label: "Facebook", fillStyle: true },
    { icon: SoapDispenserDropletIcon, href: "#", label: "Twitter", fillStyle: true },
    { icon: SoapDispenserDropletIcon, href: "#", label: "Instagram", fillStyle: false },
];

export default function FooterSocialLinks() {
    return (
        <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, fillStyle }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                >
                    {fillStyle ? (
                        <Icon className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                    ) : (
                        <Icon className="h-5 w-5" strokeWidth={2} />
                    )}
                </a>
            ))}
        </div>
    );
}
