import React from "react";

const EducationalIreland = () => {
  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden   sm:py-12">
        <div class="w-full items-center mx-auto max-w-screen-lg">
          <div class="group grid w-full sm:grid-cols-1 lg:grid-cols-2">
            <div>
              <div class="pl-12">
                <div class="p-4 max-w-xl mx-auto">
                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                    </div>
                    <div class="pt-1 pb-8 ">
                      <p class="mb-2 text-xl font-bold text-white dark:text-dark">
                        Intakes :
                      </p>
                      <ul class="mt-2 list-disc px-2 pl-6">
                        <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#introduction"
                          >
                            September and January
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                    </div>
                    <div class="pt-1 pb-8">
                      <p class="mb-2 text-xl font-bold text-white dark:text-slate-300">
                        English Language Requirements :
                      </p>
                      <ul class="mt-2 list-disc px-2 pl-6">
                        <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#introduction"
                          >
                            <span className="font-bold">
                              IELTS (Academic) :
                            </span>
                            <br></br> UG programme : Overall 5.0 with at-least
                            5.5 in each component.<br></br>
                            PG programme : Overall 5.5 with at-least 6.0 in each
                            component.
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="pt-1 ">
                      {/* <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Ready!</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="pl-12">
                <div class="p-4 max-w-xl mx-auto">
                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                    </div>
                    <div class="pt-1 pb-8">
                      <p class="mb-2 text-xl font-bold text-white dark:text-slate-300">
                        Undergraduate – Bachelors :
                      </p>
                      <ul class="mt-2 list-disc px-2 pl-6">
                        <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#introduction"
                          >
                            {" "}
                            {/* <span className="font-bold">CGPA:</span> */}
                            For Bachelor's Programs: Completion of HSC / A Level
                            / Diploma : GPA – min 3.5
                          </a>
                        </li>

                        {/* <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#getting-started"
                          >
                            <span className="font-bold">MBA Programs:</span>{" "}
                            Work experience and GMAT score may be required at
                            some universities.
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M12 5l0 14"></path>
                            <path d="M18 13l-6 6"></path>
                            <path d="M6 13l6 6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                    </div>
                    <div class="pt-1 pb-8">
                      <p class="mb-2 text-xl font-bold text-white dark:text-slate-300">
                        Postgraduate – Masters:
                      </p>
                      <ul class="mt-2 list-disc px-2 pl-6">
                        <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#introduction"
                          >
                            {" "}
                            {/* <span className="font-bold">CGPA:</span> */}
                            For Master's Programs: Completion of Bachelor's
                            Degree : CGPA – min 2.5
                          </a>
                        </li>
                        <li className="text-white">
                          <a
                            class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                            href="#getting-started"
                          >
                            {/* <span className="font-bold">GRE or GMAT:</span> */}
                            Study Gap Accepted: YeS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="mr-4 flex flex-col items-center">
                      <div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6 text-white dark:text-slate-200"
                          >
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="pt-1 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <span className="font-bold text-xl text-white">Note:</span>{" "} */}
          <span className="text-white text-lg">
            Ensuring all required documents are organized, up-to-date, and
            accurately presented will strengthen your application and enhance
            your chances of success.
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationalIreland;
