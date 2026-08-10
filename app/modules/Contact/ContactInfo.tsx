const contactData = [
  {
    title: "Call Us",
    detail: "+92 300 1234567",
    icon: "📞",
  },
  {
    title: "Email Us",
    detail: "info@fashionbrand.com",
    icon: "✉️",
  },
  {
    title: "Visit Store",
    detail: "Main Fashion Street, Pakistan",
    icon: "📍",
  },
  {
    title: "Working Hours",
    detail: "10:00 AM - 9:00 PM",
    icon: "🕒",
  },
];


export default function ContactInfo() {
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
            Get In Touch
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
            Contact Information
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
            Connect with our team for fashion advice, product details and
            premium styling services.
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



          {contactData.map((item,index)=>(


            <div
              key={index}

              className="
              group
              bg-[#171717]
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
                {item.title}
              </h3>




              <p
                className="
                text-gray-400
                mt-3
                "
              >
                {item.detail}
              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}