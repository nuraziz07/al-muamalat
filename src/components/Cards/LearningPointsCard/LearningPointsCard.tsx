import React from 'react';
import {CheckCheck, Circle} from "lucide-react";

const LearningPointsCard = () => {
    const courseCards = [
        {
            title: "What you'll learn",
            items: [
                {
                    icon: CheckCheck,
                    subtitle:
                        "Gain a comprehensive understanding of Islamic finance principles and ethics.",
                },
                {
                    icon: CheckCheck,
                    subtitle:
                        "Build a portfolio with 10+ real-world projects in Islamic financial services.",
                },
                {
                    icon: CheckCheck,
                    subtitle:
                        "Learn to develop and manage Sharia-compliant financial products.",
                },
                {
                    icon: CheckCheck,
                    subtitle:
                        "Master key concepts in Islamic banking, investment, and wealth management.",
                },
                {
                    icon: CheckCheck,
                    subtitle:
                        "Understand the fundamentals of risk management in Islamic finance.",
                },
                {
                    icon: CheckCheck,
                    subtitle:
                        "Develop skills to work as an Islamic finance consultant.",
                },
            ],
        },
        {
            title: 'Why should you study at "AL-MUAMALAT"?',
            items: [
                { icon: Circle, subtitle: "Lifetime access" },
                { icon: Circle, subtitle: "Video lessons" },
                { icon: Circle, subtitle: "Tests" },
                { icon: Circle, subtitle: "Projects" },
                { icon: Circle, subtitle: "Downloadable resources" },
                { icon: Circle, subtitle: "Access via mobile device" },
            ],
        },
    ];

    return (
        <div className="flex gap-8 justify-center">
            {courseCards.map((card, cardIndex) => (
                <div
                    key={card.title}
                    className="rounded-3xl bg-[#F3F8FF] pt-5 px-8"
                >
                    <h2 className="mb-12 text-center text-[32px] font-[500] leading-tight text-black">
                        {card.title}
                    </h2>

                    <div className="space-y-8">
                        {card.items.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex items-start gap-5">
                                    <Icon
                                        className={`mt-1 shrink-0 text-slate-900 ${
                                            cardIndex === 0
                                                ? "h-8 w-8 stroke-[2]"
                                                : "h-3 w-3 fill-current"
                                        }`}
                                    />

                                    <p className="text-[20px] leading-relaxed text-slate-900">
                                        {item.subtitle}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default LearningPointsCard;