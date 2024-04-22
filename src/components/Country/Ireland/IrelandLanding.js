import React from 'react';
import "./Ireland.css"
const IrelandLanding = () => {
    return (
        <div>
            <div className="relative">
        <div className="absolute  ireland inset-0 overflow-hidden">
          {/* Background image */}
          <img
            className="absolute   inset-0 w-full h-full object-cover"
            // src={austrtralia}
            // alt="Australia Background"
          />
          {/* Bottom wave shape */}
          <svg
            className="absolute bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,85.3C840,85,960,107,1080,138.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          {/* Main content */}
          <h1 className="text-4xl font-bold mb-4">
            {" "}
            Welcome To Canada{" "}
          </h1>
          <p className="text-4xl font-bold mb-4">
            Explore UK education opportunities from Bangladesh
          </p>
          {/* Image sections */}
        </div>
      </div>
        </div>
    );
};

export default IrelandLanding;