export default function BookConsultation() {
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
        backgroundImage: "url('/img (24).jpeg')",
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
        top-10
        left-1/2
        -translate-x-1/2
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
          Start Your Style Journey
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
          Create Your Own
          <br />
          Signature Look
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
          From luxury long coats to modern streetwear, our fashion experts
          help you build a style that represents your confidence and attitude.
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
            Book Appointment
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