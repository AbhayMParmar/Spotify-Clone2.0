import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpotify, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'playlists', 'features'];
      let current = '#';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = `#${id}`;
          break;
        }
      }
      setActiveSection(current);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Playlists', href: '#playlists' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#000000CC] backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[rgb(74,183,226)] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <span className="text-white text-2xl font-bold tracking-tight group-hover:text-[rgb(74,183,226)] transition-colors duration-300">
            Music
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                activeSection === link.href ? 'text-[#4ab7e2] font-bold' : 'text-gray-300 hover:text-white font-medium'
              } transition-colors duration-200`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Link to="/register" className="text-gray-300 hover:text-white font-bold transition-colors">
              Sign In
            </Link>
            <Link
              to="/login"
              className="bg-white text-black px-6 py-2 rounded-full font-bold hover:scale-105 hover:bg-gray-100 transition-all duration-200"
            >
              Log in
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] flex flex-col items-center py-6 gap-6 absolute top-full left-0 right-0 shadow-xl border-b border-gray-800"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl ${
                  activeSection === link.href ? 'text-[#4ab7e2] font-bold' : 'text-gray-300 hover:text-white font-medium'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="w-10 h-[1px] bg-gray-700 my-2"></div>
            <Link to="/register" className="text-2xl text-gray-300 hover:text-white font-bold" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
            <Link
              to="/login"
              className="bg-white text-black px-8 py-3 rounded-full text-xl font-bold mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
