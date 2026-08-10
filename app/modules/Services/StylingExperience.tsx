export default function StylingExperience() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Image */}
          <div
            className="
            overflow-hidden
            rounded-3xl
            group
            border
            border-transparent
            hover:border-blue-500/50
            transition
            duration-500
            "
          >

            <img
              src="/img (3).webp"
              alt="Personal Styling"

              className="
              w-full
              h-[600px]
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

          </div>




          {/* Content */}
          <div>


            <span
              className="
              text-blue-400
              uppercase
              tracking-[6px]
              font-semibold
              "
            >
              Personal Styling
            </span>




            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mt-5
              leading-tight
              hover:text-blue-400
              transition
              duration-500
              "
            >
              Find Your
              <br />
              Perfect Style
            </h2>




            <p
              className="
              text-gray-400
              text-lg
              mt-6
              leading-8
              "
            >
              Our expert stylists help you create a unique fashion identity.
              From luxury coats to streetwear outfits, we guide you to choose
              the perfect look that matches your personality.
            </p>




            {/* Features */}
            <div className="mt-8 space-y-5">


              <div className="flex gap-4 items-center group">

                <div
                  className="
                  w-3
                  h-3
                  bg-blue-500
                  rounded-full
                  group-hover:scale-150
                  transition
                  "
                ></div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Personalized Outfit Selection
                </p>

              </div>




              <div className="flex gap-4 items-center group">

                <div
                  className="
                  w-3
                  h-3
                  bg-blue-500
                  rounded-full
                  group-hover:scale-150
                  transition
                  "
                ></div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Luxury Fashion Guidance
                </p>

              </div>




              <div className="flex gap-4 items-center group">

                <div
                  className="
                  w-3
                  h-3
                  bg-blue-500
                  rounded-full
                  group-hover:scale-150
                  transition
                  "
                ></div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Style Based On Your Personality
                </p>

              </div>




              <div className="flex gap-4 items-center group">

                <div
                  className="
                  w-3
                  h-3
                  bg-blue-500
                  rounded-full
                  group-hover:scale-150
                  transition
                  "
                ></div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Premium Men's Fashion Advice
                </p>

              </div>


            </div>




            {/* Button */}
            <button
              className="
              mt-10
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
              Book Styling Session →
            </button>



          </div>


        </div>


      </div>

    </section>
  );
}