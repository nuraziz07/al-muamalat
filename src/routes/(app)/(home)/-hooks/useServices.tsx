import {FileSpreadsheet, GraduationCapIcon, HandCoinsIcon, Handshake, Landmark, ShoppingCartIcon} from "lucide-react";

const useServices = () => {

    const services = [
        {
            icon: HandCoinsIcon,
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            bgColor: "bg-blue-100",
            iconBg: "bg-blue-400",
        },
        {
            icon: Handshake,
            title: "International Relations",
            description:
                "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
            bgColor: "bg-emerald-100",
            iconBg: "bg-emerald-400",
        },
        {
            icon: GraduationCapIcon,
            title: "Education and Training",
            description:
                "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
            bgColor: "bg-pink-100",
            iconBg: "bg-pink-400",
        },
        {
            icon: Landmark,
            title: "For Islamic Banks",
            description:
                "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
            bgColor: "bg-violet-100",
            iconBg: "bg-violet-400",
        },
        {
            icon: ShoppingCartIcon,
            title: "Islamic Capital Market",
            description:
                "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
            bgColor: "bg-gray-100",
            iconBg: "bg-gray-400",
        },
        {
            icon: FileSpreadsheet,
            title: "Shariah Compliance Audit",
            description:
                "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
            bgColor: "bg-amber-100",
            iconBg: "bg-amber-400",
        },
    ];

    return {
        services: services,
    }
};

export default useServices;