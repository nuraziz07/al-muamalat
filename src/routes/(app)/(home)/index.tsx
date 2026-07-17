import { createFileRoute } from '@tanstack/react-router'
import {lazy} from "react";


export const Route = createFileRoute('/(app)/(home)/')({
  component: RouteComponent,
})

const Hero = lazy(() => import('@/components/Sections/Hero'))
const Services = lazy(() => import('@/components/Sections/Services'))

function RouteComponent() {

  return (
      <div>
          <Hero />
          <Services />
          {/*<TeamSection />*/}
          {/*<Partners />*/}
      </div>
  )
}
