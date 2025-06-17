import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import HomePage from './pages/one-wellness-healthcare-platform-homepage-updated/index';
import PricingPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/PricingPage';
import SignupPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/SignupPage';
import LoginPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/LoginPage';
import VerificationSuccessPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/VerificationSuccessPage';
import PaymentSuccessPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/PaymentSuccessPage';
import AddBeneficiaryPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/AddBeneficiaryPage';
import ChoosePlanPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/ChoosePlanPage';
import PlanDetailsPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/PlanDetailsPage';
import BookingConfirmedPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/BookingConfirmedSection';
import CreateSponsorAccountPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/CreateSponsorAccountPage';
import BeneficiarySuccessPage from './pages/one-wellness-healthcare-platform-homepage-updated/components/BeneficiarySuccessPage';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-success" element={<VerificationSuccessPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
          <Route path="/choose-plan" element={<ChoosePlanPage />} />
          <Route path="/plan-details" element={<PlanDetailsPage />} />
          <Route path="/booking-confirmed" element={<BookingConfirmedPage />} />
          <Route path="/create-sponsor-account" element={<CreateSponsorAccountPage />} />
          <Route path="/beneficiary-success" element={<BeneficiarySuccessPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;