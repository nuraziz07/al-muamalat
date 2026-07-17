import React from 'react';

export interface SectionHeadProps {
    title: string;
    subtitle?: string;
}

const SectionHead = ({title, subtitle}: SectionHeadProps) => {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                {title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHead;