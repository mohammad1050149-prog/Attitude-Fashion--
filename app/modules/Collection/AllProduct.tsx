import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Oversized Street T-Shirt",
    price: "$39",
    image: "/img (3).png",
    tag: "Trending",
  },
  {
    id: 2,
    name: "Premium Black Hoodie",
    price: "$59",
    image: "/img (4).png",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Urban Denim Jacket",
    price: "$79",
    image: "/img (5).png",
    tag: "New",
  },
  {
    id: 4,
    name: "Classic Sneakers",
    price: "$69",
    image: "/img (6).png",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Luxury Casual Shirt",
    price: "$49",
    image: "/img (7).png",
    tag: "Premium",
  },
  {
    id: 6,
    name: "Street Style Jeans",
    price: "$55",
    image: "/img (8).png",
    tag: "Limited",
  },
];

export default function AllProducts() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] top-0 left-0"></div>
      <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full blur-[120px] bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Premium Collection
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            All{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Discover premium streetwear designed for confidence, comfort and
            modern fashion.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((item) => (

            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >

              <div className="relative h-[380px] overflow-hidden">

                <span className="absolute left-4 top-4 z-20 rounded-full bg-cyan-400 px-4 py-1 text-sm font-bold text-black">
                  {item.tag}
                </span>

                <button className="absolute right-4 top-4 z-20 h-10 w-10 rounded-full bg-black/60 backdrop-blur text-white transition hover:bg-cyan-400 hover:text-black">
                  ♥
                </button>

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                    {item.name}
                  </h3>

                  <span className="text-yellow-400 text-sm">
                    ⭐ 4.9
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 line-through text-sm">
                      $99
                    </p>

                    <p className="text-3xl font-black text-cyan-400">
                      {item.price}
                    </p>
                  </div>

                  <button className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition duration-300 hover:scale-105 hover:bg-white">
                    Shop Now →
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