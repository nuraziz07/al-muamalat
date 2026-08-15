import React from 'react';

interface CareersInfoBannerProps {
    title: string;
    description: string;
}

const CareersInfoBanner = ({title, description}: CareersInfoBannerProps) => {
    return (
        <div className="mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-900">
                {title}
            </p>

            <p className="text-base leading-relaxed text-gray-600">
                {description}
                <a
                    href="https://t.me/almuamalat_education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-orange-500 underline underline-offset-2 hover:text-orange-600"
                >
                    @almuamalat_education
                </a>{' '}
                Telegram handle or complete the form below.
            </p>
        </div>
    );
};

export default CareersInfoBanner;