import React from 'react';

interface PageHeadProps {
    title: string;
    subtitle: string;
}

const PageHead = ({title, subtitle}: PageHeadProps) => {
    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-[40px] font-[600] text-[#152032] sm:text-5xl">
                {title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
                {subtitle}
            </p>
        </div>
    );
};

export default PageHead;