"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/img (33).jpeg",
    title: "Street Jacket",
    price: "Rs.6,500",
    old: "Rs.8,500",
    review: "18 reviews",
  },
  {
    id: 2,
    image: "/img (35).jpeg",
    title: "Luxury Hoodie",
    price: "Rs.5,900",
    old: "Rs.7,800",
    review: "12 reviews",
  },
  {
    id: 3,
    image: "/img (34).jpeg",
    title: "Oversized T-Shirt",
    price: "Rs.3,200",
    old: "Rs.4,500",
    review: "9 reviews",
  },
  {
    id: 4,
    image: "/img (29).jpeg",
    title: "Premium Blazer",
    price: "Rs.9,500",
    old: "Rs.12,000",
    review: "22 reviews",
  },
  {
    id: 5,
    image: "/img (30).jpeg",
    title: "Cargo Pants",
    price: "Rs.4,800",
    old: "Rs.6,200",
    review: "14 reviews",
  },
  {
    id: 6,
    image: "/img (31).jpeg",
    title: "Winter Coat",
    price: "Rs.10,500",
    old: "Rs.13,500",
    review: "27 reviews",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#020817] py-16">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-white">
        Featured Fashion Collection
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-12 text-lg">
        Discover premium outfits designed for confidence and attitude.
      </p>

      {/* Fashion Video */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <video
          src="/img (5).mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-[550px] object-cover rounded-3xl shadow-2xl border border-cyan-500"
        />
      </div>

      {/* Moving Product Cards */}
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-[marquee_35s_linear_infinite]">

          {[...products, ...products].map((item, index) => (
            <div
              key={index}
              className="w-[330px] bg-[#111827] rounded-3xl overflow-hidden border border-cyan-500/20 shadow-lg flex-shrink-0 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">

                <span className="absolute top-4 left-4 bg-cyan-500 text-black px-3 py-1 rounded-lg font-semibold z-10">
                  NEW
                </span>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="w-full h-[420px] object-cover hover:scale-110 transition-transform duration-700"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  Attitude Boy Fashion
                </p>

                <div className="flex justify-center items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}

                  <span className="text-gray-400 ml-2">
                    {item.review}
                  </span>
                </div>

                <div className="flex justify-center items-center gap-3 mt-4">

                  <span className="text-cyan-400 text-2xl font-bold">
                    {item.price}
                  </span>

                  <del className="text-gray-500">
                    {item.old}
                  </del>

                  <span className="bg-cyan-500 text-black text-sm px-3 py-1 rounded-full font-semibold">
                    -20%
                  </span>

                </div>

                <button className="w-full mt-5 bg-cyan-500 text-black py-3 rounded-xl hover:bg-cyan-400 transition duration-300 font-bold">
                  Shop Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}