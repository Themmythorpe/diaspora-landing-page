import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingPage = () => {
  const monthlyPlan = {
    price: "22",
    period: "Monthly",
    title: "Mama Papa Health Visit",
    description: "A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.",
    features: [
      "Monthly physical visit by a healthcare professional- MAIN BENEFIT",
      "24/7 Virtual Doctor Support",
      "₦20,000 Wallet Cashback on 3-Month Subscription",
      "10% discount on affordable & Quality medication",
      "Dedicated CarePartner",
      "Routine Virtual wellness check",
      "Complimentary First Aid & Primary Care during the visit",
      "24/7 Helpline",
      "Health Records Dashboard for sponsors",
      "Refillable wallets for chronic medications and supplements"
    ]
  };

  const annualPlan = {
    price: "200",
    period: "Annual Plan",
    title: "Mama Papa 360",
    description: "A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.",
    features: [
      "Everything in the Mama Papa Health Visit plus",
      "Hospital Admission",
      "Accidents & Emergencies coverage",
      "Coverage for approved surgical procedures",
      "Hospital-Based Consultations",
      "Chronic Disease Coverage",
      "Diagnostic Tests",
      "Ambulance Evacuation Service",
      "Cancer Care Coverage",
      "Dental &amp; Optical Care coverage",
      "Comprehensive ear, nose, and throat care."
    ]
  };

  const urgentCare = {
    price: "34",
    period: "Within 24hrs",
    title: "Check On Mama & Papa",
    description: "Ensure your loved ones' well-being with a one-time visit from a healthcare professional, delivering prompt care and attention within 24 hours."
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0A4B35] mb-4">
            Care for the Golden<br />Years, Simplified
          </h1>
          <p className="text-gray-600 text-lg">
            Convenient and Compassionate Care for Seniors, Anytime, Anywhere.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Monthly Plan Card */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8">
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-[#0A4B35]">$</span>
              <span className="text-5xl font-bold text-[#0A4B35]">{monthlyPlan.price}</span>
              <span className="ml-2 text-[#FF6B35]">{monthlyPlan.period}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{monthlyPlan.title}</h2>
            <p className="text-gray-600 mb-8">{monthlyPlan.description}</p>
            <ul className="space-y-4 mb-8">
              {monthlyPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[#28A745] flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors">
              Get Started
            </button>
          </div>

          {/* Annual Plan Card */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8">
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-[#0A4B35]">$</span>
              <span className="text-5xl font-bold text-[#0A4B35]">{annualPlan.price}</span>
              <span className="ml-2 text-[#FF6B35]">{annualPlan.period}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{annualPlan.title}</h2>
            <p className="text-gray-600 mb-8">{annualPlan.description}</p>
            <ul className="space-y-4 mb-8">
              {annualPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-[#28A745] flex-shrink-0 mr-2" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors">
              Get Started
            </button>
          </div>

        </div>
          {/* Urgent Care Card */}
          <div className="bg-[#FDF8F3] rounded-2xl p-8 mx-auto max-w-[450px] mt-6">
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-[#0A4B35]">$</span>
              <span className="text-5xl font-bold text-[#0A4B35]">{urgentCare.price}</span>
              <span className="ml-2 text-[#FF6B35]">{urgentCare.period}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{urgentCare.title}</h2>
            <p className="text-gray-600 mb-8">{urgentCare.description}</p>
            <button className="w-full bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors mt-auto">
              Get Started
            </button>
          </div>
      </div>
    </div>
  );
};

export default PricingPage; 