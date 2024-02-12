import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./LandingNew.css"
const LandingNew = () => {
    const slides = [
        {
          image: 'https://via.placeholder.com/800x400',
          text: 'Slide 1',
        },
        {
          image: 'https://via.placeholder.com/800x400',
          text: 'Slide 2',
        },
        {
          image: 'https://via.placeholder.com/800x400',
          text: 'Slide 3',
        },
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true, // To achieve fade transition between slides
      };
    return (
        <div className="relative">
      <style>{`
        .zoom {
          animation-name: zoom;
          animation-duration: 10s; /* Adjust duration as needed */
          animation-timing-function: ease;
          animation-iteration-count: infinite; /* Changed to infinite */
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="bg-cover bg-center h-screen relative zoom" /* Added 'zoom' class */
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{slide.text}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default LandingNew;