"use client";

import {
  FaTshirt,
  FaShippingFast,
  FaStar,
  FaHeadset
} from "react-icons/fa";


const WhyChooseUs = () => {


  const features = [
    {
      icon: <FaTshirt />,
      title: "Premium Quality",
      text: "We use high quality fabrics and modern designs to deliver premium fashion."
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      text: "Quick and secure delivery service to bring your favorite styles faster."
    },
    {
      icon: <FaStar />,
      title: "Unique Designs",
      text: "Our collections are inspired by modern trends and street fashion."
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
      text: "Our team is always ready to help you with the best shopping experience."
    }
  ];



  return (

    <section className="
    relative
    overflow-hidden
    py-24
    bg-gradient-to-b
    from-slate-950
    via-black
    to-slate-950
    ">



      {/* Background Glow */}


      <div className="
      absolute
      top-0
      left-0
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
      bottom-0
      right-0
      w-96
      h-96
      bg-blue-500/10
      blur-[150px]
      rounded-full
      animate-pulse
      ">
      </div>




      {/* Decorative Circles */}


      <div className="
      absolute
      top-28
      left-24
      w-4
      h-4
      rounded-full
      bg-cyan-400
      animate-ping
      ">
      </div>



      <div className="
      absolute
      bottom-36
      right-32
      w-5
      h-5
      rounded-full
      bg-blue-400
      animate-bounce
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
        animate-fadeIn
        ">



          <span className="
          inline-block
          text-cyan-400
          uppercase
          tracking-[8px]
          font-bold
          animate-pulse
          ">

            Why Choose Us

          </span>





          <h2 className="
          mt-4
          text-4xl
          md:text-6xl
          font-extrabold
          text-white
          leading-tight
          ">


            Why 


            <span className="
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            ">

              Boys Attitude Fashion?

            </span>


          </h2>






          <div className="
          w-28
          h-1
          bg-cyan-400
          rounded-full
          mx-auto
          mt-5
          ">
          </div>






          <p className="
          mt-6
          text-lg
          text-gray-300
          max-w-3xl
          mx-auto
          leading-8
          ">

            We combine premium quality, modern fashion, fast delivery,
            and outstanding customer service to create an unforgettable
            shopping experience.

          </p>



        </div>
        

        {/* Cards */}


        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">



          {features.map((item,index)=>(



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
              backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-700
              hover:-translate-y-5
              hover:scale-105
              hover:border-cyan-400
              hover:shadow-[0_0_45px_rgba(6,182,212,0.45)]
              "
            >



              {/* Shine Effect */}


              <div className="
              absolute
              -left-24
              top-0
              h-full
              w-16
              rotate-12
              bg-white/10
              transition-all
              duration-1000
              group-hover:left-[120%]
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
              shadow-[0_0_30px_rgba(6,182,212,0.6)]
              transition-all
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
              ">


                {item.icon}


              </div>





              {/* Title */}



              <h3 className="
              mt-8
              text-2xl
              font-bold
              text-white
              transition-all
              duration-300
              group-hover:text-cyan-400
              ">

                {item.title}


              </h3>





              {/* Description */}



              <p className="
              mt-5
              leading-8
              text-gray-300
              transition-all
              duration-300
              group-hover:text-white
              ">

                {item.text}


              </p>





              {/* Animated Line */}



              <div className="
              mx-auto
              mt-8
              h-1
              w-0
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              transition-all
              duration-700
              group-hover:w-24
              ">
              </div>



            </div>



          ))}



        </div>
        

        {/* Bottom Highlight */}


        <div className="
        mt-20
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        p-8
        text-center
        shadow-[0_0_35px_rgba(6,182,212,0.2)]
        ">



          <h3 className="
          text-3xl
          font-bold
          text-white
          ">

            Premium Fashion For Every Modern Gentleman

          </h3>





          <p className="
          mt-4
          text-gray-300
          max-w-3xl
          mx-auto
          leading-8
          ">

            Our goal is to deliver exceptional quality, timeless style,
            and a shopping experience that makes every customer feel confident.

          </p>



        </div>
        {/* Marquee */}

<div
  className="
  mt-16
  overflow-hidden
  rounded-2xl
  border-y
  border-cyan-500/20
  bg-black/30
  backdrop-blur-lg
  py-5
  "
>

  <div
    className="
    flex
    w-max
    whitespace-nowrap
    animate-marquee
    "
  >

    {/* First */}

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        ⭐ Premium Quality
      </span>

      <span className="text-white font-bold text-lg">
        🚚 Fast Delivery
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        👕 Modern Streetwear
      </span>

      <span className="text-white font-bold text-lg">
        💎 Luxury Collection
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🏆 Trusted Brand
      </span>

      <span className="text-white font-bold text-lg">
        ❤️ Customer Satisfaction
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Exclusive Fashion
      </span>

    </div>

    {/* Duplicate */}

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        ⭐ Premium Quality
      </span>

      <span className="text-white font-bold text-lg">
        🚚 Fast Delivery
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        👕 Modern Streetwear
      </span>

      <span className="text-white font-bold text-lg">
        💎 Luxury Collection
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🏆 Trusted Brand
      </span>

      <span className="text-white font-bold text-lg">
        ❤️ Customer Satisfaction
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Exclusive Fashion
      </span>

    </div>

  </div>

</div>

        



        </div>





      


    </section>



  );


};



export default WhyChooseUs;


