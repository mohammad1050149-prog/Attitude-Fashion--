import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo (10).png"
                alt="Attitude Boys Fashion"
                width={75}
                height={75}
                className="object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold tracking-wider uppercase text-white">
                  Attitude
                </h2>

                <p className="text-xs tracking-[7px] uppercase text-gray-400">
                  Boys Fashion
                </p>
              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-400">
              Premium men's fashion brand delivering luxury streetwear,
              modern outfits and timeless confidence for every gentleman.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/" className="hover:text-white duration-300">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/collection"
                  className="hover:text-white duration-300"
                >
                  Collection
                </Link>
              </li>

              <li>
                <Link
                  href="/lookbook"
                  className="hover:text-white duration-300"
                >
                  Lookbook
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-white duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Categories
            </h3>

            <ul className="space-y-4">

              <li className="hover:text-white cursor-pointer duration-300">
                Jackets
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Coats
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Shirts
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                T-Shirts
              </li>

              <li className="hover:text-white cursor-pointer duration-300">
                Jeans
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4">

              <li>📍 Lahore, Pakistan</li>

              <li>📞 +92 300 1234567</li>

              <li>✉️ info@attitudeboysfashion.com</li>

              <li>⏰ Monday - Saturday</li>

              <li>09:00 AM - 08:00 PM</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026
            <span className="text-white font-semibold">
              {" "}Attitude Boys Fashion
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link href="#" className="hover:text-white duration-300">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white duration-300">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;