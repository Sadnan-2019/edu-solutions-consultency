import React, { useState } from "react";
// import Services from "../../Services/Services";
import InstitutionalUk from "./InstitutionalUk";

const UkDetails = () => {
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
     <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex-row sm:flex-col flex items-center justify-between sm:h-10 md:justify-center bg-blue-900" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"></div>
          <div className="md:hidden">
            {/* Hamburger menu button for small screens */}
            <button className="text-white hover:text-gray-900 focus:outline-none" onClick={toggleNavbar}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex md:space-x-10 list-none ${showNavbar ? '' : 'hidden'}`}>
            <li>
              <button className="text-lg font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded" onClick={() => showDiv(1)}>
                INSTITUTIONAL REQUIREMENTS
              </button>
            </li>
            <li>
              <button className="text-lg font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded" onClick={() => showDiv(2)}>
                VISA REQUIREMENTS
              </button>
            </li>
            <li>
              <button className="text-lg font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded" onClick={() => showDiv(3)}>
                APPLICATION PROCEDURES
              </button>
            </li>
            <li>
              <button className="text-lg font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded" onClick={() => showDiv(4)}>
                EDUCATIONAL REQUIREMENTS
              </button>
            </li>
          </div>
        </nav>
      </div>
    </div>


      <div className="flex flex-col items-center  ">
        <div className=" ">
          {activeDiv === 1 && (
            <div className=" ">
              {" "}
              <InstitutionalUk></InstitutionalUk>
            </div>
          )}
          {activeDiv === 2 && (
            <div className="bg-green-200 p-4 rounded">VISA REQUIREMENTS</div>
          )}
          {activeDiv === 3 && (
            <div className="bg-red-200 p-4 rounded">
              {" "}
              APPLICATION PROCEDURES
            </div>
          )}
          {activeDiv === 4 && (
            <div className="bg-red-200 p-4 rounded">
              {" "}
              EDUCATIONAL REQUIREMENTS
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UkDetails;
