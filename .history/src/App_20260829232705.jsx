import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. Header Navigation */}
      <header className="flex items-center justify-between px-10 py-5 z-40 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#C8683D] font-black text-lg shadow">
            ☕
          </div>
          <span className="font-black tracking-widest text-xl">NESCAFÉ</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-white/90">
          <a href="#" className="hover:text-white transition">HOME</a>
          <a href="#" className="hover:text-white transition">PRODUCTS</a>
          <a href="#" className="hover:text-white transition">MY ORDER</a>
          <a href="#" className="hover:text-white transition">NEWS</a>
          <a href="#" className="hover:text-white transition">CONTACT</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition">🔍</button>
          <button className="bg-white text-[#C8683D] px-6 py-2.5 rounded-full font-black text-xs tracking-wider shadow">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Center Visuals */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* كلمة COFFEE بالخلف */}
        <h1 
          className="absolute text-[33vw] leading-none text-[#FAF7F2] z-0 pointer-events-none tracking-[0.02em] select-none"
          style={{ 
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            textShadow: '0 15px 35px rgba(0,0,0,0.06)'
          }}
        >
          COFFEE
        </h1>

        {/* توزيع حبوب القهوة فوق المشروبات والكلمة (z-30) */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* حبة اليسار خلف/بجانب C */}
          <img src="/beans.png" alt="" className="absolute top-[26%] left-[26%] w-16 -rotate-45 drop-shadow-2xl" />
          
          {/* حبة أعلى المنتصف بين حرفي O و F */}
          <img src="/beans.png" alt="" className="absolute top-[10%] left-[42%] w-20 rotate-12 drop-shadow-2xl" />
          
          {/* حبة كبيرة متقاطعة في المنتصف بين المشروبين */}
          <img src="/beans.png" alt="" className="absolute top-[32%] left-[48%] w-24 -rotate-12 drop-shadow-2xl" />
          
          {/* حبة أعلى يمين فوق F */}
          <img src="/beans.png" alt="" className="absolute top-[12%] right-[38%] w-18 rotate-45 drop-shadow-2xl" />
          
          {/* حبة يمين المشروب البني */}
          <img src="/beans.png" alt="" className="absolute top-[42%] right-[32%] w-20 -rotate-30 drop-shadow-2xl" />
        </div>

        {/* الكأسان بكود التكبير والتنزيل لأسفل الخصلة البيضاء (z-10 لتكون خلف الكارت الأبيض z-40) */}
        <div className="relative z-10 flex items-end justify-center -space-x-12 translate-y-24 md:translate-y-28">
          
          {/* المشروب الأيسر (الوردي) - تكبير الارتفاع لـ 78vh */}
          <img 
            src="/cup1.png" 
            alt="Pink Cream Frappe" 
            className="h-[78vh] w-auto max-w-none object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]"
          />

          {/* المشروب الأيمن (البني) - تكبير الارتفاع لـ 78vh */}
          <img 
            src="/cup2.png" 
            alt="Chocolate Cream Frappe" 
            className="h-[78vh] w-auto max-w-none object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]"
          />

        </div>
      </div>

      {/* 3. Bottom White Bar (تغطي أسفل الكؤوس لأن z-index أجدد z-40) */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[45px] px-12 py-5 flex items-center justify-between shadow-2xl">
        <p className="text-[11px] max-w-xs text-stone-600 font-medium leading-relaxed">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        {/* أزرار 150g و 300g */}
        <div className="flex items-center gap-2 bg-stone-200/70 p-1.5 rounded-full border border-stone-300/50">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700'
            }`}
          >
            150g
          </button>
          
          <span className="font-black text-[9px] tracking-widest text-stone-500 px-2 uppercase">
            Fresh Brew
          </span>

          <button 
            onClick={() => setSelectedSize('300g')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSize === '300g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700'
            }`}
          >
            300g
          </button>
        </div>

        <div className="flex items-center gap-6 text-xs font-bold text-stone-700">
          <div>🚀 Fast Shipping</div>
          <div>🌿 100% Organic</div>
        </div>
      </div>

    </div>
  );
}