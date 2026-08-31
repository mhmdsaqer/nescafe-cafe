import React from 'react';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans">
      
      {/* 1. الشريط العلوي (Header) */}
      <header className="flex items-center justify-between px-8 py-6 z-20">
        <div className="flex items-center gap-2">
          {/* الشعار */}
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">N</div>
          <span className="font-bold tracking-wider text-xl">NESCAFE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:opacity-80 transition">HOME</a>
          <a href="#" className="hover:opacity-80 transition">PRODUCTS</a>
          <a href="#" className="hover:opacity-80 transition">MY ORDER</a>
          <a href="#" className="hover:opacity-80 transition">NEWS</a>
          <a href="#" className="hover:opacity-80 transition">CONTACT</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition">🔍</button>
          <button className="bg-white text-[#C8683D] px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-opacity-90 transition">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. القسم الرئيسي والطبقات (Hero Content & 3D Layers) */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* النص الخلفي العملاق (COFFEE) */}
        <h1 className="absolute text-[18vw] font-black text-white/10 tracking-widest select-none pointer-events-none z-0">
          COFFEE
        </h1>

        {/* حبوب القهوة المتطايرة (توزيع عشوائي بالـ absolute) */}
        <div className="absolute top-10 left-1/4 w-12 h-12 bg-black/20 rounded-full blur-[1px] transform -rotate-12 z-10"></div>
        <div className="absolute top-16 right-1/4 w-10 h-10 bg-black/20 rounded-full blur-[1px] transform rotate-45 z-10"></div>

        {/* الكؤوس والمشروبات (تكون فوق النص الخلفي z-20) */}
        <div className="relative z-20 flex items-end justify-center gap-6 mt-12">
          {/* الكأس الأول (الوردي) */}
          <div className="w-48 md:w-64 transform -translate-y-4">
            <div className="w-full h-72 bg-pink-200 rounded-t-full rounded-b-3xl shadow-2xl flex items-center justify-center text-stone-700 font-bold border-4 border-white/30">
              [صورة الكأس 1]
            </div>
          </div>

          {/* الكأس الثاني (البني) */}
          <div className="w-52 md:w-72 transform translate-y-2">
            <div className="w-full h-80 bg-amber-900 rounded-t-full rounded-b-3xl shadow-2xl flex items-center justify-center text-white font-bold border-4 border-white/30">
              [صورة الكأس 2]
            </div>
          </div>
        </div>
      </div>

      {/* 3. البطاقة السفلية (Bottom Card Curve) */}
      <div className="relative z-20 bg-[#F5F2EB] text-stone-800 rounded-t-[40px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
        <p className="text-xs md:text-sm max-w-xs text-stone-600">
          Discover a rich blend of handcrafted flavors designed to energize your everyday moments with pure perfection.
        </p>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-200">
          <button className="px-3 py-1 bg-emerald-800 text-white rounded-full text-xs font-bold">150g</button>
          <span className="font-bold text-sm">FRESH BREW</span>
          <button className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-bold">300g</button>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold text-stone-600">
          <div>🚀 Fast Shipping</div>
          <div>🌿 100% Organic</div>
        </div>
      </div>

    </div>
  );
}