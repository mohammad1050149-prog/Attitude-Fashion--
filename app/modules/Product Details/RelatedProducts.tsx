"use client";

import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";


const products = [
  {
    id: 1,
    name: "Premium Black Hoodie",
    price: "$79",
    image: "/img5 (2).png",
  },
  {
    id: 2,
    name: "Urban Oversized Tee",
    price: "$49",
    image: "/img44.png",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    price: "$99",
    image: "/img11.png",
  },
  {
    id: 4,
    name: "Street Cargo Pants",
    price: "$69",
    image: "/img22.png",
  },
];


export default function RelatedProducts() {

  return (

    <section className="
    relative
    overflow-hidden
    bg-black
    text-white
    py-24
    px-6
    ">


      {/* Glow */}

      <div className="
      absolute
      -right-40
      top-20
      w-96
      h-96
      bg-cyan-400/10
      rounded-full
      blur-[150px]
      ">
      </div>





      <div className="
      max-w-7xl
      mx-auto
      relative
      ">



        {/* Heading */}


        <div className="
        text-center
        mb-16
        ">


          <p className="
          text-cyan-400
          uppercase
          tracking-[5px]
          font-semibold
          ">

            You May Also Like

          </p>





          <h2 className="
          text-4xl
          md:text-6xl
          font-black
          mt-5
          ">

            Related

            <span className="
            text-cyan-400
            ">
              Products
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

            Complete your streetwear collection with our premium
            best-selling fashion essentials.

          </p>


        </div>









        {/* Products */}


        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">


          {
            products.map((item)=>(


              <div

              key={item.id}

              className="
              group
              relative
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[30px]
              overflow-hidden
              hover:border-cyan-400
              hover:-translate-y-3
              transition-all
              duration-500
              shadow-2xl
              ">







                {/* Badge */}


                <span className="
                absolute
                z-10
                top-5
                left-5
                bg-cyan-400
                text-black
                px-4
                py-1
                rounded-full
                text-xs
                font-bold
                ">

                  BEST SELLER

                </span>






                {/* Wishlist */}


                <button className="
                absolute
                z-10
                right-5
                top-5
                w-10
                h-10
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








                {/* Image */}



                <div className="
                relative
                h-80
                overflow-hidden
                ">


                  <Image

                  src={item.image}

                  alt={item.name}

                  fill

                  className="
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                  "

                  />




                  <div className="
                  absolute
                  inset-0
                  bg-cyan-400/0
                  group-hover:bg-cyan-400/10
                  transition
                  ">
                  </div>



                </div>









                {/* Content */}



                <div className="
                p-6
                ">





                  {/* Rating */}


                  <div className="
                  flex
                  gap-1
                  text-yellow-400
                  ">


                    {
                      [1,2,3,4,5].map((star)=>(
                        <FaStar key={star}/>
                      ))
                    }


                  </div>








                  <h3 className="
                  text-xl
                  font-bold
                  mt-4
                  group-hover:text-cyan-400
                  transition
                  ">

                    {item.name}

                  </h3>








                  <div className="
                  flex
                  justify-between
                  items-center
                  mt-5
                  ">


                    <p className="
                    text-2xl
                    font-black
                    text-cyan-400
                    ">

                      {item.price}

                    </p>


                  </div>







                  <button className="
                  w-full
                  mt-6
                  py-3
                  rounded-xl
                  bg-cyan-400
                  text-black
                  font-bold
                  hover:bg-white
                  hover:scale-105
                  transition-all
                  duration-300
                  ">

                    View Product

                  </button>




                </div>





              </div>


            ))
          }



        </div>





      </div>


    </section>

  );

}