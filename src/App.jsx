import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// صور النسكافيه لقسم Hero
const coffeeHeroImages = [
  { id: 1, src: "src/assets/coffee1.png", title: "Nescafe 1" },
  { id: 2, src: "src/assets/coffee2.png", title: "Nescafe 2" },
  { id: 3, src: "src/assets/coffee3.png", title: "Nescafe 3" },
  { id: 4, src: "src/assets/coffee4.png", title: "Nescafe 4" },
  { id: 5, src: "src/assets/coffee5.png", title: "Nescafe 5" },
  { id: 6, src: "src/assets/coffee6.png", title: "Nescafe 6" },
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

// قائمة العروض لقسم الـ PROMOS
const promosList = [
  {
    id: 1,
    title: "Birthday Special Treat",
    desc: "Celebrate your special day with us! Enjoy 30% off on your favorite hot coffee blend.",
    discount: "30% OFF",
    code: "BDAY30",
    image: "src/assets/promo1.jpeg",
  },
  {
    id: 2,
    title: "Weekend Relaxation",
    desc: "Make your weekend cozy! Get 25% discount on all hot coffees every Friday and Saturday.",
    discount: "25% OFF",
    code: "WEEKEND25",
    image: "src/assets/promo2.jpeg",
  },
  {
    id: 3,
    title: "Happy Hour Boost",
    desc: "Need an afternoon energy hit? Buy 1 hot latte and get the 2nd one FREE between 4 PM - 6 PM.",
    discount: "BUY 1 GET 1 FREE",
    code: "HAPPYHOUR",
    image: "src/assets/promo3.jpeg",
  },
];

export default function App() {
  const [items, setItems] = useState(coffeeHeroImages);
  const [quantities, setQuantities] = useState({});
  const [copiedCode, setCopiedCode] = useState(null);

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

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
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
            <a href="#promos" className="hover:text-black">PROMOS</a>
            <a href="#contact" className="hover:text-black">CONTACT</a>
          </nav>

          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center flex-grow pb-6">
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-gray-700">
                <span className="text-amber-400">★</span>
                <span>{item.rating}</span>
              </div>

              <div className="w-full h-44 flex items-center justify-center my-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>

              <div className="space-y-2 mt-2">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                  {item.desc}
                </p>
              </div>

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

      {/* ================= PROMOS SECTION ================= */}
      <section id="promos" className="w-full bg-[#f8f4f0] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-4xl font-extrabold text-[#3E2723] uppercase tracking-wide">
            PROMOS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Delicious variety of hot coffees crafted with unique tastes, bold ingredients, and mouthwatering twists to satisfy every craving.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#fdfaf7] rounded-[3rem] p-8 md:p-14 border border-[#eee4db] shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {promosList.map((promo, index) => {
              const isCenter = index === 1;

              return (
                <div
                  key={promo.id}
                  className={`transition-all duration-500 ease-in-out transform flex-1 flex flex-col items-center ${
                    isCenter
                      ? "w-full md:w-[420px] scale-100 md:scale-110 z-10 drop-shadow-2xl"
                      : "w-full md:w-[300px] scale-100 md:scale-95 opacity-90 hover:opacity-100 z-0 drop-shadow-md"
                  }`}
                >
                  <div className="w-full rounded-3xl overflow-hidden border-4 border-white bg-white shadow-lg">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                    <span className="font-mono font-bold text-xs text-[#7e4222]">
                      {promo.code}
                    </span>
                    <button
                      onClick={() => copyToClipboard(promo.code)}
                      className="bg-[#7e4222] hover:bg-[#63331a] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors"
                    >
                      {copiedCode === promo.code ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION (GAZA SEA LOCATION) ================= */}
      <section id="contact" className="w-full bg-[#f8f4f0] py-16 px-6 md:px-12 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-[#3E2723] uppercase tracking-wide">
              WHERE YOU CAN FIND US?
            </h2>
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700">
              <svg className="w-4 h-4 text-[#7e4222]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Al-Rasheed Street, Beach Corniche, Gaza City, Palestine</span>
            </div>
          </div>

          {/* Grid Layout (Map + Info) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Map Container (Gaza Beach Map Coordinates) */}
            <div className="w-full h-[320px] rounded-3xl overflow-hidden shadow-md border border-gray-200 relative bg-gray-200">
              <iframe
                title="Gaza Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.873273185591!2d34.4361523!3d31.5276685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzM5LjYiTiAzNMKwMjYnMTAuMSJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Info Text & Contact Details */}
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <p>
                Craving your favorite coffee with a breathtaking sea view? We are located right on{" "}
                <span className="font-semibold text-gray-900">
                  Al-Rasheed Street along the Gaza Beach Corniche
                </span>
                — the perfect spot to enjoy the fresh Mediterranean breeze! Whether you're relaxing by the sea, taking a walk, or hanging out with friends, Nescafe Bae is your ideal destination for warm coffee and great vibes.
              </p>

              <div className="space-y-3 pt-2">
                <p className="font-bold text-gray-900">You can also contact us here:</p>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7e4222]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="font-medium text-xs md:text-sm">+970 59-123-4567</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7e4222]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-medium text-xs md:text-sm">@nescafebae.gaza</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7e4222]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium text-xs md:text-sm">Nescafe Bae Gaza</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#7e4222]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-medium text-xs md:text-sm">nescafebae.gaza@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SITE FOOTER ================= */}
      <footer className="w-full bg-[#e8ded5] py-12 px-6 md:px-12 border-t border-gray-300/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          {/* General Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#3E2723]">GENERAL</h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-black transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#3E2723]">CONTACT US</h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+970 59-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>nescafebae.gaza@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#3E2723]">SOCIAL MEDIA</h4>
            <div className="flex items-center gap-3 text-gray-700">
              <a href="#" className="hover:text-black transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-black transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-black transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.65a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.13z"/></svg>
              </a>
            </div>
          </div>

          {/* Logo & Copyright */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <span className="font-extrabold text-xl text-[#3E2723] tracking-wide">
              NESCAFE BAE
            </span>
            <span className="text-[11px] text-gray-500">
              © 2026 Nescafe Bae Gaza. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}