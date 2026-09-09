import React from 'react';
import {Check, Circle} from "lucide-react";

const LearningPointsCard = () => {
    const courseCards = [
        {
            title: "What you'll learn",
            items: [
                "Gain a comprehensive understanding of Islamic finance principles and ethics.",
                "Build a portfolio with 10+ real-world projects in Islamic financial services.",
                "Learn to develop and manage Sharia-compliant financial products.",
                "Master key concepts in Islamic banking, investment, and wealth management.",
                "Understand the fundamentals of risk management in Islamic finance.",
                "Develop skills to work as an Islamic finance consultant.",
            ],
            iconType: 'check' as const,
        },
        {
            title: 'Why should you study at "AL-MUAMALAT"?',
            items: [
                "Lifetime access",
                "Video lessons",
                "Tests",
                "Projects",
                "Downloadable resources",
                "Access via mobile device",
            ],
            iconType: 'dot' as const,
        },
    ];

    return (
        <div className="flex flex-col gap-6 justify-center px-4 sm:px-6 md:px-8 lg:flex-row lg:px-0">
            {courseCards.map((card) => (
                <div
                    key={card.title}
                    className="flex-1 rounded-2xl bg-[#F3F8FF] px-6 py-8 sm:px-8 sm:py-10 lg:max-w-[560px] lg:px-10 lg:py-10"
                >
                    <h2 className="mb-6 text-lg sm:text-xl font-semibold leading-snug text-slate-900">
                        {card.title}
                    </h2>

                    <div className="space-y-4">
                        {card.items.map((text, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {card.iconType === 'check' ? (
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-slate-900" strokeWidth={2.5}/>
                                ) : (
                                    <Circle className="mt-1.5 h-2 w-2 shrink-0 fill-slate-900 text-slate-900"/>
                                )}

                                <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default LearningPointsCard;