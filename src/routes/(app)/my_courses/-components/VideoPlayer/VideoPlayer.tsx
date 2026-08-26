import React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Lesson } from '@/routes/(app)/my_courses/-components/LessonsSideBar'

type VideoPlayerProps = {
    selectedLesson: Lesson | null;
    onPrev?: () => void;
    onNext?: () => void;
}

const VideoPlayer = ({ selectedLesson, onPrev, onNext }: VideoPlayerProps) => {

    const videoUrl = selectedLesson?.video_url

    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden bg-black aspect-video">
                <iframe
                    width="100%"
                    height="100%"
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
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-orange-500 text-orange-500 font-semibold text-sm hover:bg-orange-50 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>

                <button
                    onClick={onNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors cursor-pointer"
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default React.memo(VideoPlayer);