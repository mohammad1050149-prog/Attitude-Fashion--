export default function ContactForm() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Content */}
          <div>


            <span
              className="
              text-blue-400
              uppercase
              tracking-[6px]
              font-semibold
              "
            >
              Send Message
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
              Let's Talk About
              <br />
              Your Style
            </h2>




            <p
              className="
              text-gray-400
              text-lg
              mt-6
              leading-8
              "
            >
              Have questions about our luxury collection, custom outfits or
              styling services? Send us a message and our fashion team will
              contact you.
            </p>




            <div className="mt-8 space-y-5">


              <p className="text-white hover:text-blue-400 transition">
                🧥 Luxury Fashion Consultation
              </p>


              <p className="text-white hover:text-blue-400 transition">
                🧣 Custom Shawl & Coat Designs
              </p>


              <p className="text-white hover:text-blue-400 transition">
                😎 Personal Style Guidance
              </p>


            </div>


          </div>





          {/* Form */}
          <div
            className="
            bg-[#171717]
            p-8
            rounded-3xl
            border
            border-gray-800
            hover:border-blue-500/50
            transition
            duration-500
            shadow-xl
            "
          >


            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-[#222]
              text-white
              px-5
              py-4
              rounded-xl
              mb-5
              outline-none
              border
              border-transparent
              focus:border-blue-500
              transition
              "
            />



            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              bg-[#222]
              text-white
              px-5
              py-4
              rounded-xl
              mb-5
              outline-none
              border
              border-transparent
              focus:border-blue-500
              transition
              "
            />



            <input
              type="text"
              placeholder="Phone Number"
              className="
              w-full
              bg-[#222]
              text-white
              px-5
              py-4
              rounded-xl
              mb-5
              outline-none
              border
              border-transparent
              focus:border-blue-500
              transition
              "
            />



            <textarea
              placeholder="Your Message"
              rows={5}
              className="
              w-full
              bg-[#222]
              text-white
              px-5
              py-4
              rounded-xl
              mb-5
              outline-none
              border
              border-transparent
              focus:border-blue-500
              transition
              "
            ></textarea>




            <button
              className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              text-white
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-500
              hover:scale-105
              shadow-lg
              hover:shadow-blue-500/50
              "
            >
              Send Message →
            </button>



          </div>



        </div>


      </div>


    </section>
  );
}