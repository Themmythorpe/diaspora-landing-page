import React, { useState, useEffect, useRef } from 'react';

const PlansSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);
  const slideContainerRef = useRef(null);

  const originalSlides = [
    {
      id: 1,
      image: '/images/img_frame_1618869272.png',
      alt: 'Happy employee giving peace sign',
    },
    {
      id: 2,
      image: '/images/img_frame_1618869273.png',
      alt: 'Smiling employee in orange shirt',
    },
    {
      id: 3,
      image: '/images/img_frame_1618869274.png',
      alt: 'Happy couple outdoors',
    },
    {
      id: 4,
      image: '/images/img_frame_1618869275.png',
      alt: 'Man speaking to camera',
    },
  ];

  // Create a duplicated array of slides for infinite scroll
  const slides = [...originalSlides, ...originalSlides];

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      moveNext();
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const moveNext = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  // Calculate slide width based on screen size
  const getSlideWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 576) return 100; // 1 slide
      if (window.innerWidth < 768) return 50; // 2 slides
      return 25; // 4 slides
    }
    return 25; // Default to 4 slides
  };

  // Handle the transition end and reset position if needed
  useEffect(() => {
    if (currentSlide >= originalSlides.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopSlideTimer();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startSlideTimer();
  };

  return (
    <section className="pt-20 pb-10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-2">
            <img src="/images/img_svg.svg" alt="Icon" className="w-6 h-6 mr-2" />
            <p className="text-[#f6921e] font-bold font-['Kalam']">
              Health Insurance your employees will use
            </p>
          </div>

          <h2 className="text-[#1a3a4f] text-3xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
            Healthcare plan that{' '}
            <span className="bg-gradient-to-r from-[#3da647] to-[#f6921e] text-transparent bg-clip-text">
              actually
            </span>{' '}
            works well for you
          </h2>

          <p className="text-[#8b909a] text-lg mb-12 max-w-2xl mx-auto">
            We pay your employee's health care bills so they can save more and spend their salaries
            on things they love.
          </p>
        </div>
      </div>

      <div className="relative bg-[#F6921E] w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img src="/images/pattern_lines.svg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[1800px] mx-auto px-4 py-16">
          <div
            className="flex items-center justify-between gap-4"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="#F6921E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={slideContainerRef}
                className={`flex gap-2 sm:gap-4 transition-transform duration-700 ${isTransitioning ? 'ease-in-out' : 'duration-0'}`}
                style={{ transform: `translateX(-${currentSlide * getSlideWidth()}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={`${slide.id}-${index}`}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 aspect-[3/4] relative group"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#F6921E" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="#F6921E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
