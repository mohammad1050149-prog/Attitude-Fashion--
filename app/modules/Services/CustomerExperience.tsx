const experiences = [
  {
    title: "Premium Quality",
    description:
      "High-quality fabrics and detailed finishing for a luxury fashion experience.",
    icon: "✨",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick and secure delivery service to bring your style to your doorstep.",
    icon: "🚚",
  },
  {
    title: "Easy Exchange",
    description:
      "Simple exchange process to make your shopping experience comfortable.",
    icon: "🔄",
  },
  {
    title: "24/7 Support",
    description:
      "Our team is always ready to help you with your fashion needs.",
    icon: "📞",
  },
];

export default function CustomerExperience() {
  return (
    <section className="bg-[#111111] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <span
            className="
            text-blue-400
            uppercase
            tracking-[6px]
            font-semibold
            "
          >
            Customer Experience
          </span>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mt-5
            hover:text-blue-400
            transition
            duration-500
            "
          >
            Luxury Beyond Fashion
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
            We don't just provide outfits, we create a complete premium
            fashion experience for confident men.
          </p>


        </div>





        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >


          {experiences.map((item,index)=>(


            <div
              key={index}

              className="
              group
              bg-[#1A1A1A]
              p-8
              rounded-3xl
              text-center
              border
              border-gray-800
              hover:border-blue-500/50
              hover:-translate-y-3
              transition-all
              duration-500
              shadow-xl
              "
            >



              {/* Icon */}

              <div
                className="
                text-5xl
                group-hover:scale-125
                transition
                duration-500
                "
              >
                {item.icon}
              </div>




              {/* Title */}

              <h3
                className="
                text-2xl
                text-white
                font-bold
                mt-6
                group-hover:text-blue-400
                transition
                "
              >
                {item.title}
              </h3>




              {/* Description */}

              <p
                className="
                text-gray-400
                mt-4
                leading-7
                "
              >
                {item.description}
              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}