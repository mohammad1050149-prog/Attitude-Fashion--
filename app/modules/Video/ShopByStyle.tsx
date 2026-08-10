"use client";

import Image from "next/image";

const styles = [
  {
    id: 1,
    title: "Street Style",
    image: "/img (54).jpeg",
  },
  {
    id: 2,
    title: "Luxury Wear",
    image: "/img (55).jpeg",
  },
  {
    id: 3,
    title: "Formal Collection",
    image: "/img (56).jpeg",
  },
  {
    id: 4,
    title: "Winter Collection",
    image: "/img (57).jpeg",
  },
];

export default function ShopByStyle() {
  return (
    <section className="bg-[#020817] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Shop By Style
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14 text-lg">
          Choose your favorite fashion style and upgrade your wardrobe.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {styles.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-500/20"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-bold text-white">
                  {item.title}
                </h3>

                <button className="mt-5 px-8 py-3 rounded-full bg-cyan-500 text-black font-bold hover:bg-white transition">
                  Explore Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}