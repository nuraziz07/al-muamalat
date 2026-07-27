import React from 'react';
import BrandRow from "@/components/Sections/Partners/components/BrandRow.tsx";
import SectionHead from "@/components/SectionHead";

const Partners = () => {
    return (
        <section>
            <SectionHead title={'Our Partners and Clients'} />

            <div className={'py-20'}>
                <BrandRow />
            </div>
        </section>
    );
};

export default Partners;