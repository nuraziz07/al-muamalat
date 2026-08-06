import useAPIQuery from "@/hooks/custom/api/useAPIQuery.ts";


export function useGetCoursesAll(props) {
    return useAPIQuery({url: '/courses/main', ...props})
}