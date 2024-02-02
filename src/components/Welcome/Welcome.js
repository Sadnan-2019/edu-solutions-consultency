import React from "react";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-r from-[#3F1825]  via-[#302530] to-[#441B26]">
      <div class="flex flex-wrap items-center text-left  ">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="https://picsum.photos/400/240"
            alt="gem"
            class="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 text-white">
          <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Simple integration
          </h3>
          <p class="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your
            Ruby on Rails projects using the provided command line interface.
            Just create a project and follow the step-by-step instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
