import {createFileRoute, Outlet} from '@tanstack/react-router'
import {Layout} from '@/components'

export const Route = createFileRoute('/(app)/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Layout>
          <Outlet />
      </Layout>
  )
}
