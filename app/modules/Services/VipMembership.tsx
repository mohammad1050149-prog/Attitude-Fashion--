const benefits = [
  {
    title: "Exclusive Collections",
    description:
      "Access limited edition coats, shawls and luxury fashion pieces.",
    icon: "🧥",
  },
  {
    title: "Private Styling",
    description:
      "Get personal styling advice from our fashion experts.",
    icon: "😎",
  },
  {
    title: "Early Access",
    description:
      "Be the first to explore new arrivals and seasonal collections.",
    icon: "⭐",
  },
];


export default function VipMembership() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
          bg-[#171717]
          rounded-3xl
          p-10
          md:p-16
          border
          border-gray-800
          hover:border-blue-500/50
          transition
          duration-500
          "
        >


          <div className="grid lg:grid-cols-2 gap-12 items-center">



            {/* Content */}
            <div>


              <span
                className="
                text-blue-400
                uppercase
                tracking-[6px]
                font-semibold
                "
              >
                VIP Experience
              </span>




              <h2
                className="
                text-4xl
                md:text-5xl
                font-bold
                text-white
                mt-5
                leading-tight
                hover:text-blue-400
                transition
                duration-500
                "
              >
                Premium Style
                <br />
                Membership
              </h2>




              <p
                className="
                text-gray-400
                text-lg
                mt-6
                leading-8
                "
              >
                Join our exclusive fashion community and enjoy personalized
                services, luxury collections and a premium shopping experience.
              </p>




              <button
                className="
                mt-8
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-500
                hover:scale-110
                shadow-lg
                hover:shadow-blue-500/50
                "
              >
                Become VIP Member →
              </button>



            </div>





            {/* Benefits */}
            <div className="space-y-5">


              {benefits.map((item,index)=>(


                <div
                  key={index}

                  className="
                  group
                  bg-[#222]
                  p-6
                  rounded-2xl
                  flex
                  gap-5
                  border
                  border-transparent
                  hover:border-blue-500/50
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  "
                >



                  <div
                    className="
                    text-4xl
                    group-hover:scale-125
                    transition
                    duration-500
                    "
                  >
                    {item.icon}
                  </div>




                  <div>

                    <h3
                      className="
                      text-white
                      text-xl
                      font-bold
                      group-hover:text-blue-400
                      transition
                      "
                    >
                      {item.title}
                    </h3>


                    <p className="text-gray-400 mt-2">
                      {item.description}
                    </p>


                  </div>


                </div>


              ))}


            </div>



          </div>


        </div>


      </div>


    </section>
  );
}