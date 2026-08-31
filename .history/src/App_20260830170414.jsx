import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// صور النسكافيه لقسم Hero
const coffeeHeroImages = [
  { id: 1, src: "src/assets/coffee1.png", title: "Nescafe 1" },
  { id: 2, src: "src/assets/coffee2.png", title: "Nescafe 2" },
  { id: 3, src: "src/assets/coffee3.png", title: "Nescafe 3" },
];

// قائمة المشروبات لقسم الـ Menu
const menuItems = [
  {
    id: 1,
    name: "Classic Cappuccino",
    desc: "Rich espresso topped with a thick layer of silky smooth foamed milk.",
    price: "$4.50",
    rating: "5.0",
    image: "src/assets/coffee1.png",
  },
  {
    id: 2,
    name: "Creamy Caramel Latte",
    desc: "Smooth espresso blended with steamed milk and sweet caramel drizzle.",
    price: "$5.20",
    rating: "5.0",
    image: "src/assets/coffee2.png",
  },
  {
    id: 3,
    name: "Vanilla Mocha Delight",
    desc: "A rich combination of cocoa, vanilla syrup, espresso, and creamy milk.",
    price: "$5.80",
    rating: "4.8",
    image: "src/assets/coffee3.png",
  },
  {
    id: 4,
    name: "Double Espresso Treat",
    desc: "Double shot of pure, bold coffee for an instant energy boost.",
    price: "$3.90",
    rating: "5.0",
    image: "src/assets/coffee4.png",
  },
  {
    id: 5,
    name: "Spanish Nescafé",
    desc: "Rich espresso combined with condensed milk for a perfectly sweet taste.",
    price: "$4.90",
    rating: "5.0",
    image: "src/assets/coffee5.png",
  },
  {
    id: 6,
    name: "Hazelnut Hot Brew",
    desc: "Aromatic hazelnut flavor infused with warm, freshly brewed coffee.",
    price: "$4.50",
    rating: "5.0",
    image: "src/assets/coffee6.png",
  },
];

export default function App() {
  const [items, setItems] = useState(coffeeHeroImages);
  const [quantities, setQuantities] = useState({});

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

  const handleQuantity = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  return (
    <div className="w-full font-sans">
      {/* ================= HERO SECTION ================= */}
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
            <a href="#home" className="hover:text-black">HOME</a>
            <a href="#menu" className="hover:text-black">MENU</a>
            <a href="#" className="hover:text-black">PROMOS</a>
            <a href="#" className="hover:text-black">CONTACT</a>
          </nav>

          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center flex-grow pb-6">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#3E2723] leading-tight">
              Rich. Creamy. <br />
              Made for you, Bae.
            </h1>
            <p className="text-gray-600 max-w-md text-base leading-relaxed">
              Coffee Bae is the ultimate spot for coffee lovers who crave deep flavor, warmth, and energy. Enjoy handcrafted brews topped with rich foam and bold taste.
            </p>
            <button className="bg-[#7e4222] hover:bg-[#63331a] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
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

        {/* Bottom Features Section */}
        <footer className="relative z-20 pb-8 pt-4 w-full max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-around gap-8 text-[#3E2723]">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 7h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c.55 0 1-.45 1-1v-5l-3-4zM8 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM16 11V8.5h2.25L20 11h-4z"/>
              </svg>
              <span className="font-bold text-xs md:text-sm tracking-wider uppercase leading-tight">
                HOT & FAST <br /> DELIVERY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M2 21h18v-2H2v2zm16-4h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4C2.9 3 2 3.9 2 5v10c0 1.1.9 2 2 2h14zm-2-12v10H4V5h12zm4 2v6h-2V7h2z"/>
              </svg>
              <span className="font-bold text-xs md:text-sm tracking-wider uppercase leading-tight">
                PREMIUM <br /> BEANS
              </span>
            </div>

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

      {/* ================= MENU SECTION ================= */}
      <section id="menu" className="w-full bg-[#f8f4f0] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-4xl font-extrabold text-[#3E2723] uppercase tracking-wide">
            HOT DRINKS MENU
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Delicious variety of hot coffee brews crafted with premium beans, creamy milk, and rich flavors to warm your soul and satisfy every craving.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-gray-700">
                <span className="text-amber-400">★</span>
                <span>{item.rating}</span>
              </div>

              {/* Drink Image */}
              <div className="w-full h-44 flex items-center justify-center my-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                  {item.desc}
                </p>
              </div>

              {/* Price & Quantity Controls */}
              <div className="flex items-center justify-between mt-6 pt-2 border-t border-gray-100">
                <span className="text-xl font-bold text-gray-900">{item.price}</span>

                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 gap-2">
                  <button
                    onClick={() => handleQuantity(item.id, -1)}
                    className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded text-sm font-semibold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-gray-800 w-4 text-center">
                    {quantities[item.id] || 1}
                  </span>
                  <button
                    onClick={() => handleQuantity(item.id, 1)}
                    className="w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded text-sm font-semibold"
                  >
                    +
                  </button>

                  <button className="bg-[#7e4222] hover:bg-[#63331a] text-white p-1.5 rounded-md ml-1 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}