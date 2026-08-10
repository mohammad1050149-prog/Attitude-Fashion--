import FashionRain from "@/app/component/FashionRain";

const LookbookHero = () => {
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
        backgroundImage:
          "url('/img (17).jpeg')",
      }}
    >
      <div className="absolute inset-0 z-20 pointer-events-none">
  <FashionRain/>
</div>

      {/* Background Overlay */}
      <div className="
      absolute 
      inset-0 
      bg-black/75
      "></div>


      {/* Blue Glow */}
      <div className="
      absolute
      top-20
      left-20
      w-72
      h-72
      bg-blue-500/20
      blur-[120px]
      rounded-full
      animate-pulse
      ">
      </div>



      {/* Content */}
      <div className="
      relative
      z-10
      flex
      h-full
      items-center
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        md:px-12
        ">


          <span className="
          text-blue-400
          uppercase
          tracking-[6px]
          text-sm
          font-semibold
          animate-pulse
          ">
            Premium Lookbook
          </span>



          <h1 className="
          mt-4
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          animate-[fadeInUp_1s_ease]
          ">
            Elevate Your
            <br />
            Attitude Style
          </h1>



          <p className="
          mt-6
          max-w-xl
          text-gray-300
          text-lg
          leading-8
          ">
            Discover premium long coats, luxury shawls and modern streetwear
            designed for confident gentlemen. Every outfit is crafted to leave
            a lasting impression.
          </p>



          <div className="
          mt-8
          flex
          gap-4
          flex-wrap
          ">


            {/* Primary Button */}
            <button
            className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            font-semibold
            px-8
            py-3
            rounded-full
            transition-all
            duration-500
            hover:scale-110
            shadow-lg
            hover:shadow-blue-500/50
            "
            >
              Explore Looks
            </button>



            {/* Secondary Button */}
            <button
            className="
            border
            border-white
            text-white
            px-8
            py-3
            rounded-full
            transition-all
            duration-500
            hover:bg-white
            hover:text-black
            hover:scale-110
            "
            >
              Shop Collection
            </button>


          </div>


        </div>

      </div>


    </section>
  );
};

export default LookbookHero;