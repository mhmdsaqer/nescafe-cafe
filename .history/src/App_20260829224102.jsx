import React from 'react';
import { Coffee, ShieldCheck, Heart, Sparkles, Star, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-coffee-light text-coffee-dark font-sans" dir="rtl">
      
      {/* 1. Header / Navbar */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-coffee-brand/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-coffee-brand" />
            <span className="font-bold text-xl tracking-tight text-coffee-dark">NC Cafe</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#hero" className="hover:text-coffee-brand transition-colors">الرئيسية</a>
            <a href="#about" className="hover:text-coffee-brand transition-colors">عنّا</a>
            <a href="#menu" className="hover:text-coffee-brand transition-colors">المشروبات</a>
            <a href="#reviews" className="hover:text-coffee-brand transition-colors">آراء الزبائن</a>
          </nav>

          <button className="bg-coffee-brand hover:bg-[#a94911] text-white px-5 py-2.5 rounded-full font-medium shadow-md transition-all cursor-pointer">
            تواصل معنا
          </button>
        </div>
      </header>

      {/* 2. Hero Section - استخدام الصورة كخلفية كاملة بدون تعديل */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat pt-20"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-start items-center">
          
          {/* النص يستقر فوق المنطقة البيضاء المصممة في جهة اليسار */}
          <div className="space-y-6 max-w-lg text-right md:text-left md:mr-auto py-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-brand/10 text-coffee-brand text-xs font-bold">
              <Sparkles className="w-4 h-4" /> تجربة نسكافيه فريدة
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-coffee-dark">
              قهوة الصباح.. <br />
              <span className="text-coffee-brand">طعم لا يُقاوم</span>
            </h1>
            
            <p className="text-coffee-muted text-lg leading-relaxed">
              انعش حواسك كل صباح مع تشكيلتنا المختارة من مشروبات النسكافيه المحضرة بكل شغف وعناية لتناسب يومك.
            </p>
            
            <div className="flex items-center gap-4 pt-2 justify-start">
              <a href="#menu" className="bg-coffee-brand hover:bg-[#a94911] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-coffee-brand/20 transition-all">
                استكشف القائمة
              </a>
              <a href="#about" className="border-2 border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-white px-6 py-3.5 rounded-full font-semibold transition-all">
                تعرف علينا
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Features Section (عالمنا) */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-coffee-dark">عالمنا في NC Cafe</h2>
            <div className="w-16 h-1 bg-coffee-brand mx-auto rounded-full"></div>
            <p className="text-coffee-muted">نعتني بأصغر التفاصيل لنقدم لك تجربة لا تُنسى في كل رشفة</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Coffee className="w-8 h-8 text-coffee-brand" />}
              title="أجود حبيبات النسكافيه"
              desc="نختار أفضل أنواع حبيبات الكافيه المحمصة بدقة لضمان النكهة القوية والمثالية."
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-coffee-brand" />}
              title="جو مريح ودافئ"
              desc="تصميم مريح يمنحك الجو المناسب للتركيز في عملك أو قضاء وقت ممتع مع الأصدقاء."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-coffee-brand" />}
              title="خدمة سريعة وبسمة"
              desc="فريقنا دائماً جاهز لخدمتك بكل حب وبسرعة تضمن لك التحاقك بجدولك اليومي."
            />
          </div>
        </div>
      </section>

      {/* 4. Menu Highlights Section */}
      <section id="menu" className="py-20 bg-coffee-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-coffee-dark">من أبرز مشروباتنا</h2>
            <div className="w-16 h-1 bg-coffee-brand mx-auto rounded-full"></div>
            <p className="text-coffee-muted">تذوق أشهر ابتكاراتنا الباردة والساخنة المصنوعة من النسكافيه</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <MenuItem 
              name="Nescafé Mocha Cold"
              desc="مزيج غني من النسكافيه مع الشوكولاتة الداكنة والحريرية والحليب البارد."
              price="30 ₪"
              img="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600"
            />
            <MenuItem 
              name="Nescafé Cappuccino Classic"
              desc="طبقات مثالية من النسكافيه والحرير الرغوي الغني برشة من الكاكاو."
              price="30 ₪"
              img="https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600"
            />
            <MenuItem 
              name="Nescafé Frappé"
              desc="مشروب النسكافيه المنعش المخفوق مع الثلج والرغوة الكثيفة المتجانسة."
              price="20 ₪"
              img="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600"
            />
          </div>
        </div>
      </section>

      {/* 5. Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-coffee-dark">آراء زبائننا</h2>
            <div className="w-16 h-1 bg-coffee-brand mx-auto rounded-full"></div>
            <p className="text-coffee-muted">كلمات نعتز بها من محبي كافيه النسكافيه</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              name="سارة أحمد"
              text="أفضل مكان لمشروبات النسكافيه في المنطقة! طعم الموكا البارد عندهم غير طبيعي."
              rating={5}
            />
            <ReviewCard 
              name="محمود علي"
              text="الأجواء داخل الكافيه مريحة جداً للدراسة والعمل، والخدمة دائماً ممتازة وسريعة."
              rating={5}
            />
            <ReviewCard 
              name="رنا خالد"
              text="الكابتشينو مضبوط بالظبط ومستوى السكر مثالي. أصبح وجهتي الصباحية اليومية!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-coffee-dark text-white pt-16 pb-8 border-t border-coffee-brand/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-coffee-brand" />
              <span className="font-bold text-xl tracking-tight">NC Cafe</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              تجربة نسكافيه فريدة تجمع بين الجودة، المذاق الرائع، والجو الدافئ المريح.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-coffee-brand">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">عنّا</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">قائمة المشروبات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-coffee-brand">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-coffee-brand" /> الشارع الرئيسي - شارع الكافيهات</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-coffee-brand" /> +970 590 000 000</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-coffee-brand">تابعنا</h4>
            <div className="flex gap-4 text-white/70">
              <a href="#" className="hover:text-coffee-brand transition-colors"><FaInstagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-coffee-brand transition-colors"><FaFacebook className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} NC Cafe</p>
        </div>
      </footer>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-coffee-light border border-coffee-brand/10 hover:border-coffee-brand/30 hover:shadow-xl transition-all text-center space-y-4 group">
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-coffee-dark">{title}</h3>
      <p className="text-coffee-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function MenuItem({ name, desc, price, img }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-coffee-brand/10 transition-all flex flex-col group">
      <div className="h-48 overflow-hidden relative">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-4 left-4 bg-coffee-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {price}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-coffee-dark mb-1">{name}</h3>
          <p className="text-coffee-muted text-xs leading-relaxed">{desc}</p>
        </div>
        <button className="w-full py-2.5 rounded-xl border border-coffee-brand text-coffee-brand hover:bg-coffee-brand hover:text-white font-medium text-sm transition-colors cursor-pointer">
          طلب الآن
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ name, text, rating }) {
  return (
    <div className="p-6 rounded-2xl bg-coffee-light border border-coffee-brand/10 space-y-4">
      <div className="flex gap-1 text-amber-500">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-500" />
        ))}
      </div>
      <p className="text-coffee-dark text-sm italic leading-relaxed">"{text}"</p>
      <div className="font-semibold text-xs text-coffee-muted">— {name}</div>
    </div>
  );
}