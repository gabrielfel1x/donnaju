import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './components/ProductCard';
import SocialButton from './components/SocialButton';
import LinkButton from './components/LinkButton';
import Gallery from './components/Gallery';
import Logo from "../public/logo.jpeg"

const products = [
  {
    id: 1,
    name: "Gloss",
    price: "R$ 9,90",
    image: "../public/products/gloss.jpeg",
  },
  {
    id: 2,
    name: "Rímel",
    price: "R$ 9,90",
    image: "../public/products/corretivo.jpeg",
  },
  {
    id: 3,
    name: "Esfoliante Facial",
    price: "R$ 9,90",
    image: "../public/products/esfoliante-facial.jpeg",
  },
];

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-primary-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative inline-block"
          >
            <img
              // src="https://placehold.co/200x200/ffc9df/ffffff?text=BM"
              src={Logo}
              alt="DonnaJu"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl mb-6"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow-lg">
              <span className="text-xl">✨</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-[#ff2b84] mb-4"
          >
            Donnaju Acessórios
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-[#ff2b84] max-w-2xl mx-auto"
          >
            OLÁ! SIGA-NOS NO APP VIZINHO PARA DICAS DE BELEZA, CONFIRA NOSSO CATÁLOGO E COMPRE PELO WHATSAPP! 💝📱🛍️
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <SocialButton
            icon="whatsapp"
            href="https://wa.me/your-number"
            label="WhatsApp"
          />
          <SocialButton
            icon="instagram"
            href="https://instagram.com/your-profile"
            label="Instagram"
          />
          <SocialButton
            icon="tiktok"
            href="https://tiktok.com/@your-profile"
            label="TikTok"
          />
        </div>

        {/* Main Links */}
        <div className="space-y-4 mb-16">
          <LinkButton
            href="/catalogo"
            icon="shopping-bag"
            text="Ver Catálogo Completo"
          />
          <LinkButton
            href="/tiktok"
            icon="video-camera"
            text="Dicas no TikTok"
          />
        </div>

        {/* Featured Products */}
        <motion.div
          ref={ref}
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#ff2b84] text-center mb-8">
            Produtos em Destaque ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <Gallery />
      </div>
    </div>
  );
}

export default App;