import {createFileRoute} from '@tanstack/react-router'
import {lazy} from "react";

export const Route = createFileRoute('/(app)/contact/')({
  component: ContactPage,
})

const ContactSection = lazy(() => import('@/routes/(app)/contact/-sections/Contact_Form'))
const ConsultationForm = lazy(() => import('@/components/ConsultationForm'))

function ContactPage() {
    return (
        <section>
            <div>
                <ContactSection />
            </div>

            <div className={'pt-10 pb-30'}>
                <ConsultationForm />
            </div>
        </section>
    );
}
