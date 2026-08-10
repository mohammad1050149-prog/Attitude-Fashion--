"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";



const products = [

{
id:1,
name:"Oversized T-Shirt",
price:"$39",
image:"/img.png",
rating:5,
},


{
id:2,
name:"Premium Hoodie",
price:"$59",
image:"/img3.png",
rating:4,
},


{
id:3,
name:"Black Denim Jacket",
price:"$89",
image:"/img4.png",
rating:5,
},


{
id:4,
name:"Urban Sneakers",
price:"$99",
image:"/img5.png",
rating:4,
},


];





const Trending = () => {



const [liked,setLiked] = useState<number[]>([]);



const toggleLike = (id:number)=>{


setLiked((prev)=>

prev.includes(id)

?

prev.filter(item=>item !== id)

:

[...prev,id]

);


};





return (

<section

className="
relative
overflow-hidden
bg-gradient-to-b
from-black
via-slate-950
to-black
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

>
</div>




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

>
</div>





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
tracking-[6px]
font-bold
animate-pulse
"

>

Trending Now

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

Featured Collection

</h2>




<p

className="
text-gray-400
mt-5
text-lg
"

>

Discover our best-selling men's fashion essentials.

</p>


</div>
// Product Cards


<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{
products.map((item)=>(


<div

key={item.id}

className="
group
relative
overflow-hidden
bg-slate-900
rounded-[35px]
border
border-slate-800
transition-all
duration-700
hover:-translate-y-5
hover:border-cyan-400
hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
"

>




{/* Image Section */}


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
group-hover:rotate-2
"

/>





{/* Overlay */}


<div

className="
absolute
inset-0
bg-black/20
group-hover:bg-black/40
transition
duration-500
"

>
</div>






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
transition
duration-500
"

>

NEW

</span>





{/* Wishlist Button */}


<button

onClick={()=>toggleLike(item.id)}

className="
absolute
top-5
right-5
w-11
h-11
rounded-full
bg-black/60
flex
items-center
justify-center
text-white
hover:scale-110
transition
duration-300
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



</div>
// Product Content


<div

className="
p-6
relative
"

>


<h3

className="
text-white
text-xl
font-black
group-hover:text-cyan-400
transition
duration-500
"

>

{item.name}

</h3>





{/* Rating Stars */}


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





{/* Price + Cart */}


<div

className="
flex
justify-between
items-center
mt-6
"

>


<p

className="
text-cyan-400
text-2xl
font-black
group-hover:scale-110
transition
duration-300
"

>

{item.price}

</p>





<button

className="
w-12
h-12
rounded-full
bg-cyan-500
text-white
flex
items-center
justify-center
hover:bg-cyan-600
hover:scale-110
transition
duration-500
shadow-[0_0_20px_rgba(6,182,212,0.5)]
"

>


<FaShoppingCart />


</button>



</div>






{/* Add To Cart Button */}


<button

className="
mt-6
w-full
bg-cyan-500
text-white
py-3
rounded-xl
font-bold
transition-all
duration-500
hover:bg-cyan-600
hover:scale-105
hover:shadow-[0_0_25px_#06b6d4]
"

>

Add To Cart

</button>



</div>





{/* Quick View Hover */}


<div

className="
absolute
bottom-0
left-0
right-0
bg-black/80
backdrop-blur-md
py-3
text-center
translate-y-full
group-hover:translate-y-0
transition
duration-500
"

>


<p

className="
text-cyan-400
font-semibold
cursor-pointer
"

>

View Details

</p>


</div>




</div>


))

}


</div>
 Premium Features Section


<div

className="
grid
md:grid-cols-3
gap-6
mt-20
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
p-8
text-center
hover:border-cyan-400
transition-all
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

🔥 Trending Styles

</h4>



<p

className="
text-gray-400
mt-3
leading-7
"

>

Latest fashion trends selected for modern personalities.

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
p-8
text-center
hover:border-cyan-400
transition-all
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

💎 Premium Quality

</h4>



<p

className="
text-gray-400
mt-3
leading-7
"

>

High quality fabrics with luxury finishing.

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
p-8
text-center
hover:border-cyan-400
transition-all
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

🚚 Free Shipping

</h4>



<p

className="
text-gray-400
mt-3
leading-7
"

>

Fast and secure delivery for every order.

</p>


</div>



</div>







{/* Trending Banner */}


<div

className="
mt-16
relative
overflow-hidden
rounded-[35px]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-black
to-blue-500/10
p-10
"

>



<div

className="
text-center
relative
z-10
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

Upgrade Your Fashion Game

</h3>




<p

className="
text-gray-400
mt-4
text-lg
"

>

Explore premium collections designed for confidence.

</p>




<button

className="
mt-6
px-8
py-3
rounded-full
bg-cyan-500
text-white
font-bold
hover:bg-cyan-600
hover:scale-110
transition
duration-500
"

>

Shop Collection

</button>



</div>



</div>
 {/* Bottom Marquee Section */}
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
    animate-[marquee_8s_linear_infinite]
    "
  >

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Trending Collection
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Quality
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🚚 Free Shipping
      </span>

      <span className="text-white font-bold text-lg">
        💎 Limited Offer
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Arrival
      </span>

      <span className="text-white font-bold text-lg">
        ⭐ Best Seller
      </span>

    </div>


    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        🔥 Trending Collection
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Quality
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🚚 Free Shipping
      </span>

      <span className="text-white font-bold text-lg">
        💎 Limited Offer
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Arrival
      </span>

      <span className="text-white font-bold text-lg">
        ⭐ Best Seller
      </span>

    </div>


  </div>

</div>




</div>
</section>


  );


};


export default Trending;
   