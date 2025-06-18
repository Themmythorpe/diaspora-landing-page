import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '1',
    title: 'Create an Account & Verify',
    description: `Simply provide basic information and verify your account—it's that easy!`,
    filled: true,
  },
  {
    number: '2',
    title: 'Add a Beneficiary',
    description: 'Add mama and papa as a beneficiary to easily monitor and send them care.',
    filled: false,
  },
  {
    number: '3',
    title: 'Select a Plan',
    description: 'Select a plan that works for you.',
    filled: false,
  },
  {
    number: '4',
    title: 'Make Payment',
    description: 'Make payment easily and start enjoying our healthcare services.',
    filled: false,
  },
];

const StepsSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section className="lg:pb-20 pt-20  bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8 relative">

        <div className="mb-10">
              <p className="text-black text-base md:text-lg mb-2">Let's show you how it works</p>
              <h2 className="text-[#0A4B35] text-3xl md:text-5xl font-bold leading-tight mb-8">
                How Does<br />It Work?
              </h2>
            </div>
          {/* Get Started button (desktop) */}
          {/* <div className="hidden lg:block mb-10">
              <Link
                to="/get-started"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-[#222] transition"
              >
                Get Started
              </Link>
            </div> */}
          </div>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8 relative">
          {/* Left: Stepper */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative">
              {/* Vertical dotted line */}
              <div className="hidden md:block absolute left-7 top-16 bottom-0 w-0.5 z-0">
                <div className="h-full border-l-2 border-dotted border-[#D1E7DD] ml-3"></div>
              </div>
              <div className="flex flex-col gap-6">
                {steps.map((step, idx) => (
                  <div key={step.number} className="relative z-10 flex items-start">
                    {/* Number */}
                    <div className={`
                      flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold
                      ${step.filled ? 'bg-[#F4FBF6] text-[#228821]' : 'bg-white border border-[#D1E7DD] text-[#228821]'}
                    `}>
                      {step.number}
                    </div>
                    {/* Card */}
                    <div className={`ml-6 flex-1 py-3 px-4 rounded-2xl ${step.filled ? 'bg-[#F4FBF6]' : 'bg-white border border-[#D1E7DD]'} shadow-sm`}> 
                      <div className="font-bold text-[#0A4B35] text-lg md:text-xl mb-1">{step.title}</div>
                      <div className="text-gray-500 text-base md:text-lg leading-snug">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Video preview */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="bg- rounded-3xl w-full max-w-[600px] flex flex-col items-center justify-center px-4 py-10 relative">
            <div className="flex flex-col items-center rounded-full bg-[#025F4C33] text-[#176B1B] text-xs font-semibold px-4 py-2 mb-4">
            WANT MORE DETAILS?
            </div>
          <div className="text-[#176B1B] text-3xl font-semibold mb-7">
            Victoria will explain everything
          </div>
          
          {/* Video Section */}
          <div className="relative mx-auto">
            {isVideoPlaying ? (
              <video
                className="w-[280px] h-[350px] mx-auto rounded-lg object-cover"
                controls
                autoPlay
                onEnded={handleVideoEnd}
              >
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div 
                className="relative cursor-pointer group"
                onClick={handleVideoClick}
              >
                {/* Thumbnail */}
                <img 
                  src="/images/victoria_sect_img.png" 
                  alt="OneWellness Mobile App Preview" 
                  className="w-[220px] w-full h-auto mx-auto rounded-lg transition-transform group-hover:scale-105" 
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-4 group-hover:bg-opacity-70 transition-all">
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;