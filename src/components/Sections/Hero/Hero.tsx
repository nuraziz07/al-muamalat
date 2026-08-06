import React from 'react';
import { Col, Row } from "antd";
import { HeroContent } from "@/components/Sections/Hero/components/HeroContent.tsx";
import { Hero_Banner } from './../../../assets/Images/Png'
import classes from './hero.module.scss'
import cls from 'classnames'

const Hero = () => {

    return (
        <section className={cls(classes.hero_bg_img, `min-h-screen w-full flex justify-center items-center relative`)}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="max-w-5xl text-5xl font-light uppercase leading-tight text-white md:text-7xl">
                        Your Guide to
                        <br />
                        Islamic Finance
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg tracking-wide text-white/80 md:text-3xl">
                        Strategic Solutions. Ethical Excellence, Global Impact.
                    </p>

                    <div className="mt-14 flex flex-col gap-6 md:flex-row">
                        <button className="rounded-full bg-emerald-700 px-12 py-5 text-lg font-semibold uppercase tracking-widest text-white transition hover:bg-emerald-800">
                            Request for Consultation
                        </button>

                        <button className="rounded-full border-2 border-white/60 px-12 py-5 text-lg font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
                            Explore Services
                        </button>
                    </div>

                    <div className="mt-24 flex flex-col items-center gap-3">
                        <span className="text-sm uppercase tracking-[0.5em] text-white/60">
                            Lower It Down.
                        </span>

                        <span className="text-4xl text-white/70">↓</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;