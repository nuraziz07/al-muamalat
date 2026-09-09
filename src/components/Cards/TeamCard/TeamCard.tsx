import React from 'react';
import SocialMedia from "@/components/Shared/SocialMedia/SocialMedia.tsx";
 
interface TeamCardProps {
    name: string;
    bio: string;
    img: string;
}
 
const TeamCard = ({name, bio, img}: Required<TeamCardProps>) => {
    return (
        <div
            className="bg-[#D2E6E4] rounded-[10px] py-8 px-5 sm:py-10 sm:px-6 md:py-13 md:px-8 w-full flex flex-col md:flex-row items-center gap-6 md:gap-8">
 
            <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:h-60 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                    src={img}
                    alt={name}
                    className={'w-full h-full object-cover'}
                />
            </div>
 
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
                    {name}
                </h2>
 
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5 md:mb-6">
                    {bio}
                </p>
 
                <SocialMedia located={'team-card'} />
            </div>
 
        </div>
    );
};
 
export default TeamCard;