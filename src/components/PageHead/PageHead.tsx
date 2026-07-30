import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";

interface PageHeadProps {
    courseId: string | number | undefined
}

const PageHead = ({courseId}: PageHeadProps) => {

    const { data, isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await request.get('/courses/main')
            return response?.data?.data ?? []
        },
    })

    return (
        <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-[40px] font-[600] text-[#152032] sm:text-5xl">
                Something
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
                Desc
            </p>
        </div>
    );
};

export default PageHead;