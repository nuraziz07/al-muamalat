import React from 'react';
import SectionHead from "@/components/SectionHead";
import VideoCard from "@/components/Cards/VideoCard/VideoCard.tsx";
import {videos} from "@/Constants";

const Media = () => {

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