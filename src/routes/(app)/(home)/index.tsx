import { createFileRoute } from '@tanstack/react-router'
import {lazy} from "react";
import Container from "@/components/Container";

export const Route = createFileRoute('/(app)/(home)/')({
  component: RouteComponent,
})

const Hero = lazy(() => import('@/components/Sections/Hero'))
const Services = lazy(() => import('@/components/Sections/Services'))
const Team = lazy(() => import('@/components/Sections/Team'))
const Partners = lazy(() => import('@/components/Sections/Partners'))
const Media = lazy(() => import('@/components/Sections/Media'))
const Faq = lazy(() => import('@/components/Sections/FAQ'))

function RouteComponent() {

  return (
      <main>
          <Hero />
          <Services />
          <Team />
          <Partners />
          <Media />
          <Faq />
      </main>
  )
}
