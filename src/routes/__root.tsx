import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import NotFound from "@/components/NotFound";

const RootLayout = () => {
    return (
        <div>
            <Outlet/>
            <TanStackRouterDevtools/>
        </div>
    )
}

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: () => <NotFound />
})

