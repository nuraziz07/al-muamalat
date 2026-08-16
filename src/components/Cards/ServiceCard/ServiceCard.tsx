import React, { ReactNode, memo } from 'react';

export interface ServiceCardProps {
    icon: ReactNode;
    number?: number;
    title?: string;
    description?: string;
}

const ServiceCard = ({ icon, number, title, description }: ServiceCardProps) => {
    return (
        <div className="relative group flex h-auto min-h-[220px] sm:min-h-[240px] md:min-h-[260px] hover:shadow-md hover:scale-[1.03] transition-all duration-400 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="absolute -right-5 -top-5 h-16 w-16 group-hover:rotate-140 transition-all duration-300 rotate-45 bg-gray-100" />

            {number && (
                <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#D1FAE4] transition-all duration-300 group-hover:bg-emerald-200  text-sm font-semibold text-emerald-800">
                    {number}
                </span>
            )}

            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f3d33] group-hover:bg-orange-500 group-hover:rotate-10 transition-all duration-300 text-white [&>svg]:h-6 [&>svg]:w-6">
                {icon}
            </span>

            <h3 className="mb-3 text-lg font-bold text-[#1f3d33]">{title}</h3>

            <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500">
                {description}
            </p>

            <div className="mt-auto h-1 w-14 group-hover:w-100 transition-all duration-500 rounded-full bg-gradient-to-r from-orange-400 to-[#1f3d33]" />
        </div>
    );
};

export default memo(ServiceCard);