import {Quote_Icon, QuoteBannerImg as backgroundImage} from "@/assets/Images/Png";

const QuoteBanner = () => {
    return (
        <section
            className="relative flex min-h-[75vh] items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="absolute inset-0 bg-slate-900/70" />

            <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24 md:px-10">
                <div className="mb-8">
                    <img
                        src={Quote_Icon}
                        alt=""
                        aria-hidden
                        className="h-14 w-auto md:h-16"
                    />
                </div>

                <blockquote className="text-left text-xl font-normal leading-relaxed text-white md:text-2xl md:leading-relaxed lg:text-[1.75rem] lg:leading-[1.6]">
                    &lsquo;The time has come to create a legal framework for the introduction of
                    Islamic financial services in Uzbekistan. Experts from the Islamic Development
                    Bank and other international financial organizations will be involved in this
                    process.&rsquo;
                </blockquote>

                <div className="mt-12 flex items-start gap-5 md:mt-16">
                    <span className="mt-3 h-px w-12 shrink-0 bg-[#e66a4d] md:w-16" />

                    <div>
                        <p className="text-base font-bold uppercase tracking-[0.18em] text-[#e66a4d] md:text-lg">
                            Shavkat Mirziyoyev
                        </p>
                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-white md:text-sm">
                            President of the Republic of Uzbekistan
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-6">
                <div className="relative">
                    <div className="h-px w-full bg-white/25" />
                    <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e66a4d]" />
                </div>
            </div>
        </section>
    );
};

export default QuoteBanner;
