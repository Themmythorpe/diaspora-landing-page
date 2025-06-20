import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PhoneInputWithCountryCode from '../../../components/ui/PhoneInputWithCountryCode';
// EyeIcon and EyeSlashIcon are not needed if password fields are removed
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const CreateSponsorAccountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPlan } = location.state || {};

  // State for form data (email and phone only)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    community_code: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!selectedPlan) {
      setError('No plan selected. Please go back and choose a plan.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/sponsor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone_number: formData.phone,
          community_code: formData.community_code,
          plan_id: selectedPlan.id,
          duration_id: selectedPlan.duration.id,
          price: selectedPlan.price,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create sponsor account.');
      }

      const result = await response.json();
      console.log('Sponsor Account Creation Success:', result);

      // Redirect to plan-details page after sponsor account creation
      navigate('/plan-details', {
        state: {
          plan: {
            id: selectedPlan.id,
            name: selectedPlan.name,
            description: selectedPlan.description,
            duration: selectedPlan.duration, // Pass the full duration object
            price: selectedPlan.price,
            total: selectedPlan.total,
            beneficiaryCount: selectedPlan.beneficiaryCount,
          },
          sponsorEmail: formData.email, // Pass the sponsor email
        },
      });

    } catch (err) {
      console.error('Sponsor Account Creation Error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative pt-16 md:pb-20 overflow-hidden bg-[#FFF9F2]">
        <div className="container mx-auto px-4 md:py-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
      {/* Left Side - Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden ">
        <div className="mx-auto  inset-0" style={{width: 'fit-content'}}>
          <img 
            src="/images/signup_img.png" 
            alt="Healthcare Professional" 
            className="w-full max-w-[450px] object-cover"
            style={{ }}
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 sm:px-4 py-12 md:px-6 lg:px-20 xl:px-24 ">
        <div className="max-w-[500px] ">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0A4B35] mb-8">Create Sponsor Account</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-[450px]">
            {error && (
              <div className="text-red-500 text-sm mb-4 p-3 bg-red-100 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <PhoneInputWithCountryCode
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="community_code" className="block text-sm font-medium text-gray-700 mb-1">
                Community Code (optional)
              </label>
              <input
                type="text"
                id="community_code"
                name="community_code"
                value={formData.community_code}
                onChange={handleInputChange}
                placeholder="Enter community code if you have one"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
              />
            </div>

            {/* Password fields are intentionally removed as per the request */}

            <button
              type="submit"
              className="w-full bg-[#28A745] text-white py-3 rounded-lg font-medium hover:bg-[#218838] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Continue'}
            </button>

            <p className="text-sm text-center text-gray-600">
              By continuing, you accept our{' '}
              <Link to="/terms" className="text-[#28A745] hover:underline">Terms of use</Link>
              {' '}
              and{' '}
              <Link to="/privacy" className="text-[#28A745] hover:underline">Privacy Policy</Link>
            </p>
          </form>
        </div>
      </div>
            </div>
        </div>
    </div>
  );
};

export default CreateSponsorAccountPage; 