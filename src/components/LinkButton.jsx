import React from 'react';
import { motion } from 'framer-motion';

function LinkButton({ href, icon, text }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-primary-800">{text}</span>
        <i className={`fas fa-${icon} text-primary-500`}></i>
      </div>
    </motion.a>
  );
}

export default LinkButton;