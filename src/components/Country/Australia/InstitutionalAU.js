import React from 'react';

const InstitutionalAU = () => {
    return (
        <div>
            <div className="py-5">
      {/* <!-- component --> */}
      {/* <!-- component --> */}
      <div class="grid sm:grid-cols-1 lg:grid-cols-1 border border-gray-200   divide-gray-200 rounded-xl mx-5 ">
        <details class="p-6 group" >
          <summary class="flex items-center justify-center cursor-pointer">
            <h5 class="text-xl font-bold text-white">
              Documents Required for University Application
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
           
          </p>

          <ul class="mt-2 list-disc px-2 pl-6">
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">All Marksheet & Certificate(in English)(SSC/O Levels to last course taken) </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Passport (Validity over 12months)
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Two Recent Passport-Size Photo
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">Job Experience Letter(If Any)</span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Statement Of Purpose (Softcopy by email) 
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                 IELTS score(if avialble)
                </span>{" "}
              </a>
            </li>
            <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#getting-started"
              >
                <span className="font-bold">
                  Resume
                </span>{" "}
              </a>
            </li>
          </ul>
        </details>

        {/* <details class="p-6 group">
          <summary class="flex items-center justify-center cursor-pointer">
            <h5 class="text-xl font-medium text-white">
            Documents Required for Tier 4 Visa Application
            </h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-100 group-open:opacity-0"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-8 h-8 opacity-0 group-open:opacity-100"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <ul class="mt-2 list-disc px-2 pl-6">
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Valid Passport </span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Completed Online Visa Application Form </span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Visa Application Fee</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Immigration Health Surcharge (IHS)</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Confirmation of Acceptance for Studies (CAS) Letter from University</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Medical Test - IOM</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Bank Statement and Solvency Certificate (Listed Bank only)</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Educational Certificates and Marksheets (Original)</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">9.	IELTS/TOEFL Certificate</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Job Experience Letter (if required)</span>{" "}
              </a>
            </li>
          <li className="text-white">
              <a
                class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                href="#introduction"
              >
                <span className="font-bold">Other Supporting Documents (e.g., extracurricular activities)</span>{" "}
              </a>
            </li>


            </ul>
        
        </details> */}
      </div>
    </div>
        </div>
    );
};

export default InstitutionalAU;