const consultation = [
  {
    title: "Personal Style Guide",
    description:
      "We help you discover a fashion style that matches your personality.",
    icon: "😎",
  },
  {
    title: "Occasion Styling",
    description:
      "Perfect outfits for weddings, parties, meetings and special events.",
    icon: "👔",
  },
  {
    title: "Color & Outfit Selection",
    description:
      "Choose the right colors and combinations for your premium look.",
    icon: "🎨",
  },
  {
    title: "Trend Advice",
    description:
      "Stay updated with modern men's fashion trends and styles.",
    icon: "🔥",
  },
];

export default function FashionConsultation() {
  return (
    <section className="bg-black py-24 overflow-hidden">

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
            Fashion Consultation
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
            Style Guidance For Every Man
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
            Our fashion experts help you create a confident look with the
            perfect combination of luxury, comfort and attitude.
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


          {consultation.map((item,index)=>(


            <div
              key={index}

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

              <p className="
              text-gray-400
              mt-4
              leading-7
              ">
                {item.description}
              </p>





              {/* Button */}

              <button
                className="
                mt-6
                text-blue-400
                hover:text-blue-300
                transition
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