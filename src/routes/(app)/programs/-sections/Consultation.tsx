import { useState } from "react";

export const workshops = [
    {
        id: 1,
        title: "Workshops and Spiritual Development",
        description:
            "Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.",
    },
    {
        id: 1,
        title: "Workshops and Spiritual Development",
        description:
            "Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.",
    },
    {
        id: 1,
        title: "Workshops and Spiritual Development",
        description:
            "Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.",
    },
];

const Consultation = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl">
            <div className="grid lg:grid-cols-5">

                {/* Left */}
                <div className="bg-[#FDF0DB] px-16 py-14 lg:col-span-3">
                    <h2 className="text-[32px] font-bold text-[#D28527]">
                        {workshops[active].title}
                    </h2>

                    <p className="mt-8 max-w-4xl text-[22px] leading-relaxed text-[#D28527]">
                        {workshops[active].description}
                    </p>

                    <div className="mt-52 flex justify-center gap-4">
                        {workshops.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`h-4 rounded-full transition-all ${
                                    active === index
                                        ? "w-14 bg-[#0A9B93]"
                                        : "w-4 bg-white"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div className="bg-[#F8F7F4] px-12 py-14 lg:col-span-2">
                    <h2 className="text-[30px] font-bold">
                        Free consultation
                    </h2>

                    <p className="mt-4 text-[16px] text-[#152032]">
                        Leave your phone number, and we will reach out to provide you
                        with complete information about our courses.
                    </p>

                    <form className="mt-10 space-y-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-xl border px-5 py-4 outline-none"
                        />

                        <div className="flex items-center rounded-xl border px-5 py-4">
                            <span className="mr-4 text-2xl">🇬🇧</span>

                            <select className="bg-transparent outline-none">
                                <option>+44</option>
                                <option>+998</option>
                                <option>+1</option>
                            </select>

                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="ml-4 flex-1 outline-none"
                            />
                        </div>

                        <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1 h-5 w-5" />

                            <span className="text-[14px] text-[#152032]">
                I agree to the use of my personal information for
                consultation purposes.
              </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#0A9B93] py-4 text-[20px] font-semibold text-white hover:opacity-90"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Consultation;