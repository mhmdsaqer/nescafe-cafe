import React from 'react';

export default function NescafeHero() {
  return (
    <div className="relative w-full min-h-screen bg-[#E07A43] overflow-hidden flex flex-col justify-between font-sans transition-colors duration-300">
      
      {/* 1. Navbar */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full text-white">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white text-[#E07A43] flex items-center justify-center font-bold text-lg shadow-md">
            ☕
          </div>
          <span className="font-extrabold tracking-widest text-xl uppercase">NESCAFÉ</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase opacity-90">
          <a href="#home" className="hover:opacity-100 transition">HOME</a>
          <a href="#products" className="hover:opacity-100 transition">PRODUCTS</a>
          <a href="#my-order" className="hover:opacity-100 transition">MY ORDER</a>
          <a href="#news" className="hover:opacity-100 transition">NEWS</a>
          <a href="#contact" className="hover:opacity-100 transition">CONTACT</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm transition">
            🔍
          </button>
          <button className="bg-white text-[#E07A43] font-bold text-xs uppercase px-5 py-2.5 rounded-full shadow-md hover:bg-opacity-95 transition tracking-wider">
            ORDER NOW
          </button>
        </div>
      </header>

      {/* 2. Hero Body */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-4 pt-4">
        
        {/* Giant Background Typography */}
        <h1 className="absolute top-1/2 -translate-y-[65%] text-[18vw] leading-none font-black text-white/95 tracking-tight select-none uppercase z-0 font-serif">
          COFFEE
        </h1>

        {/* Drinks & Ingredients Overlay Container (Shifted down via translate-y) */}
        <div className="relative z-10 flex items-end justify-center gap-4 md:gap-12 mt-20 translate-y-8 md:translate-y-12">
          
          {/* Floating Bean - Left */}
          <span className="absolute -left-6 top-1/3 text-2xl rotate-45 opacity-80 animate-bounce">☕</span>

          {/* Strawberry Frappe */}
          <div className="relative w-44 md:w-64 transition-transform hover:scale-105 duration-300">
            <img 
              src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" 
              alt="Strawberry Frappe" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
            />
          </div>

          {/* Floating Bean - Center */}
          <span className="absolute left-1/2 -top-8 -translate-x-1/2 text-xl -rotate-12 opacity-90">🫘</span>

          {/* Chocolate Iced Coffee Frappe */}
          <div className="relative w-48 md:w-72 transition-transform hover:scale-105 duration-300">
            <img 
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80" 
              alt="Chocolate Iced Coffee" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
            />
          </div>

          {/* Floating Bean - Right */}
          <span className="absolute -right-4 top-1/2 text-2xl rotate-12 opacity-80">☕</span>
        </div>
      </main>

      {/* 3. Bottom Smooth Curve Arch */}
      <div className="relative w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 md:h-36 block text-white"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,160 L1440,160 L1440,80 Q720,0 0,80 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

    </div>
  );
}