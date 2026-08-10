import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";


const WhyChooseUs = () => {


const features = [

{
icon:<FaShippingFast />,
title:"Fast Delivery",
desc:"Quick and reliable shipping with safe packaging across the country.",
},

{
icon:<FaShieldAlt />,
title:"Premium Quality",
desc:"Luxury fabrics with stylish designs made for modern fashion lovers.",
},

{
icon:<FaUndoAlt />,
title:"Easy Returns",
desc:"Simple 7-day return and exchange policy for your satisfaction.",
},

{
icon:<FaHeadset />,
title:"24/7 Support",
desc:"Our team is always ready to help you anytime you need.",
},

];



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
blur-[160px]
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


{/* Heading Section */}


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

Why Choose Us

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

Fashion With Confidence

</h2>



<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
text-lg
leading-8
"

>

We deliver premium fashion with quality,
comfort and a luxury shopping experience.

</p>


</div>
// Feature Cards


<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"

>


{
features.map((item,index)=>(


<div

key={index}

className="
group
relative
overflow-hidden
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-[35px]
p-8
text-center
transition-all
duration-700
hover:-translate-y-5
hover:border-cyan-400
hover:shadow-[0_0_50px_rgba(6,182,212,0.35)]
"

>



{/* Animated Background */}


<div

className="
absolute
inset-0
bg-gradient-to-br
from-cyan-500/20
via-transparent
to-blue-500/10
opacity-0
group-hover:opacity-100
transition
duration-700
"

>
</div>





{/* Floating Circle */}


<div

className="
absolute
-top-10
-right-10
w-32
h-32
bg-cyan-400/10
rounded-full
blur-2xl
group-hover:scale-150
transition
duration-700
"

>
</div>





{/* Icon Box */}


<div

className="
relative
z-10
w-24
h-24
mx-auto
rounded-full
bg-cyan-500/10
border
border-cyan-400/40
flex
items-center
justify-center
text-cyan-400
text-5xl
transition-all
duration-700
group-hover:scale-110
group-hover:rotate-12
group-hover:bg-cyan-500/20
"

>

{item.icon}

</div>





{/* Title */}


<h3

className="
relative
z-10
text-white
text-2xl
font-black
mt-7
group-hover:text-cyan-400
transition
duration-500
"

>

{item.title}

</h3>





{/* Description */}


<p

className="
relative
z-10
text-gray-400
mt-4
leading-7
"

>

{item.desc}

</p>





{/* Bottom Glow Line */}


<div

className="
relative
z-10
w-0
h-1
bg-cyan-400
mx-auto
mt-7
rounded-full
transition-all
duration-700
group-hover:w-24
"

>
</div>




</div>


))


}


</div>
// Premium Stats Section


<div

className="
grid
md:grid-cols-3
gap-8
mt-20
"

>



<div

className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
backdrop-blur-xl
hover:border-cyan-400
transition
duration-500
"

>


<h3

className="
text-cyan-400
text-5xl
font-black
group-hover:scale-110
transition
duration-500
"

>
10K+
</h3>



<p

className="
text-gray-400
mt-3
text-lg
"

>
Happy Customers
</p>


</div>





<div

className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
backdrop-blur-xl
hover:border-cyan-400
transition
duration-500
"

>


<h3

className="
text-cyan-400
text-5xl
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
text-gray-400
mt-3
text-lg
"

>
Premium Designs
</p>


</div>






<div

className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-8
text-center
backdrop-blur-xl
hover:border-cyan-400
transition
duration-500
"

>


<h3

className="
text-cyan-400
text-5xl
font-black
group-hover:scale-110
transition
duration-500
"

>
99%
</h3>



<p

className="
text-gray-400
mt-3
text-lg
"

>
Customer Satisfaction
</p>


</div>



</div>






{/* Luxury Experience Banner */}


<div

className="
relative
mt-20
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
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
translate-x-[-100%]
group-hover:translate-x-[100%]
transition
duration-1000
"

>
</div>





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
Luxury Fashion Experience
</h3>



<p

className="
text-gray-400
mt-4
text-lg
"

>
Designed with passion, delivered with perfection.
</p>



<button

className="
mt-7
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
Explore More
</button>



</div>


</div>
 {/* Moving Fashion Marquee */}


<div
  className="
    mt-20
    overflow-hidden
    border-y
    border-cyan-400/30
    bg-black/40
    py-5
    rounded-2xl
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

      <span className="text-cyan-400 font-bold text-lg">🚚 Fast Delivery</span>
      <span className="text-white font-bold text-lg">✨ Premium Quality</span>
      <span className="text-cyan-400 font-bold text-lg">💎 Luxury Fashion</span>
      <span className="text-white font-bold text-lg">🛍️ Easy Shopping</span>
      <span className="text-cyan-400 font-bold text-lg">🎧 24/7 Support</span>
      <span className="text-white font-bold text-lg">🔥 Trending Styles</span>

    </div>

    {/* Duplicate */}
    <div className="flex gap-16 px-8">

      <span className="text-cyan-400 font-bold text-lg">🚚 Fast Delivery</span>
      <span className="text-white font-bold text-lg">✨ Premium Quality</span>
      <span className="text-cyan-400 font-bold text-lg">💎 Luxury Fashion</span>
      <span className="text-white font-bold text-lg">🛍️ Easy Shopping</span>
      <span className="text-cyan-400 font-bold text-lg">🎧 24/7 Support</span>
      <span className="text-white font-bold text-lg">🔥 Trending Styles</span>

    </div>
  </div>
</div>
</div>

    </section>


  );


};



export default WhyChooseUs;