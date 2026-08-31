import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. Navbar */}
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
          <button className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition">🔍</button>
          <button className="bg-white text-[#C8683D] px-7 py-2.5 rounded-full font-black text-xs tracking-wider shadow-lg">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Center Visuals */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* النص الضخم خلف المشروبات */}
        <h1 
          className="absolute text-[31vw] font-black text-[#FAF7F2] tracking-tighter uppercase leading-none z-0 pointer-events-none drop-shadow-sm"
          style={{ fontFamily: "'Impact', 'Oswald', sans-serif", letterSpacing: "-0.04em" }}
        >
          COFFEE
        </h1>

        {/* توزيع حبوب القهوة بنفس مواضع البوستر */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* حبة يسار حرف O */}
          <img src="/beans.png" alt="" className="absolute top-[28%] left-[26%] w-16 -rotate-45 drop-shadow-xl" />
          {/* حبة أعلى بين حرفي O و F */}
          <img src="/beans.png" alt="" className="absolute top-[12%] left-[42%] w-20 rotate-12 drop-shadow-2xl" />
          {/* حبة في المنتصف فوق المشروبات */}
          <img src="/beans.png" alt="" className="absolute top-[32%] left-[49%] w-24 -rotate-12 drop-shadow-2xl" />
          {/* حبة أعلى حرف F الأيمن */}
          <img src="/beans.png" alt="" className="absolute top-[10%] right-[38%] w-18 rotate-45 drop-shadow-xl" />
          {/* حبة يمين المشروب البني */}
          <img src="/beans.png" alt="" className="absolute top-[38%] right-[32%] w-20 -rotate-30 drop-shadow-2xl" />
        </div>

        {/* الكأسان المتقاربان في المنتصف */}
        <div className="relative z-20 flex items-end justify-center -space-x-6 translate-y-4">
          
          {/* الكأس الأيسر (الوردي بالكريمة) */}
          <img 
            src="/cup1.png" 
            alt="Pink Frappe" 
            className="h-[62vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)]"
          />

          {/* الكأس الأيمن (البني بالكريمة) */}
          <img 
            src="/cup2.png" 
            alt="Chocolate Frappe" 
            className="h-[60vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)]"
          />

        </div>
      </div>

      {/* 3. Bottom White Card */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[50px] px-10 py-5 flex items-center justify-between shadow-2xl -mt-6">
        <p className="text-xs max-w-sm text-stone-600 font-medium leading-relaxed">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        <div className="flex items-center gap-2 bg-stone-200/70 p-1 rounded-full border border-stone-300/50">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#0f382c] text-white' : 'text-stone-700'
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
              selectedSize === '300g' ? 'bg-[#0f382c] text-white' : 'text-stone-700'
            }`}
          >
            300g
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold text-stone-700 tracking-wide">
          <div>🚀 Fast Shipping</div>
          <div>🌿 100% Organic</div>
        </div>
      </div>

    </div>
  );
}