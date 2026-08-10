"use client";

import FashionRain from "@/app/component/FashionRain";
import React from "react";


const Hero = () => {


return (

<section

className="
relative
h-screen
overflow-hidden
bg-black
"

>
 <div className="absolute inset-0 z-20 pointer-events-none">
  <FashionRain/>
</div> 


{/* Background Image */}


 <div

className="
absolute
inset-0
bg-cover
bg-center
scale-105
animate-pulse
"

style={{

backgroundImage:"url('/logo (5).png')"

}}

>

</div>





{/* Premium Dark Overlay */}


<div

className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/80
to-black/40
"

>

</div>




 <div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-transparent
to-black/30
"

>

</div>







{/* Floating Glow Orbs */}



<div

className="
absolute
top-20
left-20
w-96
h-96
bg-cyan-500/20
rounded-full
blur-[140px]
animate-pulse
"

>
</div>





<div

className="
absolute
bottom-20
right-20
w-96
h-96
bg-blue-600/20
rounded-full
blur-[140px]
animate-pulse
"

>
</div>






{/* Content */}


<div

className="
relative
z-10
h-full
flex
items-center
"

>


<div

className="
max-w-7xl
mx-auto
px-6
lg:px-12
w-full
"

>


{/* Small Badge */}


<div

className="
inline-flex
items-center
gap-3
bg-white/10
backdrop-blur-md
border
border-cyan-400/30
px-5
py-2
rounded-full
"

>


<span

className="
w-2
h-2
bg-cyan-400
rounded-full
animate-ping
"

>
</span>


<p

className="
text-cyan-400
uppercase
tracking-[5px]
font-bold
text-sm
"

>

Premium Men's Fashion

</p>


</div>




{/* Main Heading */}


<h1

className="
mt-8
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
font-black
text-white
leading-[1.1]
"

>


OWN YOUR


<br />



<span

className="
relative
inline-block
text-cyan-400
cursor-pointer
transition-all
duration-700
hover:text-white
hover:drop-shadow-[0_0_25px_#06b6d4]
"

>

ATTITUDE


</span>



</h1>






 {/* Description */}


 <p

className="
mt-8
max-w-2xl
text-lg
md:text-xl
text-gray-300
leading-8
"

>

Discover bold streetwear crafted for men who never follow trends.
Create your own identity with premium fashion designed for confidence.

</p>






{/* Buttons */}


<div

className="
mt-10
flex
flex-wrap
gap-5
"

>




 <button

className="
group
relative
overflow-hidden
px-10
py-4
rounded-xl
bg-cyan-500
text-white
font-bold
text-lg
transition-all
duration-500
hover:scale-110
hover:shadow-[0_0_40px_#06b6d4]
"

>


 <span

className="
relative
z-10
"

>

Shop Now

</span>



<div

className="
absolute
inset-0
bg-white/20
translate-x-[-100%]
group-hover:translate-x-[100%]
transition
duration-700
"

>

</div>



 </button>







 <button

className="
px-10
py-4
rounded-xl
border
border-white/40
text-white
font-bold
text-lg
backdrop-blur-md
bg-white/5
transition-all
duration-500
hover:bg-white
hover:text-black
hover:scale-110
hover:shadow-[0_0_30px_white]
"

>

Explore Collection

</button>




</div>


{/* Floating Stats Cards */}


<div

className="
mt-14
grid
grid-cols-2
md:grid-cols-3
gap-5
max-w-2xl
"

>



<div

className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
hover:border-cyan-400
transition
duration-500
group
"

>


<h3

className="
text-cyan-400
text-3xl
font-black
group-hover:scale-110
transition
"

>

10K+

</h3>



<p

className="
text-gray-300
mt-2
"

>

 Happy Customers

 </p>



 </div>






 <div

className="
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
hover:border-cyan-400
transition
duration-500
group
"

>


<h3

className="
text-cyan-400
text-3xl
font-black
group-hover:scale-110
transition
"

>

500+

</h3>



<p

className="
text-gray-300
mt-2
"

>

Premium Designs

</p>



</div>







 <div

className="
hidden
md:block
bg-white/10
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-5
hover:border-cyan-400
transition
 duration-500 group
 "

 >


 <h3

 className="
text-cyan-400
text-3xl
font-black
group-hover:scale-110
transition
"

>

99%

</h3>



<p

className="
text-gray-300
mt-2
"

>

Quality

</p>



</div>



</div>







 {/* Floating Fashion Badge */}


 <div

 className="
absolute
right-10
top-1/2
hidden
xl:flex
"

>


<div

className="
w-40
h-40
rounded-full
border
border-cyan-400/40
bg-white/5
backdrop-blur-xl
flex
items-center
justify-center
text-center
animate-spin-slow
"

>


<div>


 <p

 className="
text-cyan-400
font-black
text-xl
"

>

NEW

</p>



<p

className="
text-white
text-sm
"

>
 COLLECTION

 </p>


 </div>



</div>


 </div>

 {/* Premium Moving Marquee */}

<div
  className="
    mt-14
    overflow-hidden
    border-y
    border-cyan-400/30
    bg-white/5
    backdrop-blur-xl
    py-4
    rounded-xl
  "
>
  <div className="flex w-max whitespace-nowrap animate-marquee">

    {[
      "🔥 New Arrival",
      "✨ Premium Collection",
      "💎 Luxury Streetwear",
      "🚚 Free Shipping",
      "🔥 Limited Edition",
      "🛍️ Exclusive Fashion",
    ].map((item, index) => (
      <span
        key={`first-${index}`}
        className={`mx-8 text-lg font-bold tracking-wider ${
          index % 2 === 0 ? "text-cyan-400" : "text-white"
        }`}
      >
        {item}
      </span>
    ))}

    {[
      "🔥 New Arrival",
      "✨ Premium Collection",
      "💎 Luxury Streetwear",
      "🚚 Free Shipping",
      "🔥 Limited Edition",
      "🛍️ Exclusive Fashion",
    ].map((item, index) => (
      <span
        key={`second-${index}`}
        className={`mx-8 text-lg font-bold tracking-wider ${
          index % 2 === 0 ? "text-cyan-400" : "text-white"
        }`}
      >
        {item}
      </span>
    ))}

  </div>
</div>


{ /* Scroll Down Indicator */}





<div/>

      </div>


    </div>


  </section>


);


};



export default Hero;