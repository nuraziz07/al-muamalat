import React from 'react';
import cls from 'classnames';

export type CourseItem = {
    id: string;
    file: string;
    price: number;
    name_en: string;
    name_uz: string;
    module_id: number | null,
    description_uz: string;
    description_en: string;
}

export interface CourseStatusCardProps {
    id: string | number;
    image?: string;
    isPaid: boolean | 'created' | 'paid';
    onPay?: () => void;
    title?: string;
    onLearnMore?: () => void,
    course?: CourseItem[]
}

const PurchasedCourseCard = ({ image, isPaid, onPay, title, onLearnMore, course}: CourseStatusCardProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100">
            <div className="aspect-[4/3] w-full bg-gray-100">
                <img src={image} alt={title} className="h-full w-full object-cover"/>
            </div>

            <div className="p-5">
                <h4 className="mb-4 text-lg font-bold leading-snug text-gray-900">
                    {course?.map(item => item.name_uz)}
                </h4>
            </div>

            <div className={'flex items-center justify-between'}>
                <div className="flex items-center gap-3">
                    <span
                        className={cls(
                            'rounded-lg px-4 py-2 text-sm font-semibold text-white',
                            isPaid === 'paid' ? 'bg-emerald-600' : 'bg-red-500'
                        )}
                    >
                        {isPaid === 'paid' ? 'Paid' : 'Unpaid'}
                    </span>

                </div>

                {isPaid === 'created' && (
                    <button
                        type="button"
                        onClick={onPay}
                        className="rounded-lg bg-[#3b8570] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b5a]"
                    >
                        Make a payment
                    </button>
                ) || <button
                    type="button"
                    onClick={onLearnMore}
                    className="rounded-lg bg-[#3b8570] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2f6b5a]"
                >
                    Learn more
                </button>}
            </div>

        </div>
    );
};

export default React.memo(PurchasedCourseCard);


