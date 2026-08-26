import React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Lesson } from '@/routes/(app)/my_courses/-components/LessonsSideBar'
import cls from "classnames";

type VideoPlayerProps = {
    selectedLesson: Lesson | null;
    onPrev?: () => void;
    onNext?: () => void;
    activeIndex: string | number
    lessons: Lesson[]
}

const VideoPlayer = ({ selectedLesson, onPrev, onNext, activeIndex, lessons }: VideoPlayerProps) => {

    const videoUrl =  selectedLesson?.id === '5d403764-7a2a-4bd1-b135-f8cb9f170276' ? '1167941942' : selectedLesson?.video_url

    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden bg-black aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    title={selectedLesson?.title_uz}
                    src={`https://player.vimeo.com/video/${videoUrl}?api=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                />
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onPrev}
                    className={cls('flex items-center gap-2 px-6 py-2.5 rounded-full border-2   font-semibold text-sm  transition-colors cursor-pointer', activeIndex === 0 ? 'border-gray-200 text-gray-400' : 'border-orange-500 text-orange-500 hover:bg-orange-50')}
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>

                <button
                    onClick={onNext}
                    className={cls('flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm  transition-colors cursor-pointer', activeIndex === lessons?.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-orange-500 hover:bg-orange-600 text-white')}
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default React.memo(VideoPlayer);