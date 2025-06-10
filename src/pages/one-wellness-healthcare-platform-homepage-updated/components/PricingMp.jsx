// src/components/PricingMp.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import { PlansAPI } from '@/all-plans/api';

const PricingMp = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDurations, setActiveDurations] = useState({});

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await PlansAPI.getDiasporaPlans();
        const transformedPlans = data.map((plan) => {
          const primaryDuration = plan.plan_durations?.[0];
          const secondaryDuration = plan.plan_durations?.[1];

          return {
            id: plan.id,
            durations:
              plan.plan_durations?.map((pd) => ({
                id: pd.duration_id,
                name: plan.durations?.find((d) => d.id === pd.duration_id)?.name || '',
                price: pd.usd_amount?.toString() || '0',
              })) || [],
            title: plan.name,
            description: plan.description || 'Premium healthcare plan for your loved ones',
            features: plan.services?.map((service) => service.description || service.name) || [],
          };
        });

        setPlans(transformedPlans);

        // Initialize active durations with first option for each plan
        const initialActiveDurations = {};
        transformedPlans.forEach((plan) => {
          if (plan.durations.length > 0) {
            initialActiveDurations[plan.id] = plan.durations[0].id;
          }
        });
        setActiveDurations(initialActiveDurations);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message || 'An error occurred while fetching plans.');

        // Fallback plans with durations
        const fallbackPlans = [
          {
            id: 40,
            durations: [
              { id: '6months', name: '6 Months', price: '200' },
              { id: '12months', name: '12 Months', price: '350' },
            ],
            title: 'Mama Papa Health Cover',
            description:
              'A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.',
            features: [
              'Monthly home visits by healthcare professionals',
              'Unlimited 24/7 doctor consultations',
              '₦10,000 Wallet cashback on 3-months subscription',
              'Dedicated Care Partner',
              'Refillable wallets for chronic medications',
              'First Aid & Primary Care during visits',
              'Up to 10% discount on medications',
              'Virtual wellness checks',
              'Whatsapp group with doctors & family',
              'Personalized treatment plan',
              'Hospitals, ambulance & emergency coverage',
              'Surgery, chronic conditions, cancer care, dental & optical coverage',
            ],
          },
          {
            id: 41,
            durations: [{ id: '2months', name: '2 Months Trial', price: '60' }],
            title: 'Mama Papa Health Visit',
            description:
              'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors.',
            features: [
              'Everything in Mama and Papa 360 for a month',
              'Excluding Surgery, Chronic conditions, cancer care, dental & optical coverage',
            ],
          },
        ];
        setPlans(fallbackPlans);

        // Initialize active durations for fallback
        const fallbackActiveDurations = {};
        fallbackPlans.forEach((plan) => {
          if (plan.durations.length > 0) {
            fallbackActiveDurations[plan.id] = plan.durations[0].id;
          }
        });
        setActiveDurations(fallbackActiveDurations);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleDurationChange = (planId, durationId) => {
    setActiveDurations((prev) => ({
      ...prev,
      [planId]: durationId,
    }));
  };

  const getActiveDuration = (planId) => {
    return plans
      .find((p) => p.id === planId)
      ?.durations?.find((d) => d.id === activeDurations[planId]);
  };

  const PlanCard = ({ plan }) => {
    const activeDuration = getActiveDuration(plan.id);

    return (
      <div className="bg-[#FDF8F3] rounded-2xl p-8 shadow-md">
        <div className="flex items-baseline mb-8 justify-between">
          <div>
            <span className="text-4xl font-bold text-[#0A4B35]">$</span>
            <span className="text-5xl font-bold text-[#0A4B35]">
              {activeDuration?.price || '0'}
            </span>
          </div>

          <div className="flex gap-2">
            {plan.durations.map((duration) => (
              <button
                key={duration.id}
                onClick={() => handleDurationChange(plan.id, duration.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeDurations[plan.id] === duration.id
                    ? 'bg-[#FF6B35] text-white'
                    : 'border border-orange-200 text-[#FF6B35] hover:bg-orange-50'
                }`}
              >
                {duration.name}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0A4B35] mb-4">{plan.title}</h2>
        <p className="text-gray-600 mb-8">{plan.description}</p>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-6 w-6 text-[#28A745] flex-shrink-0 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate('/choose-plan')}
          className="bg-[#28A745] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#218838] transition-colors w-full"
        >
          Get Started
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20 flex items-center justify-center">
        <div className="text-center text-gray-500 animate-pulse">Loading plans...</div>
      </div>
    );
  }

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
          {error && (
            <div className="text-red-500 text-sm mt-4">
              Note: Using fallback data due to API error: {error}
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingMp;
