"use client";

import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";


const reviews = [

{
name:"Ali Hassan",
role:"Verified Customer",
image:"/img (56).png",
review:
"The quality of the hoodie exceeded my expectations. The fabric feels premium, and the fit is absolutely perfect."
},


{
name:"Ahmed Raza",
role:"Fashion Lover",
image:"/img (53).png",
review:
"Boys Attitude Fashion has become my favorite clothing brand. Stylish designs and excellent customer service."
},


{
name:"Usman Khan",
role:"Happy Customer",
image:"/img (55).png",
review:
"Amazing collection with premium quality. Every outfit gives a confident and modern look."
}

];





const CustomerTestimonials = () => {



return (



<section

className="
relative
overflow-hidden
py-24
bg-gradient-to-b
from-black
via-slate-950
to-black
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
w-[450px]
h-[450px]
bg-blue-500/20
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




{/* Heading */}



<div

className="
text-center
mb-16
"

>



<span

className="
text-cyan-400
uppercase
tracking-[8px]
font-bold
animate-pulse
"

>

Testimonials

</span>





<h2

className="
mt-4
text-4xl
md:text-6xl
font-black
text-white
"

>

What Our Customers Say

</h2>




<div

className="
w-28
h-1
bg-gradient-to-r
from-cyan-400
to-blue-500
rounded-full
mx-auto
mt-6
"

>

</div>



<p

className="
mt-6
text-gray-300
max-w-3xl
mx-auto
text-lg
leading-8
"

>

Customer satisfaction is our biggest achievement.
Discover why thousands of customers trust our fashion brand.

</p>



</div>
// Review Cards


<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-10
"

>



{reviews.map((item,index)=>(



<div

key={index}

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
hover:shadow-[0_0_50px_rgba(6,182,212,0.45)]
"

>



{/* Shine Effect */}



<div

className="
absolute
-top-10
-left-40
w-24
h-[150%]
rotate-12
bg-white/10
blur-xl
transition-all
duration-1000
group-hover:left-[130%]
"

>

</div>







{/* Quote Icon */}



<FaQuoteLeft

className="
relative
text-5xl
text-cyan-400/40
group-hover:text-cyan-400
group-hover:scale-125
transition-all
duration-500
"

/>







{/* Review Text */}



<p

className="
relative
mt-6
text-gray-300
leading-8
italic
text-lg
group-hover:text-white
transition-all
duration-500
"

>

"{item.review}"

</p>






{/* Stars */}



<div

className="
flex
gap-1
mt-6
text-yellow-400
text-lg
"

>


{[1,2,3,4,5].map((star)=>(


<FaStar

key={star}

className="
hover:scale-125
transition
duration-300
"

/>


))}



</div>








{/* User Profile */}



<div

className="
relative
flex
items-center
mt-8
"

>




<div

className="
relative
w-20
h-20
rounded-full
overflow-hidden
border-4
border-cyan-400
shadow-[0_0_25px_rgba(6,182,212,0.5)]
group-hover:scale-110
transition-all
duration-500
"

>



<Image

src={item.image}

alt={item.name}

fill

className="
object-cover
"

/>



</div>







<div

className="
ml-5
"

>


<h3

className="
text-xl
font-black
text-white
group-hover:text-cyan-400
transition-all
duration-300
"

>

{item.name}

</h3>




<p

className="
text-gray-400
mt-1
"

>

{item.role}

</p>




</div>





</div>


{/* Verified Badge */}


<div

className="
relative
mt-6
flex
items-center
gap-3
"

>


<span

className="
px-4
py-1
rounded-full
bg-cyan-500/20
border
border-cyan-400/30
text-cyan-400
text-sm
font-semibold
"

>

✓ Verified Customer

</span>



<span

className="
text-yellow-400
text-sm
"

>

★★★★★

</span>



</div>







{/* Bottom Animated Line */}



<div

className="
relative
mt-8
h-1
w-0
rounded-full
bg-gradient-to-r
from-cyan-400
to-blue-500
transition-all
duration-700
group-hover:w-full
"

>

</div>






{/* Floating Glow */}



<div

className="
absolute
bottom-0
right-0
w-32
h-32
bg-cyan-400/20
rounded-full
blur-3xl
opacity-0
group-hover:opacity-100
transition-all
duration-700
"

>

</div>





</div>


))}



</div>


{/* Trust Statistics */}



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
group
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
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
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition
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
group
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
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
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition
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

Customer Rating

</p>


</div>








<div

className="
group
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
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
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition
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

Quality Trust

</p>


</div>








<div

className="
group
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
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
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition
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

Support

</p>


</div>



</div>







{/* Premium CTA Box */}



<div

className="
mt-16
rounded-[35px]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-black
to-blue-500/10
backdrop-blur-xl
p-10
text-center
hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
transition-all
duration-700
"

>



<h3

className="
text-3xl
md:text-5xl
font-black
text-white
"

>

Join Our Fashion Family ✨

</h3>





<p

className="
mt-5
text-gray-300
max-w-3xl
mx-auto
leading-8
"

>

Experience premium quality,
modern designs and a fashion journey
trusted by thousands of customers.

</p>






<button

className="
mt-8
px-10
py-3
rounded-full
bg-cyan-500
text-white
font-bold
hover:bg-cyan-600
hover:scale-110
transition-all
duration-500
hover:shadow-[0_0_30px_#06b6d4]
"

>

Shop Collection

</button>



</div>


{/* Bottom Marquee */}

<div
  className="
  mt-16
  overflow-hidden
  rounded-2xl
  border-y
  border-cyan-400/30
  bg-black/40
  py-5
  "
>

  <div
    className="
    flex
    w-max
    whitespace-nowrap
    animate-marquee
    "
  >

    {/* First */}

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        ⭐ 5000+ Happy Customers
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Quality
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🚚 Fast Delivery
      </span>

      <span className="text-white font-bold text-lg">
        💎 Trusted Fashion Brand
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Collection Every Week
      </span>

      <span className="text-white font-bold text-lg">
        🛍️ Exclusive Styles
      </span>

    </div>


    {/* Duplicate */}

    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">
        ⭐ 5000+ Happy Customers
      </span>

      <span className="text-white font-bold text-lg">
        ✨ Premium Quality
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🚚 Fast Delivery
      </span>

      <span className="text-white font-bold text-lg">
        💎 Trusted Fashion Brand
      </span>

      <span className="text-cyan-400 font-bold text-lg">
        🔥 New Collection Every Week
      </span>

      <span className="text-white font-bold text-lg">
        🛍️ Exclusive Styles
      </span>

    </div>


  </div>

</div>




{/* Floating Decorative Elements */}



<div

className="
absolute
top-1/2
left-0
w-20
h-20
bg-cyan-400/10
rounded-full
blur-3xl
animate-pulse
"

>

</div>




<div

className="
absolute
top-1/3
right-0
w-24
h-24
bg-blue-500/10
rounded-full
blur-3xl
animate-pulse
"

>

</div>





      </div>


    </section>


  );


};



export default CustomerTestimonials;