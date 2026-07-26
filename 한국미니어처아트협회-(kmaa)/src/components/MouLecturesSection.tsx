import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../data/mockData';
import { CurriculumItem } from '../types';
import { School, Tent, Building2, Award, Clock, Users, ArrowRight, FileCheck, CheckCircle2 } from 'lucide-react';

interface MouLecturesSectionProps {
  onOpenInquiry: () => void;
}

export const MouLecturesSection: React.FC<MouLecturesSectionProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 프로그램', icon: FileCheck },
    { id: 'school', label: '학교 방과후/창체', icon: School },
    { id: 'festival', label: '지자체 체험부스', icon: Tent },
    { id: 'corporate', label: '기업 힐링 클래스', icon: Building2 },
    { id: 'certificate', label: '강사 자격증반', icon: Award },
  ];

  const filteredData = activeCategory === 'all'
    ? CURRICULUM_DATA
    : CURRICULUM_DATA.filter((item) => item.category === activeCategory);

  const steps = [
    { num: '01', title: '문의 및 요구사항 파악', desc: '기관 담당자의 목적, 예산, 참가자 연령대 및 일정을 파악합니다.' },
    { num: '02', title: '맞춤 커리큘럼 & 샘플 제안', desc: 'KMAA에서 검증된 교육 계획서, 견적서 및 재료 키트 샘플을 전송합니다.' },
    { num: '03', title: 'MOU 협약 및 출강 계약', desc: '지자체 및 학교 행정 절차에 맞춘 표준 MOU 및 계약서를 서면 체결합니다.' },
    { num: '04', title: '강사 파견 & 안전 키트 배송', desc: 'KMAA 전문 정식 강사를 파견하고, KC 인증 재료 키트를 안전하게 현장 수령합니다.' },
    { num: '05', title: '수업 진행 및 성과 보고서', desc: '성공적인 클래스 완료 후 수강생 만족도 조사 결과 및 성과 사진을 전달합니다.' },
  ];

  return (
    <section id="mou" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Partnership & Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            MOU & 기관 출강 프로그램
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            학교, 지자체, 공공기관 및 기업 맞춤형 미니어처 공예 교육 솔루션을 제안합니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-orange-50 rounded-bl-full -z-0 opacity-70 group-hover:scale-110 transition-transform" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-[#ff5722] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Target Audience */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6 bg-gray-50 p-2.5 rounded-xl">
                  <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>교육 대상: {item.target}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400">맞춤 제안서 가능</span>
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  <span>이 프로그램 문의</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Step-by-Step MOU Process Flow */}
        <div className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full">
              Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              MOU & 출강 진행 5단계 절차
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">
              신속하고 투명한 행정 업무 지원으로 담당자님의 업무 부담을 최대로 줄여드립니다.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-orange-400/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-orange-400 block mb-2 font-mono">
                    {step.num}
                  </span>
                  <h4 className="font-bold text-sm text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center relative z-10">
            <button
              onClick={onOpenInquiry}
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>MOU 협약 및 맞춤 제안서 요청하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
