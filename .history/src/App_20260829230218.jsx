import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. Header */}
      <header className="flex items-center justify-between px-10 py-6 z-40 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-xl border border-white/20">
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

      {/* 2. Hero Core Design */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* النص العملاق بالخط العريض جداً */}
        <h1 
          className="absolute text-[30vw] font-black text-white/15 tracking-tight uppercase leading-none z-0 pointer-events-none"
          style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}
        >
          COFFEE
        </h1>

        {/* حبوب القهوة الثابتة بتقنية العمق البصري (Depth of Field) */}
        
        {/* حبة قريبة ومغبشة بالكامل في المقدمة */}
        <img 
          src="/beans.png" 
          alt="bean foreground" 
          className="absolute top-[15%] left-[18%] w-24 z-30 -rotate-45 blur-[2px] opacity-80 pointer-events-none" 
        />
        
        {/* حبة متوسطة وواضحة فوق حرف E */}
        <img 
          src="/beans.png" 
          alt="bean center" 
          className="absolute top-[22%] right-[32%] w-14 z-10 rotate-12 drop-shadow-2xl pointer-events-none" 
        />
        
        {/* حبة صغيرة بالخلفية مغبشة */}
        <img 
          src="/beans.png" 
          alt="bean background" 
          className="absolute bottom-[20%] left-[28%] w-10 z-0 rotate-90 blur-[1px] opacity-50 pointer-events-none" 
        />
        
        {/* حبة يمين السفلية */}
        <img 
          src="/beans.png" 
          alt="bean right" 
          className="absolute bottom-[28%] right-[22%] w-16 z-30 -rotate-12 blur-[0.5px] drop-shadow-xl pointer-events-none" 
        />

        {/* الكؤوس متناسقة الأحجام والارتفاع */}
        <div className="relative z-20 flex items-center justify-center -space-x-16 md:-space-x-24">
          
          {/* الكأس الأول (اليسار) */}
          <div className="relative z-20">
            <img 
              src="/cup1.png" 
              alt="Cold Coffee" 
              className="w-[380px] md:w-[460px] max-w-none drop-shadow-[0_45px_35px_rgba(0,0,0,0.55)] transform -rotate-3 transition duration-300 hover:scale-102"
            />
          </div>

          {/* الكأس الثاني (اليمين) - تم التكبير ورفعه ليكون متناسقاً */}
          <div className="relative z-10">
            <img 
              src="/cup2.png" 
              alt="Special Coffee" 
              className="w-[350px] md:w-[430px] max-w-none drop-shadow-[0_45px_35px_rgba(0,0,0,0.55)] transform rotate-3 -translate-y-4 transition duration-300 hover:scale-102"
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