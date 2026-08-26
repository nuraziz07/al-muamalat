import React, {ReactNode} from 'react';
import {useNavigate} from '@tanstack/react-router';
import {useQuery} from '@tanstack/react-query';
import {request} from '@/Services/api/interceptor.ts';
import PurchasedCourseCard from "@/routes/(app)/profile/-components/PurchasedCourses/-components/PurchasedCourseCard";
import {Course} from "@/routes/(app)/my_courses/$my_courseId.tsx";


const PurchasedCourses = () => {
    const navigate = useNavigate();

    const {data: purchasedCourses} = useQuery({
        queryKey: ['my-course'],
        queryFn: async () => {
            const response = await request.get('/courses/my')
            return response?.data?.data?.courses ?? []
        }
    })

    const handleLearnMore = (myCourseId: string) => {
        navigate({
            to: '/my_courses/$my_courseId',
            params: {'my_courseId': myCourseId}
        })
    }

    return (
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Courses purchased</h3>

                <button
                    type="button"
                    onClick={() => navigate({to: '/programs'})}
                    className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                    All courses
                </button>
            </div>

            <div className="mb-6 h-px w-full bg-gray-100"/>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {purchasedCourses?.map((course: Course): ReactNode => (
                    <PurchasedCourseCard
                        key={course.id}
                        id={course.course_id}
                        isPaid={course.purchase_status}
                        course={course.courses}
                        onLearnMore={() => handleLearnMore(course.course_id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PurchasedCourses;