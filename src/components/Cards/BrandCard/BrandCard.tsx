import React from 'react';
import cls from "classnames";

interface BrandRowProps {
    name: string;
    logoSrc: string
}

type BrandCardProps = {
   img: string;
   key: string | number
}

const BrandCard = ({img, key}: BrandCardProps) => {

    return (
        <div
            className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl bg-gray-50 px-8 py-6"
        >
            <img
                src={img}
                alt={img}
                className="max-h-10 w-auto max-w-full object-contain"
            />
        </div>
    );
};

export default BrandCard;