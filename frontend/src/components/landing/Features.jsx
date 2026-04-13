import React from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaListUl, FaSearch, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaPlayCircle />,
    title: 'Music Player',
    description: 'Listen to your favorite tracks with our sleek, intuitive, and ad-free music player experience.',
  },
  {
    icon: <FaListUl />,
    title: 'Playlist Management',
    description: 'Create, organize, and share custom playlists for any mood, activity, or special occasion.',
  },
  {
    icon: <FaSearch />,
    title: 'Search Songs',
    description: 'Find exactly what you are looking for instantly. Search by artist, album, or track name.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description: 'Enjoy a flawless listening experience across all your devices—mobile, tablet, and desktop.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#121212] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-[#4ab7e2] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#181818] p-8 rounded-2xl hover:bg-[#282828] transition-colors duration-300 border border-[#2a2a2a] group"
            >
              <div className="text-[#4ab7e2] text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
