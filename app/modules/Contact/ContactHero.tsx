"use client"

import FashionRain from "@/app/component/FashionRain";


export default function ContactHero() {
  return (
    <section
      className="
      relative
      h-screen
      bg-cover
      bg-center
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/img (60).png')",
      }}
    >
      <div className="absolute inset-0 z-20 pointer-events-none">
  <FashionRain/>
</div>

      {/* Overlay */}
      <div className="
      absolute
      inset-0
      bg-black/75
      "></div>




      {/* Blue Glow */}
      <div
        className="
        absolute
        right-10
        top-20
        w-80
        h-80
        bg-blue-500/20
        blur-[120px]
        rounded-full
        animate-pulse
        "
      ></div>




      {/* Content */}
      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
        "
      >

        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">



          <span
            className="
            text-blue-400
            uppercase
            tracking-[6px]
            font-semibold
            "
          >
            Contact Us
          </span>





          <h1
            className="
            text-4xl
            md:text-7xl
            font-bold
            text-white
            mt-5
            leading-tight
            hover:text-blue-400
            transition
            duration-500
            "
          >
            Let's Create
            <br />
            Your Perfect Style
          </h1>





          <p
            className="
            text-gray-300
            text-lg
            max-w-xl
            mt-6
            leading-8
            "
          >
            Have questions about our luxury collections, custom outfits or
            styling services? Our team is here to help you find your perfect
            fashion statement.
          </p>





          <div
            className="
            mt-10
            flex
            gap-5
            flex-wrap
            "
          >



            {/* Primary Button */}
            <button
              className="
              bg-blue-500
              hover:bg-blue-600
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              transition-all
              duration-500
              hover:scale-110
              shadow-lg
              hover:shadow-blue-500/50
              "
            >
              Contact Now
            </button>





            {/* Secondary Button */}
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
              Visit Store
            </button>



          </div>




        </div>


      </div>


    </section>
  );
}