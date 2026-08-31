import React, { useState } from 'react';

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState('150g');

  return (
    <div className="relative w-full h-screen bg-[#C8683D] overflow-hidden flex flex-col justify-between text-white font-sans select-none">
      
      {/* 1. الشريط العلوي (Navbar) */}
      <header className="flex items-center justify-between px-10 py-6 z-40 relative">
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

      {/* 2. منطقة العرض الرئيسية (Hero Center) */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* النص الضخم خلف المشروبات */}
        <h1 
          className="absolute text-[30vw] font-black text-[#FAF7F2] tracking-tighter uppercase leading-none z-0 pointer-events-none drop-shadow-sm select-none"
          style={{ fontFamily: "'Impact', 'Oswald', 'Arial Black', sans-serif", letterSpacing: "-0.05em" }}
        >
          COFFEE
        </h1>

        {/* توزيع حبوب القهوة المترامية حول الكؤوس */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* حبة يسار O */}
          <img src="/beans.png" alt="" className="absolute top-[28%] left-[25%] w-16 -rotate-45 drop-shadow-xl" />
          {/* حبة أعلى المنتصف */}
          <img src="/beans.png" alt="" className="absolute top-[12%] left-[43%] w-20 rotate-12 drop-shadow-2xl" />
          {/* حبة فوق الكأس الأيمن */}
          <img src="/beans.png" alt="" className="absolute top-[30%] left-[49%] w-24 -rotate-12 drop-shadow-2xl" />
          {/* حبة يمين F */}
          <img src="/beans.png" alt="" className="absolute top-[14%] right-[36%] w-18 rotate-45 drop-shadow-xl" />
          {/* حبة بجانب الكأس البني */}
          <img src="/beans.png" alt="" className="absolute top-[40%] right-[31%] w-20 -rotate-30 drop-shadow-2xl" />
        </div>

        {/* الكأسان متداخلان في المنتصف */}
        <div className="relative z-20 flex items-end justify-center -space-x-8 translate-y-2">
          
          {/* الكأس الأيسر (الوردي) */}
          <img 
            src="/cup1.png" 
            alt="Strawberry Frappe" 
            className="h-[62vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
          />

          {/* الكأس الأيمن (البني) */}
          <img 
            src="/cup2.png" 
            alt="Chocolate Frappe" 
            className="h-[60vh] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
          />

        </div>
      </div>

      {/* 3. البطاقة البيضاء السفلى (Bottom Card) */}
      <div className="relative z-40 bg-[#FAF7F2] text-stone-800 rounded-t-[50px] px-12 py-6 flex items-center justify-between shadow-2xl -mt-6">
        <p className="text-xs max-w-sm text-stone-600 font-medium leading-relaxed">
          Enjoy the rich taste of perfectly roasted coffee beans mixed with smooth, creamy flavors crafted just for you.
        </p>

        {/* أزرار الحجم والخيار الأوسط */}
        <div className="flex items-center gap-2 bg-stone-200/80 p-1.5 rounded-full border border-stone-300/60">
          <button 
            onClick={() => setSelectedSize('150g')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSize === '150g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
            }`}
          >
            150g
          </button>
          
          <span className="font-black text-[10px] tracking-widest text-stone-500 px-3 uppercase">
            Fresh Brew
          </span>

          <button 
            onClick={() => setSelectedSize('300g')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSize === '300g' ? 'bg-[#0f382c] text-white shadow-md' : 'text-stone-700 hover:text-black'
            }`}
          >
            300g
          </button>
        </div>

        {/* معلومات سريعة */}
        <div className="flex items-center gap-6 text-xs font-bold text-stone-700">
          <div className="flex items-center gap-1.5">🚀 <span>Fast Shipping</span></div>
          <div className="flex items-center gap-1.5">🌿 <span>100% Organic</span></div>
        </div>
      </div>

    </div>
  );
}