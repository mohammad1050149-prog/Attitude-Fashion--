import {
  FaTshirt,
  FaRulerCombined,
  FaPalette,
  FaLeaf,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";


export default function ProductSpecification() {


  const specs = [
    {
      icon: <FaTshirt />,
      title: "Material",
      value: "100% Premium Cotton",
    },
    {
      icon: <FaRulerCombined />,
      title: "Fit",
      value: "Oversized Relaxed Fit",
    },
    {
      icon: <FaPalette />,
      title: "Available Colors",
      value: "Black, White, Blue, Olive",
    },
    {
      icon: <FaLeaf />,
      title: "Fabric Weight",
      value: "240 GSM Heavy Cotton",
    },
    {
      icon: <FaTruck />,
      title: "Shipping",
      value: "Free Delivery Worldwide",
    },
    {
      icon: <FaCheckCircle />,
      title: "Care",
      value: "Machine Wash Cold",
    },
  ];



  return (

    <section className="
    relative
    overflow-hidden
    bg-black
    text-white
    py-24
    px-6
    ">



      {/* Glow Background */}

      <div className="
      absolute
      top-20
      left-0
      w-72
      h-72
      bg-cyan-400/10
      rounded-full
      blur-[120px]
      ">
      </div>




      <div className="
      max-w-7xl
      mx-auto
      relative
      z-10
      ">




        {/* Heading */}


        <div className="
        text-center
        mb-16
        ">



          <span className="
          text-cyan-400
          uppercase
          tracking-[5px]
          font-semibold
          text-sm
          ">

            Product Details

          </span>





          <h2 className="
          text-4xl
          md:text-6xl
          font-black
          mt-5
          ">

            Product

            <span className="
            text-cyan-400
            ">
              Specifications
            </span>

          </h2>






          <p className="
          max-w-2xl
          mx-auto
          mt-6
          text-gray-400
          text-lg
          leading-8
          ">

            Designed with premium quality materials and crafted for
            everyday comfort, durability, and modern street style.

          </p>



        </div>









        {/* Specification Box */}



        <div className="
        bg-white/5
        backdrop-blur-xl
        rounded-[35px]
        border
        border-white/10
        overflow-hidden
        shadow-[0_0_50px_rgba(34,211,238,0.08)]
        ">




          {
            specs.map((item,index)=>(


              <div

              key={index}

              className={`
              group
              flex
              flex-col
              sm:flex-row
              justify-between
              sm:items-center
              gap-5
              px-8
              py-8
              hover:bg-white/10
              transition-all
              duration-500

              ${
                index !== specs.length-1
                ?
                "border-b border-white/10"
                :
                ""
              }

              `}

              >






                {/* Icon + Title */}


                <div className="
                flex
                items-center
                gap-5
                ">



                  <div className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  flex
                  items-center
                  justify-center
                  text-2xl
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-300
                  ">

                    {item.icon}


                  </div>






                  <h3 className="
                  text-xl
                  font-bold
                  group-hover:text-cyan-400
                  transition
                  ">

                    {item.title}

                  </h3>




                </div>









                {/* Value */}


                <div className="
                sm:text-right
                ">


                  <p className="
                  text-gray-300
                  font-medium
                  text-lg
                  ">

                    {item.value}

                  </p>


                </div>






              </div>


            ))
          }




        </div>





      </div>




    </section>

  );

}