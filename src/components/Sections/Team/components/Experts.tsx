import React, {useRef} from 'react';
import TeamCard from "@/components/Cards/TeamCard";
import {Expert} from '@/assets/Images/Png'
import Slider from "react-slick";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

const Experts = () => {

    const experts = [
        {
            id: 1,
            name: "Dr. Mezbah Uddin Ahmed",
            bio: "Specialist in Internal Medicine with over 15 years of experience in patient care and clinical research.",
            img: Expert,
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            bio: "Experienced Cardiologist dedicated to preventive heart care and advanced cardiovascular treatments.",
            img: Expert,
        },
        {
            id: 3,
            name: "Dr. Michael Brown",
            bio: "Orthopedic Surgeon specializing in joint replacement, sports injuries, and minimally invasive procedures.",
            img: Expert,
        },
        {
            id: 4,
            name: "Dr. Emily Wilson",
            bio: "Pediatrician passionate about child health, nutrition, and developmental care for children of all ages.",
            img: Expert,
        },
        {
            id: 5,
            name: "Dr. David Lee",
            bio: "Neurologist focused on diagnosing and treating disorders of the brain, spine, and nervous system.",
            img: Expert,
        },
        {
            id: 6,
            name: "Dr. Olivia Martinez",
            bio: "Dermatologist with expertise in cosmetic dermatology, skin cancer prevention, and laser treatments.",
            img: Expert,
        },
        {
            id: 7,
            name: "Dr. James Anderson",
            bio: "General Surgeon providing comprehensive surgical care using modern and minimally invasive techniques.",
            img: Expert,
        },
        {
            id: 8,
            name: "Dr. Sophia Taylor",
            bio: "Endocrinologist specializing in diabetes management, thyroid disorders, and hormonal health.",
            img: Expert,
        },
        {
            id: 9,
            name: "Dr. Daniel White",
            bio: "Oncologist committed to personalized cancer treatment plans and compassionate patient support.",
            img: Expert,
        },
        {
            id: 10,
            name: "Dr. Emma Thompson",
            bio: "Obstetrician and Gynecologist dedicated to women's health, pregnancy care, and reproductive medicine.",
            img: Expert,
        },
    ];

    return (
        <div className={'flex w-full mt-10 justify-center items-center gap-10'}>
            <Swiper
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides
                    slidesPerView={3}
                    loop
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 1,
                        scale: 0.85,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: true,
                    }}

            >
                {experts?.map((item, index) => {
                    return (
                        <SwiperSlide className={'team-slide'}>
                            <TeamCard {...item} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};

export default Experts;