import React from 'react';
import {Star, StarHalf} from "lucide-react";

export interface RatingProps {
    ratingStars: number[]
}

const Rating = ({ratingStars}: RatingProps) => {

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-white">
                {ratingStars.map((star) => (
                    <Star key={star} className="h-4 w-4 fill-white" />
                ))}
                <StarHalf className="h-4 w-4 fill-white" />
            </div>
            <span className="text-sm text-white/90">(10k+ Reviews)</span>
        </div>
    );
};

export default Rating;