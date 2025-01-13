import React from 'react';
import { motion } from 'framer-motion';

const icons = {
  whatsapp: "fab fa-whatsapp",
  instagram: "fab fa-instagram",
  tiktok: "fab fa-tiktok"
};

function SocialButton({ icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg
                    transition-all duration-300 group-hover:shadow-xl">
        <i className={`${icons[icon]} text-2xl text-primary-500 
                      transition-all duration-300 group-hover:text-primary-600`}></i>
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                     text-sm text-primary-700 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300">
        {label}
      </span>
    </motion.a>
  );
}

export default SocialButton;