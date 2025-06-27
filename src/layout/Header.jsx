import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "FAP & Catalyseur", path: "/#" },
        { name: "À propos", path: "/#" },
        { name: "Bioéthanol", path: "/#" },
        { name: "GO-STOP®", path: "/#" },
        { name: "Notre gamme", path: "/#" },
        { name: "Maritime / Industries", path: "/#" },
        { name: "Décarbonation", path: "/#" },
        { name: "Contact", path: "/#" },
    ];

    const leftLinks = navLinks.slice(0, Math.ceil(navLinks.length / 2));
    const rightLinks = navLinks.slice(Math.ceil(navLinks.length / 2));

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    }, [mobileMenuOpen]);

    return (
        <header className={`fixed top-0 w-full z-[400] transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-5">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Logo - Center */}
                    <div className="z-40">
                        <img
                            className="h-12 md:hidden flex md:h-12 transition-all duration-300"
                            src={logo}
                            alt="Company Logo"
                        />
                    </div>

                    {/* Empty div to balance layout (right side) */}
                    <div className="w-7 lg:hidden" />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        {/* Left Nav */}
                        <nav className="flex items-center gap-4 flex-1 justify-end">
                            {leftLinks.map((item, index) => (
                                <Link
                                    key={`left-${index}`}
                                    to={item.path}
                                    className="relative text-white font-bold text-[0.9rem] hover:text-[#55AAE4] transition-colors group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#55AAE4] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Logo */}
                        <div className="mx-12 flex-shrink-0 " >
                            <img className="h-12" src={logo} alt="Logo" />
                        </div>

                        {/* Right Nav */}
                        <nav className="flex items-center gap-4 flex-1 justify-start">
                            {rightLinks.map((item, index) => (
                                <Link
                                    key={`right-${index}`}
                                    to={item.path}
                                    className="relative text-white font-bold text-[0.9rem] hover:text-[#55AAE4] transition-colors group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#55AAE4] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay (Animated from Left with h-[100vh]) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="fixed top-0 left-0 w-full overflow-y-auto h-[100vh] bg-[#0f172a]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-white font-bold text-xl hover:text-[#55AAE4] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
