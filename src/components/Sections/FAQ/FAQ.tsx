import React from 'react';
import SectionHead from "@/components/SectionHead";
import QuestionCard from "@/components/Sections/FAQ/components";

const Faq = () => {
    return (
        <section className={'my-20'}>
            <SectionHead title={'Frequently asked questions'} subtitle={'If you have any further questions, please contact us '} />
            <QuestionCard  />
        </section>
    );
};

export default Faq;