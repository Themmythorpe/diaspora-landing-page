import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);

  // Extract sponsorEmail and beneficiaryCount from query parameters
  const queryParams = new URLSearchParams(location.search);
  const sponsorEmail = queryParams.get('sponsorEmail');
  const beneficiaryCount = parseInt(queryParams.get('beneficiaryCount')) || 1;

  useEffect(() => {
    // Automatically redirect after 2 seconds
    const timer = setTimeout(() => {
      setShowModal(false);
      navigate('/add-beneficiary', {
        state: {
          sponsorEmail: sponsorEmail,
          beneficiaryCount: beneficiaryCount,
        },
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, sponsorEmail, beneficiaryCount]);

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto text-center shadow-lg">
        <div className="mb-6">
          <div className="mx-auto w-fit">
            <img src="/images/check_icon.png" alt="Check" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-semibold text-[#0A4B35] mb-3">
            Payment Successful
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Your payment is successful, please check your email for further instructions.
          </p>
        </div>
        {/* Modal Pop-up */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full text-center">
              <img src="/images/check_icon.png" alt="Check" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#28A745] mb-2">Payment Successful</h3>
              <p className="text-gray-700 text-sm">Redirecting to dependent details form...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage; 