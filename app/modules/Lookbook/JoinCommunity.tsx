export default function JoinCommunity() {
  return (
    <section className="bg-[#111111] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-[#1A1A1A]
          rounded-3xl
          p-10
          md:p-16
          border
          border-gray-800
          hover:border-yellow-500/40
          transition-all
          duration-700
          shadow-xl
          "
        >

          <div className="text-center">


            <span
              className="
              text-yellow-500
              uppercase
              tracking-[6px]
              font-semibold
              animate-pulse
              "
            >
              Join Our Community
            </span>



            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              mt-5
              leading-tight
              hover:text-yellow-400
              transition
              duration-500
              "
            >
              Wear Confidence.
              <br />
              Live With Attitude.
            </h2>



            <p
              className="
              text-gray-400
              max-w-2xl
              mx-auto
              mt-6
              text-lg
              leading-8
              "
            >
              Become a part of our premium fashion community and stay inspired
              with the latest long coats, luxury shawls, formal collections
              and modern streetwear.
            </p>



            {/* Buttons */}

            <div className="flex flex-wrap justify-center gap-4 mt-10">


              <button
                className="
                relative
                overflow-hidden
                bg-yellow-500
                hover:bg-yellow-600
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-500
                hover:scale-105
                shadow-lg
                hover:shadow-yellow-500/40
                "
              >
                Shop Now
              </button>



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
                hover:scale-105
                "
              >
                Explore Lookbook
              </button>


            </div>




            {/* Stats */}

            <div
              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
              mt-16
              "
            >


              <div className="
              group
              cursor-pointer
              transition
              duration-500
              hover:-translate-y-2
              ">
                <h3 className="
                text-4xl
                font-bold
                text-yellow-500
                group-hover:scale-110
                transition
                ">
                  500+
                </h3>

                <p className="text-gray-400 mt-2">
                  Premium Outfits
                </p>
              </div>



              <div className="
              group
              cursor-pointer
              transition
              duration-500
              hover:-translate-y-2
              ">
                <h3 className="
                text-4xl
                font-bold
                text-yellow-500
                group-hover:scale-110
                transition
                ">
                  10K+
                </h3>

                <p className="text-gray-400 mt-2">
                  Happy Customers
                </p>
              </div>



              <div className="
              group
              cursor-pointer
              transition
              duration-500
              hover:-translate-y-2
              ">
                <h3 className="
                text-4xl
                font-bold
                text-yellow-500
                group-hover:scale-110
                transition
                ">
                  100+
                </h3>

                <p className="text-gray-400 mt-2">
                  Luxury Designs
                </p>
              </div>



              <div className="
              group
              cursor-pointer
              transition
              duration-500
              hover:-translate-y-2
              ">
                <h3 className="
                text-4xl
                font-bold
                text-yellow-500
                group-hover:scale-110
                transition
                ">
                  24/7
                </h3>

                <p className="text-gray-400 mt-2">
                  Customer Support
                </p>
              </div>


            </div>


          </div>

        </div>

      </div>

    </section>
  );
}