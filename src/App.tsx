import {Suspense} from "react";
import {Router} from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {AuthProvider} from "@/Context/AuthContext";
import PageLoader from "@/components/Shared/PageLoader/PageLoader.tsx";
import {App as AntApp} from 'antd'


const App = () => {

    const queryClient = new QueryClient()

    return (
        <AntApp>
            <Suspense fallback={<PageLoader />}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Router />
                        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
                    </AuthProvider>
                </QueryClientProvider>
            </Suspense>
        </AntApp>
    );
};

export default App;
