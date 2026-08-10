const faq = [
  {
    question: "Do you provide custom tailoring?",
    answer:
      "Yes, we provide custom tailoring services according to your size and style preference.",
  },
  {
    question: "Can I get personal styling advice?",
    answer:
      "Yes, our fashion experts help you choose the perfect outfit and look.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we provide secure delivery for all premium fashion collections.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can contact us through phone, email, WhatsApp or our contact form.",
  },
];


export default function ContactFAQ() {
  return (
    <section className="bg-[#0B0B0B] py-24 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">


          <span
            className="
            text-blue-400
            uppercase
            tracking-[6px]
            font-semibold
            "
          >
            FAQ
          </span>




          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mt-5
            hover:text-blue-400
            transition
            duration-500
            "
          >
            Frequently Asked Questions
          </h2>




          <p
            className="
            text-gray-400
            mt-5
            "
          >
            Find answers about our fashion services and collections.
          </p>


        </div>





        {/* FAQ Cards */}
        <div className="space-y-6">


          {faq.map((item,index)=>(


            <div
              key={index}

              className="
              group
              bg-[#171717]
              p-7
              rounded-2xl
              border
              border-gray-800
              hover:border-blue-500/50
              hover:-translate-y-2
              transition-all
              duration-500
              shadow-xl
              "
            >



              <h3
                className="
                text-white
                text-xl
                font-bold
                group-hover:text-blue-400
                transition
                "
              >
                {item.question}
              </h3>



              <p
                className="
                text-gray-400
                mt-3
                leading-7
                "
              >
                {item.answer}
              </p>



            </div>


          ))}


        </div>


      </div>


    </section>
  );
}