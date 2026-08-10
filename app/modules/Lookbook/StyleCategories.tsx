const categories = [
  {
    id: 1,
    title: "Black Long Coat",
    description: "Premium winter coats designed for a bold and confident look.",
    image: "/img (19).jpeg",
  },
  {
    id: 2,
    title: "Luxury Shawl",
    description: "Elegant shawls crafted with premium fabrics for every occasion.",
    image: "/img (20).jpeg",
  },
  {
    id: 3,
    title: "Streetwear Attitude",
    description: "Modern street fashion with confidence and unique style.",
    image: "/img (18).jpeg",
  },
  {
    id: 4,
    title: "Formal Luxury",
    description: "Luxury blazers and formal outfits for a timeless appearance.",
    image: "/img (21).jpeg",
  },
];

export default function StyleCategories() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-16">

          <span
            className="
            text-blue-400
            uppercase
            tracking-[6px]
            font-semibold
            "
          >
            Our Categories
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
            Discover Your Signature Style
          </h2>


          <p
            className="
            text-gray-400
            mt-5
            max-w-3xl
            mx-auto
            leading-8
            "
          >
            Explore our carefully selected collections designed for modern
            gentlemen who value confidence, elegance and attitude.
          </p>

        </div>



        {/* Cards */}
        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        ">


          {categories.map((item)=>(

            <div
              key={item.id}

              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-transparent
              hover:border-blue-500/50
              transition-all
              duration-500
              hover:-translate-y-3
              "
            >


              {/* Image */}

              {/* <img
                src={item.image}
                alt={item.title}

                className="
                w-full
                h-[320px]
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "
              /> */}
              <img
  src={item.image}
  alt={item.title}
  className="
    w-[85%]
    h-[320px]
    mx-auto
    object-cover
    transition
    duration-700
    group-hover:scale-110
  "
/>



              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/60
                to-transparent
                "
              ></div>




              {/* Content */}

              <div
                className="
                absolute
                inset-x-0
                bottom-0
                p-8
                "
              >


                <h3
                  className="
                  text-3xl
                  font-bold
                  text-white
                  group-hover:text-blue-400
                  transition
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                  text-gray-300
                  mt-3
                  "
                >
                  {item.description}
                </p>



                <button
                  className="
                  mt-6
                  w-fit
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  duration-500
                  hover:scale-105
                  shadow-lg
                  hover:shadow-blue-500/50
                  "
                >
                  Explore Now →
                </button>


              </div>


            </div>


          ))}


        </div>


      </div>

    </section>
  );
}