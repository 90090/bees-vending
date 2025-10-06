import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8 px-8 relative overflow-hidden z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-semibold">
            Bees Vending — Modern Vending & Micromarkets
          </h1>
          <div className="text-slate-300 text-sm space-x-4 mt-2">
            <a href="/privacyterms" className="hover:text-white transition-colors">
              Privacy & Terms
            </a>
          </div>
        </div>

        {/* Middle - Pages */}
        <div className="text-white  text-sm flex flex-wrap justify-center gap-x-6 mb-6 md:mb-0">
          <a href="/" className="hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-red-600 transition-colors">
            About
          </a>
          <a href="/micromarket" className="hover:text-red-600 transition-colors">
            Micromarkets
          </a>
          <a href="/vending" className="hover:text-red-600 transition-colors">
            Vending
          </a>
          <a href="/contact" className="hover:text-red-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Right side - Social icons */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-slate-900 hover:bg-pink-500 hover:text-white transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <FaFacebookF size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
