import BrandMarqueeRow from "@/routes/(app)/(home)/-sections/-partners/-components/BrandMarqueerow";
import {Partner_American, Partner_West, Partner_Klarna, Partner_Skrill} from '@/assets/Images/Png'

const Partners = () => {

    const brands = [
        { name: "Stripe", logoSrc: Partner_Skrill },
        { name: "American Express", logoSrc: Partner_American},
        { name: "Western Union", logoSrc: Partner_West },
        { name: "Klarna", logoSrc: Partner_Klarna },
        { name: "Skrill", logoSrc: Partner_Skrill },
    ];

    return (
        <div>
            <div>
                <section className="w-full bg-white py-16">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6">
                        {/* Row 1: scrolls left */}
                        <BrandMarqueeRow brands={brands} direction="left" durationSeconds={32} />

                        {/* Row 2: scrolls right (opposite direction), reversed order for variety */}
                        <BrandMarqueeRow
                            brands={[...brands].reverse()}
                            direction="right"
                            durationSeconds={28}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Partners;