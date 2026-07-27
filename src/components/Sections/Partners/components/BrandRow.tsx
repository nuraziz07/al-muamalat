import React from 'react';
import BrandCard from "@/components/Cards/BrandCard";
import {Partner_American, Partner_Klarna, Partner_Skrill, Partner_West} from "@/assets/Images/Png";


const BrandRow = () => {

    const brands = [
        { name: "Stripe", logoSrc: Partner_Skrill },
        { name: "American Express", logoSrc: Partner_American},
        { name: "Western Union", logoSrc: Partner_West },
        { name: "Klarna", logoSrc: Partner_Klarna },
        { name: "Skrill", logoSrc: Partner_Skrill },
    ];

    return (
        <div className={'flex flex-col gap-6'}>
            <BrandCard brands={brands} direction={'left'} duration={30}  />
            <BrandCard brands={brands} direction={'right'} duration={30}  />
        </div>
    );
};

export default BrandRow;