"use client";

import { useState, useEffect } from "react";

export default function BoyFashionHero() {

  const images = [
   "/img (69).png",
  "/img (70).png",
  "/img (27).jpeg",
  "/img (66).png",
  "/img (68).png",
  "/img (26).jpeg",
  "/img (67).png",
  "/WhatsApp Image 2026-08-06 at 1.22.46 AM.jpeg",
  ];

  const [active, setActive] = useState(0);


  useEffect(() => {

    const slider = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(slider);

  }, []);


  return (

    <section className="relative w-full h-[80vh] overflow-hidden ">


      {/* Images Slider */}
      {images.map((img,index)=>(
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 
          ${active===index ? "opacity-100":"opacity-0"}`}
        >

          <img
            src={img}
            alt="Attitude Boys Fashion"
            className="w-full h-full object-cover"
          />

        </div>
      ))}



      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>



      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">


        <div>


          <h1 className="
          text-5xl md:text-7xl 
          font-bold text-white
          ">

            Rule Your
            <span className="text-cyan-400">
              Style
            </span>

          </h1>



          <p className="
          mt-5 text-gray-300 
          text-lg md:text-xl
          ">

            Premium Men's Fashion
            <br/>
            Confidence • Attitude • Class

          </p>



          <button
          className="
          mt-8 px-10 py-3
          rounded-full
          bg-cyan-500
          hover:bg-cyan-600
          text-black
          font-bold
          transition
          "
          >

            Explore Collection

          </button>


        </div>


      </div>



      {/* Dots */}
      <div className="
      absolute bottom-8 
      left-1/2 -translate-x-1/2 
      flex gap-3
      ">

        {images.map((_,i)=>(

          <button
          key={i}
          onClick={()=>setActive(i)}
          className={`
          w-3 h-3 rounded-full
          ${active===i 
          ? "bg-cyan-400"
          :"bg-white/40"}
          `}
          />

        ))}

      </div>


    </section>

  );
}