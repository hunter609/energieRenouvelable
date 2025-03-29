import React from 'react'
import { motion } from 'framer-motion'

export const NavLinks = ({ links, hoveredLink, setHoveredLink, isMobile, isTablet, onLinkClick, scrolled }) => {
  return (
    <>
      {links.map((link) => {
        const isHovered = hoveredLink === link.label
        
        return (
          <motion.li
            key={link.label}
            className="relative flex items-center"
            onHoverStart={() => !isMobile && setHoveredLink?.(link.label)}
            onHoverEnd={() => !isMobile && setHoveredLink?.(null)}
            onClick={isMobile && onLinkClick ? () => onLinkClick() : undefined}
          >
            <a 
              href={link.href} 
              className={`
                font-medium transition-all duration-100 relative
                ${isMobile 
                  ? 'text-base sm:text-xl text-gray-800 hover:text-green-600 py-2 text-center' 
                  : `${isTablet
                      ? (scrolled ? 'text-sm' : 'text-base')
                      : (scrolled ? 'text-base' : 'text-base')
                    } ${scrolled 
                      ? 'text-gray-700 hover:text-green-600' 
                      : 'text-gray-800 hover:text-green-500'
                    }`
                }
              `}
            >
              {link.label}
              
              {/* Indicateur mobile pour le lien actif */}
              {isMobile && link.active && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-green-500"></span>
              )}
            </a>
            
            {/* Point indicateur pour desktop/tablet (version originale) */}
            {!isMobile && isHovered && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={`
                  absolute -bottom-1 left-1/2 transform -translate-x-1/2
                  w-1.5 h-1.5 rounded-full
                  bg-green-500 
                  transition-all duration-300
                `}
              />
            )}
          </motion.li>
        )
      })}
    </>
  )
}