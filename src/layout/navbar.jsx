import React, { useState } from 'react'
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

// Composant principal de la navbar
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center max-container padding-container relative z-30 py-5 px-4 sm:px-10"
    >
      {/* Logo Section */}
      <motion.div 
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center"
      >
        <motion.div className="w-10 h-10 bg-green-500 rounded-full mr-2" />
        <span className="text-xl sm:text-2xl font-bold text-green-700">ngrodeck</span>
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-6 lg:gap-12 lg:flex">
        <NavLinks 
          links={NAV_LINKS} 
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
        />
      </ul>

      {/* Contact Button for Desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="hidden lg:block"
        variants={buttonVariants}
        whileHover="hover"
      >
        <Button 
          color="bg-white" 
          textColor="text-darkGreen"
          hoverColor="hover:bg-gray-100"
          text="Contact us" 
        />
      </motion.div>

      {/* Mobile Menu Toggle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="lg:hidden"
      >
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu} 
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
          >
            <ul className="space-y-6 text-center">
              <NavLinks 
                links={NAV_LINKS} 
                isMobile={true}
                onLinkClick={toggleMobileMenu}
              />
            </ul>
              
            <div className="mt-8" onClick={toggleMobileMenu}>
              <Button 
                color="bg-white" 
                textColor="text-darkGreen"
                text="Contact us" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}