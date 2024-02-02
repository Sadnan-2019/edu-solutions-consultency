import React, { useState } from "react";

const Welcome = () => {
  const [currentSlideTwo, setCurrentSlide] = useState(0);
  return (
    <div className="bg-gradient-to-r from-[#3F1825]  via-[#302530] to-[#441B26]">
      <div className=" md:py-20 py-10   hero-content flex-col lg:flex-row-reverse       ">
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
            professional worldwide University Admission services. Our commitment
            to the highest level of integrity, transparency, and fair practice
            remains unwavering in our interactions with valued clients and
            partners{" "}
          </h1>

          <div className="flex  gap-4 mt-10 text-center">
            <a
              href="/"
              className="animated slide-text btn-sm lg:p-2 rounded-full    hover-button bg-gradient-to-r from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white "
            >
              <span className="text-sm font-medium"> MORE EXPLORE</span>
              {/* <BsArrowRight className="text-lg hidden lg:ml-2"
                       /> */}
            </a>
          </div>
        </div>

        <div class="    text-left md:ml-8 lg:order-1 order-2   lg:mt-0  ">
          <img
            src="https://picsum.photos/400/240"
            alt=""
            className={`  max-w-sm slide-text p-1   lg:p-2   lg:text-lg font-bold  hover-button bg-gradient-to-r from-[#92468E] to-[#38235D]     border          text-white   ${
              currentSlideTwo === 0 ? "animatedpic" : ""
            }`}
          />

          {/* <a
                    href="/"
                    
                  >
                    MORE EXPLORE
                    <BsArrowRight className="text-lg   lg:ml-2" />
                  </a> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
