import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const playlists = [
  {
    title: 'Top Hits 2026',
    description: 'Catch up on all the biggest hits from around the globe.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Chill Vibes',
    description: 'Kick back to the best new and recent chill tunes.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Workout Mix',
    description: 'Get your heart pumping with these high energy tracks.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Focus Flow',
    description: 'Deep focus music for studying, reading, or working.',
    image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4b0?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

const PopularPlaylists = () => {
  return (
    <section id="playlists" className="py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-2 hover:underline cursor-pointer"
            >
              Popular Playlists
            </motion.h2>
            <p className="text-gray-400">Discover what's trending right now.</p>
          </div>
          <Link to="/login" className="hidden md:block text-gray-400 hover:text-white font-bold tracking-widest text-sm uppercase">
            Show All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative mb-4 aspect-square shadow-lg overflow-hidden rounded-md">
                <img 
                  src={playlist.image} 
                  alt={playlist.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <button 
                  className="absolute bottom-2 right-2 p-3 bg-[#4ab7e2] text-black rounded-full shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-[#5bc1e8]"
                >
                  <FaPlay className="text-xl pl-1" />
                </button>
              </div>
              <h3 className="font-bold text-white text-lg truncate mb-1">
                {playlist.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {playlist.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlaylists;
