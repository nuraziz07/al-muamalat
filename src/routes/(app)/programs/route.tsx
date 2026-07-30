import {createFileRoute, Outlet} from '@tanstack/react-router'
import {Layout} from '@/components'
import {z} from "zod";
//
// const programsSearchParams = z.object({
//     program: z.enum(['first', 'second']).default('first')
// })

export const Route = createFileRoute('/(app)/programs')({
    // validateSearch: programsSearchParams,
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Layout>
          <Outlet />
      </Layout>
  )
}
