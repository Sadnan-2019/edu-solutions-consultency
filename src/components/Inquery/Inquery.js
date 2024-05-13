import React from "react";
import photo from "../../assets/freecounselling.png"
const Inquery = () => {
  return (
    <div className=" bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f]">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2   items-center justify-items-center px-8">
        <div>
          <form>
            <div
              class="flex flex-col items-start justify-start p-8     rounded-xl
relative z-10"
            >
              <p class="w-full text-4xl font-medium text-center text-white leading-snug font-serif">
                Free Consultation
              </p>
              <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                <div class="relative">
                  <p
                    class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100
      absolute"
                  >
                    Name
                  </p>
                  <input
                    placeholder="John"
                    type="text"
                    class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                  />
                </div>
                <div class="relative">
                  <p class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100 absolute">
                    Email
                  </p>
                  <input
                    placeholder="123@ex.com"
                    type="text"
                    class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                  />
                </div>
                <div class="relative">
                  <p class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100 absolute">
                    Phone Number
                  </p>
                  <input
                    placeholder="Phone Number"
                    type="text"
                    class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                  />
                </div>
                <div class="relative">
                  <p
                    class=" pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100
      absolute"
                  >
                    Service Name
                  </p>
                  <input
                    placeholder="Service Name"
                    type="text"
                    class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                  />
                </div>
                <div class="relative">
                  <p
                    class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100
      absolute"
                  >
                    Message
                  </p>
                  <textarea
                    placeholder="Message"
                    type="text"
                    class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                  />
                </div>
                <div class="relative">
                  <input
                    class="bg-gradient-to-r btn  from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24]    w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white  
      rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                  type="submit" value="Send Message"/>
                     
                  
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
          {/* <h2
            style={{ lineHeight: "120%" }}
            className="animated slide-text text-[25px] lg:text-[40px] font-bold   text-left   text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-pink-600 "
          >
            {" "}
            WHO WE ARE
          </h2>

          <h1
            className="mb-5 text-lg  lg:text-xl max-w-lg mt-7 font-bold   md:text-[25px] poppins-t "
            style={{ lineHeight: "120%", color: "white" }}
          >
            Our goal is to meticulously handle every aspect of studying abroad,
            providing students with peace of mind knowing that a dedicated
            professional team is diligently working to ensure the best possible
            outcome. We eagerly anticipate welcoming students from across the
            globe to join EDU SOLUTIONS and assist them in preparing for their future
            achievements.
          </h1> */}

          <img src={photo} />
        </div>
      </div>
    </div>
  );
};

export default Inquery;
