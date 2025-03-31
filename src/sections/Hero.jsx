import React from "react";
import { Navbar } from "../layout/navbar";
import { motion } from "framer-motion";
import Globe from "../components/models/Globe";

export const Hero = () => {
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
    <div className="relative min-h-screen bg-[#f2fcf4]" id="home">
      {/* Background Split */}
      <div 
        className="absolute top-0 right-0 bottom-0 hidden md:block bg-[#66c486]"
        style={{ width: '30%' }}
      />

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto h-screen flex flex-col px-4 md:px-6 lg:px-8">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Content */}
          <div className="w-full md:w-[60%] lg:w-1/2 flex flex-col justify-center z-10">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={titleVariants}
            >
              <span className="text-[#2c7a44]">Renewable </span>Energy,
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
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-[600px]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Sustainable solutions that harmonize technology with the natural
              world.
            </motion.p>

            <motion.button
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300 hover:bg-green-600 w-auto inline-flex items-center justify-center max-w-[200px]"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Explore More
            </motion.button>
          </div>

          {/* Globe Container - Modified to take full height of the screen */}
          <motion.div
            className="w-full md:w-[40%] lg:w-1/2 absolute md:relative right-0 top-0 h-full md:h-full"
            variants={globeContainerVariants}
            initial="hidden"
            animate="visible"
            // style={{ pointerEvents: "none" }}
          >
            <div className="w-full h-full">
              <Globe />
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-24 left-16 w-8 h-8 bg-green-300 rounded-full opacity-70 hidden md:block"
          variants={floatingCircleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 left-32 w-4 h-4 bg-green-400 rounded-full opacity-60 hidden md:block"
          variants={floatingCircleVariants}
          animate="animate"
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-32 right-48 w-6 h-6 bg-green-200 rounded-full opacity-50 hidden md:block"
          variants={floatingCircleVariants}
          animate="animate"
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
      </div>
    </div>
  );
};

export default Hero;