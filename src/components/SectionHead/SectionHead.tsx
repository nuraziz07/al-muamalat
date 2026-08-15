import React, {memo} from 'react';

export interface SectionHeadProps {
    title: string;
    subtitle?: string;
}

const SectionHead = ({title, subtitle}: SectionHeadProps) => {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-[#1B4D3E] sm:text-5xl">
                {title}
            </h2>
            <p className="text-lg leading-relaxed text-[#414d41]">
                {subtitle}
            </p>
        </div>
    );
};

export default memo(SectionHead);