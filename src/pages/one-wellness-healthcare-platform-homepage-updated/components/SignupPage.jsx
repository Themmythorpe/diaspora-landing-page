import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import PhoneInputWithCountryCode from '../../../components/ui/PhoneInputWithCountryCode';

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowVerificationModal(true);
  };

  // Simulate email verification
  const simulateEmailVerification = () => {
    // Close the modal
    setShowVerificationModal(false);
    // Redirect to success page after a short delay
    setTimeout(() => {
      navigate('/verify-success');
    }, 1500);
  };

  const VerificationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-end">
          <button 
            onClick={() => setShowVerificationModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#28A745] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#0A4B35] mb-2">Verify your email address</h3>
          <p className="text-gray-600 text-sm">
            Check your email or spam folder and click the confirmation button to verify your email address.
          </p>
        </div>
        <button 
          onClick={simulateEmailVerification}
          className="w-full bg-[#28A745] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#218838] transition-colors"
        >
          Go to Mail Box
        </button>
      </div>
    </div>
  );

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
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0A4B35] mb-8">Create Account</h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            Are you a sponsor?{' '}
            <Link to="/create-sponsor-account" className="text-[#28A745] font-semibold hover:underline">
              Create a sponsor account
            </Link>
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-[450px]">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#28A745] text-white py-3 rounded-lg font-medium hover:bg-[#218838] transition-colors"
            >
              Continue
            </button>

            <p className="text-sm text-center text-gray-600">
              By continuing, you accept our{' '}
              <Link to="/terms" className="text-[#28A745] hover:underline">Terms of use</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#28A745] hover:underline">Privacy Policy</Link>
            </p>
          </form>
        </div>
      </div>
            </div>
        </div>


      {/* Verification Modal */}
      {showVerificationModal && <VerificationModal />}
    </div>
  );
};

export default SignupPage; 