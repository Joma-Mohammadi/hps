"use client";

import Image from "next/image";

const data = {
    title: "Warmth You Can Feel — Efficiency You Can Trust",
    description: [
        "Enjoy the comfort of evenly distributed heat with underfloor heating from HPS 24/7. We design, install, and maintain both wet (water-based) and electric systems for homes and businesses across West London.",
        "Underfloor heating is one of the most efficient ways to heat your home, operating at lower temperatures while providing superior comfort. Whether you're renovating a single room or building a new property, we'll tailor the perfect system for your needs."
    ],
    services: [
        "Design and installation of underfloor heating systems",
        "Maintenance and fault diagnosis",
        "Retrofitting into existing properties",
        "Professional system balancing",
    ],
    image: "/1.jpg",
};

export default function ServiceDetails() {
    return (
        <section className="bg-gray-100 py-16 md:py-20">
            <div className="w-full mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {data.title}
                        </h2>

                        {data.description.map((text, i) => (
                            <p key={i} className="text-gray-500 text-md mb-6">
                                {text}
                            </p>
                        ))}

                        <h3 className="text-xl font-semibold mb-4">
                            Our Services:
                        </h3>

                        <ul className="space-y-3">
                            {data.services.map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-500 text-md">
                                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative w-full h-75 sm:h-100 lg:h-125 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}