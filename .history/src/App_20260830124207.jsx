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
      {/* Header Navigation */}
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

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center flex-grow pb-12">
        
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
        <div className="relative h-[550px] w-full flex items-center justify-center">
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
                    x: isFront ? -60 : 450, // مسافة أكبر بين الصور
                    y: 0, // المحافظة على نفس المستوى الأفقي العمودي
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
    </div>
  );
}