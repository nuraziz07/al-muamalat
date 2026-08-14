import {createFileRoute} from '@tanstack/react-router'
import {useMutation, useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import LearningPoints from "@/routes/(app)/programs/-sections/LearningPoints";
import BriefInfo from "@/components/Sections/BriefInformation";
import Courses from "@/routes/(app)/programs/-sections/Courses";
import Payment from './components'
import Services from "@/routes/(app)/programs/-sections/Services";
import ConsultationForm from "@/components/ConsultationForm";
import PageHead from "@/components/PageHead";
import {useGetUser} from "@/hooks/custom/useAuth.ts";
import {message} from "antd";

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


    const {data: user} = useGetUser()

    const {mutate} = useMutation({
        mutationKey: ['courseUser'],
        mutationFn: async (payload: {course_id: string, user_id: string}) => {
             await request.post('/courses/user', payload).then((response) => {
                if(response.data.success) {
                    request.get(`/courses/purchase/${response?.data?.data?.id}`).then((res) => {
                        if(res?.data?.success) {
                            const aTag= document.createElement('a')
                            aTag.href = res?.data?.data?.data
                            aTag.target = '_blank'
                            document.body.append(aTag)
                            aTag.click()
                        }
                    })
                }
            }).catch((err) => {
                message.error('Error ketdi ishlamadi')
            })
        }
    })

    const onSubmit = () => {
        const submitData = {
            course_id: courseId,
            user_id: user?.user_id
        }
        mutate(submitData)
    }

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
                    <Payment onSubmit={onSubmit} />
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