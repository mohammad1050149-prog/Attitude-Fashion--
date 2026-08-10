// "use client";

// import { useEffect, useState } from "react";

// type RainItem = {
//   id: number;
//   left: number;
//   delay: number;
//   duration: number;
// };

// export default function FashionRain() {
//   const [items, setItems] = useState<RainItem[]>([]);

//   useEffect(() => {
//     const rainItems: RainItem[] = Array.from({ length: 25 }, (_, index) => ({
//       id: index,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       duration: 5 + Math.random() * 5,
//     }));

//     setItems(rainItems);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">

//       {items.map((item) => (
//         <span
//           key={item.id}
//          className="absolute text-lg animate-fall"
//           style={{
//             left: `${item.left}%`,
//             top: "-50px",
//             animationDelay: `${item.delay}s`,
//             animationDuration: `${item.duration}s`,
//           }}
//         >
//           {item.id % 2 === 0 ? "💙" : "💎"}
//         </span>
//       ))}

//       <style jsx>{`
//         @keyframes fall {
//           0% {
//             transform: translateY(-120px) rotate(0deg);
//             opacity: 0;
//           }

//           10% {
//             opacity: 1;
//           }

//           90% {
//             opacity: 1;
//           }

//           100% {
//             transform: translateY(110vh) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .animate-fall {
//           animation-name: fall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }
//       `}</style>

//     </div>
//   );
// }"use client";

"use client";


import { useEffect, useState } from "react";

type Item = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

export default function FashionRain() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const rain = Array.from({ length: 40 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 5,
      size: 14 + Math.random() * 8,
    }));

    setItems(rain);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">

      {items.map((item) => (
        <span
          key={item.id}
          className="absolute animate-fall"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.id % 2 === 0 ? "💙" : "💎"}
        </span>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-120px) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}