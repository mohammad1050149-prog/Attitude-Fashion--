export default function WinterCollection() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Image */}
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
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Winter Collection"

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




          {/* Right Content */}
          <div>


            <span
              className="
              text-blue-400
              uppercase
              tracking-[5px]
              font-semibold
              "
            >
              Winter Collection
            </span>



            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mt-4
              leading-tight
              hover:text-blue-400
              transition
              duration-500
              "
            >
              Luxury Long Coats
              <br />
              & Royal Shawls
            </h2>



            <p
              className="
              text-gray-400
              mt-6
              text-lg
              leading-8
              "
            >
              Step into winter with confidence. Our premium collection
              combines elegance, warmth and timeless attitude for the
              modern gentleman.
            </p>




            {/* Features */}
            <div className="mt-8 space-y-4">


              <div className="
              flex
              items-center
              gap-4
              group
              ">
                <div className="
                w-3
                h-3
                bg-blue-500
                rounded-full
                group-hover:scale-150
                transition
                ">
                </div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Premium Wool Fabric
                </p>
              </div>



              <div className="
              flex
              items-center
              gap-4
              group
              ">
                <div className="
                w-3
                h-3
                bg-blue-500
                rounded-full
                group-hover:scale-150
                transition
                ">
                </div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Luxury Shawl Collection
                </p>
              </div>




              <div className="
              flex
              items-center
              gap-4
              group
              ">
                <div className="
                w-3
                h-3
                bg-blue-500
                rounded-full
                group-hover:scale-150
                transition
                ">
                </div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Modern Street Fashion
                </p>
              </div>




              <div className="
              flex
              items-center
              gap-4
              group
              ">
                <div className="
                w-3
                h-3
                bg-blue-500
                rounded-full
                group-hover:scale-150
                transition
                ">
                </div>

                <p className="text-white group-hover:text-blue-400 transition">
                  Exclusive Winter Edition
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
              Explore Collection →
            </button>



          </div>


        </div>


      </div>


    </section>
  );
}