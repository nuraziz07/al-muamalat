import React from "react";

interface PageHeadProps {
    title: string;
     description?: string;
}

const PageHead = ({title}: PageHeadProps) => {

    return (
        <div className="mx-auto flex max-w-6xl flex-col items-center pb-5">
            <h1 className="text-center text-[32px] font-semibold leading-tight text-[#152032] sm:text-[36px] lg:text-[40px]">
                {title}
            </h1>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-[#1f3d33]" />
        </div>
    );
};

export default PageHead;