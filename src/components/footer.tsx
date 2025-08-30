import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 px-8 py-6 text-center text-gray-400">
    <div className="flex justify-center space-x-16 mb-4">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms of Service</a>
      <a href="#" className="hover:text-white">Contact Us</a>
    </div>
    <p>© 2025 CodeExperts. All rights reserved.</p>
  </footer>
);

export default Footer;