import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 1,
    name: 'Mama & Papa 360',
    price: 200,
    period: '6 Months',
    period2: '12 Months',
  },
  {
    id: 2,
    name: 'Mama Papa Health Visit',
    price: 60,
    period: '2 month trial',
  },
];

const ChoosePlanPage = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [duration, setDuration] = useState(1);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setIsDropdownOpen(false);
    setDuration(1); // Reset duration when plan changes
  };

  const incrementDuration = () => {
    if (duration < 12) setDuration(duration + 1);
  };

  const decrementDuration = () => {
    if (duration > 1) setDuration(duration - 1);
  };

  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    return selectedPlan.price * (selectedPlan.period === 'month' ? duration : 1);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#0A4B35] text-center mb-8">Choose a Plan</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Plan</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#28A745]"
              >
                <span className="text-gray-700">
                  {selectedPlan ? `${selectedPlan.name} (${selectedPlan.price}$)` : 'Choose a plan'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
                    >
                      {plan.name} ({plan.price}${' '}
                      {plan.period === 'month' ? 'Per Month' : plan.period})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Duration Counter - Only show for monthly plans */}
          {selectedPlan && selectedPlan.period === 'month' && (
            <div className="border-b border-gray-300 mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration of Plan
              </label>
              <div className="flex items-center justify-between rounded-lg w-fit p-3">
                <button
                  onClick={decrementDuration}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-200 rounded-full"
                  disabled={duration <= 1}
                >
                  <span className="text-2xl">−</span>
                </button>
                <span className="text-lg font-bold text-gray-700 px-2">{duration}</span>
                <button
                  onClick={incrementDuration}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none bg-slate-200 rounded-full"
                  disabled={duration >= 12}
                >
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
          )}

          {/* Total */}
          {selectedPlan && (
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Total</span>
              <span className="text-[#0A4B35] font-semibold">
                ${calculateTotal()}
                <span className="text-sm text-gray-500 ml-1">
                  (
                  {selectedPlan.period === 'month'
                    ? `${duration} month${duration > 1 ? 's' : ''}`
                    : selectedPlan.period}
                  )
                </span>
              </span>
            </div>
          )}

          <button
            onClick={() =>
              navigate('/plan-details', {
                state: {
                  plan: {
                    name: selectedPlan.name,
                    duration: duration,
                    total: calculateTotal(),
                  },
                },
              })
            }
            disabled={!selectedPlan}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              selectedPlan
                ? 'bg-[#28A745] text-white hover:bg-[#218838]'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>

          <p className="text-sm text-center text-gray-600">
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
  );
};

export default ChoosePlanPage;
