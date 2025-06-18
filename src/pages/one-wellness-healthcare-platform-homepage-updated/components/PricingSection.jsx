import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const mamaPapaFeatures = [
  [
    'Monthly home visits by healthcare professionals',
    'Unlimited 24/7 doctor consultations',
    '$7 Wallet Cashback on 3-month subscription',
    'Dedicated Care Partner',
  ],
  [
    'Refillable wallets for chronic medications',
    'First Aid & Primary Care during visits',
    'Up to 10% discount on medications',
    'Virtual wellness checks',
  ],
  [
    'WhatsApp group with doctors & family',
    'Personalized treatment plan',
    'Hospitals, ambulance & emergency coverage',
    'Surgery, chronic conditions, cancer care, dental & optical coverage',
  ],
];

const checkIcon = (
  <svg className="inline-block w-5 h-5 mr-2 text-[#F37436] translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);
const xIcon = (
  <svg className="inline-block w-5 h-5 mr-2 text-[#FF0000] translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 px-2 bg-white min-h-screen flex flex-col justify-start">
      <div className="max-w-3xl mx-auto text-center mb-5">
        <h2 className="text-[#176B1B] text-3xl md:text-4xl font-semibold mb-10 leading-tight">
          Choose the Perfect Plan for Mama & Papa
        </h2>
      </div>
      <div className="flex flex-col items-center w-full">
        {/* Main Plan Card */}
        <div className="bg-[#025F4C] rounded-2xl w-full max-w-4xl px-8 py-8 mb-8 flex flex-col shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="text-white text-2xl font-semibold mb-2 md:mb-0">Mama & Papa 360</div>
            <div className="flex gap-2 self-end md:self-auto">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#F6921E] text-white">6 Months</span>
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#F4F4F4] text-[#0A4B35]">12 Months</span>
            </div>
          </div>
          <div className="text-[#E6F4EA] text-base mb-16">
            Your eyes, ears and hands for 360 healthcare for mama and papa
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mamaPapaFeatures.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white text-base">
                    <span className="w-6 h-6 rounded-full bg-transparent border border-[#EAE6AC] text-[#F37436] flex items-center justify-center">
                      {checkIcon}
                    </span>
                    <span className="ml-2 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-2">
              <span className="text-white text-3xl font-bold mr-2">$200</span>
              <span className="text-[#E6F4EA] text-xl line-through mr-2">$350</span>
              <span className="text-[#E6F4EA] text-xs">(Inclusive of 7.5% VAT)</span>
            </div>
            <button 
            onClick={() => navigate('/choose-plan')}
            className="bg-[#228821] text-white px-8 py-3 rounded-lg font-medium text-sm shadow hover:bg-[#176b1b] hover:text-white transition mt-4 md:mt-0 md:ml-auto">
              Buy Now
            </button>
          </div>
        </div>

        <div className="text-center text-[#176B1B] text-lg font-light mb-7">
        Or evaluate our exceptional services with a simple trial offer ↓
        </div>
        {/* Trial Offer Card */}
        <div className="w-full max-w-2xl bg-[#E6EFED] rounded-2xl px-8 py-8 mb-8 flex flex-col shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[#176B1B] text-xl font-semibold">Mama & Papa Health Visit</div>
            <span className="px-4 py-2 rounded-full text-sm font-sm bg-[#F6921E] text-[#FFFFFF]">2 Month Trial</span>
          </div>
          <ul className="mb-6 text-left flex ">
            <li className="flex items-start text-base w-full">
            <span className="w-7 h-7 rounded-full bg-[#3DA647] border border-[#025F4C] text-[#FFFFFFF] flex items-center justify-center">
            <svg className="inline-block w-5 h-5 mr-2 text-[#FFFFFF] translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
                    </span>
              <span className='ml-2 text-[#176B1B] text-sm w-full max-w-[220px]'>Everything in Mama and Papa 360 for a month</span>
            </li>
            <li className="flex items-start text-[#176B1B] text-base w-full">
              <span className="w-7 h-7 rounded-full bg-[#E7CECE] border border-[#FF0000] text-[#FFFFFFF] flex items-center justify-center">
              {xIcon}
                    </span>
              <span className='ml-2 text-[#176B1B] text-sm'>Excluding Surgery, chronic conditions, cancer care, dental & optical coverage</span>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-auto">
            <div>
            <div className="flex flex-col md:flex-row md:items-end gap-2">
              <span className="text-[#176B1B] text-2xl font-bold mr-2">$60</span>
              <span className="text-[#A0A0A0] text-lg line-through mr-2">$120</span>
            </div>
              <span className="text-[#176B1B] text-xs block">(Inclusive of 7.5% VAT)</span>
            </div>
            <button 
            onClick={() => navigate('/choose-plan')}
            className="bg-transparent text-[#176B1B] border border-[#228821] px-8 py-3 rounded-lg font-medium text-sm shadow hover:bg-[#176b1b] hover:text-white transition mt-4 md:mt-0 md:ml-auto">
              Buy Now
            </button>
          </div>
        </div>
        {/* Talk to an expert button */}
        <div className="flex justify-between items-center w-full max-w-2xl mt-2">
          <div className="text-[#176B1B] text-md font-normal">Need assistance in choosing the most suitable plan?</div>
          <button 
            onClick={() => window.open('https://wa.me/2349026121813?text=Hello%2C%20I%20need%20assistance%20choosing%20a%20plan')}
            className="bg-[#228821] text-white px-8 py-3 rounded-lg font-normal text-sm shadow hover:bg-[#176b1b] transition">
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 