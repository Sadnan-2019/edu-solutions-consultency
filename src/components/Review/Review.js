import React from "react";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div>
      <section
        id="testimonies"
        class="py-20 bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24] text-gray-100"
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
        <Marquee gradientColor={false} speed={80} gradient={false}  >
          <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
            {/* <Marquee   gradientColor={false} speed={80} gradient={false} play={true}> */}
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div
                // style="box-shadow:0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
                class="bg-gradient-to-r from-[#155B59] via-[#080C24] to-[#0F1528]    flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 dark:border-dark    rounded-xl"
              >
                <div class="flex flex-col px-6 pt-8  space-y-5">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white dark:text-gray-600 fill-current"
                  >
                    <path
                      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"
                    ></path>
                  </svg>
                  <p
                    class=" text-lg body-medium m-0 text-white dark:text-dark-contrastText"
                    // style="hyphens:auto"
                  >
                    These are high-quality courses. Trust me. I own around 10
                    and the price is worth it for the content quality.{" "}
                    <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">
                      @EducativeInc
                    </a>{" "}
                    came at the right time in my career. I'm understanding
                    topics better than with any book or online video tutorial
                    I've done. Truly made for developers. Thanks{" "}
                    {/* <a href="https://t.co/EeKruv5hxM">
                      https://t.co/EeKruv5hxM
                    </a> */}
                  </p>
                </div>
           
                  <div class="flex justify-between items-center px-5 py-5">
                 <div>
                  <p class="font-display text-base text-white">Sheryl Berge</p>
                </div>
                <div class="overflow-hidden rounded-full ">
                  <img alt="" class="h-14 w-14 object-cover bg-transparent"  src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
               
                  </div>
                
              </div>
              <div
                // style="box-shadow:0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
                class="bg-gradient-to-r from-[#5E371A] via-[#080C24] to-[#1A0D18]    flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 dark:border-dark    rounded-xl"
              >
                <div class="flex flex-col px-6 pt-8  space-y-5">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white dark:text-gray-600 fill-current"
                  >
                    <path
                      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"
                    ></path>
                  </svg>
                  <p
                    class=" text-lg body-medium m-0 text-white dark:text-dark-contrastText"
                    // style="hyphens:auto"
                  >
                    These are high-quality courses. Trust me. I own around 10
                    and the price is worth it for the content quality.{" "}
                    <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">
                      @EducativeInc
                    </a>{" "}
                    came at the right time in my career. I'm understanding
                    topics better than with any book or online video tutorial
                    I've done. Truly made for developers. Thanks{" "}
                    {/* <a href="https://t.co/EeKruv5hxM">
                      https://t.co/EeKruv5hxM
                    </a> */}
                  </p>
                </div>
           
                  <div class="flex justify-between items-center px-5 py-5">
                 <div>
                  <p class="font-display text-base text-white">Sheryl Berge</p>
                </div>
                <div class="overflow-hidden rounded-full ">
                  <img alt="" class="h-14 w-14 object-cover bg-transparent"  src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
               
                  </div>
                
              </div>
              <div
                // style="box-shadow:0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
                class="bg-gradient-to-r from-[#680C68] via-[#080C24] to-[#150620]    flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 dark:border-dark    rounded-xl"
              >
                <div class="flex flex-col px-6 pt-8  space-y-5">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white dark:text-gray-600 fill-current"
                  >
                    <path
                      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"
                    ></path>
                  </svg>
                  <p
                    class=" text-lg body-medium m-0 text-white dark:text-dark-contrastText"
                    // style="hyphens:auto"
                  >
                    These are high-quality courses. Trust me. I own around 10
                    and the price is worth it for the content quality.{" "}
                    <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">
                      @EducativeInc
                    </a>{" "}
                    came at the right time in my career. I'm understanding
                    topics better than with any book or online video tutorial
                    I've done. Truly made for developers. Thanks{" "}
                    {/* <a href="https://t.co/EeKruv5hxM">
                      https://t.co/EeKruv5hxM
                    </a> */}
                  </p>
                </div>
           
                  <div class="flex justify-between items-center px-5 py-5">
                 <div>
                  <p class="font-display text-base text-white">Sheryl Berge</p>
                </div>
                <div class="overflow-hidden rounded-full ">
                  <img alt="" class="h-14 w-14 object-cover bg-transparent"  src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
               
                  </div>
                
              </div>
              <div
                // style="box-shadow:0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
                class="bg-gradient-to-r from-[#114718] via-[#051431] to-[#013125]    flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 dark:border-dark    rounded-xl"
              >
                <div class="flex flex-col px-6 pt-8  space-y-5">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-white dark:text-gray-600 fill-current"
                  >
                    <path
                      d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"
                    ></path>
                  </svg>
                  <p
                    class=" text-lg body-medium m-0 text-white dark:text-dark-contrastText"
                    // style="hyphens:auto"
                  >
                    These are high-quality courses. Trust me. I own around 10
                    and the price is worth it for the content quality.{" "}
                    <a href="https://twitter.com/EducativeInc?ref_src=twsrc%5Etfw">
                      @EducativeInc
                    </a>{" "}
                    came at the right time in my career. I'm understanding
                    topics better than with any book or online video tutorial
                    I've done. Truly made for developers. Thanks{" "}
                    {/* <a href="https://t.co/EeKruv5hxM">
                      https://t.co/EeKruv5hxM
                    </a> */}
                  </p>
                </div>
           
                  <div class="flex justify-between items-center px-5 py-5">
                 <div>
                  <p class="font-display text-base text-white">Sheryl Berge</p>
                </div>
                <div class="overflow-hidden rounded-full ">
                  <img alt="" class="h-14 w-14 object-cover bg-transparent"  src="https://randomuser.me/api/portraits/men/15.jpg"/>
                </div>
               
                  </div>
                
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Review;
