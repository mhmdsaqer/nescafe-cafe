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

      {/* 2. Hero Core Design */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* النص العملاق بالأبيض الناصع والخط المستطيل الضخم */}
        <h1 
          className="absolute text-[32vw] font-black text-white tracking-tighter uppercase leading-none z-0 pointer-events-none opacity-90"
          style={{ fontFamily: "'Impact', 'Oswald', sans-serif", letterSpacing: "-0.05em" }}
        >
          COFFEE
        </h1>

        {/* حبوب القهوة متمركزة حول المنتصف والكؤوس */}
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[28%] left-[38%] w-20 md:w-28 z-30 -rotate-45 drop-shadow-2xl pointer-events-none" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[20%] right-[36%] w-16 md:w-24 z-10 rotate-45 blur-[0.5px] drop-shadow-xl pointer-events-none" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute bottom-[30%] left-[44%] w-14 md:w-20 z-30 rotate-12 drop-shadow-2xl pointer-events-none" 
        />
        <img 
          src="/beans.png" 
          alt="bean" 
          className="absolute top-[18%] left-[28%] w-16 md:w-22 z-0 -rotate-12 opacity-80 blur-[1px] pointer-events-none" 
        />

        {/* الكؤوس ضخمة جداً وتغطي معظم ارتفاع المنتصف */}
        <div className="relative z-20 flex items-end justify-center -space-x-8 md:-space-x-12 translate-y-6">
          
          {/* الكأس الأول */}
          <div className="relative z-20">
            <img 
              src="/cup1.png" 
              alt="Cold Coffee" 
              className="h-[55vh] md:h-[68vh] w-auto max-w-none object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* الكأس الثاني */}
          <div className="relative z-10">
            <img 
              src="/cup2.png" 
              alt="Special Coffee" 
              className="h-[52vh] md:h-[65vh] w-auto max-w-none object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            />
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[40px] md:rounded-t-[60px] px-10 py-5 flex items-center justify-between shadow-2xl border-t border-white/50 -mt-8">
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