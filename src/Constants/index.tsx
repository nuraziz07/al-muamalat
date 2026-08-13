import {
    FileSpreadsheet,
    GraduationCap,
    HandCoins,
    Handshake,
    Landmark, ScrollText,
    ShieldCheck,
    ShoppingCart,
    TrendingUp
} from "lucide-react";
import React from "react";

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