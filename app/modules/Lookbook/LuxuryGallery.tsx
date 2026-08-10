const gallery = [
  {
    id: 1,
    title: "Black Long Coat",
    image: "/img (13).jpeg",
  },
  {
    id: 2,
    title: "Luxury Shawl",
    image: "/img (11).jpeg",
  },
  {
    id: 3,
    title: "Streetwear Attitude",
    image: "/img (18).jpeg",
  },
  {
    id: 4,
    title: "Formal Luxury",
    image: "/img (15).jpeg",
  },
  {
    id: 5,
    title: "Fashion Sunglasses",
    image: "/img (14).jpeg",
  },
  {
    id: 6,
    title: "Royal Winter Style",
    image: "/img (12).jpeg",
  },
];


export default function LuxuryGallery() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

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
            Fashion Gallery
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
            Luxury Attitude Looks
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
            Explore our signature collection featuring premium long coats,
            luxury shawls, formal wear and modern street fashion.
          </p>


        </div>




        {/* Gallery Cards */}
        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">


          {gallery.map((item)=>(


            <div
              key={item.id}
              className="
              group
              overflow-hidden
              rounded-2xl
              bg-[#181818]
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
              <div
                className="
                overflow-hidden
                relative
                "
              >

                <img
                  src={item.image}
                  alt={item.title}

                  className="
                  w-full
                  h-[450px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "
                />


                {/* Hover Overlay */}
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


                <h3
                  className="
                  text-white
                  text-2xl
                  font-semibold
                  group-hover:text-blue-400
                  transition
                  "
                >
                  {item.title}
                </h3>



                <button
                  className="
                  mt-4
                  text-blue-400
                  hover:text-blue-300
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                  "
                >
                  View Collection →
                </button>


              </div>


            </div>


          ))}


        </div>


      </div>


    </section>
  );
}