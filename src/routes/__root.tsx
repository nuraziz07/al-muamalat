import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";

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
    notFoundComponent: () => <div>Not Found</div>
})

