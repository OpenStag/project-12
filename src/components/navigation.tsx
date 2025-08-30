import React from "react";

const Navigation: React.FC = () => (
      <nav className="bg-slate-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500 transform rotate-45"></div>
            <span className="text-xl font-bold">Code Experts</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="aboutus" className="hover:text-emerald-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Join Team</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Solutions</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Resources</a>
          </div>
        </div>
      </nav>
);

export default Navigation;