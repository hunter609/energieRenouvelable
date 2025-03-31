import React from "react";
import { Navbar } from "../layout/navbar";
import { motion } from "framer-motion";
import Globe from "../components/models/Globe";

export const Hero = () => {
  // Animation variants for different elements - without horizontal movement
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

  const globeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col container mx-auto px-4 sm:px-6 lg:px-8" id="home">
      {/* Background Split - enhanced for responsiveness */}
      <div className="absolute inset-0 flex pointer-events-none">
        {/* Left part - light green */}
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[65%] bg-[#f2fcf4]"></div>
        {/* Right part - dark green */}
        <div className="w-0 sm:w-[20%] md:w-[30%] lg:w-[35%] bg-[#66c486]"></div>
      </div>

      {/* Navbar - without animation as requested */}
      <Navbar />

      {/* Main content with improved responsiveness */}
      <div className="flex-grow flex relative mt-4 sm:mt-8 md:mt-0">
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Text Content - improved spacing for all screen sizes */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8 md:pl-8 lg:pl-16 z-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6"
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
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Sustainable solutions that harmonize technology with the natural
              world.
            </motion.p>

            <motion.button
              className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition duration-300 w-36 sm:w-48"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Explore More
            </motion.button>
          </div>

          {/* 3D Globe Illustration - responsive container */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center relative mt-8 sm:mt-12 md:mt-0"
            variants={globeContainerVariants}
            initial="hidden"
            animate="visible"
            style={{
              height: "100%",
              overflow: "hidden"
            }}
          >
            <div className="w-full h-full scale-75 sm:scale-90 md:scale-100" style={{
              overflow: "hidden",
              transformOrigin: "center"
            }}>
              <Globe />
            </div>
          </motion.div>
        </div>

        {/* Floating Circles with responsive positioning */}
        <motion.div
          className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-6 sm:left-12 md:left-16 w-6 sm:w-8 h-6 sm:h-8 bg-green-300 rounded-full"
          variants={floatingCircleVariants}
          animate="animate"
        />

        <motion.div
          className="absolute bottom-8 sm:bottom-12 md:bottom-20 right-8 sm:right-16 md:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-green-200 rounded-full"
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