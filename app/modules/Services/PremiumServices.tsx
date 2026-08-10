const services = [
  {
    id: 1,
    title: "Personal Styling",
    description:
      "Get a complete outfit recommendation designed according to your personality and style.",
    icon: "👔",
  },
  {
    id: 2,
    title: "Custom Tailoring",
    description:
      "Perfect fitting outfits crafted with premium fabrics and detailed finishing.",
    icon: "✂️",
  },
  {
    id: 3,
    title: "Fashion Consultation",
    description:
      "Professional guidance to help you choose the perfect luxury look.",
    icon: "🕶️",
  },
  {
    id: 4,
    title: "Premium Packaging",
    description:
      "Luxury packaging experience that matches the quality of your outfit.",
    icon: "🎁",
  },
];

export default function PremiumServices() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

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
            What We Offer
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
            Our Premium Services
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
            Experience luxury fashion services created for modern men who
            value confidence, style and elegance.
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


          {services.map((service)=>(


            <div
              key={service.id}

              className="
              group
              bg-[#171717]
              p-8
              rounded-3xl
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
                {service.icon}
              </div>




              {/* Title */}

              <h3
                className="
                text-2xl
                font-bold
                text-white
                mt-6
                group-hover:text-blue-400
                transition
                "
              >
                {service.title}
              </h3>




              {/* Description */}

              <p
                className="
                text-gray-400
                mt-4
                leading-7
                "
              >
                {service.description}
              </p>




              {/* Button */}

              <button
                className="
                text-blue-400
                mt-6
                hover:text-blue-300
                transition-all
                duration-300
                group-hover:translate-x-2
                "
              >
                Learn More →
              </button>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}