import React from 'react';
import SectionHead from "@/components/SectionHead";
import VideoCard from "@/components/Cards/VideoCard/VideoCard.tsx";
import first from '../../../assets/firs.mp4'
import {Poster_1, Poster_2, Poster_3} from '../../../assets/Images/Png'
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const Media = () => {

    const videos = [
        {
            key: 1,
            title: 'Why Islamic finance?',
            src: first,
            poster: Poster_1,
        },
        {
            key: 2,
            title: 'What makes Islamic finance unique?',
            src: first,
            poster: Poster_2,
        },
        {
            key: 3,
            title: 'How is risk managed in Islamic finance?',
            src: first,
            poster: Poster_3,
        },
    ]
    return (
        <section className={'pb-10 mt-30 flex-col justify-center'}>
            <SectionHead title={'Our Media'} subtitle={'Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.'} />

            <div className={'w-full'}>
                <div className={'flex w-full justify-center items-center gap-5 pb-4'}>
                    {videos?.map((item) => {
                        return (
                            <VideoCard key={item.key}
                                poster={item.poster}
                                videoSrc={item.src}
                                title={item.title}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Media;