"use client"
import { CiClock2 } from "react-icons/ci";
import { AiOutlineTool } from "react-icons/ai";
import { RiSpeedUpLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

const cards = [
  {
    id: 1,
    title: "Certified Engineers",
    desc: "Fully qualified and experienced installers",
    icon: GoShieldCheck,
  },
  {
    id: 2,
    title: "Energy Efficient",
    desc: "Save up to 25% on heating bills",
    icon: RiSpeedUpLine,
  },
  {
    id: 3,
    title: "Wet & Electric",
    desc: "Both system types expertly installed",
    icon: AiOutlineTool,
  },
  {
    id: 4,
    title: "Reliable Aftercare",
    desc: "Ongoing maintenance and support",
    icon: CiClock2,
  },
]

export default function Features() {
  return (
    <section className="bg-[#f3f4f6] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="text-center">
          <h2 className="text-2xl leading-tight font-black tracking-[-0.03em] text-[#122544] lg:text-4xl">
            Why Choose HPS 24/7 for Underfloor Heating?
          </h2>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className="group rounded-[22px] border border-gray-300 bg-white px-6 py-9 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#eef2f7] transition group-hover:bg-[#122544]">
                  <Icon className="text-[26px] text-[#163d79] transition group-hover:text-white" />
                </div>

                {/* title */}
                <h3 className="mt-6 text-lg font-bold text-[#122544]">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="mt-3 text-md leading-normal text-[#62728f]">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}