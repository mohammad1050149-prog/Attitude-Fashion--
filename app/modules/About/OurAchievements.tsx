"use client";

import {
  FaUsers,
  FaShoppingBag,
  FaAward,
  FaSmile,
} from "react-icons/fa";



const achievements = [

  {
    icon: <FaUsers />,
    number: "5K+",
    title: "Happy Customers",
    description:
      "Thousands of satisfied customers trust our premium fashion collections.",
  },


  {
    icon: <FaShoppingBag />,
    number: "250+",
    title: "Premium Products",
    description:
      "A wide range of stylish outfits designed for modern men.",
  },


  {
    icon: <FaAward />,
    number: "15+",
    title: "Fashion Awards",
    description:
      "Recognized for excellence in quality, creativity, and modern fashion.",
  },


  {
    icon: <FaSmile />,
    number: "99%",
    title: "Customer Satisfaction",
    description:
      "Our commitment is to provide the best shopping experience.",
  },

];





const OurAchievements = () => {


  return (


    <section className="
    relative
    overflow-hidden
    py-24
    bg-gradient-to-b
    from-black
    via-slate-950
    to-black
    ">




      {/* Background Glow */}


      <div className="
      absolute
      -top-32
      -left-32
      w-96
      h-96
      bg-cyan-500/10
      blur-[150px]
      rounded-full
      animate-pulse
      ">
      </div>




      <div className="
      absolute
      -bottom-32
      -right-32
      w-96
      h-96
      bg-blue-500/10
      blur-[150px]
      rounded-full
      animate-pulse
      ">
      </div>





      <div className="
      relative
      max-w-7xl
      mx-auto
      px-6
      ">



        {/* Heading */}


        <div className="
        text-center
        mb-16
        ">


          <span className="
          text-cyan-400
          uppercase
          tracking-[6px]
          font-bold
          ">

            Our Achievements

          </span>
          
          <h2 className="
          mt-4
          text-4xl
          md:text-6xl
          font-extrabold
          text-white
          ">

            Numbers That

            <span className="
            block
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            ">

              Speak For Us

            </span>

          </h2>





          <div className="
          w-24
          h-1
          bg-cyan-500
          rounded-full
          mx-auto
          mt-6
          ">
          </div>






          <p className="
          mt-6
          text-gray-300
          max-w-3xl
          mx-auto
          leading-8
          ">

            Every milestone reflects our dedication to quality,
            innovation, and customer satisfaction.

          </p>



        </div>






        {/* Cards */}



        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">





          {achievements.map((item,index)=>(



            <div

            key={index}

            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-lg
            p-8
            text-center
            transition-all
            duration-700
            hover:-translate-y-4
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]
            "
            >




              {/* Shine Effect */}


              <div className="
              absolute
              -left-40
              top-0
              h-full
              w-20
              rotate-12
              bg-white/10
              transition-all
              duration-1000
              group-hover:left-[130%]
              ">
              </div>





              {/* Icon */}


              <div className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              text-white
              text-4xl
              transition-all
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
              ">

                {item.icon}

              </div>
              

              {/* Number */}


              <h3 className="
              mt-8
              text-5xl
              font-extrabold
              text-cyan-400
              group-hover:scale-110
              transition
              duration-500
              ">

                {item.number}

              </h3>






              {/* Title */}



              <h4 className="
              mt-5
              text-2xl
              font-bold
              text-white
              group-hover:text-cyan-400
              transition
              ">

                {item.title}

              </h4>






              {/* Description */}



              <p className="
              mt-5
              text-gray-300
              leading-8
              ">

                {item.description}

              </p>





              {/* Bottom Line */}



              <div className="
              mx-auto
              mt-8
              h-1
              w-0
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              rounded-full
              transition-all
              duration-700
              group-hover:w-24
              ">
              </div>



            </div>



          ))}



        </div>
        

        {/* Bottom CTA */}



        <div className="
        mt-20
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        p-10
        text-center
        shadow-[0_0_40px_rgba(6,182,212,0.25)]
        transition-all
        duration-700
        hover:shadow-[0_0_60px_rgba(6,182,212,0.45)]
        ">




          <h3 className="
          text-3xl
          md:text-4xl
          font-bold
          text-white
          ">

            Excellence Is Our Identity

          </h3>






          <p className="
          mt-5
          text-gray-300
          max-w-3xl
          mx-auto
          leading-8
          ">

            We continue to create premium fashion with innovation,
            quality, and customer trust at the heart of everything we do.

          </p>





          <button

          className="
          mt-8
          px-10
          py-4
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-blue-500
          text-white
          font-semibold
          hover:scale-105
          transition-all
          duration-500
          hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
          "

          >

            Explore Collection

          </button>



        </div>
        

      </div>


    </section>


  );


};


export default OurAchievements;




