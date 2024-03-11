import React from "react";
import discussion from "../../assets/discussion.png";
import admisstion from "../../assets/admission.png";
import counselling from "../../assets/counselling.png";
import motel from "../../assets/motel.png";
import university from "../../assets/university2.png";
import visa from "../../assets/passport.png";
import eligibility from "../../assets/task-list.png";
import interview from "../../assets/interview.png";
import scholarship from "../../assets/scholarship.png";
import application  from "../../assets/application.png";
import airticket  from "../../assets/ticket-flight.png";
import "./Services.css";

const Services = () => {
  return (
    <div>


      
      <section class="py-12 bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f] text-gray-100 sm:py-12 lg:py-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              Our Services
            </h2>
           
          </div>
          <div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div class="relative overflow-hidden bg-[#41ffc7]  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]	  	rounded-xl h-full">
                <div class="p-9  ">
                  <img src={discussion} className="w-20 " alt="" />
                  <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Free Counselling
                  </h3>
                  {/* <p class="mt-6 text-base text-black">
                    Our expert counselors, all graduates of UK Universities,USA
                    Universities, offer complimentary counseling services to our
                    students.
                  </p> */}
                </div>
              </div>
            </div>
            <div class="overflow-hidden bg-[#f69595] shadow-white	 shadow-2xl rounded-xl  *:">
              <div class="p-9">
                <img src={eligibility} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Eligibility Check
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>
            <div class="overflow-hidden bg-[#f4d847] shadow-white	 shadow-2xl rounded-xl">
              <div class="p-9">
                <img src={application} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Application Support
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>
            <div class="overflow-hidden bg-[#e585ed] shadow-[#dd8276e9]		 shadow-2xl rounded-xl">
              <div class="p-9">
                <img src={scholarship} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Scholarship
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>
            <div class="overflow-hidden bg-[#04f571] shadow-[#101e17]	 shadow-2xl  rounded-xl">
              <div class="p-9">
                <img src={motel} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Student Accommodation  
                </h3>
                 
              </div>
            </div>
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div class="relative overflow-hidden bg-[#94bbe9] shadow-md rounded-xl h-full">
                <div class="p-9">
                  <img src={counselling} className="w-20" alt="" />
                  <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Compliance Guidance
                  </h3>
                  {/* <p class="mt-6 text-base text-gray-600">
                    Our dedicated compliance team is here to assist our students
                    throughout the visa processing journey.
                  </p> */}
                </div>
              </div>
            </div>
      
           
            
            <div class="overflow-hidden bg-[#c6dd06] shadow-md rounded-xl">
              <div class="p-9">
                <img src={interview} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Interview Preparation
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>

            <div class="overflow-hidden bg-[#fb2b75] shadow-md rounded-xl">
              <div class="p-9">
                <img src={visa} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Visa Processing
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>
            <div class="overflow-hidden bg-[#ff751a] shadow-md rounded-xl">
              <div class="p-9">
                <img src={airticket} className="w-20" alt="" />
                <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                Air Ticket Assistance
                </h3>
                {/* <p class="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p> */}
              </div>
            </div>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
