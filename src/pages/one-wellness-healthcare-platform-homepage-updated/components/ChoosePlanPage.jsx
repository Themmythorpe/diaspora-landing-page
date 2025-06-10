import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlansAPI } from '@/all-plans/api';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const ChoosePlanPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await PlansAPI.getDiasporaPlans();

        // Transform API data to avoid rendering objects directly
        const transformedPlans = response.map((plan) => ({
          id: plan.id,
          name: plan.name,
          description: plan.description || '',
          durations: (plan.plan_durations || []).map((pd) => ({
            id: pd.duration_id,
            name: (plan.durations || []).find((d) => d.id === pd.duration_id)?.name || '',
            price: pd.usd_amount || 0,
          })),
          features: (plan.services || []).map((service) =>
            typeof service === 'object' ? service.description || service.name : String(service)
          ),
        }));

        setPlans(transformedPlans);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message || 'Failed to load plans');

        // Fallback data with proper structure
        setPlans([
          {
            id: 40,
            name: 'Mama & Papa 360',
            description: 'Comprehensive health insurance for elderly individuals',
            durations: [
              { id: '6months', name: '6 Months', price: 200 },
              { id: '12months', name: '12 Months', price: 350 },
            ],
            features: [
              'Monthly home visits',
              'Unlimited doctor consultations',
              'Personalized treatment plan',
            ],
          },
          {
            id: 41,
            name: 'Mama Papa Health Visit',
            description: 'Premium healthcare for families',
            durations: [{ id: '2months', name: '2 Months', price: 60 }],
            features: [
              'Monthly physical visit',
              '24/7 Virtual Doctor Support',
              '10% medication discount',
            ],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setSelectedDuration(plan.durations[0]);
    setIsDropdownOpen(false);
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A4B35] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading plans...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-[#0A4B35] mb-8">Choose a Plan</h1>

        {error && (
          <div className="mb-6 p-3 bg-yellow-100 text-yellow-800 rounded-lg text-sm">
            {error} - Showing fallback plans
          </div>
        )}

        <div className="space-y-6">
          {/* Plan Selection Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Plan</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#28A745]"
              >
                <span className="text-gray-700">{selectedPlan?.name || 'Select a plan'}</span>
                {isDropdownOpen ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 ${
                        selectedPlan?.id === plan.id ? 'bg-gray-100' : ''
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Duration Selection */}
          {selectedPlan && (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Select Duration</label>
              <div className="flex flex-wrap gap-2">
                {selectedPlan.durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => handleDurationSelect(duration)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedDuration?.id === duration.id
                        ? 'bg-[#FF6B35] text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {duration.name} (${duration.price})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Plan Summary */}
          {selectedPlan && selectedDuration && (
            <div className="bg-[#FDF8F3] rounded-lg p-4 border border-[#FFEDD8]">
              <h2 className="text-lg font-semibold text-[#0A4B35] mb-3">Plan Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-medium">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{selectedDuration.name}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#FFEDD8]">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold text-lg text-[#0A4B35]">
                    ${selectedDuration.price}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={() => {
              if (selectedPlan && selectedDuration) {
                navigate('/plan-details', {
                  state: {
                    plan: {
                      ...selectedPlan,
                      duration: selectedDuration.name,
                      price: selectedDuration.price,
                      total: selectedDuration.price,
                    },
                  },
                });
              }
            }}
            disabled={!selectedPlan || !selectedDuration}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
              selectedPlan && selectedDuration
                ? 'bg-[#28A745] text-white hover:bg-[#218838]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>

          {/* Footer Links */}
          <p className="text-sm text-center text-gray-600">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-[#28A745] hover:underline">
              Terms
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
