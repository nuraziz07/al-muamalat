import React from 'react';
import SectionHead from "@/components/SectionHead";
import {Swiper, SwiperSlide} from "swiper/react";
import BrandCard from "@/components/Cards/BrandCard";
import {Autoplay, FreeMode} from "swiper/modules";
import {brands} from "@/Constants";

const Partners = () => {

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
                className={'mt-8 sm:mt-12 md:mt-20'}
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