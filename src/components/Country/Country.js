import React from "react";
import uk from "../../assets/united-kingdom.png";
import australia from "../../assets/australia.png";
import usa from "../../assets/united-states-of-america.png";
import germany from "../../assets/german.png";
import japan from "../../assets/japan.png";
import switzerland from "../../assets/switzerland.png";
import canada from "../../assets/canada.png";
import china from "../../assets/china.png";

const Country = () => {
  return (
    <div className="bg-gradient-to-r from-[#3F1825]  via-[#302530] to-[#441B26]">
      <body class=" ">
        <div class="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-5xl lg:pr-24 md:text-5xl">
            Choose Your Destination
          </p>

          <div class="container relative z-40 mx-auto  py-12">
            <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={uk} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY UK
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={australia} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY AUSTRALIA
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={usa} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY USA
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={germany} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY GERMANY
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={japan} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY JAPAN
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={switzerland} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY SWITZERLAND
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img alt="" src={canada} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY CANADA
                  </p>
                </div>
              </a>

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={china} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY CHINA
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* <div class="h-32 md:h-40 bg-white"></div> */}

          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
              {/* <h2 class="text-4xl font-bold">Made for devs and designers</h2>
              <div class="h-6 bg-white"></div> */}
              <p class="font-serif text-xl text-gray-100 md:pr-10">
                The unwavering determination and contemporary market insights of
                EDU Solutions team have effectively charted the course for
                discovering fresh opportunities and achieving substantial
                outcomes for students. Consequently, EDU Solutions has garnered
                years of outstanding proficiency in steering students towards a
                successful future through unparalleled educational consultancy
                services.
              </p>
              {/* <div class="h-8 bg-white"></div> */}
              <div class="grid grid-cols-2 gap-4 pt-8 border-t border-white-800 mt-10"></div>
            </div>
            <div class="py-12   -mr-20  md:rounded-l-full bg-gradient-to-b from-gray-900 to-black shadow-md rounded-xl flex items-center justify-center  ">
              <p class="text-xl  text-justify text-white w-96  ">
                Edusolutions stands out as one of the leading and premier
                education consultancy firms in Bangladesh, specializing in
                facilitating Study in China, UK, USA, Canada, and Australia. Our
                commitment to supporting and assisting students remains
                unwavering, ensuring that the choices they make about their
                future are handled with the utmost care.
              </p>
            </div>
          </div>

          {/* <p class="font-serif text-4xl">
            <span class="text-gray-400">If we work all together</span>

            <span class="text-gray-600">
              consectetur adipisicing elit. Consectetur atque molestiae omnis
              excepturi enim!
            </span>
          </p> */}

          <div class="h-32 md:h-40"></div>

          <div class="grid gap-4 md:grid-cols-3">
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
              <p class="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                1
              </p>
              <div class="h-6"></div>
              <p class="font-serif text-3xl">
                We build products with UX in mind
              </p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
              <p class="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                2
              </p>
              <div class="h-6"></div>
              <p class="font-serif text-3xl">
                You can trust us to deliver super fast
              </p>
            </div>
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
              <p class="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                3
              </p>
              <div class="h-6"></div>
              <p class="font-serif text-3xl">
                We made it simple and easy to do
              </p>
            </div>
          </div>

          <div class="h-40"></div>

          <div class="grid gap-8 md:grid-cols-3">
            <div class="flex flex-col justify-center md:col-span-2">
              <p class="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                We are humans
              </p>
              <h2 class="text-4xl font-bold">We could work together</h2>
              <div class="h-6"></div>
              <p class="font-serif text-xl text-gray-400 md:pr-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                autem, a recusandae vero praesentium qui impedit doloremque
                molestias.
              </p>
              <div class="h-8"></div>
              <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                <div>
                  <p class="font-semibold text-gray-400">Made with love</p>
                  <div class="h-4"></div>
                  <p class="font-serif text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus labor.
                  </p>
                </div>
                <div>
                  <p class="font-semibold text-gray-400">It's easy to build</p>
                  <div class="h-4"></div>
                  <p class="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
                <div>
                  <p class="font-semibold text-gray-400">It's easy to build</p>
                  <div class="h-4"></div>
                  <p class="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div>
          </div>

          <div class="h-10 md:h-40"></div>

          <div class="grid gap-4 md:grid-cols-4">
            <ul class="space-y-1 text-gray-400">
              <li class="pb-4 font-serif text-gray-400">Social networks</li>
              <li>
                <a
                  href="https://twitter.com/victormustar"
                  class="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
            <ul class="space-y-1 text-gray-400">
              <li class="pb-4 font-serif text-gray-400">Locations</li>
              <li>
                <a href="#" class="hover:underline">
                  Paris
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  New York
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  London
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Singapour
                </a>
              </li>
            </ul>
            <ul class="space-y-1 text-gray-400">
              <li class="pb-4 font-serif text-gray-400">Company</li>
              <li>
                <a href="#" class="hover:underline">
                  The team
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Our vision
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Join us
                </a>
              </li>
            </ul>
            <ul class="space-y-1 text-gray-400">
              <li class="pb-4 font-serif text-gray-400">Join</li>
              <li>
                <a
                  href="https://github.com/gary149/landing-gradients"
                  class="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
                >
                  Get this template
                </a>
              </li>
            </ul>
          </div>
          <div class="h-12"></div>
        </div>
      </body>
    </div>
  );
};

export default Country;
