import React from 'react';
import SectionHead from "@/components/SectionHead";
import {FileSpreadsheet, GraduationCapIcon, HandCoinsIcon, Handshake, Landmark, ShoppingCartIcon} from "lucide-react";
import ServiceCard from "@/components/Cards/ServiceCard";
import {get} from 'lodash'

const Services = () => {

    const services = [
        {
            id: 1,
            icon: <HandCoinsIcon />,
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            bgColor: "bg-blue-100",
            iconBg: "bg-blue-400",
        },
        {
            id: 2,
            icon: <Handshake />,
            title: "International Relations",
            description:
                "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
            bgColor: "bg-emerald-100",
            iconBg: "bg-emerald-400",
        },
        {
            id: 3,
            icon: <GraduationCapIcon />,
            title: "Education and Training",
            description:
                "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
            bgColor: "bg-pink-100",
            iconBg: "bg-pink-400",
        },
        {
            id: 4,
            icon: <Landmark />,
            title: "For Islamic Banks",
            description:
                "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
            bgColor: "bg-violet-100",
            iconBg: "bg-violet-400",
        },
        {
            id: 5,
            icon: <ShoppingCartIcon />,
            title: "Islamic Capital Market",
            description:
                "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
            bgColor: "bg-gray-100",
            iconBg: "bg-gray-400",
        },
        {
            id: 6,
            icon: <FileSpreadsheet />,
            title: "Shariah Compliance Audit",
            description:
                "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
            bgColor: "bg-amber-100",
            iconBg: "bg-amber-400",
        },
    ];

    return (
        <section className={'mt-15'}>
            <SectionHead title={'Our services '} subtitle={'Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.'} />

            <div className={'grid grid-cols-3 pb-15 px-30 gap-7'}>
                {services?.sort((a, b) => (a.id ?? 0) - (b.id ?? 0)).map(({title, icon, description, bgColor, iconBg, id}, index) => (
                    <ServiceCard
                        key={id}
                        icon={icon ?? '-'}
                        title={title}
                        description={description}
                        bgColor={bgColor ?? 0}
                        iconBg={iconBg ?? 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;