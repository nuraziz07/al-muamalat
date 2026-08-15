import {
    FileSpreadsheet,
    GraduationCap,
    HandCoins,
    Handshake,
    Landmark, Mail, MapPin, Phone, ScrollText,
    ShieldCheck,
    ShoppingCart,
    TrendingUp
} from "lucide-react";
import React from "react";
import {
    Amazon,
    Expert,
    Partner_American,
    Partner_Klarna,
    Partner_Skrill,
    Partner_West,
    Poster_1, Poster_2, Poster_3
} from "@/assets/Images/Png";
import first from "@/assets/firs.mp4";

export const services = [
    {
        id: 1,
        icon: <HandCoins />,
        title: 'Islamic Fund Management',
        description:
            'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
    },
    {
        id: 2,
        icon: <Landmark />,
        title: 'Sharia Advisory and Audit Service',
        description:
            'We provide independent Sharia advisory for Islamic banks, microfinance institutions, Takaful providers, and other financial entities through continuous compliance monitoring.',
    },
    {
        id: 3,
        icon: <TrendingUp />,
        title: 'Education & Professional Development',
        description:
            'As an AAOIFI official land partner in Uzbekistan, we deliver practical Islamic finance training based on international standards and accounting principles.',
    },
    {
        id: 4,
        icon: <ShieldCheck />,
        title: 'For Islamic Banks',
        description:
            'We support Islamic Banks and Islamic Banking Windows with proven advisory services across strategy, product development, and operations.',
    },
    {
        id: 5,
        icon: <Handshake />,
        title: 'International Relations',
        description:
            'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
    },
    {
        id: 6,
        icon: <GraduationCap />,
        title: 'Education and Training',
        description:
            'We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.',
    },
    {
        id: 7,
        icon: <ShoppingCart />,
        title: 'Islamic Capital Market',
        description:
            'We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.',
    },
    {
        id: 8,
        icon: <FileSpreadsheet />,
        title: 'Shariah Compliance Audit',
        description:
            'We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.',
    },
    {
        id: 9,
        icon: <ScrollText />,
        title: 'Takaful Advisory',
        description:
            'We advise Takaful operators on product structuring, risk-sharing models, and Shariah-compliant governance frameworks.',
    },
];

export const experts = [
    {
        id: 1,
        name: "Dr. Mezbah Uddin Ahmed",
        bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        img: Expert,
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        bio: "With over a decade of experience in Islamic finance, Sarah specializes in Shariah-compliant investment structuring and regulatory advisory for financial institutions.",
        img: Expert,
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        bio: "Michael focuses on Sukuk issuance and capital markets, helping institutions design ethical financial products aligned with international standards.",
        img: Expert,
    },
    {
        id: 4,
        name: "Dr. Emily Wilson",
        bio: "Emily leads training and professional development programs, delivering practical Islamic finance education to banks and financial professionals.",
        img: Expert,
    },
    {
        id: 5,
        name: "Dr. David Lee",
        bio: "David advises Islamic banks on strategy, product development, and operational excellence rooted in Shariah principles.",
        img: Expert,
    },
    {
        id: 6,
        name: "Dr. Olivia Martinez",
        bio: "Olivia specializes in Takaful advisory, guiding operators through product structuring and Shariah-compliant governance frameworks.",
        img: Expert,
    },
];


export const brands = [
    {name: "Stripe", logoSrc: Partner_Skrill},
    {name: "American Express", logoSrc: Partner_American},
    {name: "Western Union", logoSrc: Partner_West},
    {name: "Klarna", logoSrc: Partner_Klarna},
    {name: "Amazon", logoSrc: Amazon},
];

export const videos = [
    {
        key: 1,
        title: 'Why Islamic finance?',
        src: first,
        poster: Poster_1,
    },
    {
        key: 2,
        title: 'What makes Islamic finance unique?',
        src: first,
        poster: Poster_2,
    },
    {
        key: 3,
        title: 'How is risk managed in Islamic finance?',
        src: first,
        poster: Poster_3,
    },
]

export const contactInfo = [
    {
        icon: MapPin,
        text: 'Tashkent city, Mirzo Ulugbek district, Lashkarbegi MFY, 59 Independence',
        href: undefined,
    },
    {
        icon: Mail,
        text: 'info@al-muamalat.uz',
        href: 'mailto:info@al-muamalat.uz',
    },
    {
        icon: Phone,
        text: '+998 93 073 08 54',
        href: 'tel:+998930730854',
    },
];
