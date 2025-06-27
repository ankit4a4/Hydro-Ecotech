import React from 'react';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "FAP & Catalyseur", path: "/#" },
    { name: "Bioéthanol", path: "/#" },
    { name: "GO-STOP®", path: "/#" },
    { name: "Notre gamme", path: "/#" },
    { name: "Industries", path: "/#" },
    { name: "Décarbonation", path: "/#" },
    { name: "Contact", path: "/#" },
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: "06 04 52 87 51" },
    { icon: <Mail size={16} />, text: "contact@hydro-ecotech.com" },
    { icon: <MapPin size={16} />, text: "2 Rue Marc Donadille, 13013 Marseille" }
  ];

  return (
    <footer className="bg-[#0a2540] text-gray-300 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Hydro Ecotech" className="h-8 w-auto" />
            <p className="text-sm leading-relaxed text-white">
              Technologie propre pour une mobilité durable et performante.
            </p>
            <div className="flex  gap-4">
              <a href="#" className="hover:text-white transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors  text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors  text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 4).map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:text-white transition-colors text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(4).map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:text-white transition-colors text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 text-white">{item.icon}</span>
                  <span className='text-white'>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 md:text-sm text-xs text-center text-white flex  items-center justify-between">
          <p>© {new Date().getFullYear()} Hydro Ecotech. La puissance par l'hdrogene. | Powered by <span className='text-[#D83030]'>Rank</span>mantra</p>
          <div className="mt-2 md:flex justify-center space-x-4 hidden ">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;