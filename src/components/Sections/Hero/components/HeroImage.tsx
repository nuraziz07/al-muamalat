import React from 'react';
import {Person} from "@/assets/Images/Png";

const HeroImage = () => {
    return (
        <div className="relative flex justify-center md:justify-end">
            {/*<div className="pointer-events-none absolute inset-0 hidden md:block">*/}
            {/*    <span className="absolute left-4 top-24 h-3 w-3 rounded-full bg-teal-300/40 blur-[2px]" />*/}
            {/*    <span className="absolute left-16 top-12 h-4 w-4 rounded-full bg-teal-300/30 blur-[2px]" />*/}
            {/*    <span className="absolute left-0 top-48 h-2 w-2 rounded-full bg-teal-300/40" />*/}
            {/*    <span className="absolute right-24 top-8 h-3 w-3 rounded-full bg-teal-300/30 blur-[2px]" />*/}
            {/*    <span className="absolute right-8 top-40 h-5 w-5 rounded-full bg-teal-300/20 blur-[3px]" />*/}
            {/*    <span className="absolute right-40 top-64 h-2 w-2 rounded-full bg-teal-300/40" />*/}
            {/*</div>*/}

            <img
                src={Person}
                alt="Student"
                className="relative z-10 h-[620px] w-auto object-contain"
            />
        </div>
    );
};

export default HeroImage;