const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Contact Us", href: "/contact" },
];

export default function FooterNavLinks() {
    return (
        <nav className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="text-base text-white/90 transition-colors hover:text-white"
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
}