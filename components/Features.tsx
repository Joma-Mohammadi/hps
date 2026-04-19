import { FaCheck } from "react-icons/fa6";
export default function FeaturesSection() {
  const features = [
    "Experts in both wet and electric systems",
    "Compatible with modern smart thermostats",
    "Neat, professional installation",
    "Local West London specialists",
    "Energy-efficient design for reduced bills",
    "Ideal for new builds and renovations",
    "Reliable aftercare and servicing",
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-x-24 gap-y-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center ">
              <FaCheck className="text-green-400" />
            </div>

            <p className="text-[#1e2b44] text-md md:text-md font-semibold">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}