import React from 'react';
import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/Cards/TeamCard";
import Experts from "@/components/Sections/Team/components";

const Team = () => {

    return (
        <section className={'py-20'}>
            <SectionHead title={'Our Expert Team '} subtitle={'Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.'} />

            <Experts />
        </section>
    );
};

export default Team;