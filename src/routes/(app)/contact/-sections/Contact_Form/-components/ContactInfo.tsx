import React from 'react';

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-10 max-w-md">
            <div>
                <h1 className="text-6xl font-medium text-neutral-900 tracking-tight">
                    Let&apos;s Talk
                </h1>
                <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
                    Have some big idea or brand to develop and need help? Then reach
                    out we&apos;d love to hear about your project and provide help
                </p>
            </div>

            <div>
                <h2 className="text-3xl font-medium text-neutral-900 mb-2">Email</h2>
                <p className="text-neutral-500">beebs@gmail.com</p>
            </div>

            <div>
                <h2 className="text-3xl font-medium text-neutral-900 mb-2">Socials</h2>
                <div className="flex flex-col gap-1">
                    <a
                        href="#"
                        className="text-neutral-500 underline underline-offset-2 hover:text-neutral-800 transition-colors w-fit"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className="text-neutral-500 underline underline-offset-2 hover:text-neutral-800 transition-colors w-fit"
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="text-neutral-500 underline underline-offset-2 hover:text-neutral-800 transition-colors w-fit"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;