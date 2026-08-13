import React, {useRef} from 'react';
import TeamCard from "@/components/Cards/TeamCard";
import {Expert} from '@/assets/Images/Png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation, EffectCoverflow, Autoplay} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import SectionHead from '@/components/SectionHead';
import styles from '../Team.module.scss';
import cls from 'classnames'
import { fa } from 'zod/v4/locales';


const Experts = () => {
 
    const experts = [
        {
            id: 1,
            name: "Dr. Mezbah Uddin Ahmed",
            bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            img: Expert,
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            bio: "With over a decade of experience in Islamic finance, Sarah specializes in Shariah-compliant investment structuring and regulatory advisory for financial institutions.",
            img: Expert,
        },
        {
            id: 3,
            name: "Dr. Michael Brown",
            bio: "Michael focuses on Sukuk issuance and capital markets, helping institutions design ethical financial products aligned with international standards.",
            img: Expert,
        },
        {
            id: 4,
            name: "Dr. Emily Wilson",
            bio: "Emily leads training and professional development programs, delivering practical Islamic finance education to banks and financial professionals.",
            img: Expert,
        },
        {
            id: 5,
            name: "Dr. David Lee",
            bio: "David advises Islamic banks on strategy, product development, and operational excellence rooted in Shariah principles.",
            img: Expert,
        },
        {
            id: 6,
            name: "Dr. Olivia Martinez",
            bio: "Olivia specializes in Takaful advisory, guiding operators through product structuring and Shariah-compliant governance frameworks.",
            img: Expert,
        },
    ];

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