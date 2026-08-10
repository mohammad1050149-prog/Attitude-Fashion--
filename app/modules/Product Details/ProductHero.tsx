"use client";

import Image from "next/image";
import { FaStar, FaShoppingBag, FaHeart, FaCheckCircle } from "react-icons/fa";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 text-white">

      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Product Image */}
        <div className="group relative overflow-hidden rounded-[35px] border border-cyan-400/20 bg-white/[0.05] shadow-[0_0_50px_rgba(34,211,238,.15)] backdrop-blur-xl">

          {/* Badge */}
          <span className="absolute left-6 top-6 z-20 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black">
            BEST SELLER
          </span>

          <div className="relative h-[620px]">
            <Image
              src="/img6.png"
              alt="Premium Black Hoodie"
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[6px] font-semibold text-cyan-400">
            Premium Collection
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight lg:text-7xl">
            Premium Black
            <span className="block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Hoodie
            </span>
          </h1>

          {/* Rating */}
          <div className="mt-7 flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((star)=>(
                <FaStar key={star}/>
              ))}
            </div>

            <span className="font-semibold">
              5.0
            </span>

            <span className="text-gray-400">
              (120 Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 flex items-end gap-4">
            <h2 className="text-5xl font-black text-cyan-400">
              $59
            </h2>

            <span className="text-2xl text-gray-500 line-through">
              $89
            </span>

            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-bold">
              -34%
            </span>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Stay stylish and comfortable with our premium black hoodie.
            Designed for modern streetwear lovers with heavyweight fabric,
            premium stitching and a bold attitude look.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Premium Heavy Cotton
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Relaxed Oversized Fit
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Free Shipping Available
            </div>

          </div>

          {/* Size */}
          <div className="mt-10">

            <h3 className="mb-5 text-xl font-bold">
              Select Size
            </h3>

            <div className="flex flex-wrap gap-4">

              {["S","M","L","XL"].map((size)=>(
                <button
                  key={size}
                  className="h-14 w-14 rounded-xl border border-cyan-400/20 bg-white/5 font-bold transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">

            <button className="flex items-center gap-3 rounded-full bg-cyan-400 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white">
              <FaShoppingBag/>
              Add To Cart
            </button>

            <button className="rounded-full border border-cyan-400 px-10 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black">
              Buy Now
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black">
              <FaHeart/>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}