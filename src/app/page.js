"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Best Natural Stones for Construction and Decoration in Riyadh
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
          High Quality and Competitive Prices
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-3 rounded-full font-semibold text-lg"
        >
          Get Your Quote Now
        </a>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Trusted Stone Factory Since 1996
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          We provide Riyadh natural stone for residential and commercial
          projects, with guaranteed quality and on-time delivery. Our factory
          offers a variety of stones — including white, creamy, yellow, and
          marble — crafted with precision to meet Saudi standards.
        </p>
      </section>

      {/* ====== PRODUCT SECTION ====== */}
      <section className="py-16 px-6 bg-white" id="products">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Our Stone Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "White Stone",
              img: "https://images.unsplash.com/photo-1622015663312-f6a48f8d9a8e?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Creamy Stone",
              img: "https://images.unsplash.com/photo-1600607686527-6f205ad9b04d?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Yellow Stone",
              img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Marble",
              img: "https://images.unsplash.com/photo-1616627989157-2d8c9a4a2f2c?auto=format&fit=crop&w=600&q=80",
            },
          ].map((stone, index) => (
            <div
              key={index}
              className="rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={stone.img}
                alt={stone.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{stone.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== PROJECTS SECTION ====== */}
      <section className="py-16 bg-gray-50" id="projects">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Previous Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            "https://images.unsplash.com/photo-1600607686597-6f205ad9b05e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1625079610814-d29c77d97d7e?auto=format&fit=crop&w=800&q=80",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Project"
              className="rounded-xl shadow-md hover:shadow-lg transition"
            />
          ))}
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Client Testimonials
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <p className="italic text-gray-700 mb-4">
              “Their stones transformed our villa — beautiful quality and timely
              delivery. Highly recommended!”
            </p>
            <h4 className="font-semibold text-yellow-600">
              – Eng. Khalid Al-Fahad
            </h4>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow">
            <p className="italic text-gray-700 mb-4">
              “We used Saudi Stone Factory materials in our commercial project.
              The finish and color consistency were perfect.”
            </p>
            <h4 className="font-semibold text-yellow-600">
              – Al Rahman Constructions
            </h4>
          </div>
        </div>
      </section>

      {/* ====== CONTACT FORM ====== */}
      <section id="contact" className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Get a Free Quote or Consultation
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Please fill out the form below, and our team will contact you shortly.
        </p>

        <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <select className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>Service Type</option>
            <option>Supply</option>
            <option>Installation</option>
            <option>Design</option>
          </select>
          <textarea
            rows="4"
            placeholder="Additional Message (Optional)"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Get Your Quote Now
          </button>
        </form>
      </section>

      {/* ====== CONTACT INFO & FOOTER ====== */}
      <footer className="bg-gray-900 text-gray-100 py-10 text-center px-4">
        <h3 className="text-xl font-semibold mb-4">For Direct Contact</h3>
        <p>
          Sales Department:{" "}
          <a href="tel:0555210310" className="text-yellow-400">
            0555210310
          </a>
        </p>
        <p>
          Administration:{" "}
          <a href="tel:0500229879" className="text-yellow-400">
            0500229879
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:sfs4646@gmail.com" className="text-yellow-400">
            sfs4646@gmail.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a href="https://saudistone.com.sa" className="text-yellow-400">
            saudistone.com.sa
          </a>
        </p>
        <div className="mt-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Saudi Stone Factory — All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
