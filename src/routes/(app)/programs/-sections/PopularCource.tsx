import Header from './Header'
import {ArrowUpRight, Star} from "lucide-react";
import {Cource1, Cource2, Cource3} from '@/assets/Images/Png'

const PopularCource = () => {

    const courses = [
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
           <Header title={'Most Popular Course'} subtitle={'Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.'} />

            <div className="flex justify-center items-center gap-4 px-20">
                {courses.map((course) => (
                    <CourceCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
};

export default PopularCource;

function CourceCard({ course }){
    return (
        <div className="rounded-[28px] bg-white shadow-md">
            <div className="p-6">
                <div className="relative rounded-3xl py-3 bg-[#FAD0C4]">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="h-[230px] w-full object-contain"
                    />

                    <span className="absolute left-4 top-4 rounded-xl bg-white px-5 py-2 text-[15px] text-[#1B1D1F] font-medium">
            {course.category}
          </span>
                </div>

                <h3 className="mt-6 line-clamp-1 text-[20px] font-medium text-[#363A3D]">
                    {course.title}
                </h3>

                <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            size={22}
                            className={
                                index < course.rating
                                    ? "fill-[#FDB55F] text-[#FDB55F]"
                                    : "fill-[#E5E7EB] text-[#E5E7EB]"
                            }
                        />
                    ))}

                    <span className="ml-3 text-[20px] text-[#52565C]">({course.reviews})</span>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-5">
                <h2 className="text-[23px] font-[500] text-[#1B1D1F]">
                    ${course.price}
                </h2>

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#089C96] text-white transition hover:scale-105">
                    <ArrowUpRight size={26} />
                </button>
            </div>
        </div>
    );
};