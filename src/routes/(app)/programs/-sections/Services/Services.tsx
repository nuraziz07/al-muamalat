import React from 'react';
import SectionHead from "@/components/SectionHead";
import CourseServiceCard from "@/components/Cards/CourseServiceCard";
import {Ava_1, Ava_2, Service} from "@/assets/Images/Png";

export type ServivesProps = {
    id: number,
    image: string,
    startDate: string,
    title: string,
    description: string,
    price: number,
    oldPrice: number,
    students: number,
    avatars: string[],
}

const Services = () => {

    const courses: ServivesProps[] = [
        {
            id: 1,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
        {
            id: 2,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
        {
            id: 3,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
        {
            id: 4,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
        {
            id: 5,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
        {
            id: 6,
            image: Service,
            startDate: "21 December 2024",
            title: "Islamic Fund Management",
            description:
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
            price: 250,
            oldPrice: 300,
            students: 40,
            avatars: [
                Ava_1,
                Ava_2,
            ],
        },
    ];
    return (
        <section>
             <SectionHead title={'Our services'} subtitle={'Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.'} />
             <CourseServiceCard course={courses} />
        </section>
    );
};

export default Services;