import React from 'react';
import {ArrowRight} from 'lucide-react';
import cls from 'classnames';
import {useNavigate} from "@tanstack/react-router";

export interface ExtendedServiceCardProps {
    title: string;
    description: string;
    isDark?: boolean;
}



const ExtendedServiceCard = ({title, description, isDark = false}: ExtendedServiceCardProps) => {
    const navigate = useNavigate()
    return (
        <div
            className={cls(
                'grid min-h-auto grid-cols-1 gap-6 border px-4 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:px-6 sm:py-10 md:min-h-[300px] md:grid-cols-[minmax(0,1fr)_minmax(300px,0.95fr)] md:gap-10 md:px-8 md:py-12 lg:min-h-[360px] lg:gap-[clamp(56px,5vw,96px)] lg:px-[clamp(48px,4vw,78px)] lg:py-20',
                isDark ? 'border-[#4d7263] bg-[#4d7263]' : 'border-[#e6eee9] bg-white'
            )}
        >
            <h3 className={cls(
                    'max-w-[600px] text-[24px] font-normal leading-[1.08] tracking-normal sm:text-[30px] md:text-[40px] lg:text-[clamp(48px,3.4vw,64px)]',
                    isDark ? 'text-white' : 'text-gray-900')}>
                {title}
            </h3>

            <div className={'flex max-w-[690px] flex-col items-start gap-6 md:gap-8'}>
                <p
                    className={cls(
                        'text-base font-normal leading-[1.45] tracking-normal sm:text-lg md:text-xl lg:text-[clamp(20px,1.35vw,25px)]',
                        isDark ? 'text-white/85' : 'text-[#70877d]'
                    )}
                >
                    {description}
                </p>

                <button
                    type="button"
                    onClick={() => navigate({to: '/contact'})}
                    className={cls(
                        'group inline-flex h-12 md:h-14 w-fit items-center justify-center gap-3 rounded-full px-7 md:px-9 text-sm md:text-base font-medium transition-colors',
                        isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-[#4d7263] text-white hover:bg-[#3f5f52]'
                    )}
                >
                    Contact
                    <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1"/>
                </button>
            </div>
        </div>
    );
};

export default ExtendedServiceCard;
