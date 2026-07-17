export default function BrandMarqueeRow({
                                            brands,
                                            direction = "left",
                                            durationSeconds = 30,
                                        }) {
    // Duplicate the list so the loop feels seamless (no visible jump/reset).
    const loopedBrands = [...brands, ...brands];

    const animationName =
        direction === "left" ? "marquee-left" : "marquee-right";

    return (
        <div className="relative w-full overflow-hidden">
            {/* Fade edges so cards appear to disappear smoothly at the sides */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <div
                className="flex w-max gap-6"
                style={{
                    animation: `${animationName} ${durationSeconds}s linear infinite`,
                }}
            >
                {loopedBrands.map((brand, index) => (
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
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/programs/BrandMarqueerow')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/programs/BrandMarqueerow"!</div>
}
