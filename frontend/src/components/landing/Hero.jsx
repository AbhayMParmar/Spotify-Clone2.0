import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121212] z-10" />
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#4ab7e2] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] bg-[#4ab7e2] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-6 tracking-tighter leading-tight">
            Music for Everyone.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Millions of songs and podcasts. No credit card needed. Experience high-quality audio streaming seamlessly tailored to your taste.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4ab7e2] text-white font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(74,183,226,0.4)] hover:bg-[#5bc1e8] transition-colors"
              >
                Sign In
              </motion.button>
            </Link>
            
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-gray-500 hover:border-white font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto transition-colors"
              >
                Log In
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-20" />
    </section>
  );
};

export default Hero;
