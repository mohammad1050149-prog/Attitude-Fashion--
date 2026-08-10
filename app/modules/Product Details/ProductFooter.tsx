"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

export default function ProductFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-4xl font-black text-transparent">
              Boys Attitude
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Premium streetwear fashion designed for confidence,
              comfort and modern lifestyle.
            </p>

            <div className="mt-8 flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaYoutube />, href: "#" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Home",
                "About",
                "Collections",
                "Products",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-400">
              {[
                "Oversized Tees",
                "Hoodies",
                "Denim Jackets",
                "Cargo Pants",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                Karachi, Pakistan
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                support@boysattitude.com
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                +92 300 1234567
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-cyan-400" />
                Mon - Sat : 9AM - 8PM
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Join Our Newsletter
              </h3>

              <p className="mt-2 text-gray-400">
                Get exclusive offers and updates directly to your inbox.
              </p>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-cyan-400/20 bg-white/5 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
              />

              <button className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cyan-400/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">
          <p className="text-center text-gray-500 md:text-left">
            © 2026 Boys Attitude Fashion. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-gray-500 transition hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-black transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}