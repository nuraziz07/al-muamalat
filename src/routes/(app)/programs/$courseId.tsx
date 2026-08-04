import {createFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import LearningPoints from "@/routes/(app)/programs/-sections/LearningPoints";
import BriefInfo from "@/components/Sections/BriefInformation";
import Courses from "@/routes/(app)/programs/-sections/Courses";
import Payment from "@/components/Cards/Payment";
import {Service} from "@/assets/Images/Png";
import Services from "@/routes/(app)/programs/-sections/Services";
import ConsultationForm from "@/components/ConsultationForm";
import PageHead from "@/components/PageHead";

export const Route = createFileRoute('/(app)/programs/$courseId')({
  component: RouteComponent,
})

function RouteComponent() {
    const {courseId} = Route.useParams()

    const {data: course, isLoading} = useQuery({
        queryKey: ['course', courseId],
        queryFn: async () => {
            const response = await request.get(`/courses/${courseId}`)
            return response?.data?.data
        },
        enabled: !!courseId,
    })


    if (isLoading) return <div>Yuklanmoqda...</div>


    return (
        <section className={'mt-20 w-full bg-white'}>
            <div className={'mx-auto flex flex-col gap-20'}>
                <PageHead courseName={course} courseDescription={course} />
                <div className={'py-10'}>
                    <LearningPoints />
                </div>

                <div className={'py-10'}>
                    <BriefInfo />
                </div>

                <div className={'py-10'}>
                    <Courses />
                </div>

                <div className={'py-10'}>
                    <Payment />
                </div>

                <div className={'py-10'}>
                    <Services />
                </div>

                <div className={'pt-10 pb-40'}>
                    <ConsultationForm  />
                </div>
            </div>
        </section>
    )
}