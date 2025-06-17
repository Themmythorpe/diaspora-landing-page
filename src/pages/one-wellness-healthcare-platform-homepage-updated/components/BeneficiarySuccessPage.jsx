import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeneficiarySuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto text-center shadow-lg">
        <div className="mb-6">
            <div className="mx-auto w-fit">
                <img src="/images/check_icon.png" alt="Check" className="w-20 h-20" />
            </div>
          <h2 className="text-xl font-semibold text-[#0A4B35] mb-3">
            Beneficiaries Created Successfully!
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Your beneficiaries have been successfully created.
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#28A745] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#218838] transition-colors"
        >
          Go back to Homepage
        </button>
      </div>
    </div>
  );
};

export default BeneficiarySuccessPage; 