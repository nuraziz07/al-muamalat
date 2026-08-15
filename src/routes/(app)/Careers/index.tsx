import { createFileRoute } from '@tanstack/react-router'
import SectionHead from "@/components/SectionHead";
import CareersInfoBanner from "@/routes/(app)/Careers/-components/CareersInfoBanner";
import ApplyNowForm from "@/routes/(app)/Careers/-components/ApplyInForm";
import PageHead from "@/components/PageHead";

export const Route = createFileRoute('/(app)/Careers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <section className="px-6 mt-10 pb-10">
        <PageHead title={'Careers'}/>

        <div className="mb-10">
          <CareersInfoBanner title={' Within the framework of establishing Islamic banking windows, there is  a need for qualified specialists. Therefore, we invite experienced  a need for qualified specialists. Therefore, we invite experienced candidates with relevant knowledge to apply!'} description={'Candidates with higher education and a diploma or certificate in\n' +
              'Islamic finance are requested to send their CV (resume)'}/>
        </div>

        <ApplyNowForm/>
      </section>
  )
}
