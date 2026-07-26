import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Image, Eye, Tag, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: 'traditional', label: '전통 공예' },
    { id: 'roombox', label: '룸박스 & 건축' },
    { id: 'food', label: '미니어처 음식' },
    { id: 'kit', label: '체험 키트' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Artwork & Student Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            미니어처 작품 & 수강생 갤러리
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            100% 핸드메이드로 섬세하게 피어난 한국미니어처아트협회의 대표 작품들
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => setActiveItem(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-gray-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                      <Eye className="w-4 h-4 text-indigo-600" />
                      <span>고화질 크게 보기</span>
                    </span>
                  </div>

                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-indigo-600 mb-3">
                    제작: {item.author}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-gray-400" />
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-gray-900">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {activeItem.categoryLabel}
              </span>
              <span className="text-xs text-gray-400 font-medium">작가: {activeItem.author}</span>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-2">{activeItem.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{activeItem.description}</p>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="bg-gray-900 text-white font-bold text-xs px-6 py-2.5 rounded-full cursor-pointer"
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
