"use client";

import Image from "next/image";
import { FaArrowRight, FaFire } from "react-icons/fa";

export default function ExclusiveOffers() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]"></div>
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="group relative overflow-hidden rounded-[40px] border border-cyan-400/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Background Image */}
          <Image
            src="/images/exclusive-offer.jpg"
            alt="Exclusive Offer"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

          {/* Decorative Glow */}
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[100px]"></div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[620px] items-center">
            <div className="max-w-3xl px-8 py-16 md:px-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-6 py-3 backdrop-blur-md">
                <FaFire className="text-cyan-400" />
                <span className="text-sm font-bold uppercase tracking-[3px] text-cyan-300">
                  Limited Time Offer
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                Upgrade Your Style With

                <span className="mt-3 block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  40% OFF Premium Collection
                </span>
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
                Discover exclusive men's fashion designed for modern
                personalities. Premium fabrics, luxury designs and unbeatable
                offers available for a limited time.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur">
                  ✓ Premium Quality
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur">
                  ✓ Free Shipping
                </span>

                <span className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur">
                  ✓ Easy Returns
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <button className="flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95">
                  Shop Now
                  <FaArrowRight />
                </button>

                <button className="rounded-full border border-white/40 bg-white/5 px-10 py-4 font-bold text-white backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black">
                  View Collection
                </button>
              </div>

              {/* Bottom Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <h3 className="text-3xl font-black text-cyan-400">15K+</h3>
                  <p className="mt-1 text-sm text-gray-400">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-cyan-400">500+</h3>
                  <p className="mt-1 text-sm text-gray-400">Premium Products</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-cyan-400">40%</h3>
                  <p className="mt-1 text-sm text-gray-400">Exclusive Discount</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}