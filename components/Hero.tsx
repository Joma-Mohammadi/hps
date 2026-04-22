"use client";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LuShield } from "react-icons/lu";
import { WiThermometerExterior } from "react-icons/wi";
import Image from "next/image";

const heroContent = {
    badge: "Serving All of West London",
    title: "Underfloor Heating",
    highlight: "Installation & Repair",
    description:
        "Warmth you can feel — efficiency you can trust. Expert installation of wet and electric underfloor heating systems for homes and businesses across West London.",
    phone: "07852 121 346",
    notice: "Free surveys available — Get your quote today",
};

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen lg:min-h-205 2xl:min-h-225 overflow-hidden flex items-center">
            <Image
                src="/2.jpg"
                alt="Underfloor heating"
                fill
                priority
                className="object-cover object-top brightness-50"
            />

            <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-900/80 to-transparent " />

            <div className="m-auto relative z-10 max-w-350 xl:max-w-375 2xl:max-w-400 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 text-white w-full">
                <div className="max-w-xl md:max-w-2xl xl:max-w-3xl ml-0 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-20 2xl:ml-24 flex flex-col justify-center gap-5 md:gap-6">
                    <div className="inline-flex max-w-fit items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-2 rounded-full text-xs sm:text-sm mb-5">
                        <CiLocationOn className="w-4 h-4 sm:w-5 sm:h-5" />
                        {heroContent.badge}
                    </div>

                    <h1 className="text-[30px] leading-[1.15] sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-0">
                        <span className="block whitespace-nowrap">{heroContent.title}</span>
                        <span className="block text-orange-500 whitespace-nowrap">{heroContent.highlight}</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-200 max-w-xl mb-0">
                        {heroContent.description}
                    </p>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm text-gray-200 mb-0">
                        <div className="flex items-center gap-2">
                            <LuShield className="text-orange-400 w-5 h-5" />
                            Certified Engineers
                        </div>
                        <div className="flex items-center gap-1">
                            <WiThermometerExterior className="text-orange-400 w-6 h-6" />
                            Wet & Electric Systems
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mb-0">
                        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold shadow text-sm sm:text-base">
                            <FaPhoneAlt className="w-4 h-4" />
                            Call {heroContent.phone}
                        </button>

                        <button className="w-full md:w-auto flex items-center justify-center gap-2 border-2 border-gray-400 text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 text-sm sm:text-base">
                            <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                            Get a Free Quote
                        </button>
                    </div>

                    <div className="inline-flex max-w-fit items-center gap-2 bg-green-600/20 text-green-400 mt-4 px-4 py-2 rounded-lg text-xs sm:text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        {heroContent.notice}
                    </div>
                </div>
            </div>
        </section>
    );
}