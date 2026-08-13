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
            className={cls('flex flex-col gap-6 px-6 rounded-[10px] py-10 md:flex-row md:items-start md:gap-32 md:px-12 md:py-14 lg:px-16 lg:py-16',
                isDark ? 'bg-[#4d7263]' : 'bg-white border-gray-200 border')}>
            <h3 className={cls(' text-xl leading-tight md:text-3xl lg:text-4xl lg:leading-tight',
                    isDark ? 'text-white' : 'text-gray-900')}>
                {title}
            </h3>

            <div className={'flex flex-col gap-4'}>
                <p
                    className={cls(
                        'text-base text-[#5C7A6E] leading-relaxed md:text-lg',
                        isDark ? 'text-white/85' : 'text-gray-600'
                    )}
                >
                    {description}
                </p>

                <button type="button" onClick={() => navigate({to: '/contact'})} className={cls('inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors',
                        isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-[#4d7263] text-white hover:bg-[#3f5f52]')}>
                    Contact
                    <ArrowRight className="h-4 w-4"/>
                </button>
            </div>
        </div>
    );
};

export default ExtendedServiceCard;