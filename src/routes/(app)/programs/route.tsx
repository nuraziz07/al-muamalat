import {createFileRoute, Outlet} from '@tanstack/react-router'
import {Layout} from '@/components'
import {z} from "zod";


export const Route = createFileRoute('/(app)/programs')({
    component: RouteComponent,
})

function RouteComponent() {
  return (
      <Layout>
          <Outlet />
      </Layout>
  )
}
