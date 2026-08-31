import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. Navbar */}
      <header className="flex items-center justify-between px-12 py-5 z-40 relative">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-black text-lg border border-white/20">
            ☕
          </div>
          <span className="font-black tracking-widest text-xl">NESCAFÉ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest text-white/90">
          <a href="#" className="hover:text-white transition">HOME</a>
          <a href="#" className="hover:text-white transition">PRODUCTS</a>
          <a href="#" className="hover:text-white transition">MY ORDER</a>
          <a href="#" className="hover:text-white transition">NEWS</a>
          <a href="#" className="hover:text-white transition">CONTACT</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition">🔍</button>
          <button className="bg-white text-[#C8683D] px-6 py-2.5 rounded-full font-black text-xs tracking-wider shadow-md hover:bg-opacity-95 transition">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Center Visuals */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* كلمة COFFEE مضغوطة وطويلة ومطابقة للأصل */}
        <h1 
          className="absolute text-[26vw] font-black text-[#FAF7F2] uppercase leading-none z-0 pointer-events-none tracking-[-0.08em] scale-y-125 select-none"
          style={{ 
            fontFamily: "'Impact', 'Arial Narrow', sans-serif",
            textShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
        >
          COFFEE
        </h1>

        {/* توزيع حبوب القهوة المترابطة بالتصميم الأصلي */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* حبة اليسار بجانب O */}
          <img 
            src="/beans.png" 
            alt="" 
            className="absolute top-[32%] left-[24%] w-16 -rotate-[35deg] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" 
          />
          {/* حبة بين المشروبين في المنتصف */}
          <img 
            src="/beans.png" 
            alt="" 
            className="absolute top-[36%] left-[44%] w-24 -rotate-[20deg] drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]" 
          />
          {/* حبة فوق المشروب البني */}
          <img 
            src="/beans.png" 
            alt="" 
            className="absolute top-[22%] right-[38%] w-16 rotate-[25deg] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" 
          />
          {/* حبة يمين المشروب البني */}
          <img 
            src="/beans.png" 
            alt="" 
            className="absolute top-[44%] right-[32%] w-14 rotate-[45deg] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" 
          />
        </div>

        {/* الكأسان في المنتصف محاذيان ومتساويان */}
        <div className="relative z-20 flex items-end justify-center -space-x-12 translate-y-6">
          
          {/* الكأس الأيسر (الوردي) */}
          <img 
            src="/cup1.png" 
            alt="Strawberry Frappe" 
            className="h-[58vh] w-auto max-w-none object-contain filter drop-shadow-[0_30px_20px_rgba(0,0,0,0.35)]"
          />

          {/* الكأس الأيمن (البني) */}
          <img 
            src="/cup2.png" 
            alt="Chocolate Frappe" 
            className="h-[58vh] w-auto max-w-none object-contain filter drop-shadow-[0_30px_20px_rgba(0,0,0,0.35)]"
          />

        </div>
      </div>

      {/* 3. Bottom Card */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[40px] px-12 py-5 flex items-center justify-between shadow-2xl -mt-4">
        <p className="text-[11px] max-w-xs text-stone-500 font-medium leading-relaxed">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        {/* زر الحجم الاقتصادي */}
        <div className="flex items-center gap-2 bg-stone-200/60 p-1 rounded-full border border-stone-300/40">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#0a2e23] text-white shadow' : 'text-stone-600'
            }`}
          >
            150g
          </button>
          
          <span className="font-bold text-[9px] tracking-widest text-stone-400 px-2 uppercase">
            Fresh Brew
          </span>

          <button 
            onClick={() => setSelectedSize('300g')}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '300g' ? 'bg-[#0a2e23] text-white shadow' : 'text-stone-600'
            }`}
          >
            300g
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold text-stone-700">
          <div className="flex items-center gap-1.5">🚀 <span>Fast Shipping</span></div>
          <div className="flex items-center gap-1.5">🌿 <span>100% Organic</span></div>
        </div>
      </div>

    </div>
  );
}