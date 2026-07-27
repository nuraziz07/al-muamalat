import React from 'react';
import {Expert} from '@/assets/Images/Png'
import SocialMedia from "@/components/Shared/SocialMedia/SocialMedia.tsx";
import classes from './TeamCard.module.scss'
import cls from 'classnames'

interface TeamCardProps {
    name: string;
    bio: string;
    img: string
}

const TeamCard = ({name, bio, img}: Required<TeamCardProps>) => {
    return (
        <div
            className="bg-[#D2E6E4] rounded-[10px] py-13 px-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">

            <div className="w-56 h-56 md:h-60 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                    src={img}
                    alt={name}
                    className={'w-full h-full object-cover'}
                />
            </div>

            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {name}
                </h2>

                <p className="text-slate-700 leading-relaxed mb-6">
                    {bio}
                </p>

                <SocialMedia />
            </div>

        </div>
    );
};

export default TeamCard;