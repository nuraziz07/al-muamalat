import React from 'react';
import ContactInfo from "@/routes/(app)/contact/-sections/Contact_Form/-components/ContactInfo.tsx";
import ContactForm from "@/routes/(app)/contact/-sections/Contact_Form/-components/ContactForm.tsx";

const ContactSection = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-8 py-20">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;