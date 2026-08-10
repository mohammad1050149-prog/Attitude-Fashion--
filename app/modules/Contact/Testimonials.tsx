const reviews = [
  {
    name: "Ahmed Khan",
    role: "Premium Customer",
    text: "Amazing quality and perfect fitting. The long coat collection looks very premium.",
  },
  {
    name: "Usman Ali",
    role: "Fashion Client",
    text: "The styling service helped me create a confident and unique look.",
  },
  {
    name: "Hassan Raza",
    role: "Regular Customer",
    text: "Luxury fabrics, great service and a truly premium experience.",
  },
];


export default function Testimonials() {
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
            Customer Reviews
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
            What Our Clients Say
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
            Real experiences from customers who trusted our premium fashion
            services.
          </p>


        </div>





        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">



          {reviews.map((review,index)=>(


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



              {/* Stars */}

              <div
                className="
                text-blue-400
                text-3xl
                group-hover:scale-110
                transition
                duration-500
                "
              >
                ★★★★★
              </div>




              {/* Review Text */}

              <p
                className="
                text-gray-300
                mt-6
                leading-7
                "
              >
                "{review.text}"
              </p>




              {/* Name */}

              <h3
                className="
                text-white
                text-xl
                font-bold
                mt-6
                group-hover:text-blue-400
                transition
                "
              >
                {review.name}
              </h3>




              {/* Role */}

              <p
                className="
                text-blue-400
                mt-2
                "
              >
                {review.role}
              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}