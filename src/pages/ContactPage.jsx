import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0a0f2c] to-black px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-300 mb-6 flex items-center gap-3">
        <span className="text-5xl animate-pulse">📬</span> Get in Touch
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mb-10 max-w-xl">
        Whether you want to collaborate, discuss testing frameworks, or just say hi — my inbox is always open.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 hover:scale-105 transition shadow-md hover:shadow-blue-700/30">
          <a href="mailto:hfer.cc@gmail.com" className="flex flex-col items-center gap-2 text-blue-300 hover:text-blue-400">
            <span className="text-3xl">📧</span>
            <p>hfer.cc@gmail.com</p>
          </a>
        </div>

        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 hover:scale-105 transition shadow-md hover:shadow-blue-700/30">
          <a href="https://github.com/refnando" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-blue-300 hover:text-blue-400">
            <span className="text-3xl">🐙</span>
            <p>@refnando</p>
          </a>
        </div>

        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 hover:scale-105 transition shadow-md hover:shadow-blue-700/30">
          <a href="https://linkedin.com/in/fernando-campos" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-blue-300 hover:text-blue-400">
            <span className="text-3xl">💼</span>
            <p>linkedin.com/in/fernando-campos</p>
          </a>
        </div>
      </div>

      {/* Outro */}
      <p className="text-gray-400 mt-10 italic">
        Let’s build something great together 🚀
      </p>
    </section>
  );
}