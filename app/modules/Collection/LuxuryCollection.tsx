import Image from "next/image";
import { FaArrowRight, FaHeart, FaStar } from "react-icons/fa";

interface LuxuryProduct {
  id: number;
  name: string;
  price: string;
  image: string;
}

const luxuryProducts: LuxuryProduct[] = [
  {
    id: 1,
    name: "Luxury Black Blazer",
    price: "$120",
    image: "/img (13).png",
  },
  {
    id: 2,
    name: "Premium Formal Shirt",
    price: "$75",
    image: "/img (14).png",
  },
  {
    id: 3,
    name: "Classic Suit Collection",
    price: "$150",
    image: "/img (15).png",
  },
  {
    id: 4,
    name: "Designer Casual Outfit",
    price: "$95",
    image: "/img (16).png",
  },
];

export default function LuxuryCollection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-cyan-400"></div>

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Premium Fashion
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Luxury{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Premium outfits crafted for a classy, confident and modern
            personality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {luxuryProducts.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.05] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Premium Badge */}
              <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-black">
                Premium
              </span>

              {/* Wishlist */}
              <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-cyan-400 hover:text-black">
                <FaHeart size={14} />
              </button>

              {/* Image */}
              <div className="relative h-[370px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-sm" />
                  ))}

                  <span className="ml-2 text-sm text-gray-300">(5.0)</span>
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
                  {item.name}
                </h3>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 line-through">
                      $199
                    </p>

                    <span className="text-3xl font-black text-cyan-400">
                      {item.price}
                    </span>
                  </div>

                  <button className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white active:scale-95">
                    Shop
                    <FaArrowRight />
                  </button>
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