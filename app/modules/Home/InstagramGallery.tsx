"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";


const images = [

"/img9 (2).jpeg",
"/img12.jpeg",
"/img34.jpeg",
"/img88.png",
"/img66.png",
"/img44 (2).png",

];



const InstagramGallery = () => {


const router = useRouter();



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
bg-blue-500/20
rounded-full
blur-[150px]
animate-pulse
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

Follow Us

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

Instagram Gallery

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

Explore our latest fashion moments and streetwear inspiration.

</p>


</div>// Gallery Cards


<div

className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-6
gap-6
"

>


{

images.map((img,index)=>(


<div


key={index}


onClick={()=>router.push("Collection")}


className="

group

relative

overflow-hidden

rounded-[30px]

cursor-pointer

border

border-slate-800

bg-slate-900

transition-all

duration-700

hover:-translate-y-5

hover:border-cyan-400

hover:shadow-[0_0_40px_rgba(6,182,212,0.45)]

"


>



{/* Image */}



<img

src={img}

alt={`Instagram ${index+1}`}

className="

w-full

h-[260px]

object-cover

transition-all

duration-700

group-hover:scale-125

group-hover:rotate-3

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

opacity-0

group-hover:opacity-100

transition-all

duration-500

"


>

</div>






{/* Instagram Button */}



<div

className="

absolute

inset-0

flex

flex-col

items-center

justify-center

opacity-0

group-hover:opacity-100

transition-all

duration-500

"


>


<div

className="

w-16

h-16

rounded-full

bg-cyan-500/20

backdrop-blur-xl

border

border-cyan-400

flex

items-center

justify-center

"

>


<FaInstagram

className="

text-cyan-400

text-4xl

animate-bounce

"

/>


</div>




<p

className="

text-white

font-bold

mt-4

text-lg

"

>

View More

</p>



</div>






{/* Number Badge */}



<span

className="

absolute

top-4

left-4

bg-black/60

backdrop-blur-md

text-cyan-400

font-bold

px-3

py-1

rounded-full

text-sm

opacity-0

group-hover:opacity-100

transition

duration-500

"

>

0{index+1}

</span>




</div>


))


}


</div>


{/* Gallery Stats Section */}


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
hover:-translate-y-3
"

>



<h3

className="
text-cyan-400
text-4xl
font-black
group-hover:scale-110
transition
duration-500
"

>

50K+

</h3>




<p

className="
text-gray-300
mt-3
font-semibold
"

>

Fashion Followers

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
hover:-translate-y-3
"

>



<h3

className="
text-cyan-400
text-4xl
font-black
group-hover:scale-110
transition
duration-500
"

>

500+

</h3>




<p

className="
text-gray-300
mt-3
font-semibold
"

>

Exclusive Styles

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
hover:-translate-y-3
"

>



<h3

className="
text-cyan-400
text-4xl
font-black
group-hover:scale-110
transition
duration-500
"

>

100%

</h3>




<p

className="
text-gray-300
mt-3
font-semibold
"

>

Fashion Passion

</p>



</div>



</div>







{/* CTA Banner */}



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

Join Our Fashion Community

</h3>




<p

className="
text-gray-400
mt-4
text-lg
"

>

Follow our latest drops and exclusive fashion updates.

</p>





<button

onClick={()=>router.push("Collection")}

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
transition-all
duration-500
shadow-[0_0_25px_rgba(6,182,212,0.5)]
"

>

Explore More

</button>




</div>



</div>


{/* Premium Marquee */}



<div

className="
mt-16
overflow-hidden
rounded-xl
border-y
border-cyan-400/30
bg-white/5
backdrop-blur-xl
py-4
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
tracking-wider
"

>

📸 Instagram Fashion

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

✨ Latest Trends

</span>




<span

className="
text-cyan-400
font-bold
text-lg
tracking-wider
"

>

🔥 Streetwear Inspiration

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

💎 Premium Collection

</span>




<span

className="
text-cyan-400
font-bold
text-lg
tracking-wider
"

>

🛍️ Shop New Styles

</span>



</div>







{/* Duplicate Loop */}



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
tracking-wider
"

>

📸 Instagram Fashion

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

✨ Latest Trends

</span>




<span

className="
text-cyan-400
font-bold
text-lg
tracking-wider
"

>

🔥 Streetwear Inspiration

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

💎 Premium Collection

</span>




</div>



</div>



</div>







{/* Floating Instagram Card */}



<div

className="
mt-12
flex
justify-center
"

>



<div

className="
group
relative
bg-gradient-to-br
from-cyan-500/20
to-blue-500/20
border
border-cyan-400/30
backdrop-blur-xl
rounded-3xl
px-10
py-8
text-center
hover:-translate-y-3
transition-all
duration-500
"

>


<FaInstagram

className="
text-cyan-400
text-6xl
mx-auto
group-hover:scale-125
transition
duration-500
"

/>




<h3

className="
text-white
text-2xl
font-black
mt-4
"

>

Follow Our Journey

</h3>




<p

className="
text-gray-400
mt-3
"

>

Stay connected with our latest fashion updates.

</p>



</div>



</div>



      </div>


    </section>


  );


};



export default InstagramGallery;