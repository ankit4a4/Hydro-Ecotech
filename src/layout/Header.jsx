import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

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

    // Split nav links into left and right groups
    const leftLinks = navLinks.slice(0, Math.ceil(navLinks.length / 2));
    const rightLinks = navLinks.slice(Math.ceil(navLinks.length / 2));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-[400] transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-10'}`}>
            <div className=" mx-auto px-4 md:px-10">
                <div className="flex justify-center items-center gap-5">
                    {/* Left Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center gap-4 flex-1 justify-end">
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

                    {/* Logo - Centered */}
                    <div className="z-50 mx-4 flex-shrink-0">
                        <img
                            className="h-12 md:h-12 transition-all duration-300"
                            src={logo}
                            alt="Company Logo"
                        />
                    </div>

                    {/* Right Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center gap-4 flex-1 justify-start">
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

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden z-50 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Menu (unchanged) */}
                    <div className={`lg:hidden fixed inset-0 bg-[#0f172a]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;