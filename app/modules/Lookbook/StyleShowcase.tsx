const styles = [
  {
    id: 1,
    name: "Royal Winter Look",
    category: "Long Coat",
    image: "/img (22).jpeg",
  },
  {
    id: 2,
    name: "Luxury Shawl",
    category: "Premium Collection",
    image: "/img.webp",
  },
  {
    id: 3,
    name: "Streetwear Attitude",
    category: "Urban Fashion",
    image: "/img (23).jpeg",
  },
];

export default function StyleShowcase() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <span
            className="
            text-blue-400
            uppercase
            tracking-[5px]
            font-semibold
            "
          >
            Style Showcase
          </span>


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mt-4
            hover:text-blue-400
            transition
            duration-500
            "
          >
            Wear It With Confidence
          </h2>


          <p
            className="
            text-gray-400
            mt-5
            max-w-2xl
            mx-auto
            leading-8
            "
          >
            Every outfit tells a story. Explore premium fashion looks inspired
            by confidence, elegance and modern attitude.
          </p>


        </div>




        {/* Cards */}
        <div className="
        grid
        md:grid-cols-3
        gap-8
        ">


          {styles.map((style)=>(

            <div
              key={style.id}

              className="
              group
              bg-[#1A1A1A]
              rounded-3xl
              overflow-hidden
              border
              border-transparent
              hover:border-blue-500/50
              transition-all
              duration-500
              hover:-translate-y-3
              shadow-xl
              "
            >


              {/* Image */}

              <div className="overflow-hidden relative">

                <img
                  src={style.image}
                  alt={style.name}

                  className="
                  w-full
                  h-[450px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "
                />


                <div
                  className="
                  absolute
                  inset-0
                  bg-blue-500/0
                  group-hover:bg-blue-500/20
                  transition
                  duration-500
                  "
                ></div>


              </div>




              {/* Content */}

              <div className="p-6">


                <span
                  className="
                  text-blue-400
                  text-sm
                  uppercase
                  tracking-wider
                  "
                >
                  {style.category}
                </span>



                <h3
                  className="
                  text-2xl
                  text-white
                  font-bold
                  mt-2
                  group-hover:text-blue-400
                  transition
                  "
                >
                  {style.name}
                </h3>




                <button
                  className="
                  mt-5
                  border
                  border-blue-500
                  text-blue-400
                  px-5
                  py-2
                  rounded-full
                  hover:bg-blue-500
                  hover:text-white
                  transition-all
                  duration-500
                  hover:scale-105
                  "
                >
                  View Style
                </button>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>
  );
}