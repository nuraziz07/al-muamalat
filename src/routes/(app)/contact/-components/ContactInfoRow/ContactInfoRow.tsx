import React from 'react';
import {contactInfo} from "@/Constants";


const ContactInfoRow = () => {
    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 py-12 text-center md:grid-cols-3">
            {contactInfo.map(({icon: Icon, text, href}) => (
                <div key={text} className="flex flex-col items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
                        <Icon className="h-6 w-6 text-orange-500" strokeWidth={1.75}/>
                    </span>

                    {href ? (
                        <a href={href} className="max-w-xs text-sm font-semibold text-gray-900">
                            {text}
                        </a>
                    ) : (
                        <p className="max-w-xs text-sm font-semibold text-gray-900">{text}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactInfoRow;