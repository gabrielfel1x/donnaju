import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  "../public/gallery/1.jpeg",
  "../public/gallery/2.jpeg",
  "../public/gallery/3.jpeg",
  "../public/gallery/4.jpeg",
  "../public/gallery/5.jpeg",
  "../public/gallery/6.jpeg",
];

function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-8">
      <h2 className="text-2xl font-bold text-primary-900 text-center mb-8">
        Nossa Galeria 📸
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                          opacity-0 hover:opacity-100 transition-opacity duration-300
                          flex items-end justify-center pb-4">
              <button className="bg-white/90 text-primary-900 px-4 py-2 rounded-full
                               text-sm font-semibold transform hover:scale-105
                               transition-transform duration-300">
                Ver mais
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;