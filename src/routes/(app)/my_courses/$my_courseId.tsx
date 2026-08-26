import {createFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import ProgressionBar from "@/routes/(app)/my_courses/-components/ProgressionBar";
import { CourseItem } from "@/routes/(app)/profile/-components/PurchasedCourses/-components/PurchasedCourseCard/PurchasedCourseCard.tsx";
import {LessonsSideBar} from "@/routes/(app)/my_courses/-components/LessonsSideBar";
import type {Lesson} from "@/routes/(app)/my_courses/-components/LessonsSideBar";
import { Divider } from 'antd';
import VideoPlayer from './-components/VideoPlayer';

export const Route = createFileRoute('/(app)/my_courses/$my_courseId')({
    component: RouteComponent,
})

export type Course = {
    course_id: string,
    id: string,
    user_id: string,
    purchase_status: 'created' | 'paid',
    purchased_at: string,
    courses: CourseItem[]
}

function RouteComponent() {

    const {my_courseId} = Route.useParams()

    const {data: lessons} = useQuery<Lesson[]>({
        queryKey: ['my_courseId_lesson'],
        queryFn: async () => {
            const response = await request.get('lessons')
            return response?.data?.data ?? []
        }
    })

    const {data: course} = useQuery({
        queryKey: ['my-course'],
        queryFn: async () => {
            const response = await request.get('/courses/my')
            return response?.data?.data?.courses ?? []
        }
    })

    const filteredData = course?.find((item: Course) => item.course_id === my_courseId)?.courses as CourseItem[] | undefined

    
    return (
        <section className={'px-40'}>

            <div className={'mt-7 gap-4 flex-col flex'}>
                <h1 className={'text-[34px] font-medium'}>{filteredData?.map((item) => item.name_uz)}</h1>
                <ProgressionBar/>
            </div>

            <Divider className={'bg-gray-200'} />

            <div className={'mt-10 flex gap-6 pb-10 items-start'}>
                <LessonsSideBar lessons={lessons ?? []}/>

                <div className={'flex-1 rounded-xl overflow-hidden bg-black aspect-video'}>
                    <VideoPlayer />
                </div>
            </div>

        </section>
    )
}

