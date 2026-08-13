import React, {useEffect, useRef} from 'react';
import BrandRow from "@/components/Sections/Partners/components/BrandRow.tsx";
import SectionHead from "@/components/SectionHead";
import {Swiper, SwiperSlide} from "swiper/react";
import {Partner_American, Partner_Klarna, Partner_Skrill, Partner_West, Amazon} from "@/assets/Images/Png";
import BrandCard from "@/components/Cards/BrandCard";
import {Autoplay, FreeMode} from "swiper/modules";

const Partners = () => {

    const brands = [
        {name: "Stripe", logoSrc: Partner_Skrill},
        {name: "American Express", logoSrc: Partner_American},
        {name: "Western Union", logoSrc: Partner_West},
        {name: "Klarna", logoSrc: Partner_Klarna},
        {name: "Amazon", logoSrc: Amazon},
    ];

    const loopBrands = [...brands, ...brands]

    return (
        <section>
            <SectionHead title={'Our Partners and Clients'}/>

            <Swiper
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                slidesPerView={'auto'}
                modules={[Autoplay, FreeMode]}
                spaceBetween={20}
                speed={1500}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
            >
                {loopBrands?.map((item) => {
                    return (
                        <SwiperSlide className={'w-auto!'}>
                            <BrandCard img={item.logoSrc} key={item.name}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                freeMode={{
                    enabled: true,
                    momentum: false,
                }}
                slidesPerView={'auto'}
                modules={[Autoplay, FreeMode]}
                spaceBetween={20}
                speed={1500}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                className={'mt-20'}
            >
                {loopBrands?.reverse().map((item) => {
                    return (
                        <SwiperSlide className={'w-auto!'}>
                            <BrandCard img={item.logoSrc} key={item.name}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Partners;