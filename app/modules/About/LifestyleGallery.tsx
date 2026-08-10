"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


const LifestyleGallery = () => {


const router = useRouter();



const images = [

{
src:"/img112.png",
title:"Street Style"
},


{
src:"/img (2).png",
title:"Premium Hoodie Look"
},


{
src:"/imgr.png",
title:"Casual Fashion"
},


{
src:"/imgt.png",
title:"Luxury Outfit"
},


{
src:"/imgh.png",
title:"Urban Collection"
},


{
src:"/imgyr.png",
title:"Modern Attitude"
}

];





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
-left-20
w-[450px]
h-[450px]
bg-cyan-500/20
rounded-full
blur-[160px]
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
blur-[160px]
animate-pulse
"

>

</div>







{/* Floating Lights */}



<div

className="
absolute
top-32
right-32
w-4
h-4
bg-cyan-400
rounded-full
animate-ping
"

>

</div>



<div

className="
absolute
bottom-40
left-20
w-3
h-3
bg-white
rounded-full
animate-bounce
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




<span

className="
text-cyan-400
uppercase
tracking-[8px]
font-bold
animate-pulse
"

>

Our Lifestyle

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

Fashion That


<span

className="
block
bg-gradient-to-r
from-cyan-400
via-blue-500
to-cyan-400
bg-clip-text
text-transparent
"

>

Defines You

</span>


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
text-lg
text-gray-300
max-w-3xl
mx-auto
leading-8
"

>

Explore premium street fashion crafted for confident men
who love modern style, luxury comfort and timeless elegance.

</p>






{/* Gallery Grid */}



<div

className="
mt-16
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>




{images.map((item,index)=>(



<div

key={index}

onClick={()=>router.push("/Collection")}

className="
group
relative
h-[380px]
overflow-hidden
rounded-[35px]
border
border-cyan-500/20
cursor-pointer
transition-all
duration-700
hover:-translate-y-5
hover:scale-[1.03]
hover:border-cyan-400
hover:shadow-[0_0_50px_rgba(6,182,212,0.45)]
"

>







{/* Image */}



<Image

src={item.src}

alt={item.title}

fill

className="
object-cover
transition-all
duration-[1200ms]
group-hover:scale-125
group-hover:rotate-2
"

/>








{/* Dark Overlay */}



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/40
to-transparent
opacity-90
group-hover:opacity-70
transition-all
duration-700
"

>

</div>







{/* Shine Effect */}



<div

className="
absolute
-top-20
-left-40
h-[150%]
w-28
rotate-12
bg-white/20
blur-md
transition-all
duration-1000
group-hover:left-[130%]
"

>

</div>








{/* Card Content */}



<div

className="
absolute
bottom-0
left-0
right-0
p-8
"

>





<span

className="
inline-block
rounded-full
bg-cyan-500/20
border
border-cyan-400/30
px-4
py-1
text-xs
uppercase
tracking-widest
text-cyan-300
backdrop-blur-md
"

>

Premium Collection

</span>








<h3

className="
mt-4
text-3xl
font-black
text-white
group-hover:text-cyan-400
transition-all
duration-500
"

>

{item.title}

</h3>







<div

className="
mt-5
flex
items-center
gap-3
text-cyan-400
opacity-0
translate-y-5
group-hover:opacity-100
group-hover:translate-y-0
transition-all
duration-500
"

>


<span

className="
font-semibold
"

>

Explore Collection

</span>




<FaArrowRight

className="
group-hover:translate-x-3
transition-all
duration-500
"

/>



</div>






</div>







</div>





))}



</div>
 {/* Premium Banner */}


<div

className="
mt-20
rounded-[40px]
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
p-10
md:p-14
text-center
shadow-[0_0_45px_rgba(6,182,212,0.25)]
hover:shadow-[0_0_70px_rgba(6,182,212,0.45)]
transition-all
duration-700
"

>




<div

className="
w-20
h-20
mx-auto
rounded-full
bg-cyan-500/20
border
border-cyan-400/30
flex
items-center
justify-center
text-cyan-400
text-3xl
animate-pulse
"

>

✨

</div>







<h3

className="
mt-8
text-3xl
md:text-5xl
font-black
text-white
"

>

Your Style.
Your Confidence.

</h3>







<p

className="
mt-6
text-lg
text-gray-300
max-w-3xl
mx-auto
leading-8
"

>

Every outfit is designed to express your personality,
confidence and modern lifestyle with premium quality
and timeless fashion.

</p>








<button

onClick={()=>router.push("/Collection")}

className="
mt-8
px-10
py-4
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-500
text-white
font-bold
transition-all
duration-500
hover:scale-110
hover:shadow-[0_0_35px_rgba(6,182,212,0.7)]
"

>

Explore Collection

<FaArrowRight

className="
inline-block
ml-3
group-hover:translate-x-2
transition
"

/>


</button>




</div>







{/* Trust Mini Cards */}



<div

className="
mt-16
grid
grid-cols-1
md:grid-cols-3
gap-6
"

>



<div

className="
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
p-6
text-center
hover:-translate-y-3
hover:border-cyan-400
transition-all
duration-500
"

>


<h4

className="
text-3xl
font-black
text-cyan-400
"

>

10K+

</h4>


<p

className="
text-gray-300
mt-2
"

>

Fashion Lovers

</p>


</div>





<div

className="
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
p-6
text-center
hover:-translate-y-3
hover:border-cyan-400
transition-all
duration-500
"

>


<h4

className="
text-3xl
font-black
text-cyan-400
"

>

500+

</h4>


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
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
p-6
text-center
hover:-translate-y-3
hover:border-cyan-400
transition-all
duration-500
"

>


<h4

className="
text-3xl
font-black
text-cyan-400
"

>

24/7

</h4>


<p

className="
text-gray-300
mt-2
"

>

Support

</p>


</div>



</div>
 {/* Luxury Marquee Section */}


<div
  className="
  mt-16
  overflow-hidden
  rounded-2xl
  border-y
  border-cyan-500/20
  py-5
  bg-black/30
  backdrop-blur-lg
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


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 Street Fashion
</span>


<span className="text-white font-bold text-lg tracking-wide">
✨ Premium Collection
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
👔 Modern Style
</span>


<span className="text-white font-bold text-lg tracking-wide">
💎 Luxury Outfits
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 New Arrival
</span>


<span className="text-white font-bold text-lg tracking-wide">
⚡ Exclusive Designs
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🖤 Confidence Wear
</span>


<span className="text-white font-bold text-lg tracking-wide">
🌆 Urban Lifestyle
</span>


</div>



{/* Duplicate */}

<div className="flex gap-16 px-8">


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 Street Fashion
</span>


<span className="text-white font-bold text-lg tracking-wide">
✨ Premium Collection
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
👔 Modern Style
</span>


<span className="text-white font-bold text-lg tracking-wide">
💎 Luxury Outfits
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 New Arrival
</span>


<span className="text-white font-bold text-lg tracking-wide">
⚡ Exclusive Designs
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🖤 Confidence Wear
</span>


<span className="text-white font-bold text-lg tracking-wide">
🌆 Urban Lifestyle
</span>


</div>


</div>


</div>




{/* Floating Decorative Glow */}



<div

className="
absolute
top-1/3
left-5
w-16
h-16
bg-cyan-400/20
rounded-full
blur-3xl
animate-pulse
"

>

</div>





<div

className="
absolute
bottom-1/4
right-10
w-20
h-20
bg-blue-500/20
rounded-full
blur-3xl
animate-pulse
"

>

</div>








{/* Fashion Quote Box */}



<div

className="
mt-14
max-w-4xl
mx-auto
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-black
to-blue-500/10
backdrop-blur-xl
p-8
text-center
hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
transition-all
duration-700
"

>



<p

className="
text-xl
md:text-2xl
font-semibold
text-white
leading-9
"

>

"Fashion is not just what you wear,
it is the confidence you carry."

</p>



<span

className="
block
mt-4
text-cyan-400
font-bold
tracking-widest
uppercase
"

>

Boys Attitude Fashion

</span>



</div>


      </div>


    </section>


  );


};



export default LifestyleGallery;