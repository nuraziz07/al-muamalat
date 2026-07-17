import React, {ReactNode} from 'react';

export interface ServiceCardProps {
    icon: ReactNode,
    title?: string,
    description?: string,
    bgColor?: string,
    iconBg?: string,
}

const ServiceCard = (props: ServiceCardProps) => {
    const { icon: Icon, title, description, bgColor = "bg-blue-100", iconBg = "bg-blue-400",} = props

    return (
        <div className={`flex flex-col justify-between rounded-2xl p-8 ${bgColor}`}>
            <div>
                <div className="mb-5 flex items-center gap-4">
                    <span
                        className={`flex h-16 w-16 text-white shrink-0 items-center justify-center rounded-full ${iconBg}`}
                    >
                        {Icon}
                    </span>
                    <h3 className="text-xl font-bold leading-snug text-gray-900">{title}</h3>
                </div>

                <p className="mb-8 text-base leading-relaxed text-gray-600">{description}</p>
            </div>

            <button className="rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                Learn more
            </button>
        </div>
    );
};

export default ServiceCard;