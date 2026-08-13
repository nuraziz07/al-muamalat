import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/Careers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/Careers/"!</div>
}
