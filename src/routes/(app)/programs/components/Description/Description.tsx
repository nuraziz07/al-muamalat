import React from 'react';

interface DescriptionProps {
    description: string;
}

const Description = ({description}: DescriptionProps) => {
    return (
        <div className="text-[16px] leading-[2.55] text-[#566174] sm:text-[17px]lg:text-[18px]"
             dangerouslySetInnerHTML={{
                 __html: description?.replace(/\\n/g, "")
             }}
        />
    );
};

export default Description;