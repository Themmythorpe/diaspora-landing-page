import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Make sure to call loadStripe outside of a component's render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const planFeatures = {
  'Mama & Papa 360': [
    'Monthly home visits by healthcare professionals',
    'Unlimited 24/7 doctor consultations',
    'Personalized treatment plan',
    'Hospitals, ambulance & emergency coverage',
    'Surgery, chronic conditions, cancer care, dental & optical coverage',
  ],
  'Mama Papa Health Visit': [
    'Monthly physical visit by a healthcare professional',
    '24/7 Virtual Doctor Support',
    '10% discount on affordable & Quality medication',
    'Dedicated CarePartner',
    'Routine Virtual wellness check',
    'Complimentary First Aid & Primary Care during the visit',
  ],
};

const PlanDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ensure plan is always an object with default numeric values
  const initialPlan = location.state?.plan || {
    name: 'Mama Papa Health Visit',
    duration: { id: '2months', name: '2 Months', price: '60' },
    price: 60,
    total: 60,
    beneficiaryCount: 1,
  };
  const sponsorEmail = location.state?.sponsorEmail;

  const plan = {
    ...initialPlan,
    price: parseFloat(initialPlan.price) || 0,
    total: parseFloat(initialPlan.total) || 0,
    beneficiaryCount: initialPlan.beneficiaryCount || 1,
  };

  // Calculate monthly price for display
  const monthlyPrice =
    plan.name === 'Mama & Papa 360' && plan.duration.name === '12 Months'
      ? (plan.price / 12).toFixed(2)
      : plan.name === 'Mama & Papa 360' && plan.duration.name === '6 Months'
        ? (plan.price / 6).toFixed(2)
        : plan.price;

  const handleProceedToPay = async () => {
    if (!plan.total || isNaN(plan.total)) {
      console.error('Invalid plan total for payment:', plan.total);
      alert('Cannot proceed with payment: Invalid plan total.');
      return;
    }

    try {
      const successRedirectUrl = window.location.origin + '/payment-success' + 
        (sponsorEmail ? `?sponsorEmail=${sponsorEmail}` : '') + 
        `&beneficiaryCount=${plan.beneficiaryCount}`;

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/create-checkout-session`, {
        planId: plan.id,
        planName: plan.name,
        planDuration: plan.duration,
        amount: Math.round(plan.total * 100),
        currency: 'usd',
        successUrl: successRedirectUrl,
        cancelUrl: window.location.origin + '/plan-details',
        metadata: {
          plan_id: plan.id,
          plan_name: plan.name,
          duration_id: plan.duration.id,
          beneficiary_count: plan.beneficiaryCount,
          sponsor_email: sponsorEmail,
        },
      });

      const session = response.data;
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Stripe Checkout Error:', error.message);
        alert(`Payment failed: ${error.message}`);
      }
    } catch (err) {
      console.error('Error initiating Stripe Checkout:', err.response?.data || err.message);
      alert(`Error: ${err.response?.data?.message || err.message || 'Could not initiate payment. Please try again.'}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-8">
          {/* Left Side - Plan Card */}
          <div className="border border-[#0A4B35] rounded-2xl p-8 shadow-sm w-1/2">
            <div className="flex justify-between items-start mb-4">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-4xl font-bold text-[#0A4B35]">${monthlyPrice}</h2>
                <span className="text-[#000000]">
                  {plan.name === 'Mama & Papa 360' ? 'Monthly average' : 'Monthly'}
                </span>
              </div>
            </div>

            <h3 className="text-3xl font-normal text-[#0A4B35] mb-4 mt-8">{plan.name}</h3>

            <p className="text-gray-600 mb-8">
              {plan.name === 'Mama & Papa 360'
                ? 'A comprehensive health insurance plan designed to meet the unique needs of elderly individuals aged 65 to 85.'
                : 'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors.'}
            </p>

            <div className="space-y-4">
              {(planFeatures[plan.name] || []).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-[#28A745] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="space-y-6 w-1/2">
            <div className="w-[400px] mx-auto bg-[#FFEDD8] rounded-2xl p-6 shadow-sm">
              <div className="border-b border-gray-300 mb-2 pb-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-semibold text-[#0A4B35]">{plan.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-[#0A4B35]">{plan.duration.name}</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Total</span>
                    <span className="font-bold text-[#0A4B35] text-xl">${plan.total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToPay}
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
