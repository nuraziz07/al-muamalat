import {createFileRoute} from '@tanstack/react-router'
import {Fragment, lazy} from "react";
import PageHead from "@/components/PageHead";
import {z} from "zod";


export const Route = createFileRoute('/(app)/programs/')({
    component: ProgramsPage,
})

// const Summary = lazy(() => import('@/routes/(app)/programs'))

const LearningPoints = lazy(() => import('@/routes/(app)/programs/-sections/LearningPoints'))
const BriefInfo = lazy(() => import('@/components/Sections/BriefInformation'))
const Courses = lazy(() => import('@/routes/(app)/programs/-sections/Courses'))
const Payment = lazy(() => import('@/components/Cards/Payment'))
const Services = lazy(() => import('@/routes/(app)/programs/-sections/Services'))
const ConsultationForm = lazy(() => import('@/components/ConsultationForm'))

function ProgramsPage() {


    return (
        <section className={'mt-20 w-full bg-white'}>
            <div className={'mx-auto flex flex-col gap-20'}>
                {/*<PageHead courseId={courseId}/>*/}
                <div className={'py-10'}>
                    <LearningPoints/>
                </div>

                <div className={'py-10'}>
                    <BriefInfo/>
                </div>

                <div className={'py-10'}>
                    <Courses/>
                </div>

                <div className={'py-10'}>
                    <Payment/>
                </div>

                <div className={'py-10'}>
                    <Services/>
                </div>

                <div className={'pt-10 pb-40'}>
                    <ConsultationForm/>
                </div>
            </div>
        </section>
    );
}
