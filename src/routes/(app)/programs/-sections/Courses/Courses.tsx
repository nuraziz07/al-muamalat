import React, {ReactNode} from 'react';
import {Cource1, Cource2, Cource3} from "@/assets/Images/Png";
import CourseCard from "@/components/Cards/CourseCard";
import SectionHead from "@/components/SectionHead";

export type CoursesProps = {
    id: number,
    category: 'Design' | 'Business',
    image: string,
    title: string,
    rating: number,
    reviews: number,
    price: number,
}

const Courses = () => {

    const courses: Required<CoursesProps>[] = [
        {
            id: 1,
            category: "Design",
            image: Cource1,
            title: "Various versions have evolved...",
            rating: 5,
            reviews: 20,
            price: 500,
        },
        {
            id: 2,
            category: "Business",
            image: Cource2,
            title: "Various versions have evolved...",
            rating: 4,
            reviews: 102,
            price: 500,
        },
        {
            id: 3,
            category: "Business",
            image: Cource3,
            title: "Various versions have evolved...",
            rating: 4,
            reviews: 102,
            price: 500,
        },
    ];


    return (
        <section>
            <SectionHead title={'Most Popular Course'} subtitle={'Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.'}/>

            <div className="flex justify-center items-center gap-4 px-20">
                {courses.map((courseItem): ReactNode => (
                    <CourseCard key={courseItem.id} course={courseItem}/>
                ))}
            </div>
        </section>
    );
};

export default Courses;