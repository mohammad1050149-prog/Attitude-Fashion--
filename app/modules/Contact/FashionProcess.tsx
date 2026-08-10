const steps = [
  {
    number: "01",
    title: "Contact Our Team",
    text: "Share your fashion needs and tell us about your desired style."
  },
  {
    number: "02",
    title: "Style Consultation",
    text: "Our experts help you choose the perfect outfit and design."
  },
  {
    number: "03",
    title: "Custom Creation",
    text: "We prepare your premium outfit with attention to every detail."
  },
  {
    number: "04",
    title: "Get Your Look",
    text: "Receive your luxury fashion piece and own your attitude."
  }
];


export default function FashionProcess() {
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
            Our Process
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
            How We Create Your Style
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
            From first consultation to final outfit, we make your fashion
            journey simple and premium.
          </p>


        </div>





        {/* Steps Cards */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >



          {steps.map((step,index)=>(


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



              {/* Number */}

              <h3
                className="
                text-blue-400
                text-4xl
                font-bold
                group-hover:scale-110
                transition
                duration-500
                "
              >
                {step.number}
              </h3>




              {/* Title */}

              <h4
                className="
                text-white
                text-2xl
                font-bold
                mt-6
                group-hover:text-blue-400
                transition
                "
              >
                {step.title}
              </h4>




              {/* Text */}

              <p
                className="
                text-gray-400
                mt-4
                leading-7
                "
              >
                {step.text}
              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}