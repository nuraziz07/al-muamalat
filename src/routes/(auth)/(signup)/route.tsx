import {createFileRoute, Outlet} from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/(signup)')({
  component: () => <Outlet />,
})
