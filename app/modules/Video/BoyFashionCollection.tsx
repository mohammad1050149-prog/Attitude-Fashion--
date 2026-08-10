"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Luxury Blazer",
    category: "Luxury Collection",
    price: "$299",
    image: "/img (37).jpeg",
    hoverImage: "/img (36).jpeg",
  },
  {
    id: 2,
    title: "Royal Kurta Style",
    category: "Traditional Wear",
    price: "$179",
    image: "/img (38).jpeg",
    hoverImage: "/img (39).jpeg",
  },
 
  {
    id: 3,
    title: "Classic Black Look",
    category: "Classic Collection",
    price: "$199",
    image: "/img (40).jpeg",
    hoverImage: "/img (41).jpeg",
  },
  {
    id: 4,
    title: "Smart Casual",
    category: "Casual Wear",
    price: "$129",
    image: "/img (43).jpeg",
    hoverImage: "/img (42).jpeg",
  },
  {
    id: 5,
    title: "Winter Jacket",
    category: "Winter Collection",
    price: "$229",
    image: "/img (44).jpeg",
    hoverImage: "/img (45).jpeg",
  },
  {
    id: 6,
    title: "Urban Attitude",
    category: "Urban Fashion",
    price: "$159",
    image: "/img (46).jpeg",
    hoverImage: "/img (47).jpeg",
  },
 
];

export default function BoyFashionCollection() {
//  
const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#020b12] to-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="text-cyan-400 uppercase tracking-[7px] font-semibold text-sm">
            Featured Collection
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
            Attitude Boy{" "}
            <span className="text-cyan-400">
              Fashion
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Discover premium men's fashion designed for confidence,
            attitude and modern style. Explore luxury outfits, streetwear,
            traditional looks and exclusive collections.
          </p>

        </div>


        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {products.map((item, index) => (

            <div
              key={item.id}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="
                group relative overflow-hidden
                rounded-[30px]
                bg-[#071015]
                border border-cyan-500/20
                transition-all duration-500
                hover:-translate-y-3
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)]
              "
            >

              {/* Image */}
              <div className="relative h-[520px] overflow-hidden">

                <Image
                  src={
                    hovered === item.id
                      ? item.hoverImage
                      : item.image
                  }
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-all duration-700
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "></div>


                {/* Category */}
                <div className="
                  absolute top-5 left-5
                  bg-cyan-500
                  text-black
                  px-4 py-2
                  rounded-full
                  text-sm
                  font-bold
                  tracking-wide
                ">
                  {item.category}
                </div>


                {/* New Badge */}
                {index >= 6 && (
                  <div className="
                    absolute top-5 right-5
                    bg-white
                    text-black
                    px-3 py-1
                    rounded-full
                    text-xs
                    font-bold
                  ">
                    NEW
                  </div>
                )}


                {/* Hover Button */}
                <div className="
                  absolute inset-0
                  flex items-center justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                ">

                  <button className="
                    px-8 py-3
                    rounded-full
                    bg-cyan-400
                    text-black
                    font-bold
                    hover:bg-white
                    hover:scale-105
                    transition duration-300
                  ">
                    Explore Style
                  </button>

                </div>

              </div>


              {/* Content */}
              <div className="p-7">

                <h3 className="
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-cyan-400
                  transition
                ">
                  {item.title}
                </h3>


                <p className="text-gray-400 mt-3 leading-7">
                  Premium attitude fashion created for modern men
                  who want confidence, class and style.
                </p>


                <div className="
                  flex justify-between
                  items-center
                  mt-6
                ">

                  <span className="
                    text-cyan-400
                    text-3xl
                    font-bold
                  ">
                    {item.price}
                  </span>


                  <button className="
                    px-5 py-2
                    rounded-full
                    border border-cyan-400
                    text-cyan-400
                    hover:bg-cyan-400
                    hover:text-black
                    transition-all duration-300
                  ">
                    Shop Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}