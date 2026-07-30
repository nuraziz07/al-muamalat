import {Suspense} from "react";
import {Router} from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {AuthProvider} from "@/Providers/AuthContext";

const PageLoader = () => (
    <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-100 border-t-teal-600" />
            <span className="text-sm font-medium text-gray-500">Loading...</span>
        </div>
    </div>
);

const App = () => {

    const queryClient = new QueryClient()

    return (
        <Suspense fallback={<PageLoader />}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Router />
                    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
                </AuthProvider>
            </QueryClientProvider>
        </Suspense>
    );
};

export default App;
