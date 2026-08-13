import { createFileRoute } from '@tanstack/react-router'
import {lazy} from "react";
import Container from "@/components/Container";
import QuoteBanner from "@/components/Sections/QuoteBanner/QuoteBanner.tsx";
import ConsultationForm from "@/components/ConsultationForm";

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
          <QuoteBanner />
          <Services />
          <Team />
          <Partners />
          <Media />
          <Faq />
          <ConsultationForm />
      </main>
  )
}
