"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";


const OurStory = () => {


  const router = useRouter();



  return (

    <section className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-slate-950
    via-black
    to-slate-950
    py-24
    ">



      {/* Background Glow */}


      <div className="
      absolute
      -top-10
      -left-10
      w-80
      h-80
      bg-cyan-500/10
      rounded-full
      blur-[120px]
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
      rounded-full
      blur-[140px]
      animate-pulse
      ">
      </div>





      <div className="
      relative
      max-w-7xl
      mx-auto
      px-6
      ">





        <div className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
        ">





          {/* Image */}


          <div className="
          relative
          group
          ">



            <div className="
            absolute
            -inset-2
            rounded-3xl
            bg-gradient-to-r
            from-cyan-500/30
            to-blue-500/30
            blur-xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
            ">
            </div>





            <div className="
            relative
            h-[500px]
            rounded-3xl
            overflow-hidden
            border
            border-cyan-500/20
            shadow-[0_0_35px_rgba(6,182,212,0.2)]
            ">



              <Image
                src="/img l.png"
                alt="Our Story"
                fill
                className="
                object-cover
                transition-all
                duration-1000
                group-hover:scale-110
                "
              />



              {/* Overlay */}


              <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
              ">
              </div>
id="ourstory-part2"


              {/* Floating Badge */}


              <div className="
              absolute
              bottom-6
              left-6
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border
              border-cyan-500/20
              px-6
              py-4
              ">


                <h3 className="
                text-3xl
                font-bold
                text-cyan-400
                ">

                  5+

                </h3>



                <p className="
                text-gray-200
                text-sm
                ">

                  Years Experience

                </p>


              </div>



            </div>


          </div>






          {/* Content */}



          <div className="
          text-white
          ">




            <span className="
            inline-block
            text-cyan-400
            uppercase
            tracking-[6px]
            font-bold
            animate-pulse
            ">

              Our Story

            </span>





            <h2 className="
            mt-5
            text-4xl
            md:text-6xl
            font-extrabold
            leading-tight
            ">


              Fashion That Shows


              <span className="
              block
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              ">

                Your Attitude

              </span>


            </h2>





            <div className="
            w-24
            h-1
            bg-cyan-400
            rounded-full
            mt-6
            ">
            </div>
            

            {/* Paragraphs */}



            <p className="
            mt-8
            text-gray-300
            leading-8
            text-lg
            ">

              Boys Attitude Fashion was created for modern men who want
              to express their personality through clothing. We believe
              fashion is not only about dressing well, but also about
              confidence, attitude, and individuality.

            </p>






            <p className="
            mt-6
            text-gray-400
            leading-8
            ">

              From premium hoodies and stylish jackets to casual
              streetwear, we create designs that help you stand out.
              Every product is crafted with quality, comfort,
              and timeless style.

            </p>






            {/* Stats */}



            <div className="
            grid
            grid-cols-2
            gap-6
            mt-10
            ">





              <div className="
              rounded-2xl
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-lg
              p-6
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
              transition-all
              duration-500
              ">



                <h3 className="
                text-4xl
                font-bold
                text-cyan-400
                ">

                  5+

                </h3>



                <p className="
                text-gray-300
                mt-2
                ">

                  Years Experience

                </p>



              </div>





              <div className="
              rounded-2xl
              border
              border-cyan-500/20
              bg-white/5
              backdrop-blur-lg
              p-6
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]
              transition-all
              duration-500
              ">



                <h3 className="
                text-4xl
                font-bold
                text-cyan-400
                ">

                  1000+

                </h3>



                <p className="
                text-gray-300
                mt-2
                ">

                  Happy Customers

                </p>



              </div>



            </div>



            {/* Buttons */}



            <div className="
            mt-10
            flex
            flex-wrap
            gap-5
            ">



              <button

                onClick={() => router.push("/Collection")}

                className="
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-cyan-500
                text-white
                font-bold
                transition-all
                duration-700
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
                "

              >

                Discover More

              </button>






              <button

                onClick={() => router.push("/Contact")}

                className="
                px-8
                py-4
                rounded-full
                border-2
                border-cyan-400
                text-white
                font-bold
                transition-all
                duration-700
                hover:bg-cyan-500
                hover:border-cyan-500
                hover:scale-105
                "

              >

                Contact Us

              </button>





            </div>





          </div>




        </div>
        

      </div>


    </section>


  );


};


export default OurStory;
