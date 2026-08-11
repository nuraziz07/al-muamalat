import React from 'react';
import classes from './hero.module.scss'
import cls from 'classnames'
import {HeroContent} from "@/components/Sections/Hero/components/HeroContent.tsx";

const Hero = () => {

    return (
        <section className={cls(classes.hero_bg_img, `min-h-screen w-full flex justify-center items-center relative`)}>
            <HeroContent />
        </section>
    );
};

export default Hero;