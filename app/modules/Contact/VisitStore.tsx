export default function VisitStore() {
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
            "
          >

            <img
              src="/img (61).png"
              alt="Fashion Store"
              className="
              w-full
              h-[600px]
              object-cover
              group-hover:scale-110
              transition
              duration-700
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
              Our Store
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
              Experience Luxury
              <br />
              Fashion In Person
            </h2>




            <p
              className="
              text-gray-400
              text-lg
              mt-6
              leading-8
              "
            >
              Visit our premium fashion store and explore exclusive
              collections of black long coats, luxury shawls, formal outfits
              and modern streetwear styles.
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
                  Premium Fashion Environment
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
                  Personal Style Assistance
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
                  Exclusive Collection Preview
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
              Get Directions →
            </button>




          </div>


        </div>


      </div>


    </section>
  );
}