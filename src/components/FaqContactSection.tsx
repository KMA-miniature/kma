import React, { useState } from 'react';
import { FAQ_DATA } from '../data/mockData';
import { ConsultationFormData } from '../types';
import { ChevronDown, Send, Phone, Mail, MapPin, CheckCircle2, HelpCircle, FileText, Sparkles, Clock } from 'lucide-react';

interface FaqContactSectionProps {
  initialInquiryType?: string;
}

export const FaqContactSection: React.FC<FaqContactSectionProps> = ({ initialInquiryType = '학교 출강' }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const [formData, setFormData] = useState<ConsultationFormData>({
    organizationName: '',
    contactName: '',
    phone: '',
    email: '',
    inquiryType: initialInquiryType,
    targetAudience: '초등학생',
    expectedParticipants: '20명~30명',
    preferredDate: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'KMAA-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* FAQ Header & Accordion */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5722] bg-orange-100 px-3 py-1 rounded-full">
              Help Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              기관 출강, MOU 협약, 강사 자격증에 대해 가장 많이 들어오는 질문들입니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-[#ff5722] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 bg-orange-50/30">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3 py-1 rounded-full inline-block mb-4">
                Consultation & MOU Inquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-snug">
                출강 및 교육 상담 문의
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
                기관명과 문의 내용을 남겨주시면 담당 전문 간사가 맞춤 제안서와 견적서를 작성하여 24시간 이내에 회신드립니다.
              </p>

              {/* Direct Info */}
              <div className="space-y-4 text-xs sm:text-sm text-gray-200 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">협회 종합 상담 직통</span>
                    <span className="font-bold text-white text-base">02-588-4620 / 010-4620-8900</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">공식 이메일 (제안서 수신)</span>
                    <span className="font-bold text-white">kmaa_official@naver.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-orange-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">협회 중앙 본원 위치</span>
                    <span className="font-bold text-white">서울특별시 서초구 강남대로 381 KMAA 빌딩</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 text-[11px] text-gray-400">
              <p className="flex items-center gap-1.5 font-bold text-orange-300 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>운영시간: 평일 09:00 ~ 18:00 (주말/공휴일 개별 예약)</span>
              </p>
              <p>한국미니어처아트협회 교육기획팀 및 인력관리본부</p>
            </div>

          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-xl font-extrabold text-gray-900 mb-2">
                  상담 신청서 작성
                </h4>
                <p className="text-xs text-gray-500 mb-6">
                  * 표시 항목은 필수 입력 사항입니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      기관/학교/단체명 *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      required
                      placeholder="예: 서울OO초등학교 / OO구청"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      담당자 성함 *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      placeholder="홍길동 담당자"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      연락처 (휴대폰) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      이메일 (제안서 수신용) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      문의 구분
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white"
                    >
                      <option value="학교 출강">학교 방과후/창체 출강</option>
                      <option value="지자체 MOU">지자체/공공기관 MOU</option>
                      <option value="체험부스">축제/행사 체험부스</option>
                      <option value="기업 힐링">기업 임직원 힐링클래스</option>
                      <option value="강사 자격증">강사 자격증 수강문의</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      예상 대상
                    </label>
                    <select
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white"
                    >
                      <option value="유치원/어린이">유치원 / 유아</option>
                      <option value="초등학생">초등학생</option>
                      <option value="중·고등학생">중·고등학생</option>
                      <option value="성인/임직원">성인 / 기업임직원</option>
                      <option value="어르신/시니어">어르신 / 시니어</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      예상 인원
                    </label>
                    <input
                      type="text"
                      name="expectedParticipants"
                      placeholder="예: 25명 내외"
                      value={formData.expectedParticipants}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    상세 문의 및 특이사항
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="수업 희망 일자, 예산 범위, 특정 미니어처 주제 등 필요하신 내용을 자유롭게 적어주세요."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:scale-101 active:scale-99 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>문의 및 제안서 신청하기</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  문의가 정상적으로 접수되었습니다!
                </h4>
                <p className="text-xs text-gray-500 mb-6">
                  접수 번호: <strong className="text-indigo-600 font-mono text-sm">{refNumber}</strong>
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl text-left text-xs text-gray-700 space-y-2 max-w-md mx-auto mb-8 border border-gray-100">
                  <p><strong>기관/성함:</strong> {formData.organizationName} ({formData.contactName}님)</p>
                  <p><strong>문의 구분:</strong> {formData.inquiryType}</p>
                  <p><strong>연락처:</strong> {formData.phone} / {formData.email}</p>
                  <p className="text-indigo-600 font-semibold pt-2">
                    ✓ 담당 매니저가 내용을 검토한 후 입력하신 연락처로 맞춤 제안서를 전송해 드립니다.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      organizationName: '',
                      contactName: '',
                      phone: '',
                      email: '',
                      inquiryType: '학교 출강',
                      targetAudience: '초등학생',
                      expectedParticipants: '20명~30명',
                      preferredDate: '',
                      message: '',
                    });
                  }}
                  className="bg-gray-900 text-white font-bold text-xs px-6 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition"
                >
                  새 문의 작성하기
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
