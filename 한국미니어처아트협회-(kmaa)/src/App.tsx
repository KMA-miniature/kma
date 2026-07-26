import React, { useState } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MouLecturesSection } from './components/MouLecturesSection';
import { InstructorStoriesSection } from './components/InstructorStoriesSection';
import { GallerySection } from './components/GallerySection';
import { FaqContactSection } from './components/FaqContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const handleExploreStories = () => {
    setActiveTab('stories');
    const el = document.getElementById('stories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Floating Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onExploreStories={handleExploreStories}
        />

        <AboutSection />

        <MouLecturesSection onOpenInquiry={handleOpenInquiry} />

        <InstructorStoriesSection onOpenInquiry={handleOpenInquiry} />

        <GallerySection />

        <FaqContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popup Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
