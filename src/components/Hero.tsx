import React, { useState } from 'react';
import { STATS_DATA } from '../data/mockData';
import { Sparkles, ArrowRight, Award, CheckCircle2, Eye, ShieldCheck, Users } from 'lucide-react';
import heroArtImg from '../assets/images/miniature_hero_art_1785043528716.jpg';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreStories: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreStories }) => {
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-white">
      
      {/* Background Oversized Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-gray-100/80 tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap">
        K M A A
      </div>

      {/* Floating 3D Colorful Objects matching User Code */}
      <div className="absolute top-24 left-[10%] w-28 h-28 rounded-full bg-radial from-purple-300 via-indigo-400 to-purple-600 opacity-80 blur-[2px] animate-float-slow z-0 shadow-lg shadow-purple-500/20" />
      <div className="absolute bottom-36 right-[12%] w-24 h-24 rounded-2xl bg-radial from-green-300 via-emerald-400 to-green-600 opacity-80 blur-[2px] rotate-45 animate-float-medium z-0 shadow-lg shadow-green-500/20" />
      <div className="absolute bottom-20 left-[18%] w-20 h-20 rounded-3xl bg-radial from-blue-300 via-sky-400 to-blue-600 opacity-80 blur-[2px] animate-float-fast z-0 shadow-lg shadow-blue-500/20" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Top Association Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-indigo-50 border border-orange-200/80 text-orange-700 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
          <span>대한민국 대표 미니어처 공예 교육 & 강사 양성 전문기관</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-4">
          안녕하세요, <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-orange-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            한국미니어처아트협회
          </span>입니다!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-bold text-gray-700 max-w-2xl mb-2">
          교육기관 출강 및 프리미엄 강사 양성
        </p>

        <p className="text-sm sm:text-base font-medium text-gray-500 mb-8 max-w-xl">
          지자체 · 학교 · 기관 협업 및 프리마켓 진출을 위한 실전 중심 교육 커리큘럼
        </p>

        {/* Main Profile / Featured Artwork Showcase Box */}
        <div className="relative group my-4">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-102" />
          
          <div className="relative w-64 h-64 md:w-72 md:h-72 bg-indigo-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center border-4 border-white text-white">
            <img
              src={heroArtImg}
              alt="KMAA 대표 미니어처 작품"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            
            {/* Overlay badge */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-orange-300 block">KMAA Masterpiece</span>
                <span className="text-sm font-extrabold text-white">전통 한상차림 & 디저트</span>
              </div>
              <button
                onClick={() => setShowImagePreview(true)}
                className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
                title="작품 크게 보기"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Association Tagline */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-500 mt-4 mb-8 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>KC 인증 안전 재료 사용 · 100% 실전 수익 연계 커리큘럼</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>출강 및 교육 문의하기</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onExploreStories}
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-indigo-300 font-bold text-base px-7 py-4 rounded-full shadow-sm hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Users className="w-5 h-5 text-indigo-600" />
            <span>강사 성공 사례 보기</span>
          </button>
        </div>

      </div>

      {/* Bottom Key Stats Bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="text-center p-3 rounded-2xl hover:bg-orange-50/50 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                <span className="bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {showImagePreview && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowImagePreview(false)}
        >
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={heroArtImg}
              alt="KMAA 대표 미니어처 작품 확대"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-2xl object-cover max-h-[80vh]"
            />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900">한국미니어처아트협회 고화질 작품</h4>
                <p className="text-xs text-gray-500">100% 수작업으로 완성된 섬세한 미니어처 예술</p>
              </div>
              <button
                onClick={() => setShowImagePreview(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-4 py-2 rounded-full cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
