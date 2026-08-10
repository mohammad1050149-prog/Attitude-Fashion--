"use client";

import Image from "next/image";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "James Carter",
    image: "/images/review1.jpg",
    review:
      "Amazing quality! The oversized tee fits perfectly and the fabric feels premium. Definitely worth every penny.",
  },
  {
    id: 2,
    name: "Daniel Smith",
    image: "/images/review2.jpg",
    review:
      "The hoodie exceeded my expectations. Super comfortable, stylish, and perfect for everyday streetwear.",
  },
  {
    id: 3,
    name: "Ryan Walker",
    image: "/images/review3.jpg",
    review:
      "Fast delivery and outstanding quality. I'll definitely shop again. Highly recommended!",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"></div>
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="uppercase tracking-[6px] font-semibold text-cyan-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Customer{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Hear what our customers say about our premium fashion collection
            and shopping experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                <FaQuoteLeft className="text-2xl text-black" />
              </div>

              {/* Review */}
              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="mt-6 flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}

                <span className="ml-2 text-sm text-gray-400">
                  5.0 Rating
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

              {/* Customer */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-cyan-400">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>

                  <p className="mt-1 flex items-center gap-2 text-sm text-cyan-400">
                    <FaCheckCircle className="text-xs" />
                    Verified Buyer
                  </p>
                </div>
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