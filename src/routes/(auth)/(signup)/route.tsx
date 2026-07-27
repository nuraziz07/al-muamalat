import {createFileRoute, Outlet} from '@tanstack/react-router'
import NotFound from "@/components/NotFound";

export const Route = createFileRoute('/(auth)/(signup)')({
  component: () => <Outlet />,
  notFoundComponent: () => <NotFound />
})
