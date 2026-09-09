import {createFileRoute} from '@tanstack/react-router'
import React, {lazy} from "react";
import ContactInfoRow from "@/routes/(app)/contact/-components/ContactInfoRow";


export const Route = createFileRoute('/(app)/contact/')({
  component: ContactPage,
})

const GetInTouchForm = lazy(() => import('./-components/Form'))

function ContactPage() {
    return (
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
            <ContactInfoRow/>
            <GetInTouchForm/>
            <iframe
                src="https://yandex.com/map-widget/v1/?text=Tashkent%2C%20Mirzo%20Ulugbek%20district%2C%20Lashkarbegi%20MFY%2C%2059%20Independence&z=17&l=map"
                className="mt-8 sm:mt-10 block w-full max-w-10xl border border-gray-200 mx-auto rounded-xl"
                style={{ height: 'clamp(300px, 50vw, 580px)' }}
                allowFullScreen
            />
        </section>
    );
}
