import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// صور النسكافيه الخاصة بك (تأكد من وضعها في مجلد public)
const coffeeImages = [
  { id: 1, src: "src/assets/coffee1.png", title: "Nescafe 1" },
  { id: 2, src: "src/assets/coffee2.png", title: "Nescafe 2" },
  { id: 3, src: "src/assets/coffee3.png", title: "Nescafe 3" },
];

export default function HeroSection() {
  const [items, setItems] = useState(coffeeImages);

  // التبديل التلقائي كل 3 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prevItems) => {
        const newArray = [...prevItems];
        const firstItem = newArray.shift(); // سحب العنصر الأول
        newArray.push(firstItem); // إضافته لنهاية القائمة
        return newArray;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-right-top bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: "url('src/assets/bg.png')" }}
    >
      {/* 1. Header Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-[#3E2723]">BURGER BAE</span>
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
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center flex-grow">
        
        {/* Left Side: Texts & CTA */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3E2723] leading-tight">
            Juicy. Cheesy. <br />
            Made for you, Bae.
          </h1>
          <p className="text-gray-600 max-w-md text-base leading-relaxed">
            Burger Bae is the ultimate spot for burger lovers who crave flavor, freshness, and fun. We serve juicy, handcrafted patties stacked with love, melty cheese, and bold toppings—all tucked into soft, golden buns.
          </p>
          <button className="bg-[#D97706] hover:bg-[#B45309] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Order now
          </button>
        </div>

        {/* Right Side: Animated Coffee Queue */}
        <div className="relative h-[450px] w-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const isFront = index === 0;

              // نكتفي بظهور أول عنصرين فقط في الـ Queue
              if (index > 1) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{
                    opacity: isFront ? 1 : 0.6,
                    scale: isFront ? 1 : 0.8,
                    x: isFront ? 0 : 180, // إزاحة الصورة الثانية إلى اليمين
                    filter: isFront ? "blur(0px)" : "blur(4px)", // تأثير الضبابية للصورة الخلفية
                    zIndex: isFront ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.7, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-72 md:w-96 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>

      {/* 3. Audio/Video Controller (Bottom bar) */}
      <footer className="relative z-20 px-8 py-4 max-w-7xl mx-auto w-full flex items-center gap-4">
        <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-50">
          ▶
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:bg-gray-50">
          🔇
        </button>
        <div className="flex-1 bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-pink-500 h-full w-1/4"></div>
        </div>
      </footer>
    </div>
  );
}