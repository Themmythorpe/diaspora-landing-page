import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';

const planFeatures = {
  'Mama Papa Health Visit': [
    'Monthly physical visit by a healthcare professional- MAIN BENEFIT',
    '24/7 Virtual Doctor Support',
    '₦20,000 Wallet Cashback on 3-Month Subscription',
    '10% discount on affordable & Quality medication',
    'Dedicated CarePartner',
    'Routine Virtual wellness check',
    'Complimentary First Aid & Primary Care during the visit',
    '24/7 Helpline',
    'Health Records Dashboard for sponsors',
    'Refillable wallets for chronic medications and supplements',
  ],
};

const PlanDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan || {
    name: 'Mama Papa Health Visit',
    duration: 3,
    total: 90,
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-8">
          {/* Left Side - Plan Card */}
          <div className="border border-[#0A4B35] rounded-2xl p-8 shadow-sm w-1/2">
            <div className="flex justify-between items-start mb-4">
              <div className="flex justify-between items-center  w-full">
                <h2 className="text-4xl font-bold text-[#0A4B35]">$22</h2>
                <span className="text-[#000000]">Monthly</span>
              </div>
            </div>

            <h3 className="text-3xl font-normal text-[#0A4B35] mb-4 mt-8">
              Mama Papa Health Visit
            </h3>

            <p className="text-gray-600 mb-8">
              A premium healthcare plan tailored for proactive, personalized health
              management—perfect for families and diaspora sponsors dedicated to ensuring the
              well-being of their loved ones.
            </p>

            <div className="space-y-4">
              {planFeatures['Mama Papa Health Visit'].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="space-y-6 w-1/2 ">
            <div className="w-[400px] mx-auto bg-[#FFEDD8] rounded-2xl p-6 shadow-sm">
              <div className="border-b border-gray-300 mb-2 pb-4 ">
                {/* <h2 className="text-2xl font-bold text-[#0A4B35] mb-6">Plan Summary</h2> */}

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-semibold text-[#0A4B35]">{plan.name}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-[#0A4B35]">{plan.duration} months</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Total</span>
                    <span className="font-bold text-[#0A4B35] text-xl">${plan.total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/payment')}
                className="w-full bg-[#28A745] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#218838] transition-colors"
              >
                Proceed to Pay
              </button>

              <p className="text-sm text-center text-gray-600 mt-3">
                By continuing, you accept our{' '}
                <Link to="/terms" className="text-[#28A745] hover:underline">
                  Terms of use
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#28A745] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPage;
