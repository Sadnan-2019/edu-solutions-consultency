import React from 'react';
import AboutLanding from './AboutLanding';

const About = () => {
    return (
        <div>
           <div class=" ">
            <AboutLanding></AboutLanding>
    
           <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
       
      <div className="relative mt-12">
        <div className="absolute h-32 w-32 rounded-full bg-blue-500 -left-16 -top-32  "></div>
        <div className="absolute h-32 w-32 rounded-full bg-green-500 -right-16 -top-32  "></div>
        <div className="absolute h-32 w-32 rounded-full bg-yellow-500 -left-24 -bottom-16 "></div>
        <div className="absolute h-32 w-32 rounded-full bg-red-500 -right-24 -bottom-32 "></div>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
            neque mi. Cras convallis tortor nec diam tempor, eget facilisis velit
            eleifend. Quisque at eros consequat, volutpat tortor non, efficitur
            urna.
          </p>
          <p className="text-lg text-gray-700">
            Integer eu magna interdum, viverra libero nec, maximus metus. Morbi nec
            arcu ut lorem posuere pretium. Vestibulum nec velit velit.
          </p>
        </div>
      </div>
    </div>
    
</div>
 
        </div>
    );
};

export default About;