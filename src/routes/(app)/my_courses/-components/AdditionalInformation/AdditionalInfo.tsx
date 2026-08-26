import React from 'react';
import type { Lesson } from '@/routes/(app)/my_courses/-components/LessonsSideBar';

type AdditionalInfoProps = {
    selectedLesson: Lesson | null;
};

const AdditionalInfo = ({ selectedLesson }: AdditionalInfoProps) => {
    if (!selectedLesson) return null;

    const hasDocuments = selectedLesson.documents && selectedLesson.documents.length > 0;

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[29px] font-bold text-gray-900 leading-snug">
                {selectedLesson.title_uz}
            </h2>

            {hasDocuments && (
                <div className="flex flex-col gap-2">
                    <p className="text-xs mt-2 font-bold tracking-widest text-gray-400 uppercase">
                        Lesson Materials:
                    </p>

                    <div className="flex flex-col mt-2 gap-2">
                        {selectedLesson.documents.map((doc, i) => (
                            <a
                                key={i}
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center group hover:border-orange-600 transition-all duration-300 easy-in gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                                <span className="shrink-0 text-orange-500">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                                        <path
                                            d="M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V8L10 1Z"
                                            stroke="#f97316"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M10 1V8H17"
                                            stroke="#f97316"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[15px] text-gray-700 group-hover:text-orange-600 duration-300 transition-colors line-clamp-1">
                                    {doc.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default React.memo(AdditionalInfo);