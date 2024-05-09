import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/partner/p1.jpeg";
import partner2 from "../../assets/partner/p2.jpg";
import partner3 from "../../assets/partner/p3.png";
import partner4 from "../../assets/partner/p4.png";
import partner5 from "../../assets/partner/p5.jpg";
import partner6 from "../../assets/partner/p6.jpg";
import partner7 from "../../assets/partner/p7.png";
import partner8 from "../../assets/partner/p8.jpg";
import partner9 from "../../assets/partner/p9.png";
import partner10 from "../../assets/partner/p10.png";
// import partner11 from "../../assets/partner/p11.jpg";
import partner12 from "../../assets/partner/p12.png";
import partner13 from "../../assets/partner/p13.jpg";
import partner14 from "../../assets/partner/p14.png";
import partner15 from "../../assets/partner/p15.png";
// import partner16 from "../../assets/partner/p16.jpg";
import partner17 from "../../assets/partner/p17.png";
import partner18 from "../../assets/partner/p18.jpg";
import partner19 from "../../assets/partner/p19.png";
import partner20 from "../../assets/partner/p20.jpg";
const Review = () => {
  return (
    <div>
      <section
        id="testimonies"
        class="py-20   bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f] text-gray-100"
      >
        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div class="mb-12 space-y-5 md:mb-16 md:text-center">
            {/* <div class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div> */}
            <h1 class="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p class="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <Marquee gradientColor={false} speed={80} gradient={false}>
          <div class=" ">
            {/* <Marquee   gradientColor={false} speed={80} gradient={false} play={true}> */}
            <div class="   ">
              <div class="  m x-5    gap-5 flex     align-center justify-center    rounded-xl">
                <img alt="" class="h-32 w-52  p-2 rounded  " src={partner4} />
                <img alt="" class="h-32 w-52   p-2  rounded  " src={partner5} />
                <img alt="" class="h-32 w-52   p-2  rounded  " src={partner6} />
                <img alt="" class="h-32 w-52  p-2  rounded  " src={partner7} />
                <img alt="" class="h-32 w-52  p-2   rounded  " src={partner8} />
                <img alt="" class="h-32 w-52  p-2   rounded  " src={partner9} />
                <img
                  alt=""
                  class="h-32 w-52   p-2  rounded  "
                  src={partner10}
                />
                {/* <img alt="" class="h-32 w-52   rounded  " src={partner18} /> */}
                <img
                  alt=""
                  class="h-32 w-52  p-2   rounded  "
                  src={partner20}
                />
              </div>
            </div>
          </div>
        </Marquee>
        <Marquee
          gradientColor={false}
          speed={80}
          gradient={false}
         
        >
          <div class=" ">
            {/* <Marquee   gradientColor={false} speed={80} gradient={false} play={true}> */}
            <div class="   ">
              <div class="   py-5    gap-5 flex   max-w-md align-center justify-center    rounded-xl">
                <img
                  alt=""
                  class="h-32 w-52   p-2   rounded  "
                  src={partner2}
                />

                <img
                  alt=""
                  class="h-32 w-52  p-2   rounded  "
                  src={partner12}
                />
                <img
                  alt=""
                  class="h-32 w-52  p-2   rounded  "
                  src={partner13}
                />

                <img
                  alt=""
                  class="h-32 w-52  p-2   rounded   "
                  src={partner1}
                />
                <img
                  alt=""
                  class="h-32 w-52   p-2  rounded  "
                  src={partner14}
                />
                <img
                  alt=""
                  class="h-32 w-52   p-2  rounded  "
                  src={partner15}
                />

                <img
                  alt=""
                  class="h-32 w-52   p-2  rounded  "
                  src={partner17}
                />
                <img alt="" class="h-32 w-52   p-2  rounded  " src={partner3} />
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Review;
