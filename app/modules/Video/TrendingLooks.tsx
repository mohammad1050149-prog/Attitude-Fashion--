"use client";

import Image from "next/image";

const looks = [
  {
    id: 1,
    image: "/img (48).jpeg",
    title: "Street King",
    subtitle: "Urban Fashion",
  },
  {
    id: 2,
    image: "/img (49).jpeg",
    title: "Luxury Gentleman",
    subtitle: "Premium Collection",
  },
  {
    id: 3,
    image: "/img (50).jpeg",
    title: "Winter Vibes",
    subtitle: "Luxury Winter",
  },
  {
    id: 4,
    image: "/img (51).jpeg",
    title: "Smart Casual",
    subtitle: "Everyday Style",
  },
  {
    id: 5,
    image: "/img (52).jpeg",
    title: "Formal Elite",
    subtitle: "Business Class",
  },
  {
    id: 6,
    image: "/img (53).jpeg",
    title: "New Arrival",
    subtitle: "Latest Fashion",
  },
];

export default function TrendingLooks() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Trending Fashion Looks
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-14 text-lg">
          Discover the latest attitude styles made for modern men.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {looks.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="w-full h-[520px] object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8">

                <p className="text-cyan-400 text-sm uppercase tracking-[4px]">
                  {item.subtitle}
                </p>

                <h3 className="text-3xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <button className="mt-5 px-7 py-3 rounded-full bg-cyan-500 text-black font-bold hover:bg-white transition">
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}