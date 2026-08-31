import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#DE7A4D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* استيراد الخطوط من Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');
      `}</style>

      {/* 1. Header Navigation */}
      <header className="flex items-center justify-between px-10 py-5 z-50 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FAF7F2] rounded-full flex items-center justify-center text-[#DE7A4D] font-black text-lg shadow">
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
          <button className="bg-white text-[#DE7A4D] px-6 py-2.5 rounded-full font-black text-xs tracking-wider shadow hover:bg-stone-100 transition">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Center Visuals */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* كلمة COFFEE بخط Anton الضخم */}
        <h1 
          className="absolute text-[30vw] leading-none text-[#FAF7F2] z-0 pointer-events-none select-none -translate-y-16 tracking-[-0.01em] scale-y-[1.1]"
          style={{ 
            fontFamily: "'Anton', sans-serif",
            textShadow: '0 10px 30px rgba(0,0,0,0.03)'
          }}
        >
          COFFEE
        </h1>

        {/* توزيع حبوب القهوة الطائرة */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img src="/beans.png" alt="" className="absolute top-[8%] left-[8%] w-26 -rotate-45 drop-shadow-2xl filter blur-[1px]" />
          <img src="/beans.png" alt="" className="absolute top-[12%] right-[6%] w-30 rotate-12 drop-shadow-2xl filter blur-[1px]" />
          <img src="/beans.png" alt="" className="absolute top-[5%] left-[32%] w-20 rotate-45 drop-shadow-xl" />
          <img src="/beans.png" alt="" className="absolute top-[16%] left-[44%] w-24 -rotate-12 drop-shadow-2xl" />
          <img src="/beans.png" alt="" className="absolute top-[6%] right-[34%] w-22 rotate-90 drop-shadow-xl" />
          <img src="/beans.png" alt="" className="absolute top-[30%] left-[18%] w-24 rotate-30 drop-shadow-2xl" />
          <img src="/beans.png" alt="" className="absolute top-[42%] left-[27%] w-18 -rotate-60 drop-shadow-lg" />
          <img src="/beans.png" alt="" className="absolute top-[32%] left-[48%] w-26 rotate-180 drop-shadow-2xl" />
          <img src="/beans.png" alt="" className="absolute top-[26%] right-[24%] w-28 -rotate-45 drop-shadow-2xl" />
          <img src="/beans.png" alt="" className="absolute top-[40%] right-[16%] w-22 rotate-15 drop-shadow-xl" />
          <img src="/beans.png" alt="" className="absolute top-[52%] right-[32%] w-20 -rotate-90 drop-shadow-md" />
        </div>

        {/* الكأسان في المنتصف */}
        <div className="relative z-20 flex items-end justify-center -space-x-24 md:-space-x-32 translate-y-6 md:translate-y-8">
          <img 
            src="/cup1.png" 
            alt="Pink Cream Frappe" 
            className="h-[70vh] md:h-[76vh] w-auto max-w-none object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] z-10"
          />

          <img 
            src="/cup2.png" 
            alt="Chocolate Cream Frappe" 
            className="h-[70vh] md:h-[76vh] w-auto max-w-none object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] z-20"
          />
        </div>
      </div>

      {/* 3. Bottom Curved White Section (تمت زيادة الارتفاع ليشغل ثلث الشاشة تقريباً) */}
      <div className="relative z-40 w-full h-[32vh] flex flex-col justify-end">
        
        {/* المنحنى القوسي العالي جداً */}
        <div className="absolute inset-x-0 top-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg 
            className="relative block w-full h-[180px] md:h-[260px]" 
            viewBox="0 0 1440 260" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,260 L0,160 Q720,-40 1440,160 L1440,260 Z" 
              fill="#FAF7F2"
            ></path>
          </svg>
        </div>

        {/* المحتوى داخل الشريحة البيضاء السفلى */}
        <div className="relative z-10 bg-[#FAF7F2] text-stone-800 px-8 md:px-14 pb-6 pt-2 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          
          <p className="text-[12px] max-w-xs text-stone-600 font-semibold leading-relaxed text-center md:text-left">
            Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
          </p>

          {/* زر الاختيار 150g / 300g */}
          <div className="flex items-center gap-3 bg-[#EFECE6] p-1.5 rounded-full border border-stone-300/60 shadow-inner">
            <button 
              onClick={() => setSelectedSize('150g')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedSize === '150g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
              }`}
            >
              150g
            </button>
            
            <span className="font-black text-[10px] tracking-widest text-stone-500 px-1 uppercase">
              Fresh Brew
            </span>

            <button 
              onClick={() => setSelectedSize('300g')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedSize === '300g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
              }`}
            >
              300g
            </button>
          </div>

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

    </div>
  );
}