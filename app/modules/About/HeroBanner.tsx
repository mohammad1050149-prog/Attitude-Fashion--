"use client";

import FashionRain from "@/app/component/FashionRain";
import Image from "next/image";
import { useRouter } from "next/navigation";


const AboutHero = () => {


const router = useRouter();



return (


<section

className="
relative
h-[95vh]
w-full
overflow-hidden
flex
items-center
justify-center
"

>
  <div className="absolute inset-0 z-20 pointer-events-none">
  <FashionRain/>
</div>


{/* Background Image */}



<Image

src="/hero.png"

alt="Premium Fashion"

fill

priority

className="
object-cover
scale-105
transition-all
duration-[5000ms]
hover:scale-110
"

/>






{/* Cinematic Overlay */}



<div

className="
absolute
inset-0
bg-gradient-to-b
from-black/90
via-black/60
to-black
"

>

</div>







{/* Animated Glow */}



<div

className="
absolute
top-10
left-10
w-96
h-96
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
bottom-10
right-10
w-96
h-96
bg-blue-600/20
rounded-full
blur-[150px]
animate-pulse
"

>

</div>







{/* Floating Lights */}



<div

className="
absolute
top-32
right-40
w-5
h-5
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
left-32
w-4
h-4
bg-white
rounded-full
animate-bounce
"

>

</div>







{/* Content */}



<div

className="
relative
z-10
text-center
px-6
max-w-6xl
animate-fadeIn
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

Premium Fashion Brand

</span>





<h1

className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
leading-tight
"

>


STYLE THAT

<br/>


<span

className="
bg-gradient-to-r
from-cyan-400
via-blue-500
to-cyan-400
bg-clip-text
text-transparent
"

>

DEFINES YOUR ATTITUDE

</span>



</h1>
{/* Description */}


<p

className="
mt-8
text-lg
md:text-xl
text-gray-300
max-w-3xl
mx-auto
leading-9
"

>

Boys Attitude Fashion creates premium outfits for modern gentlemen.
Every design reflects confidence, luxury, comfort and timeless street style.

</p>







{/* Buttons */}



<div

className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-5
"

>




<button

onClick={() => router.push("/Collection")}

className="
px-10
py-4
rounded-full
bg-gradient-to-r
from-cyan-500
via-blue-500
to-cyan-500
text-white
font-bold
transition-all
duration-700
hover:scale-110
hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]
"

>

Explore Collection

</button>







<button

onClick={() => router.push("/Contact")}

className="
px-10
py-4
rounded-full
border-2
border-cyan-400
text-white
font-bold
transition-all
duration-700
hover:bg-cyan-500
hover:scale-110
hover:shadow-[0_0_35px_rgba(6,182,212,0.7)]
"

>

Contact Us

</button>





</div>






{/* Floating Fashion Badge */}



<div

className="
mt-12
inline-flex
items-center
gap-3
px-6
py-3
rounded-full
bg-white/5
border
border-cyan-400/30
backdrop-blur-xl
hover:scale-110
transition-all
duration-500
"

>


<span

className="
w-3
h-3
bg-cyan-400
rounded-full
animate-ping
"

>

</span>



<p

className="
text-cyan-400
font-semibold
tracking-wide
"

>

Luxury Men's Fashion Collection

</p>



</div>
// Premium Stats Cards


<div

className="
mt-16
grid
grid-cols-1
sm:grid-cols-3
gap-6
max-w-4xl
mx-auto
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
py-6
px-5
hover:-translate-y-3
hover:border-cyan-400
hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
transition-all
duration-700
"

>


<h2

className="
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition-all
duration-500
"

>

10K+

</h2>



<p

className="
text-gray-300
mt-3
font-semibold
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
py-6
px-5
hover:-translate-y-3
hover:border-cyan-400
hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
transition-all
duration-700
"

>


<h2

className="
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition-all
duration-500
"

>

500+

</h2>



<p

className="
text-gray-300
mt-3
font-semibold
"

>

Premium Products

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
py-6
px-5
hover:-translate-y-3
hover:border-cyan-400
hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]
transition-all
duration-700
"

>


<h2

className="
text-4xl
font-black
text-cyan-400
group-hover:scale-110
transition-all
duration-500
"

>

5★

</h2>



<p

className="
text-gray-300
mt-3
font-semibold
"

>

Customer Rating

</p>


</div>





</div>







{/* Scroll Indicator */}



<div

className="
absolute
bottom-10
left-1/2
-translate-x-1/2
"

>


<div

className="
w-9
h-16
rounded-full
border-2
border-cyan-400
flex
justify-center
"

>


<div

className="
w-2
h-3
bg-cyan-400
rounded-full
mt-3
animate-bounce
"

>

</div>



</div>


</div>
 {/* Bottom Luxury Marquee */}


<div
  className="
  mt-14
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


{/* First Line */}

<div className="flex gap-16 px-8">


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 Premium Fashion
</span>


<span className="text-white font-bold text-lg tracking-wide">
✨ Luxury Collection
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
👔 Modern Men's Style
</span>


<span className="text-white font-bold text-lg tracking-wide">
🔥 New Arrivals
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
💎 Exclusive Designs
</span>


<span className="text-white font-bold text-lg tracking-wide">
🚚 Free Shipping
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
⚡ Confidence Wear
</span>


</div>



{/* Duplicate Line */}

<div className="flex gap-16 px-8">


<span className="text-cyan-400 font-bold text-lg tracking-wide">
🔥 Premium Fashion
</span>


<span className="text-white font-bold text-lg tracking-wide">
✨ Luxury Collection
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
👔 Modern Men's Style
</span>


<span className="text-white font-bold text-lg tracking-wide">
🔥 New Arrivals
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
💎 Exclusive Designs
</span>


<span className="text-white font-bold text-lg tracking-wide">
🚚 Free Shipping
</span>


<span className="text-cyan-400 font-bold text-lg tracking-wide">
⚡ Confidence Wear
</span>


</div>


</div>


</div>




{/* Floating Particles */}



<div

className="
absolute
top-1/4
left-10
w-3
h-3
bg-cyan-400
rounded-full
animate-ping
"

>

</div>




<div

className="
absolute
top-1/3
right-20
w-4
h-4
bg-blue-400
rounded-full
animate-bounce
"

>

</div>






<div

className="
absolute
bottom-20
left-1/4
w-2
h-2
bg-white
rounded-full
animate-pulse
"

>

</div>






{/* Premium Glass Message */}



<div

className="
mt-10
mx-auto
max-w-3xl
rounded-3xl
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
p-6
text-center
hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]
transition-all
duration-700
"

>


<p

className="
text-gray-300
text-lg
leading-8
"

>

Designed for men who believe fashion is not just clothing,
it is a statement of confidence and attitude.

</p>



</div>


      </div>


    </section>


  );


};



export default AboutHero;