import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full min-h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans">
      
      {/* 1. الهيدر العلوي */}
      <header className="flex items-center justify-between px-8 py-6 z-30 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl backdrop-blur-sm border border-white/20">
            ☕
          </div>
          <span className="font-extrabold tracking-widest text-2xl">NESCAFÉ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-amber-200 transition">HOME</a>
          <a href="#" className="hover:text-amber-200 transition">PRODUCTS</a>
          <a href="#" className="hover:text-amber-200 transition">MY ORDER</a>
          <a href="#" className="hover:text-amber-200 transition">NEWS</a>
          <a href="#" className="hover:text-amber-200 transition">CONTACT</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition border border-white/10">
            🔍
          </button>
          <button className="bg-white text-[#C8683D] px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-amber-50 transition transform hover:scale-105">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. منطقة العرض الرئيسية والطبقات المتداخلة */}
      <div className="relative flex-1 flex items-center justify-center my-0 py-6">
        
        {/* النص الخلفي العملاق */}
        <h1 className="absolute text-[28vw] font-black text-white/20 tracking-tighter select-none pointer-events-none z-0 uppercase leading-none">
          COFFEE
        </h1>

        {/* حبوب القهوة المتطايرة - موقّعة بالقرب من الكؤوس مباشرة */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-10 left-[42%] w-14 md:w-20 z-30 -rotate-45 drop-shadow-2xl animate-bounce" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-16 right-[38%] w-12 md:w-16 z-10 rotate-45 drop-shadow-xl" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute bottom-12 right-[45%] w-10 md:w-14 z-30 rotate-12 drop-shadow-xl" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-1/3 left-[30%] w-12 md:w-16 z-0 -rotate-12 opacity-60 blur-[1px]" 
        />

        {/* كؤوس القهوة الرئيسية - تكبير ضخم وتأثير الطبقات */}
        <div className="relative z-20 flex items-end justify-center -space-x-12 md:-space-x-20">
          
          {/* الكأس الأول (cup1.png) - تمديد الحجم وضبط التنسيق */}
          <div className="relative z-20">
            <img 
              src="/cup1.png" 
              alt="Cold Coffee Cup" 
              className="w-[320px] md:w-[480px] max-w-none drop-shadow-[0_45px_45px_rgba(0,0,0,0.6)] transform -rotate-3 hover:scale-105 transition duration-500"
            />
          </div>

          {/* الكأس الثاني (cup2.png) - ملاصق وموازي للكأس الأول */}
          <div className="relative z-10">
            <img 
              src="/cup2.png" 
              alt="Special Coffee Cup" 
              className="w-[280px] md:w-[420px] max-w-none drop-shadow-[0_45px_45px_rgba(0,0,0,0.6)] transform rotate-6 translate-y-8 hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
      {/* 3. الشريط السفلي التفاعلي */}
      <div className="relative z-30 bg-[#F5F2EB] text-stone-800 rounded-t-[35px] md:rounded-t-[50px] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        
        <p className="text-xs md:text-sm max-w-sm text-stone-600 font-medium leading-relaxed text-center md:text-left">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        {/* اختيار الأسطوانة/الحجم */}
        <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full shadow-md border border-stone-200">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#1b4332] text-white shadow' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            150g
          </button>
          
          <span className="font-extrabold text-xs tracking-wider text-stone-700 px-1">
            FRESH BREW
          </span>

          <button 
            onClick={() => setSelectedSize('300g')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '300g' ? 'bg-[#1b4332] text-white shadow' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            300g
          </button>
        </div>

        {/* الميزات */}
        <div className="flex items-center gap-6 text-xs font-bold text-stone-700">
          <div className="flex items-center gap-2">
            <span className="text-base">🚀</span> Fast Shipping
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">🌿</span> 100% Organic
          </div>
        </div>

      </div>

    </div>
  );
}