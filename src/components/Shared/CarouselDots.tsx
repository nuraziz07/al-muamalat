type CarouselDotsProps = {
    total?: number;
    active?: number;
};

export default function CarouselDots({total = 4, active = 0}: CarouselDotsProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({length: total}).map((_, index) => (
                <span
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                        index === active ? "w-8 bg-teal-600" : "w-2 bg-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}
