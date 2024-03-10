import React from "react";

const EducationalUk = () => {
  return (
    <div>
      <div className="">
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden   sm:py-12">
          <div class="w-full items-center mx-auto max-w-screen-lg">
            <div class="group grid w-full sm:grid-cols-1 lg:grid-cols-2">
              <div class="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
                <div class="absolute bottom-0 right-0 bg-blue-500 w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
                  <img src="https://picsum.photos/800/800" alt="" />
                </div>

                <div class="h-2/3 rounded-xl overflow-hidden">
                  <img
                    src="https://picsum.photos/800/800"
                    class="h-full"
                    alt=""
                  />
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
                      <div class="pt-1 pb-8 ">
                        <p class="mb-2 text-xl font-bold text-white dark:text-dark">
                          Undergraduate
                        </p>
                        <ul class="mt-2 list-disc px-2 pl-6">
                          <li className="text-white">
                            <a
                              class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                              href="#introduction"
                            >
                              HSC with a minimum of 60% overall or an equivalent
                              qualification
                            </a>
                          </li>
                          <li className="text-white">
                            <a
                              class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                              href="#getting-started"
                            >
                              IELTS : Over all 6, No band less than 5.5
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
                          Post Graduate
                        </p>
                        <ul class="mt-2 list-disc px-2 pl-6">
                          <li className="text-white">
                            <a
                              class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                              href="#introduction"
                            >
                              {" "}
                              A bachelor's degree with a minimum grade point
                              average (GPA) of 2.5 or above or equivalent.
                            </a>
                          </li>
                          <li className="text-white">
                            <a
                              class="block text-white hover:bg-gray-900 px-2 py-1 rounded"
                              href="#getting-started"
                            >
                              IELTS :  Over all 6.5, No band less than 6.
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <div class="flex">
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
                          IELTS
                        </p>
                        <p class="text-white dark:text-slate-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi sagittis, quam nec venenatis lobortis,
                          mirisus tempus nulla, sed porttitor est nibh at nulla.
                        </p>
                      </div>
                    </div> */}

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalUk;
