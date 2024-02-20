import React, { useState } from "react";
import edu from "../../assets/DDDDE.PNG";
import "./Welcome.css";
const Welcome = () => {
  const [currentSlideTwo, setCurrentSlide] = useState(0);
  return (
    <div className="bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24]">
      <div className="    hero-content flex-col lg:flex-row-reverse       ">
        <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
          <h2
            style={{ lineHeight: "120%" }}
            className="animated slide-text text-[25px] lg:text-[40px] font-bold   text-left   text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-pink-600 "
          >
            {" "}
            Welcome to EDU SOLUTIONS
          </h2>

          <h1
            className="mb-5 text-lg  lg:text-xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
            style={{ lineHeight: "120%", color: "white" }}
          >
            We provide prospective students worldwide with high-quality and
            professional University Admission services. Our commitment
            to the highest level of integrity, transparency, and fair practice
            remains unwavering in our interactions with valued students and
            partners{" "}
          </h1>

           
        </div>
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
        
        <div data-aos="fade-left" class="sm:w-1/2 relative mt-10 sm:mt-0">
            <div class="floating bg-[#1dc151ec] w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
            <img class="rounded-xl z-40 relative     floating  " src={edu} alt="" />
            <button class="bg-[#ec5342]  w-14 h-14 animate-pulse rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none   transition hover:scale-110 duration-300 ease-in-out z-50">
              <svg
                class="w-5 h-5 ml-1"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="bg-[#f7f5f5] w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
          </div>
      </div>
    </div>
  );
};

export default Welcome;
