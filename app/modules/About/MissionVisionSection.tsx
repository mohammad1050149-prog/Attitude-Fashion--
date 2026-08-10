import { FaBullseye, FaEye, FaGem } from "react-icons/fa";


const MissionVisionSection = () => {


  const cards = [

    {
      icon: <FaBullseye />,
      title: "Our Mission",
      text: "Our mission is to provide premium fashion that helps modern men express their confidence, personality, and unique style."
    },

    {
      icon: <FaEye />,
      title: "Our Vision",
      text: "Our vision is to become a leading fashion brand known for quality designs, modern trends, and customer satisfaction."
    },

    {
      icon: <FaGem />,
      title: "Our Values",
      text: "We believe in quality, creativity, comfort, and creating fashion that makes every man feel confident."
    }

  ];




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
      top-0
      left-0
      w-96
      h-96
      bg-cyan-500/10
      blur-[140px]
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
      blur-[140px]
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

            Our Purpose

          </span>
          
          <h2 className="
          mt-4
          text-4xl
          md:text-6xl
          font-extrabold
          text-white
          ">

            Mission & Vision

          </h2>





          <div className="
          w-24
          h-1
          bg-cyan-400
          rounded-full
          mx-auto
          mt-5
          ">
          </div>






          <p className="
          mt-6
          text-gray-300
          text-lg
          max-w-3xl
          mx-auto
          leading-8
          ">

            We create fashion that represents confidence, attitude,
            luxury, and the modern lifestyle for every gentleman.

          </p>



        </div>






        {/* Cards */}



        <div className="
        grid
        md:grid-cols-3
        gap-8
        ">





          {cards.map((item,index)=>(



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
            p-10
            text-center
            transition-all
            duration-700
            hover:-translate-y-5
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(6,182,212,0.45)]
            "
            >




              {/* Shine Effect */}


              <div className="
              absolute
              -left-32
              top-0
              h-full
              w-20
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
              text-4xl
              text-white
              shadow-[0_0_25px_rgba(6,182,212,0.6)]
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
              text-3xl
              font-bold
              text-white
              transition-all
              duration-300
              group-hover:text-cyan-400
              ">

                {item.title}

              </h3>






              {/* Text */}



              <p className="
              mt-5
              leading-8
              text-gray-300
              group-hover:text-white
              transition-all
              duration-300
              ">

                {item.text}

              </p>
              

              {/* Bottom Line */}


              <div className="
              mx-auto
              mt-8
              h-1
              w-0
              rounded-full
              bg-cyan-400
              transition-all
              duration-700
              group-hover:w-20
              ">
              </div>



            </div>



          ))}



        </div>





       {/* Bottom Marquee */}

<div
  className="
  mt-20
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
        👔 Modern Fashion
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        💙 Customer Satisfaction
      </span>

      <span className="text-white font-bold text-lg">
        💎 Luxury Designs
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Confidence
      </span>

      <span className="text-white font-bold text-lg">
        🖤 Street Style
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        ⚡ Innovation
      </span>

    </div>

    {/* Duplicate */}

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        ⭐ Premium Quality
      </span>

      <span className="text-white font-bold text-lg">
        👔 Modern Fashion
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        💙 Customer Satisfaction
      </span>

      <span className="text-white font-bold text-lg">
        💎 Luxury Designs
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Confidence
      </span>

      <span className="text-white font-bold text-lg">
        🖤 Street Style
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        ⚡ Innovation
      </span>

    </div>

  </div>
 </div>
 </div>
</section>

  );


};


export default MissionVisionSection;







