"use client";

import React from "react";

const Category = () => {

  const categories = [
    {
      name: "T-Shirts",
      image: "/1st img.png",
    },
    {
      name: "Hoodies",
      image: "/2nd img.png",
    },
    {
      name: "Jackets",
      image: "/2nd img (2).png",
    },
    {
      name: "Sneakers",
      image: "/3 img.png",
    },
  ];


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-slate-950
      via-black
      to-slate-950
      py-24
      "
    >


      {/* Background Glow */}


      <div
        className="
        absolute
        -top-40
        -left-40
        w-[450px]
        h-[450px]
        bg-cyan-500/20
        rounded-full
        blur-[150px]
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        w-[400px]
        h-[400px]
        bg-blue-500/20
        rounded-full
        blur-[150px]
        "
      />



      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
        "
      >


        {/* Heading Section */}


        <div
          className="
          text-center
          mb-16
          "
        >


          <p
            className="
            text-cyan-400
            uppercase
            tracking-[6px]
            font-bold
            animate-pulse
            "
          >
            Premium Collection
          </p>


          <h2
            className="
            text-white
            text-5xl
            md:text-6xl
            font-black
            mt-4
            hover:text-cyan-400
            transition
            duration-500
            "
          >
            Shop By Category
          </h2>


          <p
            className="
            text-gray-400
            mt-5
            text-lg
            "
          >
            Explore our premium men's fashion collections.
          </p>


        </div>


        {/* Category Cards */}


        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >


          {
            categories.map((item,index)=>(


              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-[35px]
                cursor-pointer
                border
                border-slate-800
                bg-slate-900
                transition-all
                duration-700
                hover:-translate-y-5
                hover:border-cyan-400
                hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
                "
              >


                {/* Image */}


                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full
                  h-[430px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:rotate-2
                  "
                />
                                {/* Dark Overlay */}


                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-transparent
                  opacity-80
                  group-hover:opacity-100
                  transition
                  duration-500
                  "
                />


                {/* Hover Glow */}


                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  "
                />


                {/* New Badge */}


                <span
                  className="
                  absolute
                  top-5
                  left-5
                  bg-cyan-500
                  text-white
                  text-xs
                  font-bold
                  px-4
                  py-2
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  "
                >
                  NEW
                </span>


                {/* Category Number */}


                <div
                  className="
                  absolute
                  top-5
                  right-5
                  w-10
                  h-10
                  rounded-full
                  bg-black/50
                  border
                  border-cyan-400/40
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  font-bold
                  "
                >
                  0{index + 1}
                </div>



                {/* Card Content */}


                <div
                  className="
                  absolute
                  bottom-8
                  left-6
                  right-6
                  z-10
                  "
                >


                  <h3
                    className="
                    text-white
                    text-3xl
                    font-black
                    group-hover:text-cyan-400
                    transition
                    duration-500
                    "
                  >
                    {item.name}
                  </h3>



                  <p
                    className="
                    text-gray-300
                    mt-2
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                    "
                  >
                    Premium styles crafted for modern fashion lovers.
                  </p>


                  {/* Explore Button */}


                  <button
                    className="
                    mt-5
                    px-7
                    py-3
                    rounded-xl
                    bg-cyan-500
                    text-white
                    font-bold
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-500
                    hover:bg-cyan-600
                    hover:scale-110
                    hover:shadow-[0_0_25px_#06b6d4]
                    "
                  >

                    Explore Collection


                    <span
                      className="
                      group-hover:translate-x-2
                      transition
                      duration-300
                      "
                    >
                      →
                    </span>


                  </button>


                </div>
                                {/* Bottom Line Animation */}


                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-cyan-400
                  group-hover:w-full
                  transition-all
                  duration-700
                  "
                >

                </div>


              </div>


            ))
          }


        </div>



        {/* Premium Features Section */}



        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-16
          "
        >



          <div
            className="
            group
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            text-center
            hover:border-cyan-400
            transition
            duration-500
            "
          >


            <h4
              className="
              text-cyan-400
              text-2xl
              font-black
              group-hover:scale-110
              transition
              duration-500
              "
            >
              👕 Premium Styles
            </h4>


            <p
              className="
              text-gray-400
              mt-3
              leading-7
              "
            >
              Latest fashion trends designed with luxury quality.
            </p>


          </div>





          <div
            className="
            group
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            text-center
            hover:border-cyan-400
            transition
            duration-500
            "
          >


            <h4
              className="
              text-cyan-400
              text-2xl
              font-black
              group-hover:scale-110
              transition
              duration-500
              "
            >
              🚚 Fast Delivery
            </h4>


            <p
              className="
              text-gray-400
              mt-3
              leading-7
              "
            >
              Safe and fast shipping experience for every order.
            </p>


          </div>




          <div
            className="
            group
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            text-center
            hover:border-cyan-400
            transition
            duration-500
            "
          >


            <h4
              className="
              text-cyan-400
              text-2xl
              font-black
              group-hover:scale-110
              transition
              duration-500
              "
            >
              💎 Exclusive Look
            </h4>


            <p
              className="
              text-gray-400
              mt-3
              leading-7
              "
            >
              Unique collections for confident personalities.
            </p>


          </div>



        </div>
                {/* Bottom Marquee */}


        <div
          className="
          mt-16
          overflow-hidden
          rounded-xl
          border-y
          border-cyan-400/30
          bg-black/40
          py-4
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


            <div
              className="
              flex
              gap-16
              px-8
              "
            >


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                👕 T-Shirts
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                🧥 Hoodies
              </span>


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                🔥 Jackets
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                👟 Sneakers
              </span>


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                ✨ Premium Fashion
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                🛍️ New Collection
              </span>


            </div>





            {/* Duplicate */}


            <div
              className="
              flex
              gap-16
              px-8
              "
            >


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                👕 T-Shirts
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                🧥 Hoodies
              </span>


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                🔥 Jackets
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                👟 Sneakers
              </span>


              <span
                className="
                text-cyan-400
                font-bold
                text-lg
                "
              >
                ✨ Premium Fashion
              </span>


              <span
                className="
                text-white
                font-bold
                text-lg
                "
              >
                🛍️ New Collection
              </span>


            </div>


          </div>


        </div>
                


      </div>


    </section>


  );

};


export default Category;

