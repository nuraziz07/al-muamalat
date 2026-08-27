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
                'grid min-h-[300px] grid-cols-1 gap-8 border px-6 py-10 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:min-h-[360px] md:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] md:gap-14 md:px-10 md:py-16 lg:min-h-[328px] lg:gap-[clamp(56px,5vw,96px)] lg:px-[clamp(48px,4vw,78px)] lg:py-20',
                isDark ? 'border-[#4d7263] bg-[#4d7263]' : 'border-[#e6eee9] bg-white'
            )}
        >
            <h3 className={cls(
                    'max-w-[600px] text-[34px] font-normal leading-[1.08] tracking-normal md:text-[48px] lg:text-[clamp(48px,3.4vw,64px)]',
                    isDark ? 'text-white' : 'text-gray-900')}>
                {title}
            </h3>

            <div className={'flex max-w-[690px] flex-col items-start gap-8'}>
                <p
                    className={cls(
                        'text-lg font-normal leading-[1.45] tracking-normal md:text-xl lg:text-[clamp(20px,1.35vw,25px)]',
                        isDark ? 'text-white/85' : 'text-[#70877d]'
                    )}
                >
                    {description}
                </p>

                <button
                    type="button"
                    onClick={() => navigate({to: '/contact'})}
                    className={cls(
                        'group inline-flex h-14 w-fit items-center justify-center gap-3 rounded-full px-9 text-base font-medium transition-colors',
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
