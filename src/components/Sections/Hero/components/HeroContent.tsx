import {useTranslation} from "react-i18next";
import React from "react";
import classes from '../hero.module.scss'
import cls from 'classnames'


export const HeroContent = () => {

    const {t} = useTranslation()

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
                <h1 className={cls(classes.title)}>
                    Your Guide to
                    <br />
                    Islamic Finance
                </h1>

                <p className="mt-8 max-w-3xl text-lg tracking-wide text-white/80 md:text-3xl">
                    Strategic Solutions. Ethical Excellence, Global Impact.
                </p>

                <div className="mt-14 flex flex-col gap-6 md:flex-row">
                    <button className={cls(classes.request_button)}>
                        Request for Consultation
                    </button>

                    <button className={cls(classes['button'])}>
                        Explore Services
                    </button>
                </div>

                <div className="mt-14 flex flex-col items-center gap-4">
                        <span className="text-sm uppercase tracking-[0.2em] text-white/60">
                            Lower It Down.
                        </span>

                    <span className="text-4xl  animate-jump-down text-white/70">↓</span>
                </div>
            </div>
        </div>
    )
}