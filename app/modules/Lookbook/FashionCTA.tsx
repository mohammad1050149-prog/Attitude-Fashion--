"use client";

import { motion } from "framer-motion";

export default function FashionCTA() {
  return (
    <section
      className="
      relative
      py-32
      overflow-hidden
      "
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >
        <source src="/vdo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Golden Glow */}
      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        bg-yellow-500/20
        blur-[120px]
        rounded-full
        "
      ></div>

      {/* Content */}
      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        px-6
        text-center
        "
      >

        {/* Small Heading */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          uppercase
          tracking-[8px]
          text-yellow-500
          font-semibold
          "
        >
          Luxury Fashion
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          mt-6
          leading-tight
          "
        >
          Style Is A Way To Say
          <br />
          Who You Are Without Speaking.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="
          text-gray-300
          mt-8
          text-lg
          max-w-3xl
          mx-auto
          leading-8
          "
        >
          Discover our premium collection of long coats,
          luxury shawls, streetwear and formal fashion
          designed for men who lead with confidence
          and attitude.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
          mt-10
          flex
          justify-center
          gap-5
          flex-wrap
          "
        >

          {/* Button 1 */}
          <button
            className="
            group
            relative
            overflow-hidden
            bg-yellow-500
            text-black
            px-8
            py-4
            rounded-full
            font-semibold
            transition-all
            duration-500
            hover:scale-110
            shadow-lg
            hover:shadow-yellow-500/50
            "
          >

            <span
              className="
              absolute
              inset-0
              bg-white/30
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition
              duration-700
              "
            ></span>

            <span className="relative z-10">
              Explore Collection
            </span>

          </button>

          {/* Button 2 */}
          <button
            className="
            border
            border-white
            text-white
            px-8
            py-4
            rounded-full
            transition-all
            duration-500
            hover:bg-white
            hover:text-black
            hover:scale-110
            "
          >
            View Lookbook
          </button>

        </motion.div>

      </div>

    </section>
  );
}