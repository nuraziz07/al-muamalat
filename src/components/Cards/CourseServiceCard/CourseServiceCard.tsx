import React from 'react';
import {ServivesProps} from "@/routes/(app)/programs/-sections/Services/Services.tsx";

interface CourseServiceCardProps {
    course: ServivesProps[]
}

const CourseServiceCard = ({ course }: CourseServiceCardProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {course?.map((item, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[420px] rounded-3xl bg-white shadow-lg overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-64 w-full object-cover"
                            />

                            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-[#E5F4F2] px-4 py-2 shadow">
                                <div className="flex">
                                    {item.avatars.map((avatar, avatarIndex) => (
                                        <img
                                            key={avatarIndex}
                                            src={avatar}
                                            alt=""
                                            className={`h-10 w-10 rounded-full border-2 border-white ${
                                                avatarIndex !== 0 ? "-ml-3" : ""
                                            }`}
                                        />
                                    ))}
                                </div>

                                <span className="ml-3 font-medium">
                  + {item.students} students
                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pt-10">
                            <p className="text-sm text-gray-500">
                                Start date : {item.startDate}
                            </p>

                            <h3 className="mt-4 text-2xl font-bold text-[#009688]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-[#686868] leading-8">
                                {item.description}
                            </p>

                            <div className="mt-8 flex items-center justify-between">
                                <div>
                  <span className="text-3xl font-bold text-[#FD661F]">
                    ${item.price}
                  </span>

                                    <span className="ml-3 text-xl text-[#686868] line-through">
                    ${item.oldPrice}
                  </span>
                                </div>

                                <button className="rounded-xl bg-[#0A9B93] px-6 py-3 text-white font-semibold hover:opacity-90">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseServiceCard;