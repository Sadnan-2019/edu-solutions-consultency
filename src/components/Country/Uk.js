import React, { useState } from "react";
import "./Uk.css";
const Uk = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const showDiv = (divId) => {
    setActiveDiv(divId);
  };
  return (
    <div>
      <div class="uk py-20">
        <div class="container mx-auto">
          <div class="flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="mb-12 font-serif text-5xl font-bold">
                Explore UK education opportunities from Bangladesh
              </h1>
              {/* <p class="mb-14 text-2xl font- tracking-wide">
          Boost your brand awareness <br class="sm:hidden" />
          and reach new customers.
        </p> */}
              {/* <a href="#"
          class="rounded-md bg-white px-6 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80">Get
          Started</a> */}
            </div>
          </div>
        </div>
      </div>

      <div class="relative p-4">
        <div class="max-w-3xl mx-auto">
          <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="">
              <h1 href="#" class="text-gray-900 italic font-bold text-4xl">
                Why Study In UK?
              </h1>
              <div class="py-5 text-sm font-regular text-gray-900 flex"></div>
              <hr />
              <p class="text-base leading-8 my-5">
                Dreaming of studying in the UK? With its rising popularity among
                international students, UK education offers unmatched academic
                and professional development alongside an enriching cultural
                journey. Let's delve into the advantages of studying in the UK
                as an international student. The United Kingdom is highly
                coveted by international students, boasting a vibrant academic
                legacy, diverse cultural encounters, and unmatched avenues for
                personal and professional advancement. Let's explore further why
                opting to study in the UK is advantageous.
              </p>
              <h3 class="text-2xl font-bold my-5">#1. World-Class Education</h3>
              <p class="text-base leading-8 my-5">
                The UK boasts world-renowned universities such as Oxford,
                Cambridge, and Imperial College London, known for their academic
                prowess and groundbreaking teaching approaches. These
                institutions offer students access to state-of-the-art research
                facilities and a curriculum geared toward nurturing critical
                thinking and practical expertise, ensuring a top-tier learning
                experience for those who choose to study in the UK.
              </p>
              {/* <blockquote class="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </blockquote> */}
              <h3 class="text-2xl font-bold my-5">
                #2. Global Recognition And Accreditation
              </h3>
              <p class="text-base leading-8 my-5">
                Opting to study in the UK ensures that your degrees are
                internationally recognized and esteemed by employers globally.
                Stringent quality assurance measures guarantee consistently high
                academic standards across institutions, bolstering the
                credibility and transferability of your qualifications.
              </p>
              <h3 class="text-2xl font-bold my-5">
                #3. Diverse Cultural Atmosphere
              </h3>
              <p class="text-base leading-8 my-5">
                Studying in the UK offers exposure to a richly diverse and
                inclusive community, where students from around the world come
                together, creating a vibrant tapestry of cultures. This
                immersion not only enhances your personal journey but also
                equips you for a global career, fostering skills in
                cross-cultural communication and collaboration.
              </p>
              <h3 class="text-2xl font-bold my-5">
                #4. Language Proficiency Edge
              </h3>
              <p class="text-base leading-8 my-5">
                As an English-speaking nation, the UK offers an immersive
                language environment for non-native English speakers, fostering
                academic achievement and honing communication abilities—a
                valuable asset in our interconnected global landscape. Opting to
                study in the UK provides an ideal opportunity for mastering the
                English language.
              </p>
              {/* <h3 class="text-2xl font-bold my-5">
                #4. Language Proficiency Edge
              </h3>

              <p className="text-base leading-8 my-5">
                As an English-speaking nation, the UK offers an immersive
                language environment for non-native English speakers, fostering
                academic achievement and honing communication abilities—a
                valuable asset in our interconnected global landscape. Opting to
                study in the UK provides an ideal opportunity for mastering the
                English language.
              </p> */}

              <h3 class="text-2xl font-bold my-5">DESIRE INSTITUTE IN UK</h3>
              <div>
                {/* <h1 class="font-bold text-xl text-green-900">Feature List</h1> */}
                <ul class="mt-3 flex flex-col space-y-2">
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of the West of Scotland
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Ulster University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of Portsmouth
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      London South Bank University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of Essex
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Cardiff Metropolitan University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Northumbria University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of Aberdeen
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Queen Mary University of London
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Aberystwyth University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      London Metropolitan University
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of Chester
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of Birmingham
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      University of West London
                    </p>
                  </li>
                  <li class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="mr-2 h-auto w-6 text-green-600 sm:w-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      ></path>
                    </svg>
                    <p class="text-base text-slate-700 sm:text-lg">
                      Manchester Metropolitan University (INTO)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <a
                  href="#"
                  class="text-lg  text-base font-bold text-white list-none hover:text-gray-900"
                  target=""
                >
                  VISA REQUIREMENTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-lg  text-base font-bold text-white list-none hover:text-gray-900"
                  target="_blank"
                >
                  {/* Application Procedures */}
                  APPLICATION PROCEDURES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-lg  text-base font-bold text-white list-none hover:text-gray-900"
                  target="_blank"
                >
                  EDUCATIONAL REQUIREMENTS
                </a>
              </li>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => showDiv(1)}
          >
            Show Div 1
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => showDiv(2)}
          >
            Show Div 2
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => showDiv(3)}
          >
            Show Div 3
          </button>
          
        </div>
        <div className="mt-4">
          {activeDiv === 1 && (
            <div className="bg-blue-200 p-4 rounded">Div 1 Content</div>
          )}
          {activeDiv === 2 && (
            <div className="bg-green-200 p-4 rounded">Div 2 Content</div>
          )}
          {activeDiv === 3 && (
            <div className="bg-red-200 p-4 rounded">Div 3 Content</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uk;
