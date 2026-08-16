import React from 'react';
import SectionHead from "@/components/SectionHead";
import VideoCard from "@/components/Cards/VideoCard/VideoCard.tsx";
import {videos} from "@/Constants";

const Media = () => {

    return (
        <section className={'pb-10 mt-12 flex-col justify-center sm:mt-16 md:mt-20 lg:mt-30'}>
            <SectionHead title={'Our Media'} subtitle={'Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.'} />

            <div className={'w-full'}>
                <div className={'grid w-full grid-cols-1 justify-items-center gap-5 px-4 pb-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8'}>
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