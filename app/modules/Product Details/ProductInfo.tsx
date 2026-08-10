"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaShoppingBag,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProductInfo() {

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");


  const sizes = ["S", "M", "L", "XL"];

  const colors = [
    {
      name: "black",
      class: "bg-black border-white",
    },
    {
      name: "white",
      class: "bg-white",
    },
    {
      name: "red",
      class: "bg-red-600",
    },
    {
      name: "blue",
      class: "bg-blue-600",
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


      {/* Background Glow */}

      <div className="
      absolute
      -left-40
      top-0
      w-96
      h-96
      bg-cyan-500/10
      rounded-full
      blur-[150px]
      ">
      </div>


      <div className="
      absolute
      -right-40
      bottom-0
      w-96
      h-96
      bg-cyan-500/10
      rounded-full
      blur-[150px]
      ">
      </div>




      <div className="
      relative
      max-w-7xl
      mx-auto
      grid
      lg:grid-cols-2
      gap-16
      items-center
      ">




        {/* Product Image */}


        <div className="
        relative
        overflow-hidden
        rounded-[35px]
        bg-white/5
        border
        border-cyan-400/20
        group
        shadow-[0_0_50px_rgba(34,211,238,0.15)]
        ">


          {/* Badge */}

          <div className="
          absolute
          top-6
          left-6
          z-10
          bg-cyan-400
          text-black
          px-5
          py-2
          rounded-full
          text-sm
          font-bold
          ">
            NEW ARRIVAL
          </div>



          {/* Wishlist */}

          <button className="
          absolute
          right-6
          top-6
          z-10
          w-12
          h-12
          rounded-full
          bg-black/50
          flex
          items-center
          justify-center
          hover:bg-cyan-400
          hover:text-black
          transition
          ">
            <FaHeart/>
          </button>




          <div className="
          relative
          h-[650px]
          ">


            <Image
              src="/t-shirt.png"
              alt="Urban Oversized T-Shirt"
              fill
              priority
              className="
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
            />


          </div>



          <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          to-transparent
          ">
          </div>


        </div>





        {/* Product Details */}


        <div>



          <p className="
          text-cyan-400
          uppercase
          tracking-[6px]
          font-semibold
          ">
            Premium Streetwear
          </p>




          <h2 className="
          text-5xl
          md:text-6xl
          font-black
          mt-5
          leading-tight
          ">

            Urban Oversized

            <span className="
            block
            text-cyan-400
            ">
              Tee
            </span>

          </h2>




          {/* Rating */}


          <div className="
          flex
          items-center
          gap-2
          mt-7
          ">


            <div className="
            flex
            text-yellow-400
            ">

              {[1,2,3,4,5].map((star)=>(
                <FaStar key={star}/>
              ))}

            </div>


            <span className="text-gray-400">
              5.0 (128 Reviews)
            </span>


          </div>





          {/* Price */}


          <div className="
          flex
          items-center
          gap-5
          mt-8
          ">


            <h3 className="
            text-5xl
            font-black
            text-cyan-400
            ">
              $49
            </h3>


            <del className="
            text-gray-500
            text-2xl
            ">
              $69
            </del>


            <span className="
            bg-red-500
            px-3
            py-1
            rounded-full
            text-sm
            font-bold
            ">
              -30%
            </span>


          </div>
                    {/* Description */}

          <p className="
          mt-8
          text-lg
          leading-8
          text-gray-400
          max-w-xl
          ">
            Elevate your streetwear style with our premium oversized
            t-shirt. Crafted from 100% heavyweight cotton for maximum
            comfort, durability and a relaxed modern fit.
          </p>




          {/* Features */}

          <div className="
          mt-8
          space-y-4
          ">


            <div className="
            flex
            items-center
            gap-3
            text-gray-300
            ">

              <FaCheckCircle className="text-cyan-400"/>

              Premium Heavyweight Cotton

            </div>



            <div className="
            flex
            items-center
            gap-3
            text-gray-300
            ">

              <FaCheckCircle className="text-cyan-400"/>

              Modern Oversized Fit

            </div>



            <div className="
            flex
            items-center
            gap-3
            text-gray-300
            ">

              <FaCheckCircle className="text-cyan-400"/>

              Fast & Secure Delivery

            </div>


          </div>







          {/* Sizes */}


          <div className="
          mt-10
          ">


            <h4 className="
            mb-5
            text-xl
            font-bold
            ">
              Select Size
            </h4>



            <div className="
            flex
            flex-wrap
            gap-4
            ">


              {sizes.map((item)=>(


                <button

                key={item}

                onClick={() => setSize(item)}

                className={`
                w-14
                h-14
                rounded-xl
                font-bold
                transition-all
                duration-300

                ${
                  size === item
                  ?
                  "bg-cyan-400 text-black border-cyan-400"
                  :
                  "border border-white/20 hover:border-cyan-400"
                }

                `}

                >

                  {item}

                </button>


              ))}


            </div>


          </div>









          {/* Colors */}



          <div className="
          mt-10
          ">


            <h4 className="
            mb-5
            text-xl
            font-bold
            ">
              Available Colors
            </h4>



            <div className="
            flex
            gap-5
            ">


              {colors.map((item)=>(


                <button

                key={item.name}

                onClick={() => setColor(item.name)}

                className={`

                w-12
                h-12
                rounded-full
                border-2
                transition-all
                duration-300

                ${item.class}

                ${
                  color === item.name
                  ?
                  "scale-125 border-cyan-400"
                  :
                  "border-transparent"
                }

                `}

                >

                </button>


              ))}


            </div>


          </div>









          {/* Quantity */}



          <div className="
          mt-10
          ">


            <h4 className="
            mb-5
            text-xl
            font-bold
            ">
              Quantity
            </h4>




            <div className="
            flex
            w-fit
            items-center
            overflow-hidden
            rounded-xl
            border
            border-white/20
            ">



              <button

              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }

              className="
              px-6
              py-3
              hover:bg-cyan-400
              hover:text-black
              transition
              "

              >

                -

              </button>






              <span className="
              border-x
              border-white/20
              px-8
              py-3
              font-bold
              ">

                {quantity}

              </span>







              <button

              onClick={() =>
                setQuantity(quantity + 1)
              }

              className="
              px-6
              py-3
              hover:bg-cyan-400
              hover:text-black
              transition
              "

              >

                +

              </button>




            </div>


          </div>
                    {/* Buttons */}


          <div className="
          flex
          flex-wrap
          gap-5
          mt-12
          ">



            <button

            className="
            flex
            items-center
            gap-3
            px-10
            py-4
            rounded-xl
            bg-cyan-400
            text-black
            font-extrabold
            hover:bg-white
            hover:scale-105
            transition-all
            duration-300
            "

            >

              <FaShoppingBag/>

              Add To Cart

            </button>







            <button

            className="
            px-10
            py-4
            rounded-xl
            border
            border-cyan-400
            text-cyan-400
            font-extrabold
            hover:bg-cyan-400
            hover:text-black
            hover:scale-105
            transition-all
            duration-300
            "

            >

              Buy Now

            </button>



          </div>







          {/* Product Info Small Cards */}



          <div className="
          grid
          sm:grid-cols-3
          gap-4
          mt-12
          ">



            <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            text-center
            ">

              <h5 className="
              font-bold
              text-cyan-400
              ">
                Material
              </h5>

              <p className="text-gray-400 text-sm mt-2">
                Premium Cotton
              </p>

            </div>





            <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            text-center
            ">


              <h5 className="
              font-bold
              text-cyan-400
              ">
                Delivery
              </h5>


              <p className="text-gray-400 text-sm mt-2">
                Fast Shipping
              </p>


            </div>






            <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-5
            text-center
            ">


              <h5 className="
              font-bold
              text-cyan-400
              ">
                Return
              </h5>


              <p className="text-gray-400 text-sm mt-2">
                Easy Returns
              </p>


            </div>




          </div>





        </div>


      </div>


    </section>
  );
}