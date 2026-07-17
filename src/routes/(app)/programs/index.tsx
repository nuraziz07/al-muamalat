import {createFileRoute} from '@tanstack/react-router'
import Header from './-sections/Header'
import Summary from "@/routes/(app)/programs/-sections/Summary";
import BriefInformation from "@/routes/(app)/programs/-sections/BriefInformation";
import PopularCource from "@/routes/(app)/programs/-sections/PopularCource";
import ServicePayment from "@/routes/(app)/programs/-sections/Payment";
import Services from "@/routes/(app)/programs/-sections/Services";
import Consultation from "@/routes/(app)/programs/-sections/Consultation";


export const Route = createFileRoute('/(app)/programs/')({
  component: ProgramsPage,
})

function ProgramsPage() {


    return (
       <section className={'mt-20 w-full bg-white'}>
           <div className={'mx-auto'}>
               <Header title={'International educational programs'} subtitle={'Al Muamalat Education\'s international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.'} />

               <div className={'py-10'}>
                   <Summary />
               </div>

               <div className={'py-10'}>
                   <BriefInformation />
               </div>

               <div className={'py-10'}>
                   <PopularCource />
               </div>

               <div className={'py-10'}>
                   <ServicePayment />
               </div>

               <div className={'py-10'}>
                   <Services />
               </div>

               <div className={'pt-10 pb-40'}>
                   <Consultation />
               </div>
           </div>
       </section>
    );
}
