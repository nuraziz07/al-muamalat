import {createFileRoute, Outlet} from '@tanstack/react-router'
import {Layout} from "@/components";

export const Route = createFileRoute('/(app)/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Layout><Outlet /></Layout>
  )
}
