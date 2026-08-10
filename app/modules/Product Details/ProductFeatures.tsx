"use client";

import {
  FaCheckCircle,
  FaTshirt,
  FaShippingFast,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function ProductFeatures() {
  const features = [
    {
      icon: <FaTshirt size={35} />,
      title: "Premium Cotton",
      desc: "Made from 100% heavyweight cotton for superior comfort and durability.",
    },
    {
      icon: <FaCheckCircle size={35} />,
      title: "Perfect Fit",
      desc: "Relaxed oversized fit designed for modern streetwear fashion.",
    },
    {
      icon: <FaShippingFast size={35} />,
      title: "Fast Delivery",
      desc: "Free shipping with quick delivery on every order nationwide.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Quality Guarantee",
      desc: "Premium stitching and long-lasting fabric with trusted quality.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="uppercase tracking-[6px] font-semibold text-cyan-400">
            Why You'll Love It
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Product{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Every piece is carefully designed with premium materials,
            comfort, durability and timeless street style.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.05] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

              {/* Learn More */}
              <button className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 hover:gap-3">
                Learn More
                <FaArrowRight className="text-sm" />
              </button>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}