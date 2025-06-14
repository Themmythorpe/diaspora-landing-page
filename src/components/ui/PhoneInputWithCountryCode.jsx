import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import countries from '../../utils/countries';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const PhoneInputWithCountryCode = ({
  value,
  onChange,
  placeholder = 'Phone number',
  className = '',
  required = false,
  name,
  error,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(country => country.code === 'US') || countries[0] // Default to US or first country
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Split the incoming value into dial code and phone number if it matches a known pattern
    if (value) {
      const foundCountry = countries.find(country => value.startsWith(country.dial_code));
      if (foundCountry) {
        setSelectedCountry(foundCountry);
        setPhoneNumber(value.substring(foundCountry.dial_code.length));
      } else {
        setPhoneNumber(value);
      }
    } else {
      setPhoneNumber('');
    }
  }, [value]);

  useEffect(() => {
    // Handle clicks outside to close the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    // Update the parent component's value with the new dial code and current phone number
    onChange({ target: { name: name, value: country.dial_code + phoneNumber } });
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    // Update the parent component's value with the selected dial code and new phone number
    onChange({ target: { name: name, value: selectedCountry.dial_code + newPhoneNumber } });
  };

  return (
    <div className={`relative flex rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus-within:ring-2 focus-within:ring-[#28A745] focus-within:border-transparent ${className}`}>
      {/* Country Code Dropdown Button */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center px-3 py-3 text-gray-700 bg-gray-50 rounded-l-lg focus:outline-none focus:ring-0"
        >
          <span className="mr-2">{selectedCountry.dial_code}</span>
          {isDropdownOpen ? (
            <ChevronUpIcon className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          )}
        </button>
        {/* Country Dropdown List */}
        {isDropdownOpen && (
          <div className="absolute z-20 top-full left-0 mt-1 w-60 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <span className="mr-2">{country.name} ({country.dial_code})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Phone Number Input */}
      <input
        type="tel"
        id={name}
        name={name}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        required={required}
        className="flex-1 block w-full border-0 py-3 rounded-r-lg focus:ring-0"
      />
      {error && <p className="absolute -bottom-6 left-0 text-sm text-red-500">{error}</p>}
    </div>
  );
};

PhoneInputWithCountryCode.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default PhoneInputWithCountryCode; 