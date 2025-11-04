import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-opacity-10 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-yellow-400" />
          FlowLink
        </h1>
        <nav className="flex gap-6 text-lg">
          <a href="#features" className="hover:text-yellow-400 transition">Features</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Revolutionize Your Workflow <br /> with <span className="text-yellow-400">FlowLink</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
        >
          Streamline tasks, manage your team, and automate your process — all in one powerful, AI-enhanced dashboard.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Get Started 🚀
        </motion.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Rocket className="text-yellow-400" size={36} />}
            title="Lightning Fast"
            desc="Experience smooth performance and optimized speed on every device."
          />
          <FeatureCard
            icon={<Zap className="text-yellow-400" size={36} />}
            title="AI Integrated"
            desc="Leverage artificial intelligence to automate insights and predictions."
          />
          <FeatureCard
            icon={<Shield className="text-yellow-400" size={36} />}
            title="Secure by Design"
            desc="Your data stays encrypted and protected with advanced security layers."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-700 mt-10">
        <p>© {new Date().getFullYear()} FlowLink. Crafted with ❤️ by Sujal Khedekar.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {icon}
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}

