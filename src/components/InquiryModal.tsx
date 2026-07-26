import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    org: '',
    name: '',
    phone: '',
    email: '',
    type: '학교 출강',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full cursor-pointer transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff5722] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>한국미니어처아트협회 수석 매니저 연계</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">
              출강 및 교육 문의하기
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              기관명과 연락처를 남겨주시면 담당 간사가 맞춤 제안서와 견적서를 작성하여 24시간 이내 연락드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">기관/학교/단체명 *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 서울OO초등학교 / OO구청 / 개인"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">성함 *</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">연락처 *</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">이메일 *</label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">문의 유형</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 bg-white"
                >
                  <option value="학교 출강">학교 방과후 / 창체 출강</option>
                  <option value="지자체 MOU">지자체 / 공공기관 MOU</option>
                  <option value="체험 부스">축제 / 행사 체험부스</option>
                  <option value="기업 힐링">기업 임직원 힐링 클래스</option>
                  <option value="강사 자격증">전문 강사 자격증 취득</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">요청 사항 (선택)</label>
                <textarea
                  rows={3}
                  placeholder="희망 일시, 예상 인원 등 간단히 적어주세요."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg shadow-orange-500/30 transition cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>빠른 상담 신청 제출하기</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-in fade-in">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-extrabold text-gray-900 mb-2">
              상담 신청이 완료되었습니다!
            </h4>
            <p className="text-xs text-gray-500 mb-6">
              {formData.org} ({formData.name}님)의 문의가 KMAA 담당 매니저에게 전달되었습니다. 24시간 이내 연락해 드리겠습니다.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-gray-900 text-white font-bold text-xs px-6 py-2.5 rounded-full cursor-pointer"
            >
              확인
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
