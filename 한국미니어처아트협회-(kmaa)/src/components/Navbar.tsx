import React, { useState, useEffect } from 'react';
import { NavTab } from '../types';
import { Menu, X, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mou', label: 'MOU & 출강' },
    { id: 'stories', label: '강사 스토리' },
    { id: 'gallery', label: '작품 갤러리' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: NavTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <div className={`nav-container transition-all duration-300 flex items-center justify-between gap-4 md:gap-8 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border border-gray-100 max-w-5xl w-full ${isScrolled ? 'py-2.5 shadow-xl border-orange-100' : ''}`}>
        
        {/* Logo Branding */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            KMAA
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-gray-900 block leading-none">
              한국미니어처아트협회
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wider block mt-0.5">
              KOREA MINIATURE ART ASSOCIATION
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 bg-gray-50/80 p-1 rounded-full border border-gray-100">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#ff5722] text-white shadow-sm shadow-orange-500/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-indigo-600 text-white font-bold text-xs md:text-sm px-4 py-2 rounded-full shadow-md shadow-orange-500/20 hover:opacity-95 hover:scale-105 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>출강 문의</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none rounded-full hover:bg-gray-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-4 bg-white/98 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="text-xs font-semibold text-gray-400 px-3 uppercase tracking-wider">
            메뉴 이동
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                  isActive
                    ? 'bg-[#ff5722] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#ff5722] text-white font-bold py-3.5 rounded-2xl shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>출강 및 교육 문의하기</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
