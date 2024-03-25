import React from "react";

const Inquery = () => {
  return (
    <div>
       
      <div>
        <form>
          <div
            class="flex flex-col items-start justify-start p-4 bg-white shadow-2xl rounded-xl
relative z-10"
          >
            <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
              Contact Us
            </p>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              <div class="relative">
                <p
                  class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
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
                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
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
                <p
                  class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
      absolute"
                >
                  Subject
                </p>
                <input
                  placeholder="Subject"
                  type="text"
                  class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                />
              </div>
              <div class="relative">
                <p
                  class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
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
                <a
                  class="bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24]    w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white  
      rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inquery;
