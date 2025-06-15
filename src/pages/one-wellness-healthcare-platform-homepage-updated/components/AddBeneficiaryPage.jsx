import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PhoneInputWithCountryCode from '../../../components/ui/PhoneInputWithCountryCode';
import InputField from '../../../components/ui/InputField';
import Button from '../../../components/ui/Button';
import Toast from '../../../components/ui/Toast';

const BeneficiaryForm = ({ index, onRemove, isRemovable, formData, onChange, states = [], lgas = {} }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value);
  };

  return (
    <div className="space-y-6">
      {index > 0 && (
        <div className="border-t border-gray-300 pt-6 mt-8 mb-6">
          <div className="flex justify-end items-center mb-6">
            {/* <h2 className="text-xl font-semibold text-[#0A4B35]">Beneficiary {index + 1}</h2> */}
            {isRemovable && (
              <button
                onClick={() => onRemove(index)}
                className="text-red-500 flex items-center gap-2 hover:text-red-600"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Remove Beneficiary
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData[index]?.firstName || ''}
            onChange={handleInputChange}
            placeholder="Beneficiary first name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData[index]?.lastName || ''}
            onChange={handleInputChange}
            placeholder="Beneficiary last name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData[index]?.dateOfBirth || ''}
            onChange={handleInputChange}
            placeholder="Beneficiary date of birth"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={formData[index]?.gender || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <PhoneInputWithCountryCode
          name="phoneNumber"
          value={formData[index]?.phoneNumber || ''}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Address
        </label>
        <input
          type="text"
          name="address"
          value={formData[index]?.address || ''}
          onChange={handleInputChange}
          placeholder="Enter full home address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State*
          </label>
          <select
            name="state"
            value={formData[index]?.state || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          >
            <option value="">Select State</option>
            {Array.isArray(states) && states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LGA
          </label>
          <select
            name="lga"
            value={formData[index]?.lga || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
            disabled={!formData[index]?.state}
          >
            <option value="">Select LGA</option>
            {Array.isArray(lgas[formData[index]?.state]) && lgas[formData[index]?.state].map((lga) => (
              <option key={lga.id} value={lga.id}>
                {lga.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pre-existing Condition?
          </label>
          <input
            type="text"
            name="preExistingCondition"
            value={formData[index]?.preExistingCondition || ''}
            onChange={handleInputChange}
            placeholder="If yes, state Condition"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Emergency contact
          </label>
          <input
            type="tel"
            name="emergencyContact"
            value={formData[index]?.emergencyContact || ''}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#28A745] focus:border-transparent"
            required
          />
        </div>
      </div>
    </div>
  );
};

const AddBeneficiaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { beneficiaryCount: maxBeneficiaries = 1, sponsorEmail } = location.state || {};
  
  const [beneficiaryCount, setBeneficiaryCount] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([0]); // Array of indices
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('error');
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState({});
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingLgas, setLoadingLgas] = useState({});

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/states`);
        if (!response.ok) {
          throw new Error('Failed to fetch states');
        }
        const result = await response.json();
        // Access the states array from the data property
        setStates(Array.isArray(result.data) ? result.data : []);
      } catch (err) {
        console.error('Error fetching states:', err);
        setError('Failed to load states. Please refresh the page.');
        setStates([]); // Set empty array on error
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch LGAs when state changes
  const fetchLgas = async (stateId) => {
    if (!stateId) return;
    
    setLoadingLgas(prev => ({ ...prev, [stateId]: true }));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/states/${stateId}/lgas`);
      if (!response.ok) {
        throw new Error('Failed to fetch LGAs');
      }
      const result = await response.json();
      // Access the LGAs array from the data property
      setLgas(prev => ({ ...prev, [stateId]: Array.isArray(result.data) ? result.data : [] }));
    } catch (err) {
      console.error('Error fetching LGAs:', err);
      setError('Failed to load LGAs. Please try selecting the state again.');
      setLgas(prev => ({ ...prev, [stateId]: [] })); // Set empty array on error
    } finally {
      setLoadingLgas(prev => ({ ...prev, [stateId]: false }));
    }
  };

  const handleInputChange = (index, name, value) => {
    setFormData(prev => {
      const newData = {
        ...prev,
        [index]: {
          ...prev[index],
          [name]: value
        }
      };

      // If state is changed, fetch LGAs and clear LGA selection
      if (name === 'state') {
        fetchLgas(value);
        newData[index].lga = ''; // Clear LGA when state changes
      }

      return newData;
    });
  };

  const addBeneficiary = () => {
    if (beneficiaries.length < maxBeneficiaries) {
      setBeneficiaries([...beneficiaries, beneficiaryCount]);
      setBeneficiaryCount(beneficiaryCount + 1);
    }
  };

  const removeBeneficiary = (index) => {
    setBeneficiaries(beneficiaries.filter(i => i !== index));
    // Remove the form data for this beneficiary
    setFormData(prev => {
      const newData = { ...prev };
      delete newData[index];
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowToast(false);

    try {
      // Check if all required beneficiaries are added
      if (beneficiaries.length < maxBeneficiaries) {
        const message = `Please add all ${maxBeneficiaries} ${maxBeneficiaries === 1 ? 'beneficiary' : 'beneficiaries'} before proceeding.`;
        setToastMessage(message);
        setToastType('error');
        setShowToast(true);
        return;
      }

      // Validate all required fields
      const requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'phoneNumber', 'address', 'state', 'lga', 'emergencyContact'];
      const missingFields = beneficiaries.some(beneficiary => {
        const beneficiaryData = formData[beneficiary];
        if (!beneficiaryData) return true;
        
        return requiredFields.some(field => {
          const value = beneficiaryData[field];
          return !value || value.trim() === '';
        });
      });

      if (missingFields) {
        setToastMessage('Please fill in all required fields for each beneficiary. Required fields are: First Name, Last Name, Date of Birth, Gender, Phone Number, Address, State, LGA, and Emergency Contact.');
        setToastType('error');
        setShowToast(true);
        return;
      }

      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/add-beneficiary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sponsor_email: sponsorEmail,
          beneficiaries: beneficiaries.map(beneficiary => formData[beneficiary]),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add beneficiaries');
      }

      // Show success toast
      setToastMessage('Beneficiaries added successfully!');
      setToastType('success');
      setShowToast(true);

      // Navigate to success page after a short delay
      setTimeout(() => {
        navigate('/beneficiary-success', { 
          state: { 
            sponsorEmail,
            beneficiaryCount: beneficiaries.length 
          } 
        });
      }, 2000);

    } catch (err) {
      setToastMessage(err.message || 'Error adding beneficiaries');
      setToastType('error');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0A4B35] mt-16 mb-8">Add Beneficiary</h1>
        
        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}

        <form onSubmit={handleSubmit} className="rounded-2xl py-8 px-0 md:px-8">
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {loadingStates && (
            <div className="mb-6 p-3 bg-blue-100 text-blue-700 rounded-lg text-sm">
              Loading states...
            </div>
          )}

          {beneficiaries.map((index) => (
            <BeneficiaryForm
              key={index}
              index={index}
              onRemove={removeBeneficiary}
              isRemovable={beneficiaries.length > 1}
              formData={formData}
              onChange={handleInputChange}
              states={states}
              lgas={lgas}
            />
          ))}

          <div className="mt-8">
            {beneficiaries.length < maxBeneficiaries ? (
              <button
                type="button"
                onClick={addBeneficiary}
                className="flex items-center gap-2 text-[#28A745] text-sm font-medium hover:text-[#218838]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add Beneficiary
              </button>
            ) : (
              <p className="text-sm text-gray-500">
                Maximum number of beneficiaries ({maxBeneficiaries}) reached
              </p>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#28A745] text-white py-3 rounded-lg font-medium hover:bg-[#218838] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Save'}
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              By continuing, you accept our{' '}
              <Link to="/terms" className="text-[#28A745] hover:underline">Terms of use</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#28A745] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBeneficiaryPage; 