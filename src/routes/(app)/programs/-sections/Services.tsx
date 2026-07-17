import Header from './Header'
import ServiceCard from "@/routes/(app)/programs/-components/ServiceCard";
import {Service, Ava_1, Ava_2} from '@/assets/Images/Png'

export const courses = [
    {
        id: 1,
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

const Services = () => {
    return (
        <div>

            <section className="mx-auto max-w-7xl py-16">

                <Header title={'Our services '} subtitle={'Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.'} />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course) => (
                        <ServiceCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;