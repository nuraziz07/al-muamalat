import {createFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";

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

    console.log(course)

    if (isLoading) return <div>Yuklanmoqda...</div>

    return <div>{course?.name_uz}</div>
}