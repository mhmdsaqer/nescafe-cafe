import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. Header */}
      <header className="flex items-center justify-between px-10 py-5 z-40 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-black text-xl border border-white/20">
            ☕
          </div>
          <span className="font-black tracking-widest text-2xl">NESCAFÉ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest">
          <a href="#" className="hover:opacity-75 transition">HOME</a>
          <a href="#" className="hover:opacity-75 transition">PRODUCTS</a>
          <a href="#" className="hover:opacity-75 transition">MY ORDER</a>
          <a href="#" className="hover:opacity-75 transition">NEWS</a>
          <a href="#" className="hover:opacity-75 transition">CONTACT</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition">
            🔍
          </button>
          <button className="bg-white text-[#C8683D] px-7 py-2.5 rounded-full font-black text-xs tracking-wider shadow-lg hover:bg-opacity-95 transition">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Core Content */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* كلمة COFFEE متصلة وموحدة الشفافية بدون أي مربعات */}
        <h1 
          className="absolute text-[30vw] font-black text-white/90 tracking-tighter uppercase leading-none z-0 pointer-events-none"
          style={{ fontFamily: "'Impact', sans-serif", letterSpacing: "-0.04em" }}
        >
          COFFEE
        </h1>

        {/* --- حبوب القهوة متطايرة في الوسط بين الكأسين وللأعلى بزوايا مختلفة --- */}
        
        {/* حبة كبيرة متطايرة فوق بين الكأسين */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[18%] left-[48%] w-16 md:w-22 z-30 -rotate-[35deg] drop-shadow-2xl pointer-events-none" 
        />
        
        {/* حبة مائلة لليمين أعلى الكوب الأيمن */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[28%] right-[40%] w-14 md:w-18 z-30 rotate-[55deg] drop-shadow-xl pointer-events-none" 
        />

        {/* حبة يسار المنتصف بين الكوبين */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[38%] left-[41%] w-12 md:w-16 z-30 rotate-[15deg] drop-shadow-lg pointer-events-none" 
        />

        {/* حبة صغيرة بالخلفية للعمق */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[12%] left-[43%] w-10 z-10 -rotate-[70deg] blur-[1px] opacity-70 pointer-events-none" 
        />

        {/* --- الكأسين: ملاصقان تماماً ونفس الارتفاع تقريباً --- */}
        <div className="relative z-20 flex items-end justify-center -space-x-8 md:-space-x-12 translate-y-2">
          
          {/* الكأس الأول (الوردي / الأيسر) */}
          <div className="relative z-20">
            <img 
              src="/cup1.png" 
              alt="Cold Coffee" 
              className="h-[52vh] md:h-[62vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform -rotate-2"
            />
          </div>

          {/* الكأس الثاني (الأيمن) */}
          <div className="relative z-10">
            <img 
              src="/cup2.png" 
              alt="Special Coffee" 
              className="h-[50vh] md:h-[60vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform rotate-2 mix-blend-multiply"
            />
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[40px] px-10 py-5 flex items-center justify-between shadow-2xl border-t border-white/50">
        <p className="text-xs max-w-sm text-stone-600 font-medium leading-relaxed">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        <div className="flex items-center gap-2 bg-stone-200/60 p-1 rounded-full border border-stone-300/50">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
            }`}
          >
            150g
          </button>
          
          <span className="font-black text-[10px] tracking-widest text-stone-500 px-2 uppercase">
            Fresh Brew
          </span>

          <button 
            onClick={() => setSelectedSize('300g')}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '300g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
            }`}
          >
            300g
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold text-stone-700 tracking-wide">
          <div className="flex items-center gap-2">🚀 Fast Shipping</div>
          <div className="flex items-center gap-2">🌿 100% Organic</div>
        </div>
      </div>

    </div>
  );
}