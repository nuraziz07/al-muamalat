import React, { useState } from 'react';
import { LessonsSideBarItem } from './LessonsSideBarItem';
import type { Lesson } from './LessonsSideBarItem';

type LessonsSideBarProps = {
    lessons: Lesson[];
    activeLesson: Lesson | null;
    setActiveLesson: () => void;
};

const LessonsSideBar = ({ lessons, setActiveLesson, activeLesson }: LessonsSideBarProps) => {

    return (
        <div className="w-72 shadow-md shrink-0 bg-white rounded-2xl border border-gray-100 sticky top-32 h-fit max-h-[680px] flex flex-col overflow-hidden">
            <div className="overflow-y-auto flex-1 scrollbar-orange py-2">
                {lessons?.map((lesson, i) => (
                    <LessonsSideBarItem
                        key={lesson.id}
                        lesson={lesson}
                        // isActive={activeId === lesson.id}
                        isCompleted={i < 3}
                        onClick={() => setActiveLesson(lesson)}
                    />
                ))}
            </div>
        </div>
    );
};

export default React.memo(LessonsSideBar);