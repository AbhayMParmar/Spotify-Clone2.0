import React from 'react';
import { FaSpotify, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#000000] pt-20 pb-8 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
              <span className="text-white text-2xl font-bold tracking-tight">Music</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">For the Record</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Communities</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">For Artists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Advertising</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Useful Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Web Player</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#4ab7e2] transition-colors">Free Mobile App</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="#" className="bg-[#222] p-3 rounded-full text-white hover:text-[#4ab7e2] transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="bg-[#222] p-3 rounded-full text-white hover:text-[#4ab7e2] transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="bg-[#222] p-3 rounded-full text-white hover:text-[#4ab7e2] transition-colors">
              <FaFacebookF className="text-xl" />
            </a>
          </div>
          <div className="text-gray-400 text-sm flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#4ab7e2]">Legal</a>
            <a href="#" className="hover:text-[#4ab7e2]">Privacy Center</a>
            <a href="#" className="hover:text-[#4ab7e2]">Privacy Policy</a>
            <a href="#" className="hover:text-[#4ab7e2]">Cookies</a>
            <span>&copy; {new Date().getFullYear()} Music AB Cloud Clone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
