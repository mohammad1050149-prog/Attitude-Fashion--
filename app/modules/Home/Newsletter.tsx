"use client";

import React, { useState } from "react";


const Newsletter = () => {


const [email,setEmail] = useState("");

const [message,setMessage] = useState("");



const handleSubscribe = () => {


if(!email){

setMessage("Please enter your email ✨");

return;

}


setMessage("Thank you for subscribing 💎");

setEmail("");

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





{/* Floating Lights */}



<div className="
absolute
top-1/2
left-1/2
w-20
h-20
bg-cyan-400/20
rounded-full
blur-3xl
animate-bounce
">
</div>






<div

className="
relative
max-w-6xl
mx-auto
px-6
z-10
"

>



{/* Main Card */}



<div

className="
relative
rounded-[40px]
border
border-cyan-400/20
bg-white/5
backdrop-blur-2xl
py-16
px-8
md:px-16
text-center
shadow-[0_0_50px_rgba(6,182,212,0.25)]
hover:shadow-[0_0_80px_rgba(6,182,212,0.45)]
transition-all
duration-700
overflow-hidden
"

></div>


{/* Small Heading */}


<span

className="
inline-block
text-cyan-400
uppercase
tracking-[6px]
font-bold
animate-pulse
"

>

Stay Updated

</span>






{/* Main Heading */}



<h2

className="
text-4xl
md:text-6xl
font-black
text-white
mt-5
leading-tight
"

>

Subscribe To Our


<span

className="
block
text-cyan-400
hover:text-white
transition
duration-500
"

>

Newsletter

</span>


</h2>






{/* Line */}



<div

className="
w-28
h-1
bg-cyan-400
rounded-full
mx-auto
mt-6
shadow-[0_0_20px_#06b6d4]
"

>

</div>






{/* Description */}



<p

className="
text-gray-300
mt-7
max-w-2xl
mx-auto
text-lg
leading-8
"

>

Be the first to discover new fashion drops,
exclusive offers, premium collections and
latest style updates.

</p>






{/* Email Form */}



<div

className="
mt-12
flex
flex-col
sm:flex-row
gap-5
max-w-3xl
mx-auto
"

>




<input


type="email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


placeholder="Enter your email address..."


className="

flex-1

rounded-2xl

border

border-slate-700

bg-slate-900/80

px-6

py-4

text-white

outline-none

transition-all

duration-500

focus:border-cyan-400

focus:shadow-[0_0_25px_rgba(6,182,212,0.5)]

placeholder:text-gray-500

"


/>







<button


onClick={handleSubscribe}


className="

rounded-2xl

bg-gradient-to-r

from-cyan-500

via-blue-500

to-cyan-500

px-10

py-4

font-bold

text-white

transition-all

duration-500

hover:scale-110

hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]

active:scale-95

"


>

Subscribe

</button>



</div>






{/* Message */}



{

message && (


<p

className="
mt-5
text-cyan-400
font-semibold
animate-pulse
"

>

{message}

</p>


)

}


{/* Benefits Cards */}



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
group
bg-black/40
border
border-white/10
rounded-3xl
p-6
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<div

className="
text-4xl
group-hover:scale-125
transition
duration-500
"

>

🔥

</div>




<h3

className="
text-white
font-bold
text-xl
mt-4
"

>

Exclusive Drops

</h3>




<p

className="
text-gray-400
mt-3
text-sm
leading-6
"

>

Get early access to our latest premium fashion collections.

</p>



</div>








<div

className="
group
bg-black/40
border
border-white/10
rounded-3xl
p-6
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<div

className="
text-4xl
group-hover:scale-125
transition
duration-500
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

VIP Offers

</h3>




<p

className="
text-gray-400
mt-3
text-sm
leading-6
"

>

Receive special discounts and members-only deals.

</p>



</div>








<div

className="
group
bg-black/40
border
border-white/10
rounded-3xl
p-6
hover:border-cyan-400
hover:-translate-y-3
transition-all
duration-500
"

>


<div

className="
text-4xl
group-hover:scale-125
transition
duration-500
"

>

🚚

</div>




<h3

className="
text-white
font-bold
text-xl
mt-4
"

>

Fast Updates

</h3>




<p

className="
text-gray-400
mt-3
text-sm
leading-6
"

>

Stay informed about arrivals, offers and fashion trends.

</p>



</div>




</div>






{/* Small Bottom Note */}



<p

className="
mt-10
text-gray-500
text-sm
"

>

✨ Join thousands of fashion lovers and stay ahead with new styles.

</p>


{/* Premium Marquee */}



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
tracking-wider
"

>

✨ Exclusive Offers

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

🔥 New Arrivals

</span>




<span

className="
text-cyan-400
font-bold
text-lg
tracking-wider
"

>

💎 Premium Fashion

</span>




<span

className="
text-white
font-bold
text-lg
tracking-wider
"

>

🚚 Free Shipping

</span>




<span

className="
text-cyan-400
font-bold
text-lg
tracking-wider
"

>

🛍️ Latest Trends

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
"

>

✨ Exclusive Offers

</span>



<span

className="
text-white
font-bold
text-lg
"

>

🔥 New Arrivals

</span>



<span

className="
text-cyan-400
font-bold
text-lg
"

>

💎 Premium Fashion

</span>



<span

className="
text-white
font-bold
text-lg
"

>

🚚 Free Shipping

</span>



</div>



</div>



</div>







{/* Floating Bottom Badge */}



<div

className="
mt-12
flex
justify-center
"

>



<div

className="
bg-gradient-to-r
from-cyan-500/20
to-blue-500/20
border
border-cyan-400/30
rounded-full
px-8
py-3
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
"

>

✨ Premium Fashion Community

</p>



</div>



</div>


      </div>


    </section>


  );


};


export default Newsletter;