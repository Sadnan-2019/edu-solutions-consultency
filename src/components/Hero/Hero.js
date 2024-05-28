import React from 'react';
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import "./Hero.css"
const Hero = () => {

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#title-1", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-1", {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          duration: 0.5,
        })
        .from("#title-2", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-2", {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          duration: 0.5,
        })
        .from("#title-3", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
        })
        .to("#title-3", {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          duration: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1,
          onComplete: () => {
            gsap.set("#intro-slider", { xPercent: "0" }); // Reset position for looping
          },
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        }, "-=0.5"); // Overlap this animation with the previous one for smoothness
    }, comp);

    return () => ctx.revert();
  }, []);
    return (
        <div className='relative   full-width-slider'>
            <div className="" ref={comp}>
      <div
        id="intro-slider"
        className="herotwo    text-white p-10    gap-10 tracking-tight"
      >
        <h1 className="text-5xl " id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-5xl" id="title-2">
          Designer
        </h1>
        <h1 className="text-5xl" id="title-3">
          Freelancer
        </h1>
      </div>
      

    
      
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
        >
          Welcome.
        </h1>
      </div>
    </div>
        </div>
    );
};

export default Hero;