import React from "react";
import discussion from "../../assets/discussion.png"
import admisstion from "../../assets/admission.png"
import counselling  from "../../assets/counselling.png"
import motel  from "../../assets/motel.png"
import university  from "../../assets/university2.png"
import visa  from "../../assets/passport.png"
import eligibility  from "../../assets/task-list.png"
import interview  from "../../assets/interview.png"
import scholarship  from "../../assets/scholarship.png"
import "./Services.css";
 
const Services = () => {
  return (
    <div>
      
      <section class="py-12 bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24] via-[#00395D] to-[#080C24] text-gray-100 sm:py-12 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Services That We Provide
            </h2>
            <p class="mb-4 text-xl">
              Fulfilling your needs with the utmost precision, we ensure to
              deliver the finest results possible
            </p>
          </div>
          <div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div class="p-9  ">
                  <img src={discussion} className="w-20 " alt=""/>
                  <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Free Counselling
                  </h3>
                  <p class="mt-6 text-base text-gray-600">
                    Collaborate in realtime with other editors in a project. See
                    what othe editors are doing and edit even a simple text
                    together
                  </p>
                </div>
              </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
              <img src={admisstion} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Student Admission Services
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Go back and forth your history of changes and restore your
                  designs to any point in time
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div class="p-9">
                 <img src={counselling} className="w-20" alt=""/>
                  <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Compliance Assistance
                  </h3>
                  <p class="mt-6 text-base text-gray-600">
                    Step up your designs and workflow with integrations with
                    your favourite tools such as mailchimp, slack, jira etc
                  </p>
                </div>
              </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
                 <img src={motel} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Student Accommodation Services
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Effortlessly publish your webpages online and make it
                  available to the world with a click of a button
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div class="p-9">
                <img src={university} className="w-20" alt=""/>
                  <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Partner University Services
                  </h3>
                  <p class="mt-6 text-base text-gray-600">
                    Collect data and information from users with forms built on
                    windframe and sort through them in a nice interface
                  </p>
                </div>
              </div>
            </div>

            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
              <img src={visa} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Visa Application
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
                <img src={eligibility} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Eligibility Check
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
                <img src={interview} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Interview Preparation
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p>
              </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
              <div class="p-9">
                <img src={scholarship} className="w-20" alt=""/>
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Scholarship
                </h3>
                <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
