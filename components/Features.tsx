import { FaCheck } from "react-icons/fa6";

const features = [
  "Experts in both wet and electric systems",
  "Compatible with modern smart thermostats",
  "Neat, professional installation",
  "Local West London specialists",
  "Energy-efficient design for reduced bills",
  "Ideal for new builds and renovations",
  "Reliable aftercare and servicing",
];

export default function FeaturesSection() {
  const mid = Math.ceil(features.length / 2);
  const left = features.slice(0, mid);
  const right = features.slice(mid);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-x-24">

        {/* ستون چپ */}
        <div className="space-y-6">
          {left.map((item, index) => (
            <FeatureItem key={index} text={item} />
          ))}
        </div>

        {/* ستون راست */}
        <div className="space-y-6">
          {right.map((item, index) => (
            <FeatureItem key={index} text={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center">
        <FaCheck className="text-green-400" />
      </div>
      <p className="text-[#1e2b44] font-semibold">{text}</p>
    </div>
  );
}