"use client";

import { motion } from "framer-motion";

const looks = [
  {
    id: 1,
    title: "Luxury Long Coat",
    image:
      "/img (12).jpeg",
  },
  {
    id: 2,
    title: "Royal Shawl Style",
    image:
      "/img (11).jpeg",
  },
  {
    id: 3,
    title: "Streetwear Edition",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Classic Blazer",
    image:
      "/img (16).jpeg",
  },
];

export default function FeaturedLooks() {
  return (
    <section className="bg-[#0F0F0F] py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <motion.h2
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:.8}}
          className="text-4xl font-bold text-center text-white"
        >
          Featured Looks
        </motion.h2>


        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:.3}}
          className="text-gray-400 text-center mt-4 max-w-2xl mx-auto"
        >
          Discover our premium collection of long coats, shawls, blazers and
          modern streetwear designed for men with confidence.
        </motion.p>



        {/* Cards */}
        <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-8 
        mt-14
        ">

          {looks.map((look,index)=>(

            <motion.div
              key={look.id}

              initial={{
                opacity:0,
                y:60
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.6,
                delay:index * .15
              }}

              whileHover={{
                y:-12
              }}

              className="
              group
              rounded-2xl
              overflow-hidden
              bg-[#1A1A1A]
              shadow-xl
              border
              border-transparent
              hover:border-yellow-500/50
              transition
              duration-500
              "
            >


              {/* Image */}
              <div className="
              overflow-hidden
              relative
              h-96
              ">

                <img
                  src={look.image}
                  alt={look.title}

                  className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "
                />


                {/* Hover Overlay */}
                <div className="
                absolute
                inset-0
                bg-black/0
                group-hover:bg-black/40
                transition
                duration-500
                "></div>


              </div>



              {/* Content */}
              <div className="p-5">


                <h3 className="
                text-xl
                font-semibold
                text-white
                group-hover:text-yellow-400
                transition
                ">
                  {look.title}
                </h3>



                <button
                className="
                mt-4
                text-yellow-400
                font-medium
                hover:text-yellow-300
                transition
                group-hover:translate-x-2
                duration-300
                "
                >
                  View Look →
                </button>


              </div>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
}