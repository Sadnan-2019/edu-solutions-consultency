import React, { useState } from "react";
import uk from "../../assets/united-kingdom.png";
import australia from "../../assets/australia.png";
import usa from "../../assets/united-states-of-america.png";
import germany from "../../assets/german.png";
import japan from "../../assets/dubai.png";
import newzealand from "../../assets/newzealand.png";
import canada from "../../assets/canada.png";
import china from "../../assets/china.png";
import "./Country.css";
const Country = () => {
  // const images = [
  //   'https://via.placeholder.com/800x400?text=Image+1',
  //   'https://via.placeholder.com/800x400?text=Image+2',
  //   'https://via.placeholder.com/800x400?text=Image+3',
  // ];

  // const [currentImage, setCurrentImage] = useState(0);

  // const nextImage = () => {
  //   setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  // };

  // const prevImage = () => {
  //   setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  // };
  return (
    <div className="bg-gradient-to-r from-[#24348f] via-[#3342BF] to-[#080C24] via-[#098bdc] to-[#24348f]">
      <body class=" ">
        <div class="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-5xl lg:pr-24 md:text-5xl">
            Choose Your Destination
          </p>

          <div class="container relative z-40 mx-auto  py-12">
            <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
              <a
                href="/uk"
                class="block w-1/2 py-10 text-center border lg:w-1/4"
              >
                <div>
                  <img src={uk} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    UK
                  </p>
                </div>
              </a>

              <a href="/australia" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={australia} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    AUSTRALIA
                  </p>
                </div>
              </a>

              <a href="/usa" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={usa} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    USA
                  </p>
                </div>
              </a>

              {/* <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={germany} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY GERMANY
                  </p>
                </div>
              </a> */}

              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={japan} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    DUBAI
                  </p>
                </div>
              </a>

              {/* <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={switzerland} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY SWITZERLAND
                  </p>
                </div>
              </a> */}

              <a href="/canada" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img alt="" src={canada} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    CANADA
                  </p>
                </div>
              </a>
              <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img alt="" src={newzealand} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    {/* New Zealand */}
                    NEW ZEALAND
                  </p>
                </div>
              </a>

              {/* <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
                <div>
                  <img src={china} class="block mx-auto w-20" />

                  <p class="pt-4 text-sm font-medium capitalize font-body text-white lg:text-lg md:text-base md:pt-6">
                    STUDY CHINA
                  </p>
                </div>
              </a> */}
            </div>
          </div>

          {/* <div class="h-32 md:h-40 bg-white"></div> */}

          {/* <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
           
              <p class="font-serif text-xl text-gray-100 md:pr-10">
                The unwavering determination and contemporary market insights of
                EDU Solutions team have effectively charted the course for
                discovering fresh opportunities and achieving substantial
                outcomes for students. Consequently, EDU Solutions has garnered
                years of outstanding proficiency in steering students towards a
                successful future through unparalleled educational consultancy
                services.
              </p>
             
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
          </div> */}

          {/* <p class="font-serif text-4xl">
            <span class="text-gray-400">If we work all together</span>

            <span class="text-gray-600">
              consectetur adipisicing elit. Consectetur atque molestiae omnis
              excepturi enim!
            </span>
          </p> */}

          {/* <div class="h-32 md:h-40 bg-red-400"></div> */}

          {/* <div class="h-40"></div>

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

          <div class="h-10 md:h-40"></div> */}

          {/* <div class="grid gap-4 md:grid-cols-4">
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
          </div> */}
          {/* <div class="h-12"></div> */}
        </div>
      </body>

      {/* <div className="relative h-screen overflow-hidden">
      <div className=" new animation absolute inset-0 overflow-hidden ">
      
 
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-150 animation"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-bold">
     
        <h1 className="text-center animate__animated animate__fadeInUp">Welcome to my website</h1>
        <p className="text-center animate__animated animate__fadeInUp mt-4">Explore and enjoy!</p>
      </div>
    </div> */}

      {/* <div className="relative h-screen overflow-hidden">
    
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-150 animation" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl font-bold">
    
        <h1 className="text-center animate__animated animate__fadeInUp">Welcome to my website</h1>
        <p className="text-center animate__animated animate__fadeInUp mt-4">Explore and enjoy!</p>
      </div>
      
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white rounded" onClick={prevImage}>Prev</button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white rounded" onClick={nextImage}>Next</button>
    </div> */}
    </div>
  );
};

export default Country;
