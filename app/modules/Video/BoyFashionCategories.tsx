// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const fashionCategories = [
//   {
//     id: 1,
//     title: "Street Wear",
//     images: ["/street1.jpg", "/street2.jpg", "/street3.jpg"],
//   },
//   {
//     id: 2,
//     title: "Casual Wear",
//     images: ["/casual1.jpg", "/casual2.jpg", "/casual3.jpg"],
//   },
//   {
//     id: 3,
//     title: "Formal Wear",
//     images: ["/formal1.jpg", "/formal2.jpg", "/formal3.jpg"],
//   },
//   {
//     id: 4,
//     title: "Luxury Collection",
//     images: ["/luxury1.jpg", "/luxury2.jpg", "/luxury3.jpg"],
//   },
//   {
//     id: 5,
//     title: "Winter Collection",
//     images: ["/winter1.jpg", "/winter2.jpg", "/winter3.jpg"],
//   },
//   {
//     id: 6,
//     title: "Traditional Wear",
//     images: ["/traditional1.jpg", "/traditional2.jpg", "/traditional3.jpg"],
//   },
//   {
//     id: 7,
//     title: "New Arrivals",
//     images: ["/new1.jpg", "/new2.jpg", "/new3.jpg"],
//   },
// ];

// export default function BoyFashionCategories() {
//   const [selected, setSelected] = useState(fashionCategories[0]);

//   return (
//     <section className="py-20 bg-[#020817]">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-5xl font-bold text-center text-white">
//           Men's Fashion Collection
//         </h2>

//         <p className="max-w-5xl mx-auto mt-8 mb-16 text-center text-xl text-gray-300 leading-10">
//           Explore premium men's fashion designed for confidence and attitude.
//           Discover streetwear, luxury outfits, casual wear, formal looks,
//           winter collections, traditional styles and the latest arrivals.
//         </p>

//         {/* Category Buttons */}
//         <div className="overflow-x-auto whitespace-nowrap pb-5">
//           <div className="flex gap-5 w-max">

//             {fashionCategories.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setSelected(item)}
//                 className={`min-w-[220px] rounded-xl px-8 py-5 text-lg font-bold border transition-all duration-300
//                   ${
//                     selected.id === item.id
//                       ? "bg-cyan-500 text-black border-cyan-500"
//                       : "bg-[#111827] text-white border-gray-700 hover:bg-cyan-500 hover:text-black"
//                   }`}
//               >
//                 {item.title}
//               </button>
//             ))}

//           </div>
//         </div>

//         {/* Images */}
//         <div className="grid md:grid-cols-3 gap-8 mt-12">

//           {selected.images.map((img, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
//             >
//               <Image
//                 src={img}
//                 alt="Boy Fashion"
//                 width={500}
//                 height={650}
//                 className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }







"use client";

import { useState } from "react";

const fashionCategories = [
  {
    id: 1,
    title: "Street Wear",
    videos: [
      "/img.mp4",
      "/img (6).mp4",
      "/img (2).mp4",
    ],
  },
  {
    id: 2,
    title: "Casual Wear",
    videos: [
      "/img (7).mp4",
      "/img (8).mp4",
      "/img (9).mp4",
    ],
  },
  {
    id: 4,
    title: "Luxury Collection",
    videos: [
      "/img (10).mp4",
      "/img (11).mp4",
      "/img (12).mp4",
    ],
  },
  {
    id: 5,
    title: "Winter Collection",
    videos: [
      "/img (15).mp4",
      "/img (13).mp4",
      "/img (14).mp4",
    ],
  },
  {
    id: 6,
    title: "Traditional Wear",
    videos: [
      "/img (18).mp4",
      "/img (17).mp4",
      "/img (16).mp4",
    ],
  },
 
];

export default function BoyFashionCategories() {
  const [selected, setSelected] = useState(fashionCategories[0]);

  return (
    <section className="py-20 bg-[#020817]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-white">
          Men's Fashion Collection
        </h2>

        <p className="max-w-5xl mx-auto mt-8 mb-16 text-center text-xl text-gray-300 leading-9">
          Discover premium men's fashion through cinematic videos.
          Explore streetwear, luxury outfits, casual looks, formal wear,
          winter collections and new arrivals.
        </p>

        {/* Category Buttons */}
        <div className="overflow-x-auto pb-5">
          <div className="flex gap-4 w-max">

            {fashionCategories.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`min-w-[220px] px-8 py-4 rounded-xl font-bold transition-all duration-300 border
                ${
                  selected.id === item.id
                    ? "bg-cyan-500 text-black border-cyan-500"
                    : "bg-[#111827] text-white border-gray-700 hover:bg-cyan-500 hover:text-black"
                }`}
              >
                {item.title}
              </button>
            ))}

          </div>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {selected.videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}