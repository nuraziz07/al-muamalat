import React from 'react';

const ServiceCard = ({course}) => {
    return (
        <div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="relative">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="h-64 w-full object-cover"
                    />

                    <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-[#E5F4F2] px-4 py-2 shadow">
                        <div className="flex">
                            {course.avatars.map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt=""
                                    className={`h-10 w-10 rounded-full border-2 border-white ${
                                        index !== 0 ? "-ml-3" : ""
                                    }`}
                                />
                            ))}
                        </div>

                        <span className="ml-3 font-medium">
            + {course.students} students
          </span>
                    </div>
                </div>

                <div className="p-6 pt-10">
                    <p className="text-sm text-gray-500">
                        Start date : {course.startDate}
                    </p>

                    <h3 className="mt-4 text-[24px] font-bold text-[#009688]">
                        {course.title}
                    </h3>

                    <p className="mt-3 text-[#686868] font-normal text-[17px] leading-8">
                        {course.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                        <div>
            <span className="text-[30px] font-bold text-[#FD661F]">
              ${course.price}
            </span>

                            <span className="ml-3 text-[22px] text-[#686868] line-through">
              ${course.oldPrice}
            </span>
                        </div>

                        <button className="rounded-xl bg-[#0A9B93] px-6 py-3 text-[16px] text-white font-semibold hover:opacity-90">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;