import React, { useState } from 'react';
import { INSTRUCTOR_STORIES } from '../data/mockData';
import { InstructorStory } from '../types';
import { Quote, MapPin, Award, CheckCircle2, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';

interface InstructorStoriesSectionProps {
  onOpenInquiry: () => void;
}

export const InstructorStoriesSection: React.FC<InstructorStoriesSectionProps> = ({ onOpenInquiry }) => {
  const [activeStory, setActiveStory] = useState<InstructorStory | null>(null);

  const pillars = [
    {
      num: '01',
      title: '기관 협업 & 출강 기록',
      desc: '지자체, 학교 등과의 MOU 체결 소식과 생생한 출강 현장을 기록합니다. 담당자분들이 믿고 맡길 수 있도록 체계적인 커리큘럼 기획 과정을 투명하게 공개합니다.',
      badge: 'MOU & 학교출강'
    },
    {
      num: '02',
      title: '강사 양성 리얼리티',
      desc: '자격증 취득은 끝이 아닌 시작입니다. 양성 과정을 수료한 선생님들이 프리마켓, 학교 방과후 수업 등에서 어떻게 활동하고 수익을 창출하는지 그 생생한 여정을 보여드립니다.',
      badge: '프리마켓 & 수익창출'
    },
    {
      num: '03',
      title: '비즈니스 파트너십',
      desc: '더 많은 기관과의 협업을 기다립니다. 검증된 미니어처 교육 전문가들이 언제든 투입될 준비가 되어 있습니다. 투명하게 검증된 저희의 역량을 확인해 보세요.',
      badge: '전문 강사 파견'
    }
  ];

  return (
    <section id="stories" className="py-24 px-4 bg-gray-50/90 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722] bg-orange-100 px-3 py-1 rounded-full">
            Records & Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Our Stories & Records
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            자격증 취득부터 프리마켓 완판, 지자체 MOU 출강까지의 생생한 리얼리티 성장 기록
          </p>
        </div>

        {/* User Code 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#ff5722] font-mono">
                    {item.num}
                  </span>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-[#ff5722] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400 font-semibold">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>투명한 성장 공유 가치</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Instructor Reality Case Studies Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-gray-900">
            KMAA 수강생 대표 성장 리얼리티 인터뷰
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            실제 강사님들이 경험한 출강 및 수익 성과 사례입니다.
          </p>
        </div>

        {/* Instructor Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INSTRUCTOR_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff5722] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                    {story.badge}
                  </div>
                </div>

                <div className="p-6">
                  {/* Instructor Name & Role */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-base">{story.name}</h4>
                      <span className="text-xs text-indigo-600 font-semibold">{story.role}</span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {story.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                    {story.title}
                  </h3>

                  {/* Quote */}
                  <div className="bg-orange-50/80 p-3.5 rounded-2xl border border-orange-100 mb-4 italic text-xs font-semibold text-gray-700 relative">
                    <Quote className="w-4 h-4 text-orange-400 mb-1" />
                    {story.quote}
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-1.5 mb-4">
                    {story.outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-800">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveStory(story)}
                  className="w-full bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-gray-100"
                >
                  <span>인터뷰 전체 읽기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-black mb-1">
              다음 주인공은 바로 선생님입니다!
            </h3>
            <p className="text-xs sm:text-sm text-orange-100">
              KMAA 강사 자격증 과정 및 출강 파트너십 지원
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="bg-white text-gray-900 hover:bg-gray-100 font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md shrink-0 transition cursor-pointer"
          >
            강사 양성 과정 상담받기
          </button>
        </div>

      </div>

      {/* Story Detail Modal */}
      {activeStory && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveStory(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-[#ff5722]">{activeStory.badge}</span>
                <h3 className="text-xl font-extrabold text-gray-900">{activeStory.name} 강사 스토리</h3>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="text-gray-400 hover:text-gray-600 font-bold text-sm bg-gray-100 p-2 rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-bold text-indigo-600 mb-2">{activeStory.role} ({activeStory.location})</p>
            <h4 className="text-lg font-black text-gray-900 mb-4">{activeStory.title}</h4>

            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 text-xs font-bold text-gray-700 italic mb-4">
              {activeStory.quote}
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {activeStory.story}
            </p>

            <div className="bg-gray-50 p-4 rounded-2xl mb-6">
              <h5 className="text-xs font-bold text-gray-900 mb-2">핵심 성과 지표</h5>
              <div className="space-y-1.5">
                {activeStory.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setActiveStory(null);
                onOpenInquiry();
              }}
              className="w-full bg-[#ff5722] text-white font-extrabold text-sm py-3 rounded-full shadow-md hover:bg-[#e64a19] transition cursor-pointer"
            >
              나도 강사 자격증 상담 신청하기
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
