import React from "react";
import { Navbar } from "../layout/navbar";
import { motion } from "framer-motion";

export const Hero = () => {
  // Variantes d'animation pour différents éléments - sans mouvement horizontal
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ 
      opacity: 1,
      transition: { 
        duration: 0.7,
        delay: i * 0.2 
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.6
      }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#4ade80", 
      transition: { duration: 0.3 }
    }
  };

  const floatingCircleVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Split - sans animation */}
      <div className="absolute inset-0 flex pointer-events-none">
        {/* Partie gauche - vert clair */}
        <div className="w-full md:w-[70%] bg-[#f2fcf4]"></div>
        {/* Partie droite - vert foncé */}
        <div className="w-0 md:w-[30%] bg-[#66c486]"></div>
      </div>

      {/* Navbar - sans animation comme demandé */}
      <Navbar />

      {/* Contenu principal */}
      <div className="flex-grow flex relative">
        {/* Contenu superposé */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pl-16 z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={titleVariants}
            >
              <span className="text-darkGreen">Renewable </span>Energy,
              <br />
              <motion.span
                custom={1}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                Inspired by Nature.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Sustainable solutions that harmonize technology with the natural
              world.
            </motion.p>
            
            <motion.button 
              className="bg-green-500 text-white px-6 py-3 rounded-full transition duration-300 w-48"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Explore More
            </motion.button>
          </div>

          {/* 3D Globe Illustration */}
          <motion.div 
            className="w-full md:w-1/2 flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contenu du globe à ajouter ici */}
          </motion.div>
        </div>

        {/* Floating Circles avec animation */}
        <motion.div 
          className="absolute bottom-24 left-16 w-8 h-8 bg-green-300 rounded-full"
          variants={floatingCircleVariants}
          animate="animate"
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-6 h-6 bg-green-200 rounded-full"
          variants={floatingCircleVariants}
          animate="animate"
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </div>
  );
};