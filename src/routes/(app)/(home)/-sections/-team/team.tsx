import TeamMemberCard from "./-components/TeamMemberCard";
import CarouselDots from "@/components/Shared/CarouselDots";

const teamMembers = [
    {
        name: "Dr. Mezbah Uddin Ahmed",
        role: "Chief Shariah Advisor",
        bio: "Over 20 years of experience in Islamic finance and Shariah advisory. Former consultant to leading Islamic banks across Southeast Asia and the Middle East.",
        initials: "MA",
        color: "from-teal-400 to-teal-600",
    },
    {
        name: "Dr. Aisha Rahman",
        role: "Director of Education",
        bio: "Specializes in Islamic economics and financial ethics. Leads curriculum development and training programs for professionals and students worldwide.",
        initials: "AR",
        color: "from-emerald-400 to-emerald-600",
    },
    {
        name: "Omar Farooq",
        role: "Head of Consulting",
        bio: "Expert in Islamic capital markets and sukuk structuring. Advises institutions on Shariah-compliant product development and regulatory compliance.",
        initials: "OF",
        color: "from-cyan-400 to-cyan-600",
    },
];

export default function TeamSection() {
    const activeIndex = 0;
    const activeMember = teamMembers[activeIndex];

    return (
        <section className="w-full overflow-hidden bg-white py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Our Expert Team
                </h2>
                <p className="text-lg leading-relaxed text-gray-500">
                    Our team consists of seasoned professionals with extensive
                    experience in Islamic finance and management. Each member brings a
                    unique set of skills and expertise.
                </p>
            </div>

            <div className="relative mt-14 flex items-center justify-center">
                <div className="pointer-events-none absolute left-0 hidden w-1/4 -translate-x-1/2 opacity-40 blur-sm md:block">
                    <div className="h-96 rounded-3xl bg-teal-50" />
                </div>

                <div className="relative z-10 w-full max-w-4xl px-4">
                    <TeamMemberCard
                        name={activeMember.name}
                        role={activeMember.role}
                        bio={activeMember.bio}
                        initials={activeMember.initials}
                        color={activeMember.color}
                    />
                </div>

                <div className="pointer-events-none absolute right-0 hidden w-1/4 translate-x-1/2 opacity-40 blur-sm md:block">
                    <div className="h-96 rounded-3xl bg-teal-50" />
                </div>
            </div>

            <div className="mt-10">
                <CarouselDots total={teamMembers.length} active={activeIndex} />
            </div>
        </section>
    );
}
