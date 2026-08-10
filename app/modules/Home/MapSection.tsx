"use client";

import React from "react";


export default function MapSection() {


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

Visit Us

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

Our Store Location

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
leading-8
"

>

Visit our premium fashion store and experience luxury shopping with latest collections.

</p>



</div>


{/* Map Container */}



<div

className="
relative
rounded-[35px]
overflow-hidden
border
border-cyan-400/20
bg-white/5
backdrop-blur-xl
shadow-[0_0_40px_rgba(6,182,212,0.25)]
transition-all
duration-700
hover:shadow-[0_0_70px_rgba(6,182,212,0.45)]
hover:-translate-y-2
"

>



{/* Map Glow Border */}



<div

className="
absolute
inset-0
bg-gradient-to-r
from-cyan-500/20
via-transparent
to-blue-500/20
pointer-events-none
"

>

</div>





<iframe

src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"

width="100%"

height="550"

loading="lazy"

className="
relative
z-10
w-full
border-0
"

>

</iframe>




</div>





{/* Store Information Cards */}



<div

className="
grid
md:grid-cols-3
gap-6
mt-12
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


<div

className="
text-4xl
"

>

📍

</div>



<h3

className="
text-white
font-bold
text-xl
mt-4
"

>

Our Location

</h3>




<p

className="
text-gray-400
mt-2
"

>

Premium Fashion Store

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


<div

className="
text-4xl
"

>

🕒

</div>



<h3

className="
text-white
font-bold
text-xl
mt-4
"

>

Opening Hours

</h3>




<p

className="
text-gray-400
mt-2
"

>

10:00 AM - 10:00 PM

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


<div

className="
text-4xl
"

>

💎

</div>



<h3

className="
text-white
font-bold
text-xl
mt-4
"

>

Premium Experience

</h3>




<p

className="
text-gray-400
mt-2
"

>

Luxury Fashion Shopping

</p>



</div>



</div>








{/* Visit Store CTA */}




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

Experience Fashion In Real Life

</h3>





<p

className="
text-gray-400
mt-4
text-lg
"

>

Visit our store and discover premium collections designed for your style.

</p>





<button

className="
mt-7
px-10
py-3
rounded-full
bg-cyan-500
text-white
font-bold
transition-all
duration-500
hover:bg-cyan-600
hover:scale-110
hover:shadow-[0_0_30px_#06b6d4]
"

>

Visit Store

</button>




</div>






{/* Moving Glow */}



<div

className="
absolute
-right-20
-top-20
w-60
h-60
bg-cyan-400/20
rounded-full
blur-3xl
animate-pulse
"

>

</div>



</div>


{/* Store Details */}



<div

className="
mt-14
grid
md:grid-cols-2
gap-8
"

>



{/* Contact Card */}


<div

className="
group
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
transition-all
duration-500
hover:-translate-y-3
"

>



<h3

className="
text-white
text-2xl
font-bold
"

>

Contact Information

</h3>




<div

className="
mt-6
space-y-4
"

>


<p

className="
text-gray-300
flex
items-center
gap-3
"

>

📞 +92 300 1234567

</p>




<p

className="
text-gray-300
flex
items-center
gap-3
"

>

✉️ info@fashionstore.com

</p>




<p

className="
text-gray-300
flex
items-center
gap-3
"

>

📍 Main Fashion Street

</p>


</div>



</div>







{/* Timing Card */}



<div

className="
group
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
transition-all
duration-500
hover:-translate-y-3
"

>



<h3

className="
text-white
text-2xl
font-bold
"

>

Store Timing

</h3>




<div

className="
mt-6
space-y-4
"

>


<p

className="
text-gray-300
"

>

🕙 Monday - Friday

<br />

<span

className="
text-cyan-400
font-semibold
"

>

10:00 AM - 10:00 PM

</span>


</p>





<p

className="
text-gray-300
"

>

🛍️ Weekend

<br />

<span

className="
text-cyan-400
font-semibold
"

>

Open All Day

</span>


</p>



</div>



</div>




</div>







{/* Bottom Marquee */}



<div

className="
mt-16
overflow-hidden
border-y
border-cyan-400/20
py-4
bg-black/40
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

📍 Visit Our Store

</span>



<span

className="
text-white
font-bold
text-lg
"

>

✨ Premium Fashion Experience

</span>




<span

className="
text-cyan-400
font-bold
text-lg
"

>

🛍️ New Collection Available

</span>




<span

className="
text-white
font-bold
text-lg
"

>

🔥 Luxury Shopping

</span>



</div>



</div>


</div>


      </div>


    </section>


  );


}
