import React from 'react';
import cls from 'classnames';

export interface CourseStatusCardProps {
    id: string | number;
    title: string;
    image: string;
    isPaid: boolean;
    onPay?: () => void;
}

const CourseStatusCard = ({title, image, isPaid, onPay}: CourseStatusCardProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100">
            <div className="aspect-[4/3] w-full bg-gray-100">
                <img src={image} alt={title} className="h-full w-full object-cover"/>
            </div>

            <div className="p-5">
                <h4 className="mb-4 text-lg font-bold leading-snug text-gray-900">
                    {title}
                </h4>

                <div className="flex items-center gap-3">
                    <span
                        className={cls(
                            'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                            isPaid ? 'bg-emerald-600' : 'bg-red-500'
                        )}
                    >
                        {isPaid ? 'Paid' : 'Unpaid'}
                    </span>

                    {!isPaid && (
                        <button
                            type="button"
                            onClick={onPay}
                            className="flex-1 rounded-lg bg-[#3b8570] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b5a]"
                        >
                            Make a payment
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseStatusCard;