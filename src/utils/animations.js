// Animation variants
export const logoVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10 
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 360,
      transition: { 
        type: "spring",
        stiffness: 300 
      }
    }
  }

export const navLinkVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 300
      }
    }),
    hover: { 
      scale: 1.05,
      color: '#10b981' // Tailwind's green-500
    }
  }

export const mobileMenuVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "tween",
        duration: 0.3 
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { 
        type: "tween",
        duration: 0.3 
      }
    }
  }