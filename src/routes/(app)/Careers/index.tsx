import { createFileRoute } from '@tanstack/react-router'
import SectionHead from "@/components/SectionHead";
import CareersInfoBanner from "@/routes/(app)/Careers/-components/CareersInfoBanner";
import ApplyNowForm from "@/routes/(app)/Careers/-components/ApplyInForm";

export const Route = createFileRoute('/(app)/Careers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <section className="px-6 mt-10 pb-10">
        <SectionHead title={'Careers'}/>

        <div className="mb-10">
          <CareersInfoBanner/>
        </div>

        <ApplyNowForm/>
      </section>
  )
}
