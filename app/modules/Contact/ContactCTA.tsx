export default function ContactCTA() {
  return (
    <section
      className="
      relative
      py-32
      bg-cover
      bg-center
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/img (62).png')",
      }}
    >

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
        left-1/2
        top-10
        -translate-x-1/2
        w-96
        h-96
        bg-blue-500/20
        blur-[130px]
        rounded-full
        animate-pulse
        "
      ></div>




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



        <span
          className="
          text-blue-400
          uppercase
          tracking-[6px]
          font-semibold
          "
        >
          Start Your Fashion Journey
        </span>





        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          mt-6
          leading-tight
          hover:text-blue-400
          transition
          duration-500
          "
        >
          Your Style.
          <br />
          Your Attitude.
          Your Identity.
        </h2>





        <p
          className="
          text-gray-300
          text-lg
          mt-6
          max-w-3xl
          mx-auto
          leading-8
          "
        >
          Connect with our fashion experts and discover premium long coats,
          luxury shawls, formal looks and modern streetwear collections.
        </p>





        <div
          className="
          flex
          justify-center
          gap-5
          flex-wrap
          mt-10
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
            Contact Now →
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
            Explore Collection
          </button>



        </div>



      </div>


    </section>
  );
}