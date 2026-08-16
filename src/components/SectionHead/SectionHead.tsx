import React, {memo} from 'react';

export interface SectionHeadProps {
    title: string;
    subtitle?: string;
}

const SectionHead = ({title, subtitle}: SectionHeadProps) => {
    return (
        <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-10 sm:px-6 md:mb-14 md:px-0">
            <h2 className="mb-3 text-2xl font-extrabold text-[#1B4D3E] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
            </h2>
            <p className="text-base leading-relaxed text-[#414d41] sm:text-lg">
                {subtitle}
            </p>
        </div>
    );
};

export default memo(SectionHead);