import React from 'react';
import TeamCard from "@/components/Cards/TeamCard";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import styles from '../Team.module.scss';
import {experts} from "@/Constants";

const Experts = () => {

    const vibrate = (pattern = 10) => {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    };
 
    return (
        <section className={'mt-15'}>
            <div className={'w-full mt-10'}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides
                    slidesPerView={'auto'}
                    loop
                    grabCursor
                    speed={700}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 380,
                        modifier: 1,
                        scale: 1,
                        slideShadows: false,
                    }}
                    onTouchStart={() => vibrate(8)}
                    onSlideChangeTransitionStart={() => vibrate(15)}
                    autoplay={{
                
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: styles['experts-bullet'],
                        bulletActiveClass: styles['experts-bullet--active'],
                        renderBullet: (index, bulletClass) =>
                            `<span class="${bulletClass}"></span>`,
                    }}
                    className={styles['experts-swiper-inner']}
                >
                    {experts?.map((item) => (
                        <SwiperSlide key={item.id} className={styles['team-slide']}>
                            <TeamCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Experts;