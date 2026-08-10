"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaStar,
  FaEye,
  FaShoppingBag,
} from "react-icons/fa";


const arrivals = [
  {
    id: 1,
    name: "Urban Oversized Tee",
    image: "/img33.jpeg",
    price: "$39",
    rating: 5,
  },
  {
    id: 2,
    name: "Classic Hoodie",
    image: "/img9.jpeg",
    price: "$59",
    rating: 4,
  },
  {
    id: 3,
    name: "Black Denim Jacket",
    image: "/img5.jpeg",
    price: "$89",
    rating: 5,
  },
  {
    id: 4,
    name: "Urban Sneakers",
    image: "/img55.jpeg",
    price: "$99",
    rating: 4,
  },
];



const Arrivals = () => {


  const [liked, setLiked] = useState<number[]>([]);



  const toggleLike = (id:number)=>{

    setLiked((prev)=>

      prev.includes(id)

      ? prev.filter(item=>item !== id)

      : [...prev,id]

    );

  };



  return (

<section
className="
relative
overflow-hidden
bg-gradient-to-br
from-black
via-slate-950
to-cyan-950
py-24
"
>


{/* Glow Effects */}

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


{/* Heading */}


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
tracking-[8px]
font-bold
animate-pulse
"
>
Just Dropped
</p>



<h2
className="
text-white
text-5xl
md:text-6xl
font-black
mt-4
hover:text-cyan-400
transition duration-500
"
>
New Arrivals
</h2>



<p
className="
text-gray-400
mt-5
text-lg
"
>
Fresh styles designed for your everyday attitude.
</p>


</div>





{/* Cards Start */}

<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"
>


{arrivals.map((item)=>(


<div
key={item.id}
className="
group
relative
bg-slate-900
rounded-[35px]
overflow-hidden
border
border-slate-800
hover:border-cyan-400
transition-all
duration-500
hover:-translate-y-4
hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
"
>


{/* Image Area */}

<div
className="
relative
overflow-hidden
"
>


<img

src={item.image}

alt={item.name}

className="
w-full
h-[340px]
object-cover
transition
duration-700
group-hover:scale-110
"

/>



{/* Dark Overlay */}

<div
className="
absolute
inset-0
bg-black/20
group-hover:bg-black/40
transition
"
/>



{/* Wishlist */}

<button

onClick={()=>toggleLike(item.id)}

className="
absolute
top-5
right-5
bg-black/60
p-3
rounded-full
text-white
hover:scale-110
transition
"

>


<FaHeart

className={

liked.includes(item.id)

?

"text-red-500"

:

"text-white"

}

/>


</button>



</div>{/* Product Info */}

<div
className="
p-6
"
>


<h3
className="
text-white
text-xl
font-bold
group-hover:text-cyan-400
transition
duration-300
"
>
{item.name}
</h3>



{/* Rating */}

<div
className="
flex
gap-1
mt-3
"
>

{
Array.from({length:item.rating}).map((_,index)=>(

<FaStar

key={index}

className="
text-yellow-400
text-sm
"

/>

))

}

</div>




<div
className="
flex
justify-between
items-center
mt-6
"
>


<span
className="
text-cyan-400
text-2xl
font-black
"
>
{item.price}
</span>



<button

className="
flex
items-center
gap-2
bg-cyan-500
hover:bg-cyan-600
text-white
px-5
py-3
rounded-xl
font-semibold
transition
duration-500
hover:scale-110
"

>

<FaShoppingBag />

Buy Now

</button>


</div>


</div>




{/* Hover Quick View */}


<div
className="
absolute
inset-x-0
bottom-0
translate-y-full
group-hover:translate-y-0
transition-all
duration-500
bg-black/80
backdrop-blur-md
p-4
flex
justify-center
"
>


<button

className="
flex
items-center
gap-2
text-cyan-400
font-semibold
hover:text-white
transition
"

>

<FaEye />

Quick View

</button>


</div>



</div>


))}



</div>{/* Premium Bottom Features */}


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
bg-white/5
border
border-cyan-500/20
rounded-3xl
p-6
text-center
backdrop-blur-lg
hover:bg-cyan-500/10
transition
duration-500
group
"
>

<h4
className="
text-cyan-400
text-xl
font-bold
group-hover:scale-110
transition
"
>
✨ Premium Quality
</h4>


<p
className="
text-gray-400
mt-3
"
>
High quality fashion pieces designed for modern style.
</p>


</div>





<div
className="
bg-white/5
border
border-cyan-500/20
rounded-3xl
p-6
text-center
backdrop-blur-lg
hover:bg-cyan-500/10
transition
duration-500
group
"
>

<h4
className="
text-cyan-400
text-xl
font-bold
group-hover:scale-110
transition
"
>
🚚 Fast Delivery
</h4>


<p
className="
text-gray-400
mt-3
"
>
Quick and secure delivery at your doorstep.
</p>


</div>





<div
className="
bg-white/5
border
border-cyan-500/20
rounded-3xl
p-6
text-center
backdrop-blur-lg
hover:bg-cyan-500/10
transition
duration-500
group
"
>

<h4
className="
text-cyan-400
text-xl
font-bold
group-hover:scale-110
transition
"
>
💎 Exclusive Style
</h4>


<p
className="
text-gray-400
mt-3
"
>
Unique collections made for your attitude.
</p>


</div>


</div>





{/* Moving Marquee Section */}


<div
className="
mt-20
relative
overflow-hidden
border-y
border-cyan-400/30
bg-black/40
py-5
"
>


<div
className="
flex
whitespace-nowrap
animate-marquee
"
>


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
🔥 NEW ARRIVALS
</span>


<span
className="
text-white
font-bold
text-lg
"
>
✦ PREMIUM STREETWEAR
</span>


<span
className="
text-cyan-400
font-bold
text-lg
"
>
✨ TRENDING FASHION
</span>


<span
className="
text-white
font-bold
text-lg
"
>
💎 LUXURY COLLECTION
</span>


<span
className="
text-cyan-400
font-bold
text-lg
"
>
🛍️ SHOP NOW
</span>


</div>




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
🔥 NEW ARRIVALS
</span>


<span
className="
text-white
font-bold
text-lg
"
>
✦ PREMIUM STREETWEAR
</span>


<span
className="
text-cyan-400
font-bold
text-lg
"
>
✨ TRENDING FASHION
</span>


<span
className="
text-white
font-bold
text-lg
"
>
💎 LUXURY COLLECTION
</span>


<span
className="
text-cyan-400
font-bold
text-lg
"
>
🛍️ SHOP NOW
</span>


</div>


</div>


</div>{/* Bottom Luxury Banner */}


<div
className="
mt-16
relative
overflow-hidden
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-black
to-blue-500/10
p-8
"
>


<div
className="
absolute
top-0
left-0
w-full
h-full
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
animate-shine
"
></div>



<div
className="
relative
z-10
text-center
"
>


<h3
className="
text-white
text-3xl
md:text-4xl
font-black
"
>
Upgrade Your Style Today
</h3>



<p
className="
text-gray-400
mt-3
text-lg
"
>
Discover premium fashion made for confident personalities.
</p>



<button
className="
mt-6
bg-cyan-500
text-white
px-8
py-3
rounded-full
font-bold
hover:bg-cyan-600
hover:scale-110
transition
duration-500
"
>
Explore Collection
</button>



</div>


</div>





</div>


</section>


);


};
{/* Simple Auto Moving Marquee */}

<div
  className="
    mt-16
    overflow-hidden
    border-y
    border-cyan-400/30
    bg-slate-900/60
    py-5
    rounded-xl
  "
>
  <div className="flex w-max whitespace-nowrap animate-marquee">

    {/* First */}
    <div className="flex gap-12 px-6">

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Arrivals
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Streetwear
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        💎 Exclusive Collection
      </span>

      <span className="text-white font-bold text-lg">
        🚚 Free Shipping
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🛍️ Shop Now
      </span>

    </div>

    {/* Duplicate */}
    <div className="flex gap-12 px-6">

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Arrivals
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Streetwear
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        💎 Exclusive Collection
      </span>

      <span className="text-white font-bold text-lg">
        🚚 Free Shipping
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🛍️ Shop Now
      </span>

    </div>

  </div>
</div>
export default Arrivals;
