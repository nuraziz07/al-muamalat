import {createFileRoute} from '@tanstack/react-router'
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";

export const Route = createFileRoute('/(app)/programs/$courseId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {courseId} = Route.useParams()

    const {data, isLoading} = useQuery({
        queryKey: ['courses', courseId],
        queryFn: async () => {
            const response = await request.get('/courses/main')
            return response?.data?.data ?? []
        }
    })

    const course = data?.find((item) => String(item.course_id) === String(courseId))

    if (isLoading) return <div>Loading...</div>
    if (!course) return <div>Course not found</div>

    return <div>{course.name_uz}</div>
}
