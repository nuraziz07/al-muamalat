import React from 'react';
import {useNavigate} from '@tanstack/react-router';
import {useQuery} from '@tanstack/react-query';
import {request} from '@/Services/api/interceptor.ts';
import {useAuth} from '@/hooks/custom/useAuth.ts';
import CourseStatusCard from './CoursestatusCard.tsx';

interface PurchasedCourse {
    id: string;
    title: string;
    image: string;
    is_paid: boolean;
}

const PurchasedCourses = () => {
    const navigate = useNavigate();
    const {user} = useAuth();

    const {data: courses = []} = useQuery<PurchasedCourse[]>({
        queryKey: ['purchased-courses', user?.user_id],
        queryFn: async () => {
            const response = await request.get(`/courses/user/${user?.user_id}`);
            return response?.data?.data ?? [];
        },
        enabled: !!user?.user_id,
    });

    const handlePay = (courseId: string) => {
        navigate({to: '/programs/$courseId', params: {courseId}});
    };

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
                {courses.map((course) => (
                    <CourseStatusCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        image={course.image}
                        isPaid={course.is_paid}
                        onPay={() => handlePay(course.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PurchasedCourses;