import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import "animate.css";
// import tetimonial from "../../assets/testimonial1.png";

// import { BsArrowRight } from "react-icons/bs";
const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo, setCurrentSlideTwo] = useState(0);
  const [currentSlideThree, setCurrentSlideThree] = useState(0);

  const sliderRef = useRef(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentSlideTwo(index);
      setCurrentSlideThree(index);
    },

    // afternewChange: (index) => {
    //   setCurrentSlideTwo(index);
    // },
    autoplay: "true",
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="full-width-slider">
        <Slider ref={sliderRef} {...settings} className="">
           
          <div className=" ">
            <section className="landingtwo  blog h-auto            ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter  md:text-5xl lg:text-[40px] lg:max-w-7xl    text-transparent  text-white ${
                          currentSlide === 0 ? "animated" : ""
                        }`}
                      >
                        Map your route to success with us{" "}
                        {/* <br class="hidden lg:block" /> */}
                        {/* the assistance of our services. */}
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-blue-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 0 ? "animatedtext" : ""
                            }`}
                          >
                            Explore More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 0 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingthree  blog h-auto        ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 1 ? "animated" : ""
                        }`}
                      >
                        Offering comprehensive solutions
                        <br class=" lg:block" />
                        for international & national education needs.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-blue-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 1 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 1 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
          <div className=" ">
            <section className="landingone  blog h-auto        ">
              <div class="  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl  ">
                <div class="flex w-full mx-auto text-left">
                  <div class="  inline-flex items-center mx-auto align-middle">
                    <div class="text-center">
                      <h1
                        style={{ lineHeight: "120%" }}
                        className={`slide-text  max-w-5xl text-2xl font-bold leading-none tracking-tighter   lg:text-[40px] lg:max-w-7xl    text-transparent   text-white ${
                          currentSlide === 2 ? "animated" : ""
                        }`}
                      >
                        Eligibility,Admissions, Visa Processing,
                        <br class=" lg:block" />
                        Interview Prep, accommodation, all in one place.
                      </h1>

                      <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                        <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <button
                            class={`bg-blue-900 slide-text items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                              currentSlideThree === 2 ? "animatedtext" : ""
                            }`}
                          >
                            Explor More
                          </button>
                        </div>
                        <div class="mt-3 rounded-lg sm:mt-0">
                          <button
                            className={`slide-text px-5 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 from-[#92468E] to-[#38235D] inline-flex  md:inline-flex items-center     border          text-white   ${
                              currentSlideTwo === 2 ? "animatedpic" : ""
                            }`}
                            class=""
                          >
                            Get Opportunities
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="white"
                    fill-opacity="50"
                    d="M0,128L120,160C240,192,480,256,720,272C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </section>
          </div>
        
          {/* <div class="w-full mx-auto text-center mb-10 -mt-0 -sm:mt-4 max-w-[1024px] dark:text-white">
      <h1 class="semibold text-[2.6rem] leading-10 sm:text-6xl sm:leading-auto mb-6 block">
          Crypt AI and beyond
      </h1>
      <h2 class="semibold text-[1.75rem] leading-9 sm:text-4xl sm:leading-auto mb-6 block">
          not your average crypto coin
      </h2>
      <div class="w-screen sm:w-auto max-w-[1024px] ml-[-32px] sm:ml-0">
          <button type="button"
        class="inline-flex items-center shadow-sm text-sm rounded-lg text-white active:ring-2 hover:ring-2 ring-slate-100 ring-offset-2 mx-1 text-[1.1rem] sm:text-[1.5rem] font-light px-3 sm:px-6 py-3 bg-gradient-to-bl from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600">
              Create a coin
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-8 h-8 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75">
          </path>
        </svg>
      </button>
          <button type="button"
        class="inline-flex items-center shadow-sm text-sm rounded-lg text-white active:ring-2 hover:ring-2 ring-slate-100 ring-offset-2 mx-1 text-[1.1rem] sm:text-[1.5rem] font-light px-3 sm:px-6 py-3 bg-[#5965f3] hover:bg-[#3e4be0] sm:ml-4 mt-2">Join
        Discord
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="ml-2 h-8" height="28" viewBox="0 0 34 34"
          width="28">
          <g fill="#fff">
            <path
              d="m26.2543 6.96724c-2.0063-.91902-4.1515-1.58695-6.3942-1.96724-.2754.48755-.5972 1.14329-.819 1.66497-2.3841-.35103-4.7463-.35103-7.0865 0-.2219-.52168-.551-1.17742-.8289-1.66497-2.24507.38029-4.39272 1.05066-6.39895 1.97212-4.046649 5.98708-5.143625 11.82548-4.595136 17.58088 2.683936 1.9624 5.284976 3.1544 7.842166 3.9345.63135-.8508 1.19448-1.7552 1.67958-2.7083-.92388-.3437-1.80878-.7679-2.64492-1.2603.22186-.1609.43878-.3291.64842-.5022 5.09974 2.3354 10.64074 2.3354 15.67944 0 .2121.1731.4291.3413.6485.5022-.8386.4948-1.7259.919-2.6499 1.2627.4852.9507 1.0458 1.8576 1.6797 2.7083 2.5596-.78 5.1631-1.9721 7.847-3.9369.6436-6.672-1.0994-12.4568-4.6073-17.58576zm-15.9062 14.04616c-1.53084 0-2.78631-1.3992-2.78631-3.1032s1.22862-3.1056 2.78631-3.1056c1.5577 0 2.8132 1.3992 2.7864 3.1056.0024 1.704-1.2287 3.1032-2.7864 3.1032zm10.297 0c-1.5309 0-2.7863-1.3992-2.7863-3.1032s1.2286-3.1056 2.7863-3.1056 2.8131 1.3992 2.7863 3.1056c0 1.704-1.2286 3.1032-2.7863 3.1032z">
            </path>
          </g>
        </svg>
      </button>
      </div>
  </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
