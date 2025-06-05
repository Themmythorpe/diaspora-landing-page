import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingMp = () => {
  const mandpHV = {
    price: '60',
    period: '2 Months Trial',
    title: 'Mama Papa Health Visit',
    description:
      'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.',
    features: [
      'Everything in Mama and Papa 360 for a month',
      'Excluding Surgery, Chronic conditions, cancer care, dental & optical coverage',
    ],
  };

  const mandP360 = {
    price: '200',
    period: '6 Months',
    period2: '12 Months',
    title: 'Mama Papa Health Cover',
    description:
      'A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.',
    features: [
      'Monthly home visits ny healthcare professionals',
      'Unlimited 24/7 doctor consultations',
      '₦10,000 Wallet cashback on 3-months subscription',
      'Dedicated Care Partner',
      'Refillable wallets for chronic medications',
      'First Aid $ Primary Care during visits',
      'Up to 10% discount on medications',
      'Virtual welness checks',
      'Whatsapp group with doctors $ family',
      'Personalized treatment plan',
      'Hospitals, ambulance $ emergency coverage',
      'Surgery, chronic conditions, cancer care, dental $ optical coverage',
    ],
  };
  const navigate = useNavigate();
  //   const urgentCare = {
  //     price: '34',
  //     period: 'Within 24hrs',
  //     title: 'Check On Mama & Papa',
  //     description:
  //       "Ensure your loved ones' well-being with a one-time visit from a healthcare professional, delivering prompt care and attention within 24 hours.",
  //   };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0A4B35] mb-4">
            Care for the Golden
            <br />
            Years, Simplified
          </h1>
          <p className="text-gray-600 text-lg">
            Convenient and Compassionate Care for Seniors, Anytime, Anywhere.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Monthly Plan Card */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8">
            <div className="flex items-baseline mb-8 justify-between">
              <span>
                <span className="text-4xl font-bold text-[#0A4B35]">$</span>
                <span className="text-5xl font-bold text-[#0A4B35]">{mandP360.price}</span>
              </span>

              <div className="flex gap-1 items-center justify-center">
                <span className="border rounded-full ml-2 bg-[#FF6B35] p-2 text-sm font-normal text-white">
                  {mandP360.period}
                </span>
                <span className="border border-orange-200 bg-transparent rounded-full p-2 text-sm font-normal ml-2 text-[#FF6B35]">
                  {mandP360.period2}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{mandP360.title}</h2>
              <p className="text-gray-600 mb-8">{mandP360.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {mandP360.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[#28A745] flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/choose-plan')}
              className="bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Annual Plan Card */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8">
            <div className="flex items-baseline mb-8 justify-between">
              <div>
                <span className="text-4xl font-bold text-[#0A4B35]">$</span>
                <span className="text-5xl font-bold text-[#0A4B35]">{mandpHV.price}</span>
              </div>
              <span className="rounded-full p-2 text-sm font-normal text-white ml-2 bg-[#FF6B35]">
                {mandpHV.period}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{mandpHV.title}</h2>
            <p className="text-gray-600 mb-8">{mandpHV.description}</p>
            <ul className="space-y-4 mb-8">
              {mandpHV.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[#28A745] flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/choose-plan')}
              className="bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingMp;
