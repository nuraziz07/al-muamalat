import React from 'react';

const CareersInfoBanner = () => {
    return (
        <div className="mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-900">
                Within the framework of establishing Islamic banking windows, there is
                a need for qualified specialists. Therefore, we invite experienced
                candidates with relevant knowledge to apply!
            </p>

            <p className="text-base leading-relaxed text-gray-600">
                Candidates with higher education and a diploma or certificate in
                Islamic finance are requested to send their CV (resume) to{' '}
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