"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Collection", link: "/Collection" },
    { name: "Video", link: "/Video" },
    { name: "Services", link: "/Services" },
    { name: "Lookbook", link: "/Lookbook" },
    { name: "Product Hero", link: "/ProductHero" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl">

      <div className="max-w-[1600px] mx-auto h-20 px-8 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3 group"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30 group-hover:opacity-70 transition">
            </div>

            <Image
              src="/img (25).jpeg"
              alt="Attitude Boy Fashion"
              width={60}
              height={60}
              className="relative rounded-full object-cover border-2 border-cyan-400 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
            />

          </div>


          <h1 className="text-3xl font-extrabold tracking-wide">

            <span className="text-white">
              Attitude
            </span>

            <span className="text-cyan-400">
              {" "}Boy
            </span>

            <span className="text-white">
              {" "}Fashion
            </span>

          </h1>


        </Link>



        {/* NAV LINKS */}

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5">

          {links.map((item)=>(
            <Link
              key={item.name}
              href={item.link}
              className="relative text-white text-[15px] font-semibold group transition hover:text-cyan-400 whitespace-nowrap"
            >

              {item.name}

              <span className="
              absolute
              left-0
              -bottom-2
              h-[2px]
              w-0
              bg-cyan-400
              rounded-full
              transition-all
              duration-500
              group-hover:w-full
              ">
              </span>

            </Link>
          ))}


        </nav>



   {/* BUTTONS */}

<div className="hidden lg:flex items-center gap-3">

  {/* LOGIN */}

  <div className="relative">

    <button
      onClick={() => {
        setLoginOpen(!loginOpen);
        setSignupOpen(false);
      }}
      className="
        w-32
        py-3
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        shadow-[0_10px_30px_rgba(6,182,212,0.45)]
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Login
    </button>

    {loginOpen && (
      <div className="absolute right-0 mt-3 w-52 bg-black border border-cyan-400 rounded-xl shadow-xl overflow-hidden">

        {/* User Login → ABOUT */}
        <Link
          href="/About"
          className="block px-5 py-3 text-white hover:bg-cyan-500 transition"
          onClick={() => setLoginOpen(false)}
        >
          User Login
        </Link>

        {/* Admin Login → ABOUT */}
        <Link
          href="/About"
          className="block px-5 py-3 text-white hover:bg-cyan-500 transition"
          onClick={() => setLoginOpen(false)}
        >
          Admin Login
        </Link>

      </div>
    )}

  </div>


  {/* SIGN UP */}

  <div className="relative">

    <button
      onClick={() => {
        setSignupOpen(!signupOpen);
        setLoginOpen(false);
      }}
      className="
        w-32
        py-3
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        shadow-[0_10px_30px_rgba(6,182,212,0.45)]
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Sign Up
    </button>

    {signupOpen && (
      <div className="absolute right-0 mt-3 w-52 bg-black border border-cyan-400 rounded-xl shadow-xl overflow-hidden">

        {/* User Sign Up → ABOUT */}
        <Link
          href="/About"
          className="block px-5 py-3 text-white hover:bg-cyan-500 transition"
          onClick={() => setSignupOpen(false)}
        >
          User Sign Up
        </Link>

        {/* Seller Sign Up → ABOUT */}
        <Link
          href="/About"
          className="block px-5 py-3 text-white hover:bg-cyan-500 transition"
          onClick={() => setSignupOpen(false)}
        >
          Seller Sign Up
        </Link>

      </div>
    )}

  </div>

</div>

        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
        >
          ☰
        </button>


      </div>



      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="lg:hidden bg-black border-t border-cyan-400 px-6 py-6">

          <nav className="flex flex-col gap-5">

            {links.map((item)=>(

              <Link
                key={item.name}
                href={item.link}
                className="text-white hover:text-cyan-400 transition"
                onClick={()=>setMenuOpen(false)}
              >
                {item.name}
              </Link>

            ))}


          </nav>


        </div>

      )}


    </header>
  );
}







