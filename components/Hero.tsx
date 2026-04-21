"use client";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, } from "react-icons/fa";
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
        <section className="relative w-full min-h-screen overflow-hidden flex items-start">

            {/* Background */}
            <Image
                src="/2.jpg"
                alt="Underfloor heating"
                fill
                priority
                className="object-cover object-top brightness-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-900/80 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white w-full">


                <div className="max-w-2xl -ml-2.5 sm:-ml-5 md:-ml-15 lg:-ml-25">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
                        <CiLocationOn className="w-5 h-5" />
                        {heroContent.badge}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-16 mb-4">
                        {heroContent.title}
                        <br />
                        <span className="text-orange-500">
                            {heroContent.highlight}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-200 max-w-xl mb-8">
                        {heroContent.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-200 mb-8">
                        <div className="flex items-center gap-2">
                            <LuShield className="text-orange-400 w-5 h-5" />
                            Certified Engineers
                        </div>
                        <div className="flex items-center gap-1">
                            <WiThermometerExterior className="text-orange-400 w-6 h-6" />
                            Wet & Electric Systems
                        </div>
                    </div>


                    <div className="flex gap-3 mb-6 flex-nowrap sm:flex-wrap">

                        <button className=" flex items-center justify-center gap-2 hover:cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold shadow text-sm sm:text-base">
                            <FaPhoneAlt className="w-4 h-4" />
                            Call {heroContent.phone}
                        </button>

                        <button className=" flex items-center justify-center gap-2 hover:cursor-pointer border-2 border-gray-400  text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 text-sm sm:text-base">
                            <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                            Get a Free Quote
                        </button>

                    </div>

                    {/* Notice */}
                    <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 mt-5 px-4 py-2 rounded-lg text-sm">
                        <span className="w-2 h-2 bg-green-400  rounded-full "></span>
                        {heroContent.notice}
                    </div>

                </div>
            </div>
        </section>
    );
}