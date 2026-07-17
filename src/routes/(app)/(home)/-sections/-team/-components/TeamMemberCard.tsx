import {Globe, Mail, Send, Share2} from "lucide-react";

const socialLinks = [
    {icon: Send, href: "#", label: "Telegram"},
    {icon: Share2, href: "#", label: "Instagram"},
    {icon: Globe, href: "#", label: "Facebook"},
    {icon: Mail, href: "#", label: "LinkedIn"},
];

type TeamMemberCardProps = {
    name: string;
    role: string;
    bio: string;
    initials: string;
    color: string;
};

export default function TeamMemberCard({name, role, bio, initials, color}: TeamMemberCardProps) {
    return (
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-teal-50 p-8 sm:grid-cols-2 sm:gap-10 sm:p-10">
            <div className="flex justify-center sm:justify-start">
                <div
                    className={`flex h-72 w-56 items-center justify-center rounded-3xl bg-gradient-to-br ${color} sm:h-80 sm:w-64`}
                >
                    <span className="text-6xl font-bold text-white/90">{initials}</span>
                </div>
            </div>

            <div className="flex flex-col items-start gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-base font-medium text-teal-600">{role}</p>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">{bio}</p>

                <div className="flex items-center gap-3 pt-2">
                    {socialLinks.map(({icon: Icon, href, label}) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-900 hover:text-white"
                        >
                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
