import React, { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import PopularPlaylists from '../components/landing/PopularPlaylists';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#121212] flex flex-col min-h-screen text-white font-sans selection:bg-[#1DB954] selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Features />
                <PopularPlaylists />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
