import React from "react";
import { motion } from "framer-motion";
import { menuSections, socialLinks } from "../constants";

export const Footer = () => {
 

  return (
    <footer className="relative bg-gray-800 text-white py-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-green-600/20 transform skew-x-[-15deg] origin-top-right"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg"></div>
          <span className="text-2xl font-bold">NGRODECK</span>
        </motion.div>

        {menuSections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-bold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li
                  key={`${section.id}-${index}`}
                  className="hover:text-green-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex space-x-4"
        >
          {socialLinks.map(({ id, icon: Icon, url }) => (
            <a
              key={id}
              href={url}
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-8 text-gray-400 text-sm relative z-10"
      >
        Copyright 2025-All Rights Reserved
      </motion.div>
    </footer>
  );
};
