import React from 'react';
import Rating from "@/components/Sections/Hero/components/Rating.tsx";
import {useTranslation} from "react-i18next";

const StudentsOpinions = () => {

    const {t} = useTranslation()

    const students = [
        {name: "Amina K.", initials: "AK", color: "bg-orange-400"},
        {name: "Yusuf M.", initials: "YM", color: "bg-amber-400"},
        {name: "Fatima R.", initials: "FR", color: "bg-rose-400"},
    ];

    const ratingStars = [1, 2, 3, 4];

    return (
        <div className="flex mt-5 flex-wrap items-center gap-4">
            <button className="rounded-[10px] bg-[#FD661F] px-6 py-3 text-[16px] font-bold tracking-wide text-white shadow-md">
                {t('hero.studentsOpinion')}
            </button>

            <div className="flex -space-x-3">
                {students.map((student) => (
                    <div key={student.name} title={student.name}  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal-600 text-xs font-bold text-white ${student.color}`}>
                        {student.initials}
                    </div>
                ))}
            </div>

            <Rating  ratingStars={ratingStars}/>
        </div>
    );
};

export default StudentsOpinions;