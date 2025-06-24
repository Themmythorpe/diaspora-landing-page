import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // Smooth scroll handler for pricing section
  const handleScrollToPricing = (e) => {
    e.preventDefault();
    const section = document.getElementById('pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 pt-32 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-[#0A4B35] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Send health home
              <br />
              without stress.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-[600px]">
              A one-stop solution for your loved ones back home to access affordable healthcare
              without the worry of payment. Stay informed by tracking your dependent's activities,
              risk levels, and overall health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                  href="#chat-with-our-expert"
                className="inline-flex cursor-pointer items-center justify-center px-8 py-4 bg-white border-2 border-[#28A745] text-[#28A745] rounded-full font-semibold hover:bg-[#28A745] hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to our expert
              </a>

              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#28A745] text-white rounded-full font-semibold hover:bg-[#218838] transition-colors duration-300"
              >
                Check our health plans
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src="/images/section_three_img06.png"
                alt="Healthcare worker caring for elderly patient"
                className="relative z-10 w-[450px] h-auto object-cover"
              />
            </div>
            {/* Decorative curved arrow */}
            <img
              src="/images/curved-arrow.png"
              alt=""
              className="absolute -left-60 bottom-6 w-48 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
