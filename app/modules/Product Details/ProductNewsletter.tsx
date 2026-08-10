"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function ProductNewsletter() {

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);


  const handleSubscribe = () => {

    if(email){
      setSubscribed(true);
      setEmail("");
    }

  };


  return (
    <section className="
    bg-black
    text-white
    py-24
    px-6
    ">


      <div className="
      max-w-7xl
      mx-auto
      ">



        <div className="
        relative
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-cyan-400
        to-cyan-600
        shadow-[0_0_50px_rgba(34,211,238,0.25)]
        ">




          <div className="
          grid
          lg:grid-cols-2
          items-center
          ">



            {/* Content */}


            <div className="
            relative
            z-10
            p-10
            lg:p-16
            ">



              <span className="
              text-black
              uppercase
              tracking-[5px]
              font-bold
              text-sm
              ">

                Stay Updated

              </span>





              <h2 className="
              text-4xl
              md:text-6xl
              font-black
              text-black
              mt-5
              leading-tight
              ">

                Get Exclusive

                <span className="
                block
                ">
                  Fashion Updates
                </span>

              </h2>






              <p className="
              text-black/80
              text-lg
              mt-6
              max-w-xl
              leading-8
              ">

                Subscribe today and receive exclusive offers,
                new arrivals, limited editions and premium
                streetwear collections before everyone else.

              </p>







              {/* Input */}


              <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
              ">



                <input

                value={email}

                onChange={(e)=>setEmail(e.target.value)}

                type="email"

                placeholder="Enter your email"

                className="
                flex-1
                px-6
                py-4
                rounded-xl
                outline-none
                text-black
                shadow-xl
                placeholder:text-gray-500
                "

                />







                <button

                onClick={handleSubscribe}

                className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-black
                text-white
                font-bold
                hover:bg-white
                hover:text-black
                hover:scale-105
                transition-all
                duration-300
                "

                >

                  Subscribe

                  <FaArrowRight/>

                </button>



              </div>







              {
                subscribed && (

                  <div className="
                  flex
                  items-center
                  gap-3
                  mt-5
                  text-black
                  font-bold
                  ">

                    <FaCheck/>

                    Thanks for subscribing!

                  </div>

                )
              }





            </div>








            {/* Image */}



            <div className="
            hidden
            lg:flex
            justify-center
            items-end
            relative
            h-full
            ">


              <Image

              src="/img (64).png"

              alt="Newsletter"

              width={620}

              height={1020}

              className="
              object-cover
              hover:scale-105
              transition-transform
              my-14
              rounded-2xl
              duration-700

              "

              />


            </div>






          </div>







          {/* Glow */}


          <div className="
          absolute
          -top-20
          -right-20
          w-80
          h-80
          bg-white/30
          rounded-full
          blur-3xl
          ">
          </div>




          <div className="
          absolute
          -bottom-20
          -left-20
          w-72
          h-72
          bg-black/20
          rounded-full
          blur-3xl
          ">
          </div>




        </div>




      </div>


    </section>
  );
}