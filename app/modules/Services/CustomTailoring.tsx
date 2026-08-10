
export default function CustomTailoring() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


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
              Custom Tailoring
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
              Perfect Fit
              <br />
              Perfect Attitude
            </h2>



            <p
              className="
              text-gray-400
              text-lg
              mt-6
              leading-8
              "
            >
              Our custom tailoring service creates outfits that match your
              body, personality and fashion style. Every detail is designed
              with precision to give you a premium look.
            </p>




            {/* Features */}
            <div className="mt-8 grid gap-5">


              <div
                className="
                bg-[#181818]
                p-5
                rounded-2xl
                border
                border-transparent
                hover:border-blue-500/50
                transition-all
                duration-500
                hover:-translate-y-2
                "
              >
                <h3 className="text-white text-xl font-semibold">
                  ✂️ Custom Measurements
                </h3>

                <p className="text-gray-400 mt-2">
                  Outfits crafted according to your perfect size.
                </p>
              </div>




              <div
                className="
                bg-[#181818]
                p-5
                rounded-2xl
                border
                border-transparent
                hover:border-blue-500/50
                transition-all
                duration-500
                hover:-translate-y-2
                "
              >
                <h3 className="text-white text-xl font-semibold">
                  🧥 Premium Fabric Selection
                </h3>

                <p className="text-gray-400 mt-2">
                  Choose from luxury fabrics and exclusive designs.
                </p>
              </div>





              <div
                className="
                bg-[#181818]
                p-5
                rounded-2xl
                border
                border-transparent
                hover:border-blue-500/50
                transition-all
                duration-500
                hover:-translate-y-2
                "
              >
                <h3 className="text-white text-xl font-semibold">
                  👔 Personal Design
                </h3>

                <p className="text-gray-400 mt-2">
                  Create a unique outfit that represents your attitude.
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
              Get Custom Outfit →
            </button>



          </div>





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
              src="/img (2).webp"
              alt="Custom Tailoring"

              className="
              w-full
              h-[650px]
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

          </div>



        </div>


      </div>


    </section>
  );
}