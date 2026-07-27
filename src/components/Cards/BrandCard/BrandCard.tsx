import React from 'react';
import cls from "classnames";

interface BrandRowProps {
    name: string;
    logoSrc: string
}

type BrandCardProps = {
    brands: BrandRowProps[];
    direction: 'right' | 'left';
    duration: number;
}

const BrandCard = ({brands, direction, duration}: BrandCardProps) => {

    const animationName =
        direction === "left" ? "brand-left" : "brand-right";

    const loopedBrand = [...brands, ...brands, ...brands]

    return (
        <div className="relative w-full overflow-hidden">

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className={cls('flex w-max gap-6 animate')} style={{
                animation: `${animationName} ${duration}s linear infinite`,
            }}>
                {loopedBrand?.map((brand, index) => (
                    <div
                        key={`${brand.name}-${index}`}
                        className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl bg-gray-50 px-8 py-6"
                    >
                        <img
                            src={brand.logoSrc}
                            alt={brand.name}
                            className="max-h-10 w-auto max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes brand-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes brand-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default BrandCard;