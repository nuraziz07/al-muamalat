interface CourseCardProps {
    image: string;
    title: string;
    price: number;
    onLearnMore?: () => void;
}

const CourseCard = ({image, title, price, onLearnMore}: CourseCardProps) => {
    return (
        <div className="w-full max-w-[525px] overflow-hidden rounded-[14px] border border-[#d9e0e8] bg-white">
            {/* Image */}
            <div className="h-[320px] w-full overflow-hidden border-b border-[#d9e0e8]">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="px-8 py-6">
                <h3 className="text-[22px] font-semibold leading-[1.45] text-[#182132]">
                    {title}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-6">
                    <p className="text-[21px] font-semibold leading-none text-[#182132]">
                        {(1680000).toLocaleString("en-US")} soums
                    </p>

                    <button
                        type="button"
                        onClick={onLearnMore}
                        className="
                            shrink-0
                            rounded-[13px]
                            bg-[#147d76]
                            px-5
                            py-3
                            text-[16px]
                            font-medium
                            text-white
                            transition
                            hover:bg-[#106d67]
                            active:scale-[0.98]
                        "
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;