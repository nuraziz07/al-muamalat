import React from 'react';
import {QuoteBannerImg, Quote_Icon} from '../../../assets/Images/Png'

const QuoteBanner = () => {
    return (
        <section
            className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${QuoteBannerImg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-white">
                {/* Quote icon */}
                <div className="mb-8 text-7xl font-bold leading-none text-orange-500">
                    <img src={Quote_Icon} alt="QuoteIcon"/>
                </div>

                {/* Quote */}
                <p className="text-2xl leading-relaxed md:text-4xl">
                    'The time has come to create a legal framework for the
                    introduction of Islamic financial services in Uzbekistan.
                    Experts from the Islamic Development Bank and other
                    international financial organizations will be involved in
                    this process.'
                </p>

                {/* Author */}
                <div className="mt-16 flex items-center gap-5">
                    <span className="h-px w-14 bg-orange-500" />

                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-orange-500">
                            Shavkat Mirziyoyev
                        </h3>

                        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">
                            President of the Republic of Uzbekistan
                        </p>
                    </div>
                </div>

                {/* Bottom divider */}
                <div className="relative mt-20">
                    <div className="h-px w-full bg-white/20" />

                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-amber-500" />
                </div>
            </div>
        </section>
    );
};

export default QuoteBanner;