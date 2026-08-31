import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const coffeeImages = [
  { id: 1, src: "src/assets/coffee1.png", title: "Nescafe 1" },
  { id: 2, src: "src/assets/coffee2.png", title: "Nescafe 2" },
  { id: 3, src: "src/assets/coffee3.png", title: "Nescafe 3" },
];

export default function HeroSection() {
  const [items, setItems] = useState(coffeeImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prevItems) => {
        const newArray = [...prevItems];
        const firstItem = newArray.shift();
        newArray.push(firstItem);
        return newArray;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-right-top bg-no-repeat flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: "url('src/assets/bg.png')" }}
    >
      {/* 1. Header Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-[#3E2723]">NESCAFE BAE</span>
        </div>

        <nav className="bg-gray-100/70 backdrop-blur-md px-8 py-3 rounded-full flex gap-8 text-sm font-medium text-gray-700 shadow-sm">
          <a href="#" className="hover:text-black">HOME</a>
          <a href="#" className="hover:text-black">MENU</a>
          <a href="#" className="hover:text-black">PROMOS</a>
          <a href="#" className="hover:text-black">CONTACT</a>
        </nav>

        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* 2. Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center flex-grow pb-6">
        
        {/* Left Side: Texts & CTA */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3E2723] leading-tight">
            Rich. Creamy. <br />
            Made for you, Bae.
          </h1>
          <p className="text-gray-600 max-w-md text-base leading-relaxed">
            Coffee Bae is the ultimate spot for coffee lovers who crave deep flavor, warmth, and energy. Enjoy handcrafted brews topped with rich foam and bold taste.
          </p>
          <button className="bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Order now
          </button>
        </div>

        {/* Right Side: Animated Coffee Queue */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const isFront = index === 0;

              if (index > 1) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85, x: 250, y: 0 }}
                  animate={{
                    opacity: isFront ? 1 : 0.75,
                    scale: isFront ? 1 : 0.85,
                    x: isFront ? -60 : 450,
                    y: 0,
                    filter: isFront ? "blur(0px)" : "blur(2.5px)",
                    zIndex: isFront ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.7, x: -200, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-96 md:w-[480px] lg:w-[520px] object-contain drop-shadow-2xl"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* 3. Bottom Features Section */}
      <footer className="relative z-20 pb-8 pt-4 w-full max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8 text-[#3E2723]">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M19 7h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c.55 0 1-.45 1-1v-5l-3-4zM8 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM16 11V8.5h2.25L20 11h-4z"/>
            </svg>
            <span className="font-bold text-xs md:text-sm tracking-wider uppercase leading-tight">
              HOT & FAST <br /> DELIVERY
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M2 21h18v-2H2v2zm16-4h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4C2.9 3 2 3.9 2 5v10c0 1.1.9 2 2 2h14zm-2-12v10H4V5h12zm4 2v6h-2V7h2z"/>
            </svg>
            <span className="font-bold text-xs md:text-sm tracking-wider uppercase leading-tight">
              PREMIUM <br /> BEANS
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span className="font-bold text-xs md:text-sm tracking-wider uppercase leading-tight">
              CUSTOMER <br /> SERVICE
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}