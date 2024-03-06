import React, { useState } from 'react';
import Services from '../../Services/Services';

const UkDetails = () => {

    const [activeDiv, setActiveDiv] = useState(null);

    const showDiv = (divId) => {
      setActiveDiv(divId);
    };
    return (
        <div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 ">
        <div class="relative pt-6 pb-16 sm:pb-24 ">
          <nav
            class="relative flex-row sm:flex-col flex items-center justify-between sm:h-10 md:justify-center bg-blue-900"
            aria-label="Global"
          >
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"></div>
            <div class="hidden md:flex md:space-x-10 list-none">
              <li>
                {/* <a href="#" class=" text-lg text-base font-bold text-white list-none hover:text-gray-900"
                        target="">INSTITUTIONAL REQUIREMENTS</a> */}
                <button
                  className="text-lg   font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded"
                  onClick={() => showDiv(1)}
                >
                  INSTITUTIONAL REQUIREMENTS
                </button>
              </li>
              <li>
                <button
                  className="text-lg   font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded"
                  onClick={() => showDiv(2)}
                >
                  VISA REQUIREMENTS
                </button>
              </li>
              <li>
                <button
                  className="text-lg   font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded"
                  onClick={() => showDiv(3)}
                >
                  APPLICATION PROCEDURES
                </button>
                {/* <a
                  href="#"
                  class="text-lg  text-base font-bold text-white list-none hover:text-gray-900"
                  target="_blank"
                > 
                  APPLICATION PROCEDURES
                </a> */}
              </li>
              <li>
                <button
                  className="text-lg   font-bold text-white list-none hover:text-gray-900 py-2 px-4 rounded"
                  onClick={() => showDiv(4)}
                >
                  EDUCATIONAL REQUIREMENTS
                </button>
                {/* <a
                  href="#"
                  class="text-lg  text-base font-bold text-white list-none hover:text-gray-900"
                  target="_blank"
                >
                  
                </a> */}
              </li>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex flex-col items-center  ">
        <div className=" ">
          {activeDiv === 1 && (
            <div className="bg-blue-200 p-4 rounded">
              {" "}
              <Services></Services>
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