import {createFileRoute} from '@tanstack/react-router'
import {lazy} from "react";
import ContactInfoRow from "@/routes/(app)/contact/-components/ContactInfoRow";
import GetInTouchForm from "@/routes/(app)/contact/-components/Form";

export const Route = createFileRoute('/(app)/contact/')({
  component: ContactPage,
})

const ConsultationForm = lazy(() => import('@/components/ConsultationForm'))

function ContactPage() {
    return (
        <section className="px-6 pb-20">
            <ContactInfoRow/>
            <GetInTouchForm/>
        </section>
    );
}
