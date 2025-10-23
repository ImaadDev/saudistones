"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return;
    }

    const templateParams = {
      title: "New Contact Form Submission",
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      service: formData.service || "N/A",
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          title: "New Contact Form Submission",
        });
      } else {
        console.error("EmailJS response error:", response);
        alert("❌ Failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("FAILED...", error);
      alert("❌ Failed to send. Please try again later.");
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen flex flex-col justify-center items-center text-center text-white px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "url('/s1.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-slide-down">
            أحجار طبيعية فاخرة
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-300 animate-slide-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            حوّل رؤيتك إلى واقع باستخدام حلول أحجار عالية الجودة
            <br />
            <span className="text-yellow-400 font-semibold">منذ 1996</span> •
            شريكك الموثوق في الرياض
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            احصل على عرض أسعار مجاني
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-8 h-8 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white text-center px-4" id="projects">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
              مجموعتنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              مشاريع أحجار مميزة
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              أحجار طبيعية فاخرة للتميز السكني والتجاري
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "حجر أبيض", img: "/s2.jpg", desc: "أناقة نقية" },
            {
              name: "حجر كريمي",
              img: "/s3.jpg",
              desc: "رقي دافئ",
            },
            { name: "حجر أصفر", img: "/s4.jpg", desc: "جمال مشع" },
            {
              name: "رخام وجرانيت",
              img: "/s5.jpg",
              desc: "فخامة أبدية",
            },
            {
              name: "رخام وجرانيت",
              img: "/1.jpg",
              desc: "فخامة أبدية",
            },
            {
              name: "رخام وجرانيت",
              img: "/2.jpg",
              desc: "فخامة أبدية",
            },
            {
              name: "رخام وجرانيت",
              img: "/3.jpg",
              desc: "فخامة أبدية",
            },
            {
              name: "رخام وجرانيت",
              img: "/4.jpg",
              desc: "فخامة أبدية",
            },
          ].map((stone, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stone.img}
                    alt={stone.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {stone.name}
                  </h3>
                  <p className="text-yellow-600 text-sm font-medium">
                    {stone.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Products SECTION */}
      <section
        className="py-24 bg-gradient-to-b from-gray-50 to-white text-center px-4"
        id="products"
      >
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
              معرض الأعمال
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              المنتجات المميزة
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              شاهد القوة التحويلية للأحجار الطبيعية الفاخرة
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "/s6.jpg",
            "/s7.jpg",
            "/s8.jpg",
            "/5.jpg",
            "/6.jpg",
            "/7.jpg",
            "/8.jpg",
            "/9.jpg",
            "/10.jpg",
          ].map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 aspect-square">
                <img
                  src={src}
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-xl mb-2">المنتج {i + 1}</h4>
                    <p className="text-sm text-gray-200">تركيب احترافي</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-900 text-white px-4" id="services">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">
              ما نقدمه
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              خدمات شاملة
            </h2>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg">
              حلول شاملة لمشاريع الأحجار الخاصة بك
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "التنفيذ",
              icon: "🏗️",
              desc: "تركيب احترافي بدقة وعناية",
              points: [
                "حرفية متخصصة",
                "ضمان الجودة",
                "إنجاز في الموعد",
                "معايير سعودية",
              ],
            },
            {
              title: "توريد الأحجار",
              icon: "💎",
              desc: "أحجار طبيعية فاخرة لأي حجم مشروع",
              points: [
                "كميات مرنة",
                "جودة متسقة",
                "أسعار تنافسية",
                "توصيل موثوق",
              ],
            },
            {
              title: "التصميم",
              icon: "✨",
              desc: "حلول تصميم مخصصة مصممة لرؤيتك",
              points: [
                "استشارات متخصصة",
                "تصور ثلاثي الأبعاد",
                "أنماط مخصصة",
                "دمج معماري",
              ],
            },
          ].map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2 text-gray-400 group-hover:text-white/90">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-white to-gray-50 px-6"
      >
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
              ابدأ الآن
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              اطلب عرض أسعار مجاني
            </h2>
            <p className="text-gray-600 text-lg">سيرد فريقنا خلال 24 ساعة</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-6 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-2 border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <input
                type="text"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border-2 border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-2 border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="border-2 border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-yellow-500 transition-colors"
            >
              <option>اختر نوع الخدمة</option>
              <option>توريد</option>
              <option>تركيب</option>
              <option>تصميم</option>
              <option>مشروع كامل</option>
            </select>
            <textarea
              rows={4}
              placeholder="أخبرنا عن مشروعك..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="border-2 border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:border-yellow-500 transition-colors"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              إرسال الطلب
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
              شهادات العملاء
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              قصص نجاح العملاء
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "حوّلت أحجارهم فيلا بنا — جودة جميلة وتوصيل في الموعد. موصى به بشدة!",
              author: "المهندس خالد الفحاد",
              role: "مالك فيلا",
            },
            {
              quote:
                "استخدمنا مواد مصنع الأحجار السعودي في مشروعنا التجاري. كان التشطيب والتناسق في الألوان مثالياً.",
              author: "إنشاءات الرحمن",
              role: "شركة إنشاءات",
            },
          ].map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-yellow-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              مصنع الأحجار السعودي
            </h3>
            <p className="text-gray-400">
              أحجار طبيعية فاخرة منذ 1996. شريكك الموثوق في الرياض.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                المبيعات:{" "}
                <a
                  href="tel:0555210310"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  0555210310
                </a>
              </p>
              <p>
                الإدارة:{" "}
                <a
                  href="tel:0500229879"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  0500229879
                </a>
              </p>
              <p>
                البريد الإلكتروني:{" "}
                <a
                  href="mailto:sfs4646@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  sfs4646@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">روابط سريعة</h4>
            <div className="space-y-2">
              <a
                href="#products"
                className="block text-gray-400 hover:text-yellow-400 transition"
              >
                المنتجات
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-yellow-400 transition"
              >
                المشاريع
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-yellow-400 transition"
              >
                الخدمات
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-yellow-400 transition"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} مصنع الأحجار السعودي — جميع الحقوق
            محفوظة.
          </p>
          <p className="mt-2">
            <a
              href="https://saudistone.com.sa"
              className="text-yellow-400 hover:text-yellow-300"
            >
              saudistone.com.sa
            </a>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
