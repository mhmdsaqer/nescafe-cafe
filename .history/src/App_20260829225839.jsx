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
      <div className="relative flex-1 flex items-center justify-center my-4">
        
        {/* النص الخلفي العملاق */}
        <h1 className="absolute text-[22vw] font-black text-white/15 tracking-tighter select-none pointer-events-none z-0 uppercase leading-none">
          COFFEE
        </h1>

        {/* حبوب القهوة المتطايرة في الخلفية (beans.png) */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-4 left-[18%] w-12 md:w-16 z-10 -rotate-45 blur-[0.5px] opacity-90 animate-pulse" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-12 right-[20%] w-10 md:w-14 z-10 rotate-45 blur-[1px] opacity-80" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute bottom-16 left-[28%] w-8 md:w-12 z-10 rotate-12 opacity-70" 
        />

        {/* كؤوس القهوة الرئيسية */}
        <div className="relative z-20 flex items-end justify-center gap-2 md:gap-8 mt-8">
          
          {/* الكأس الأول (cup1.png) */}
          <div className="relative group">
            <img 
              src="/cup1.png" 
              alt="Cold Coffee Cup" 
              className="w-48 md:w-72 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform -rotate-3 transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* الكأس الثاني (cup2.png) */}
          <div className="relative group">
            <img 
              src="/cup2.png" 
              alt="Special Coffee Cup" 
              className="w-44 md:w-64 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform rotate-6 translate-y-4 transition duration-500 group-hover:scale-105"
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