import React from 'react';
import { ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-4 border-t border-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-gray-800">
          
          {/* Logo & Info */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs">
                KMAA
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                한국미니어처아트협회
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              KMAA(KOREA MINIATURE ART ASSOCIATION)는 초·중·고등학교, 지자체, 공공기관 출강 및 자격증 강사 양성을 위한 대한민국 대표 미니어처 공예 협회입니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>어린이 안전 특별법 KC 인증 자재 전용 공급</span>
            </div>
          </div>

          {/* Business Details */}
          <div className="text-xs space-y-1.5 text-gray-400">
            <p className="font-bold text-gray-200 text-sm mb-2">사단법인 한국미니어처아트협회 정보</p>
            <p>대표자: KMAA 이사회 | 사업자등록번호: 220-82-46200</p>
            <p>주소: 서울특별시 서초구 강남대로 381 KMAA 빌딩 4층</p>
            <p>전화: 02-588-4620 / 010-4620-8900 | 이메일: kmaa_official@naver.com</p>
            <p>통신판매업신고: 제2024-서울서초-1890호</p>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 hover:border-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
              title="맨 위로 이동"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} KOREA MINIATURE ART ASSOCIATION. All Rights Reserved.</p>
          <div className="flex items-center gap-4 font-medium">
            <a href="#about" className="hover:text-gray-300 transition">협회 소개</a>
            <a href="#mou" className="hover:text-gray-300 transition">MOU 안내</a>
            <a href="#contact" className="hover:text-gray-300 transition">개인정보처리방침</a>
            <a href="#contact" className="hover:text-gray-300 transition">출강문의</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
