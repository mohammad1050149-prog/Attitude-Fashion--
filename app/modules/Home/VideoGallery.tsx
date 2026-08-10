"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "/VDO (2).mp4",
    title: "Luxury Fashion",
  },
  {
    id: 2,
    src: "/img (20).mp4",
    title: "Street Style",
  },
  {
    id: 3,
    src: "/WhatsApp Video 2026-08-02 at 6.51.12 PM.mp4",
    title: "Premium Collection",
  },
  {
    id: 4,
    src: "/img (19).mp4",
    title: "Modern Look",
  },
];

export default function VideoGallery() {
  return (
    <section
      className="
      relative
      py-24
      overflow-hidden
      bg-gradient-to-b
      from-black
      via-slate-950
      to-black
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        -top-40
        -left-40
        w-[450px]
        h-[450px]
        bg-blue-500/20
        rounded-full
        blur-[180px]
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        bg-cyan-500/20
        rounded-full
        blur-[180px]
        "
      ></div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        "
      >

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <span
            className="
            uppercase
            tracking-[8px]
            text-cyan-400
            font-semibold
            "
          >
            Luxury Fashion Videos
          </span>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-black
            text-white
            mt-5
            "
          >
            Shawl & Premium Collection
          </h2>

          <p
            className="
            text-gray-400
            mt-6
            max-w-3xl
            mx-auto
            leading-8
            "
          >
            Explore our latest shawls, luxury coats, premium outfits and
            modern fashion styles through beautiful cinematic videos.
          </p>

        </motion.div>

        {/* Video Grid */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >

          {videos.map((video, index) => (

            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-cyan-500/20
              bg-slate-900
              hover:border-cyan-400
              transition-all
              duration-700
              hover:-translate-y-4
              hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
              "
            >

              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="
                w-full
                h-[420px]
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
                "
              ></div>

              <div
                className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
              >

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  border
                  border-white/40
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  "
                >
                  ▶
                </div>

              </div>

              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                z-10
                "
              >
                              <span
                  className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  text-cyan-300
                  text-sm
                  font-semibold
                  backdrop-blur-md
                  border
                  border-cyan-400/30
                  "
                >
                  Luxury Collection
                </span>

                <h3
                  className="
                  mt-4
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-cyan-400
                  transition-all
                  duration-500
                  "
                >
                  {video.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-300
                  leading-7
                  "
                >
                  Premium shawls, luxury fashion and modern style specially
                  designed for a confident personality.
                </p>

                <button
                  className="
                  mt-6
                  px-6
                  py-3
                  rounded-full
                  bg-cyan-500
                  text-white
                  font-semibold
                  transition-all
                  duration-500
                  hover:bg-cyan-600
                  hover:scale-105
                  hover:shadow-[0_0_25px_#06b6d4]
                  "
                >
                  Watch Collection →
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Marquee */}

        <div
          className="
          mt-20
          overflow-hidden
          rounded-2xl
          border-y
          border-cyan-400/20
          bg-black/40
          py-5
          "
        >

          <div
            className="
            flex
            w-max
            whitespace-nowrap
            animate-marquee
            "
          >

            <div className="flex gap-16 px-8">

              <span className="text-cyan-400 font-bold text-lg">
                🧣 Luxury Shawls
              </span>

              <span className="text-white font-bold text-lg">
                🎥 Fashion Videos
              </span>

              <span className="text-cyan-400 font-bold text-lg">
                ✨ Premium Collection
              </span>

              <span className="text-white font-bold text-lg">
                💎 Elegant Style
              </span>

              <span className="text-cyan-400 font-bold text-lg">
                🔥 New Arrival
              </span>

              <span className="text-white font-bold text-lg">
                🛍️ Shop Now
              </span>

            </div>

            <div className="flex gap-16 px-8">

              <span className="text-cyan-400 font-bold text-lg">
                🧣 Luxury Shawls
              </span>

              <span className="text-white font-bold text-lg">
                🎥 Fashion Videos
              </span>

              <span className="text-cyan-400 font-bold text-lg">
                ✨ Premium Collection
              </span>

              <span className="text-white font-bold text-lg">
                💎 Elegant Style
              </span>

              <span className="text-cyan-400 font-bold text-lg">
                🔥 New Arrival
              </span>

              <span className="text-white font-bold text-lg">
                🛍️ Shop Now
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}