import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";

const useAPIQuery = ({url, params}: {url: string; params?: Record<string, unknown>}) => {
    return useQuery({
        queryKey: [url, params],
        queryFn: async () => {
            return await request.get(url, {
                params
            })
        }
    })
}

export default useAPIQuery