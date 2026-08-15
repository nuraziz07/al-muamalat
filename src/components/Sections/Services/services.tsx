import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHead from '@/components/SectionHead';
import ServiceCard from '@/components/Cards/ServiceCard';
import {services} from "@/Constants";

const Services = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return (
        <section className="mt-15">
        <SectionHead title="Our services" subtitle="Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions."/>

        <div className="relative px-30 pb-15">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={28}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {services
                    .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
                    .map(({ id, icon, title, description }) => (
                        <SwiperSlide key={id} className="h-auto py-1">
                            <ServiceCard number={id} icon={icon} title={title} description={description} />
                        </SwiperSlide>
                    ))}
            </Swiper>

            <button
                type="button"
                onClick={handlePrev}
                disabled={!swiperRef.current?.params.loop && isBeginning}
                aria-label="Previous"
                className="absolute left-10 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                type="button"
                onClick={handleNext}
                disabled={!swiperRef.current?.params.loop && isEnd}
                aria-label="Next"
                className="absolute right-10 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    </section>
    );
};

export default Services;