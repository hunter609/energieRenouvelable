import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { PRODUCTS } from '../constants/productsData';
import { ProductCard } from '../components/ProductCards';
// SVG extraits en constantes
const TOP_WAVE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-40">
    <path 
      fill="#4ade80" 
      fillOpacity="0.3" 
      d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
    </path>
  </svg>
);

const BOTTOM_WAVE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-64">
    <path 
      fill="#4ade80" 
      fillOpacity="0.3" 
      d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
    </path>
  </svg>
);

// Animations variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3 
    }
  }
};

// Composant principal optimisé
export const Products = () => {
  const controls = useAnimation();
  const headerControls = useAnimation();
  const buttonControls = useAnimation();
  
  // Références pour la détection d'intersection
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { 
    once: false,      
    threshold: 0.1 
  });
  
  // Déclencher les animations quand la section devient visible
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      headerControls.start({ opacity: 1, y: 0 });
      buttonControls.start({ opacity: 1, y: 0 });
    } else {
      controls.start("hidden");
      headerControls.start({ opacity: 0, y: -20 });
      buttonControls.start({ opacity: 0, y: 20 });
    }
  }, [inView, controls, headerControls, buttonControls]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-4" 
      id="products"
    >
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-64 opacity-10">
        {BOTTOM_WAVE}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={headerControls}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
            className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full mb-3"
          >
            Innovation
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Products</span> & Technology
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our premium line of sustainable products designed with the future in mind.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              inView={inView}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-md"
          >
            <span className="relative z-10">View All Products</span>
            <motion.span 
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              className="absolute inset-0 h-full bg-green-500"
            ></motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};