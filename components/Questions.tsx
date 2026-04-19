"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

const faqItems = [
    {
        id: 1,
        question: "What types of underfloor heating do you install?",
        answer: "We install both wet and electric underfloor heating systems for homes and businesses.",
    },
    {
        id: 2,
        question: "Can underfloor heating be installed in an existing home?",
        answer: "Yes, we provide retrofit solutions suitable for existing floors and renovations.",
    },
    {
        id: 3,
        question: "Is underfloor heating more energy efficient than radiators?",
        answer: "Yes. It runs at lower temperatures while distributing heat more evenly.",
    },
    {
        id: 4,
        question: "How long does installation take?",
        answer: "Installation time depends on the property size and flooring type.",
    },
    {
        id: 5,
        question: "What areas in West London do you cover?",
        answer: "We cover all West London and nearby surrounding locations.",
    },
]

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null)

    return (
        <section className="bg-[#0b438f] py-12 md:py-16">
            <div className=" max-w-290 px-4">
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-[-0.03em] ">
                    Frequently Asked Questions
                </h2>

                <div className="mt-10 space-y-5">
                    {faqItems.map((item) => {
                        const isOpen = openId === item.id

                        return (
                            <div key={item.id} className="rounded-[14px] bg-[#4a4d73] overflow-hidden">
                                <button
                                    onClick={() => setOpenId(isOpen ? null : item.id)}
                                    className="hover:cursor-pointer w-full flex items-center justify-between px-8 md:px-10 py-4 text-left text-white font-semibold text-sm md:text-md"
                                >
                                    <span>{item.question}</span>
                                    <FaChevronDown className={`text-lg shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="px-8 md:px-10 pb-6 text-white/90 text-[17px] leading-7">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
