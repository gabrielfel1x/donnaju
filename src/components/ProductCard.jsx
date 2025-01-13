import React from 'react';
import { motion } from 'framer-motion';

function ProductCard({ name, price, image }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                transition-all duration-300"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-primary-500 text-white px-3 py-1 
                      rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary-900 mb-2">{name}</h3>
        <button className="w-full bg-primary-500 text-white py-2 rounded-lg
                         hover:bg-primary-600 transition-colors duration-300">
          Comprar
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;