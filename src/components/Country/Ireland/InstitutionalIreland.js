import React from "react";

const InstitutionalIreland = () => {
  return (
    <div>
      <div className="p-4">
        <div class="grid sm:grid-cols-1 lg:grid-cols-1 border border-gray-200   divide-gray-200 rounded-xl mx-5 ">
          <details class="p-6 group">
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

            <p class="mt-4 leading-relaxed text-gray-700"></p>

            <ul class="mt-2 list-disc px-2 pl-6">
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#introduction"
                >
                  <span className="font-bold">
                    Passport/Visa Copy (if available) Include a clear copy of
                    your passport identification page and any existing visa
                    documentation.
                  </span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold">
                    Provide a comprehensive record of your academic achievements
                    and grades.
                  </span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold">
                    Submit an official document confirming the successful
                    completion of your previous degree or program.
                  </span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold">
                    English Language Proficiency Certificate: Present proof
                    of proficiency in English, such as IELTS, TOEFL, PTE Test,
                    or any other recognized language assessment.
                  </span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold">Include a well-written statement outlining your academic background, career goals, and reasons for pursuing the intended program.</span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold">Provide letters of recommendation from academic or professional sources endorsing your qualifications and character.</span>{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                  href="#getting-started"
                >
                  <span className="font-bold"> If applicable, submit a detailed resume highlighting your educational background, work experience, skills, and achievements.</span>{" "}
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalIreland;
