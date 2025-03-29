import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants'
import { Menu, X } from 'lucide-react'
import { NavLinks } from '../components/NavLinks'
import { Button } from '../components/button'
import { 
  logoVariants, 
  mobileMenuVariants, 
  buttonVariants 
} from '../utils/animations'

// Composant principal de la navbar avec responsive design amélioré
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  // Gestion du défilement pour appliquer l'effet smooth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Gestion du redimensionnement de l'écran
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      
      // Ferme le menu mobile si l'écran passe en mode desktop
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    // Nettoyage des event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Prévenir le défilement du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isMobile = windowWidth < 768

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 right-0
        flex justify-between items-center 
        w-full 
        z-30 
        px-4 sm:px-6 md:px-10 lg:px-12
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-white shadow-lg py-2 md:py-3' 
          : 'bg-white md:bg-transparent py-3 md:py-5'}
      `}
    >
      {/* Logo Section - Responsive adjustments */}
      <motion.div 
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center"
      >
        <motion.div className={`
          flex items-center justify-center 
          bg-gradient-to-r from-green-500 to-green-600 
          rounded-full mr-2 transition-all duration-300 
          ${scrolled 
            ? 'w-8 h-8 sm:w-9 sm:h-9' 
            : 'w-9 h-9 sm:w-11 sm:h-11'
          }
        `}>
          <span className="text-white font-bold text-xs sm:text-sm">NG</span>
        </motion.div>
        <span className={`
          font-bold bg-gradient-to-r from-green-700 to-green-500 
          bg-clip-text text-transparent transition-all duration-300 
          ${scrolled 
            ? 'text-base sm:text-lg md:text-xl' 
            : 'text-lg sm:text-xl md:text-2xl'
          }
        `}>
          ngrodeck
        </span>
      </motion.div>

      {/* Desktop and Tablet Navigation */}
      <ul className="hidden md:flex h-full gap-4 lg:gap-8">
        <NavLinks 
          links={NAV_LINKS} 
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          scrolled={scrolled}
          isTablet={isTablet}
        />
      </ul>

      {/* Contact Button for Desktop and Tablet */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="hidden md:block"
        variants={buttonVariants}
        whileHover="hover"
      >
        <Button 
          color={scrolled ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-white"} 
          textColor={scrolled ? "text-white" : "text-green-700"}
          hoverColor={scrolled ? "hover:from-green-600 hover:to-green-700" : "hover:bg-gray-50"}
          text="Contact us" 
          className={`
            transition-all duration-300 
            rounded-full font-medium shadow-sm
            ${isMobile 
              ? 'py-1.5 px-3 text-sm' 
              : isTablet 
                ? (scrolled ? 'py-1.5 px-4' : 'py-2 px-5') 
                : (scrolled ? 'py-2 px-5' : 'py-2.5 px-6')
            }
          `}
        />
      </motion.div>

      {/* Mobile Menu Toggle - Improved accessibility */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden"
      >
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu} 
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className={`
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
            transition-colors duration-300 
            p-2 rounded-full
            ${scrolled 
              ? 'text-green-600 hover:bg-gray-100' 
              : 'text-gray-800 hover:bg-white/30'
            }
          `}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay - Improved for small screens */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden fixed inset-0 bg-white/98 backdrop-blur-md z-40 flex flex-col items-center justify-center"
          >
            <motion.div 
              className="absolute top-4 right-4"
              whileTap={{ scale: 0.9 }}
            >
              <button 
                onClick={toggleMobileMenu}
                aria-label="Fermer le menu"
                className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 sm:mb-10"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">NG</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">ngrodeck</span>
            </motion.div>
            
            <ul className="space-y-5 sm:space-y-6 text-center w-full px-6">
              <NavLinks 
                links={NAV_LINKS} 
                isMobile={true}
                onLinkClick={toggleMobileMenu}
              />
            </ul>
              
            <motion.div 
              className="mt-8 sm:mt-10" 
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                color="bg-gradient-to-r from-green-500 to-green-600" 
                textColor="text-white"
                hoverColor="hover:from-green-600 hover:to-green-700"
                text="Contact us" 
                className="py-2.5 px-8 sm:py-3 sm:px-10 text-base sm:text-lg font-medium rounded-full shadow-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}