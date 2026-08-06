import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";

const useAPIQuery = ({url, params}) => {
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