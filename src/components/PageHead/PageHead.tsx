import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import {useTranslation} from "react-i18next";

interface PageHeadProps {
    courseName: string;
    courseDescription: string;
}

const PageHead = ({courseName, courseDescription}: PageHeadProps) => {

    // const { data, isLoading } = useQuery({
    //     queryKey: ['courses'],
    //     queryFn: async () => {
    //         const response = await request.get('/courses/main')
    //         return response?.data?.data ?? []
    //     },
    // })

    const {i18n} = useTranslation()

    return (
        <div className="mx-auto mb-14 max-w-6xl">
            <h2 className="mb-4 text-[40px] font-[600] text-[#152032] sm:text-5xl">
                {i18n.language === 'en' ? courseName.name_en : i18n.language === 'uz' ? courseName.name_uz: null}
            </h2>
            <p dangerouslySetInnerHTML={{
                __html: i18n.language === 'en' ? courseDescription?.description_en?.replace(/\\n/g, "") : i18n.language === 'uz' ? courseDescription?.description_uz?.replace(/\\n/g, "") : null
            }} className="text-lg text-gray-500">

            </p>
        </div>
    );
};

export default PageHead;