import React, { useState } from 'react';
import InstitutionalDubai from './InstitutionalDubai';
import EducationalCanada from '../Canada/EducationalCanada';

const DubaiDetails = () => {
    const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 bg-blue-900  transition     hover:bg-opacity-40  shadow-md rounded-md px-2  lg:text-white    ";

  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-blue-800   ";

  const [activeDiv, setActiveDiv] = useState(1);

  const showDiv = (divId) => {
    setActiveDiv(divId);
  };
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
    return (
        <div>
            <div className="bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6  ">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <nav
              className="relative flex-row sm:flex-col flex items-center justify-between sm:h-10 md:justify-center  "
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"></div>
              <div className="md:hidden">
                {/* Hamburger menu button for small screens */}
                <button
                  className="text-white hover:text-gray-900 focus:outline-none"
                  onClick={toggleNavbar}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`md:flex md:space-x-10 list-none ${
                  showNavbar ? "" : "hidden"
                }`}
              >
                <li>
                  <button
                    className={`text-lg font-bold ${
                      activeDiv === 1 ? "bg-red-900" : ""
                    } text-white list-none hover:text-gray-900 py-2 px-4 rounded`}
                    onClick={() => showDiv(1)}
                  >
                    ADMISSION REQUIREMENTS
                  </button>
                </li>
                <li>
                  <button
                    className={`text-lg font-bold ${
                      activeDiv === 2 ? "bg-red-900" : ""
                    } text-white list-none hover:text-gray-900 py-2 px-4 rounded`}
                    onClick={() => showDiv(2)}
                  >
                    EDUCATIONAL REQUIREMENTS
                  </button>
                </li>
              </div>
            </nav>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f]">
          <div className=" ">
            {activeDiv === 1 && (
              <div className=" ">
                {" "}
                <InstitutionalDubai></InstitutionalDubai>
              </div>
            )}
            {/* {activeDiv === 2 && (
            <div className="bg-green-200 p-4 rounded">VISA REQUIREMENTS</div>
          )} */}
            {/* {activeDiv === 3 && (
            <div className="bg-red-200 p-4 rounded">
              {" "}
              APPLICATION PROCEDURES
            </div>
          )} */}
            {activeDiv === 2 && (
              <div className=" p-4 rounded">
                {" "}
               <EducationalCanada></EducationalCanada>
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
    );
};

export default DubaiDetails;