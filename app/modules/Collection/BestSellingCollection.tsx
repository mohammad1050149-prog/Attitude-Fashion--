"use client";

import Image from "next/image";
import { FaStar, FaShoppingBag, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Black Hoodie",
    category: "Hoodie",
    image: "/img (47).png",
    price: "$79",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    category: "Jacket",
    image: "/img (44).png",
    price: "$99",
  },
  {
    id: 3,
    name: "Urban Oversized T-Shirt",
    category: "T-Shirt",
    image: "/img (45).png",
    price: "$45",
  },
  {
    id: 4,
    name: "Street Cargo Pants",
    category: "Cargo",
    image: "/img (46).png",
    price: "$69",
  },
];

export default function BestSellingCollection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Best Selling
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4">
            Our Best Selling{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Discover customer favorite outfits crafted with premium quality,
            modern designs and luxury comfort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.05] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Badge */}
              <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-black">
                Best Seller
              </span>

              {/* Wishlist */}
              <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition duration-300 hover:bg-cyan-400 hover:text-black">
                <FaHeart size={15} />
              </button>

              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[3px] text-cyan-400">
                  {item.category}
                </p>

                <h3 className="mt-3 text-xl font-bold transition duration-300 group-hover:text-cyan-400">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="text-yellow-400 text-sm"
                    />
                  ))}

                  <span className="ml-2 text-sm text-gray-300">
                    (4.9)
                  </span>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 line-through">
                      $129
                    </p>

                    <p className="text-3xl font-extrabold text-cyan-400">
                      {item.price}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95">
                    <FaShoppingBag />
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}