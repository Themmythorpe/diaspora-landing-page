import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import RemoteHealthSection from './components/RemoteHealthSection';
import InsuranceSection from './components/InsuranceSection';
import SupportSection from './components/SupportSection';
import TeamMotivationSection from './components/TeamMotivationSection';
import AdminSection from './components/AdminSection';
import PlansSection from './components/PlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import StepsSection from './components/StepsSection';
import MobileSection from './components/MobileSection';
import ClosingCTASection from './components/ClosingCTASection';
import HealthInsurance from './components/HealthInsurance';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import DiscoveryCallSection from './components/DiscoveryCallSection';
import BookingConfirmedSection from './components/BookingConfirmedSection';
import PricingMp from './components/PricingMp';

const OneWellnessHealthcarePlatformHomepageUpdated = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroSection />
                <BenefitsSection />
                <RemoteHealthSection />
                {/* <InsuranceSection />
                <SupportSection />
                <TeamMotivationSection />
                <HealthInsurance />
                <AdminSection />
                <PlansSection /> */}
                <TestimonialsSection />
                <StepsSection />
                {/* <PricingSection /> */}
                <PricingMp />
                <DiscoveryCallSection />
                <ClosingCTASection />
                <FAQSection />
              </main>
            </>
          }
        />
        <Route path="/booking-confirmed" element={<BookingConfirmedSection />} />
      </Routes>
    </div>
  );
};

export default OneWellnessHealthcarePlatformHomepageUpdated;
