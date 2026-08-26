import React from 'react';
import { Lock } from 'lucide-react';

export type Lesson = {
    id: string;
    index: number;
    seconds: number;
    title_en: string;
    title_uz: string;
    body_en: string;
    body_uz: string;
    course_id: string;
    created_at: string;
    video_url: string;
    documents: { link: string; name: string }[];
};

type LessonsSideBarItemProps = {
    lesson: Lesson;
    isActive?: boolean;
    isCompleted?: boolean;
    onClick?: (lesson: Lesson) => void;
};

const LessonsSideBarItem = ({ lesson, isActive, isCompleted, onClick }: LessonsSideBarItemProps) => {
    return (
        <div
            onClick={() => onClick?.(lesson)}
            className="flex items-center gap-3 px-3 py-2 cursor-pointer"
        >
            {/* Active holat: to'liq orange pill */}
            {isActive ? (
                <div className="flex items-center gap-3 flex-1 bg-orange-500 rounded-full px-4 py-2.5">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-bold text-white">{lesson.index}</span>
                    </span>
                    <p className="flex-1 text-sm font-semibold text-white line-clamp-1 leading-snug">
                        {lesson.title_uz}
                    </p>
                    {/* Active checkmark */}
                    <span className="shrink-0 w-5 h-5 rounded-full border-2 border-white/60 flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            ) : (
                <div className="flex items-center gap-3 flex-1 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    {/* Raqam badge */}
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <span className={`text-[11px] font-semibold ${isCompleted ? 'text-gray-700' : 'text-gray-400'}`}>
                            {lesson.index}
                        </span>
                    </span>

                    <p className={`flex-1 text-sm line-clamp-1 leading-snug ${
                        isCompleted ? 'text-gray-800 font-semibold' : 'text-gray-400 font-normal'
                    }`}>
                        {lesson.title_uz}
                    </p>

                    {/* Icon */}
                    {isCompleted ? (
                        <span className="shrink-0 w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    ) : (
                        <Lock size={13} className="text-gray-300 shrink-0" />
                    )}
                </div>
            )}
        </div>
    );
};

export default React.memo(LessonsSideBarItem);
