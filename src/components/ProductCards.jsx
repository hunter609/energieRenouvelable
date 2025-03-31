import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 500,
      delay: 0.2
    }
  }
};

export const ProductCard = React.memo(({ product, inView }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -8 }}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="group relative"
  >
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Badge */}
      {product.featured && (
        <motion.div 
          variants={badgeVariants}
          className="absolute top-4 right-4 z-20"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
            Featured
          </span>
        </motion.div>
      )}
      
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.8 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
        ></motion.div>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={product.image} 
          alt={product.alt}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
            Learn more
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </a>
          
          <motion.div 
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: '#16a34a', 
              color: 'white' 
            }}
            className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
));