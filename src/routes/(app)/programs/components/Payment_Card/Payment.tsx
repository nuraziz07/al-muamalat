import React from 'react';
import {Check, Circle} from "lucide-react";

interface PaymentProps {
    onSubmit: () => void
}

const Payment = ({onSubmit}: PaymentProps) => {

    const services = [
        {
            id: 1,
            title: "Space for creative ideas",
            description:
                "Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.",
        },
        {
            id: 2,
            title: "Engaging and fun curriculum",
            description:
                "Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own. With Cyber Square kids have fun while they learn without frustrations.",
        },
        {
            id: 3,
            title: "Professional teaching methods",
            description:
                "We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.",
        },
    ];

    const paymentFeatures = [
        "Space for creative ideas",
        "Engaging and fun curriculum",
        "Professional teaching methods",
        "Learn from AI & Data Science experts",
        "Courses by IIT, NIT, and IIM alumni",
        "UK certification upon completion",
        "Personalized one-to-one training",
    ];

    return (
        <section className="mx-auto max-w-6xl rounded-lg shadow-gray-400 shadow-xl">
            <div className="grid lg:grid-cols-2">
                {/* Left */}
                <div className="bg-[#0B9B93] px-16 py-20 text-white">
                    <h2 className="mb-16 text-[36px] font-bold">Our Services</h2>

                    <div className="space-y-4">
                        {services.map((item) => (
                            <div key={item.id} className="flex gap-5">
                                <Check className="mt-1 shrink-0" size={30} />

                                <div>
                                    <h3 className="text-[22px] font-[600]">
                                        {item.title}
                                    </h3>

                                    <p className="leading-9 text-[16px] font-[400] text-white/95">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="bg-white px-16 py-20">
                    <h2 className="mb-12 text-[36px] font-semibold">Payment</h2>

                    <ul className="space-y-5">
                        {paymentFeatures.map((item, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Circle
                                    size={10}
                                    className="fill-[#0B9B93] text-[#0B9B93]"
                                />
                                <span className="text-[18px] font-normal">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button type={'submit'} onClick={onSubmit} className="mt-16 rounded-xl bg-[#0B9B93] px-12 py-5 text-[18px] font-semibold text-white transition hover:opacity-90">
                        Purchase Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Payment;