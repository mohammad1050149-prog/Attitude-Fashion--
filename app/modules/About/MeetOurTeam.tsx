import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const team = [
  {
    name: "Ahmed Khan",
    role: "Founder & CEO",
    image: "/imhj.jpeg",
  },
  {
    name: "Ali Raza",
    role: "Creative Director",
    image: "/imgjj.jpeg",
  },
  {
    name: "Usman Malik",
    role: "Fashion Designer",
    image: "/imgu.jpeg",
  },
  {
    name: "Hamza Sheikh",
    role: "Marketing Manager",
    image: "/imgy.jpeg",
  },
];


const MeetOurTeam = () => {

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
      blur-[160px]
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
      blur-[160px]
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
          tracking-[8px]
          font-bold
          animate-pulse
          ">
            Meet Our Team
          </span>



          <h2 className="
          mt-4
          text-4xl
          md:text-6xl
          font-extrabold
          text-white
          ">

            The People Behind

            <span className="
            block
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            ">
              Our Success
            </span>

          </h2>



          <div className="
          w-28
          h-1
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
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
            Our talented team combines creativity, passion, and innovation
            to deliver premium fashion experiences for every customer.
          </p>


        </div>





        {/* Team Cards */}


        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">




          {team.map((member,index)=>(


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
              -left-32
              top-0
              h-full
              w-20
              rotate-12
              bg-white/10
              transition-all
              duration-1000
              group-hover:left-[130%]
              z-20
              ">
              </div>






              {/* Image Section */}


              <div className="
              relative
              h-[360px]
              overflow-hidden
              ">



                <Image

                src={member.image}

                alt={member.name}

                fill

                className="
                object-cover
                transition-all
                duration-1000
                group-hover:scale-110
                "

                />




                {/* Image Overlay */}


                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
                ">
                </div>
                                {/* Social Icons */}


                <div className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                flex
                gap-3
                opacity-0
                translate-y-8
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-700
                ">



                  <a
                  href="#"
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-cyan-500
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white
                  hover:text-cyan-500
                  transition
                  "
                  >

                    <FaFacebookF />

                  </a>





                  <a
                  href="#"
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-cyan-500
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white
                  hover:text-cyan-500
                  transition
                  "
                  >

                    <FaInstagram />

                  </a>





                  <a
                  href="#"
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-cyan-500
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white
                  hover:text-cyan-500
                  transition
                  "
                  >

                    <FaTwitter />

                  </a>





                  <a
                  href="#"
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-cyan-500
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white
                  hover:text-cyan-500
                  transition
                  "
                  >

                    <FaLinkedinIn />

                  </a>



                </div>



              </div>






              {/* Content */}


              <div className="
              p-7
              text-center
              ">



                <h3 className="
                text-2xl
                font-bold
                text-white
                group-hover:text-cyan-400
                transition-all
                duration-300
                ">

                  {member.name}

                </h3>





                <p className="
                mt-2
                text-cyan-300
                font-medium
                ">

                  {member.role}

                </p>
                

                <div className="
                mx-auto
                mt-6
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
        shadow-[0_0_35px_rgba(6,182,212,0.25)]
        hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]
        transition-all
        duration-700
        ">




          <h3 className="
          text-3xl
          md:text-4xl
          font-bold
          text-white
          ">

            Together We Create Premium Fashion

          </h3>





          <p className="
          mt-5
          text-lg
          text-gray-300
          max-w-3xl
          mx-auto
          leading-8
          ">

            Our experienced team is dedicated to designing modern,
            high-quality fashion that inspires confidence and style.

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
          font-bold
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
          "

          >

            Meet Our Collection

          </button>



        </div>



      </div>



    </section>


  );


};


export default MeetOurTeam;













