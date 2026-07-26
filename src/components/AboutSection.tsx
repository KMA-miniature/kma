import React from 'react';
import { Target, TrendingUp, Shield, Award, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: '실전 비즈니스 연결',
      desc: '자격증에 머물지 않고 실제 출강, 프리마켓, 지자체 사업과 즉각 연계됩니다.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: TrendingUp,
      title: 'MOU & 성장 과정 투명 공개',
      desc: '기관 제안서 작성법부터 출강 계약 성사까지 생생한 성공 스토리를 공유합니다.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: '검증된 친환경 안전 재료',
      desc: '어린이 대상 수업에서도 안심하고 사용할 수 있는 KC 인증 재료 키트 전용 공급.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Award,
      title: '체계적 수석 강사 인력풀',
      desc: '전국 어디든 필요한 대규모 체험 부스 및 학교 수업에 전문 인력을 파견합니다.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-50/80 relative overflow-hidden">
      
      {/* Background Subtle Patterns */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722] bg-orange-100/80 px-3 py-1 rounded-full">
            KMAA Identity & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            About Us
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            공예의 아름다움을 넘어 실전 수익과 교육 가치를 만드는 협회
          </p>
        </div>

        {/* Glass Card Container matching User Code */}
        <div className="relative max-w-3xl w-full my-4">
          
          {/* Glowing Blur Background matching user CSS */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] blur-2xl opacity-50 rounded-3xl -skew-y-1 transform transition-transform" />

          {/* Glass Card Body */}
          <div className="relative bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/80 text-center leading-relaxed text-gray-700 text-base sm:text-lg">
            
            <p className="font-medium text-gray-800 mb-6">
              한국미니어처아트협회는 단순한 공예를 넘어, <strong className="text-gray-900 font-extrabold underline decoration-orange-400 decoration-2">실제 가치를 창출하는 교육</strong>을 실현합니다.
            </p>

            <p className="mb-6">
              우리는 완성된 화려한 결과물만 보여드리지 않습니다. 지자체 및 학교와 협업하기 위한 치열한{' '}
              <span className="text-[#ff5722] font-extrabold bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                MOU 체결 과정
              </span>
              부터, 평범했던 수강생이 강사로 성장하여{' '}
              <span className="text-[#ff5722] font-extrabold bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                프리마켓과 체험부스에서 수익을 내는 생생한 현장
              </span>
              까지 투명하게 공유합니다.
            </p>

            <p className="font-bold text-indigo-900 text-lg sm:text-xl pt-2">
              교육이 어떻게 실전 비즈니스로 연결되는지, 우리의 모든 성장 과정을 지켜봐 주세요.
            </p>

            {/* Checkmark Bullets */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>체계적인 단계별 미니어처 공예 지도자 교육</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>기관/학교 맞춤형 제안서 및 견적서 신속 제공</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>수강생 전용 원가 이하 부자재 & 키트 전용 몰</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>전국 프리마켓 공동 참여 및 온·오프라인 셀링</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${val.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
