"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";


const reviews = [

{
id:1,
name:"Ali Raza",
image:"/img5 (2).jpeg",
review:
"Amazing quality! The hoodie fits perfectly and the fabric feels premium."
},


{
id:2,
name:"Ahmed Khan",
image:"/img44.jpeg",
review:
"Fast delivery and the sneakers look even better than the pictures."
},


{
id:3,
name:"Usman Ali",
image:"/img 55.jpeg",
review:
"Excellent customer service. Definitely ordering again!"
}

];





const CustomerReviews = () => {


return (


<section

className="
relative
overflow-hidden
bg-gradient-to-b
from-slate-950
via-black
to-slate-950
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
animate-pulse
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
bg-blue-600/20
rounded-full
blur-[150px]
animate-pulse
"

>

</div>





<div

className="
relative
max-w-7xl
mx-auto
px-6
z-10
"

>


</div>


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

Testimonials

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

What Our Customers Say

</h2>





<div

className="
w-28
h-1
bg-cyan-400
mx-auto
mt-5
rounded-full
"

>

</div>





<p

className="
text-gray-400
mt-6
text-lg
max-w-2xl
mx-auto
"

>

Trusted by fashion lovers for premium quality,
modern style and amazing shopping experience.

</p>



</div>


{/* Review Cards */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-10
"

>




{reviews.map((item)=>(



<div

key={item.id}

className="
group
relative
overflow-hidden
rounded-[35px]
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
p-8
transition-all
duration-700
hover:-translate-y-5
hover:scale-105
hover:border-cyan-400
hover:shadow-[0_0_45px_rgba(6,182,212,0.45)]
"

>




{/* Animated Glow */}



<div

className="
absolute
inset-0
bg-gradient-to-br
from-cyan-500/20
via-transparent
to-blue-500/20
opacity-0
group-hover:opacity-100
transition-all
duration-700
"

>

</div>







{/* Quote Icon */}



<FaQuoteLeft

className="
absolute
top-6
right-6
text-cyan-400
text-5xl
opacity-20
group-hover:rotate-12
group-hover:scale-125
transition-all
duration-500
"

/>







{/* User Info */}



<div

className="
relative
flex
items-center
gap-5
"

>



<img


src={item.image}


alt={item.name}


className="
w-24
h-24
rounded-full
object-cover
border-4
border-cyan-400
shadow-[0_0_20px_rgba(6,182,212,0.5)]
transition-all
duration-500
group-hover:scale-110
group-hover:rotate-6
"


/>







<div>


<h3

className="
text-white
text-2xl
font-black
group-hover:text-cyan-400
transition-all
duration-300
"

>

{item.name}

</h3>





<div

className="
flex
gap-1
text-yellow-400
mt-3
"

>


<FaStar className="group-hover:animate-bounce"/>

<FaStar />

<FaStar />

<FaStar />

<FaStar />


</div>



</div>




</div>


{/* Review Text */}



<p

className="
relative
mt-8
text-gray-300
leading-8
text-lg
italic
group-hover:text-white
transition-all
duration-500
"

>

"{item.review}"

</p>






{/* Verified Badge */}



<div

className="
relative
mt-6
flex
items-center
gap-2
"

>


<span

className="
bg-cyan-500/20
text-cyan-400
px-4
py-1
rounded-full
text-sm
font-semibold
border
border-cyan-400/30
"

>

✓ Verified Customer

</span>


</div>







{/* Bottom Animated Line */}



<div

className="
relative
mt-8
h-[3px]
w-0
bg-gradient-to-r
from-cyan-400
to-blue-500
rounded-full
group-hover:w-full
transition-all
duration-700
"

>

</div>







{/* Floating Star Glow */}



<div

className="
absolute
bottom-5
right-5
w-16
h-16
bg-cyan-400/20
rounded-full
blur-2xl
opacity-0
group-hover:opacity-100
transition-all
duration-500
"

>

</div>





</div>


))}



</div>


{/* Trust Stats */}



<div

className="
mt-20
grid
grid-cols-2
md:grid-cols-4
gap-6
"

>




<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-6
text-center
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<h3

className="
text-cyan-400
text-4xl
font-black
"

>

5000+

</h3>



<p

className="
text-gray-400
mt-2
"

>

Happy Customers

</p>



</div>







<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-6
text-center
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<h3

className="
text-cyan-400
text-4xl
font-black
"

>

4.9★

</h3>



<p

className="
text-gray-400
mt-2
"

>

Average Rating

</p>



</div>







<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-6
text-center
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<h3

className="
text-cyan-400
text-4xl
font-black
"

>

100%

</h3>



<p

className="
text-gray-400
mt-2
"

>

Quality Guarantee

</p>



</div>







<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-6
text-center
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<h3

className="
text-cyan-400
text-4xl
font-black
"

>

24/7

</h3>



<p

className="
text-gray-400
mt-2
"

>

Customer Support

</p>



</div>



</div>







{/* Premium Trust Badge */}



<div

className="
mt-14
flex
justify-center
"

>


<div

className="
px-8
py-4
rounded-full
bg-gradient-to-r
from-cyan-500/20
to-blue-500/20
border
border-cyan-400/30
backdrop-blur-xl
hover:scale-110
transition-all
duration-500
"

>


<p

className="
text-cyan-400
font-bold
tracking-wide
"

>

⭐ Trusted Fashion Brand

</p>



</div>


</div>












   
{/* Marquee */}


{/* Marquee */}

<div
  className="
  mt-16
  overflow-hidden
  border-y
  border-cyan-500/20
  bg-black/40
  py-4
  rounded-2xl
  "
>

  <div
    className="
    flex
    w-max
    animate-marquee
    whitespace-nowrap
    "
  >

    <span
      className="
      text-cyan-400
      text-lg
      font-bold
      px-8
      "
    >
      ⭐ 5000+ Happy Customers • ✨ Premium Quality • 🚚 Fast Delivery • 🤝 Trusted Brand • 🛍️ Best Fashion Store • 🔥 New Collection Every Week •
    </span>


    <span
      className="
      text-cyan-400
      text-lg
      font-bold
      px-8
      "
    >
      ⭐ 5000+ Happy Customers • ✨ Premium Quality • 🚚 Fast Delivery • 🤝 Trusted Brand • 🛍️ Best Fashion Store • 🔥 New Collection Every Week •
    </span>


  </div>

</div>


    </section>


  );


};


export default CustomerReviews;