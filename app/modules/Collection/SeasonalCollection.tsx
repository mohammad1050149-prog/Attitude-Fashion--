"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const collections = [
  {
    id: 1,
    title: "Spring Collection",
    image: "/img (48).png",
    description:
      "Fresh colors and lightweight styles for the perfect spring look.",
  },
  {
    id: 2,
    title: "Summer Collection",
    image: "/img (51).png",
    description:
      "Stay cool with breathable fabrics and trendy summer outfits.",
  },
  {
    id: 3,
    title: "Autumn Collection",
    image: "/img (49).png",
    description:
      "Warm tones and stylish layers inspired by the autumn season.",
  },
  {
    id: 4,
    title: "Winter Collection",
    image: "/img (50).png",
    description:
      "Premium jackets, hoodies, and coats for a bold winter style.",
  },
];

export default function SeasonalCollection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="uppercase tracking-[6px] font-semibold text-cyan-400">
            Seasonal Collection
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Fashion For{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Every Season
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Discover our latest seasonal collections designed to keep you
            stylish, confident and comfortable throughout the year.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.05] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Season Badge */}
              <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-black">
                New Season
              </span>

              {/* Wishlist */}
              <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition duration-300 hover:bg-cyan-400 hover:text-black">
                <FaHeart size={14} />
              </button>

              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

                <Link
                  href="/collection"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  Explore Collection
                  <FaArrowRight />
                </Link>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}