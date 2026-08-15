import React, {useRef, useState} from 'react';
import {Play, Pause} from 'lucide-react';
import styles from './VideoCard.module.scss';
import cls from "classnames";

interface VideoCardProps {
    poster: string;
    videoSrc: string;
    title: string;
}

const VideoCard = ({poster, videoSrc, title}: VideoCardProps) => {
    const [hasStarted, setHasStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleStart = () => {
        setHasStarted(true);
        requestAnimationFrame(() => {
            videoRef.current?.play();
        });
    };

    const handleToggle = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    return (
        <div className={styles['video-card']}>
            {hasStarted && (
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className={styles['video-card__video']}
                    playsInline
                    onClick={handleToggle}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                />
            )}

            {!hasStarted && (
                <img
                    src={poster}
                    alt={title}
                    className={styles['video-card__poster']}
                />
            )}

            {!isPlaying &&  (
                <>
                    <div className={styles['video-card__overlay']} />
                    <h3 className={styles['video-card__title']}>
                        {title}
                    </h3>
                </>
            )}

            <button
                type="button"
                onClick={hasStarted ? handleToggle : handleStart}
                className={styles['video-card__play-btn']}
            >
                {isPlaying ? (
                    <Pause className={styles['video-card__play-icon']} fill="white" />
                ) : (
                    <Play className={styles['video-card__play-icon']} fill="white" />
                )}
            </button>
        </div>
    );
};

export default VideoCard;