import {Service} from "@/assets/Images/Png";

interface CourseCardProps {
    image: string;
    title: string;
    price: number;
    onLearnMore?: () => void;
}

const CourseCard = ({image, title, price, onLearnMore}: CourseCardProps) => {

    // console.log(image?.images?.[0]?.src)

    return (
        <div className="w-full max-w-[525px] overflow-hidden rounded-[14px] border border-[#d9e0e8] bg-white">
            {/* Image */}
            <div className="h-[200px] w-full overflow-hidden border-b border-[#d9e0e8] sm:h-[260px] md:h-[320px]">
                <img
                    src={Service}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
                <h3 className="text-lg font-semibold leading-[1.45] text-[#182132] sm:text-xl md:text-[22px]">
                    {title}
                </h3>

                <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <p className="text-lg font-semibold leading-none text-[#182132] sm:text-xl md:text-[21px]">
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