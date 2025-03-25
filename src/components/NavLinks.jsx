import { motion } from "framer-motion";
import { navLinkVariants } from "../utils/animations";

export const NavLinks = ({ links, isMobile = false, onLinkClick, hoveredLink, setHoveredLink }) => {
  const linkClassName = isMobile
    ? "text-gray-700 text-2xl cursor-pointer hover:text-green-600"
    : "relative group text-gray-700 flex items-center justify-center cursor-pointer";

  return links.map((link, index) => (
    <motion.li
      key={link.key}
      custom={index}
      variants={navLinkVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={linkClassName}
      onMouseEnter={() => !isMobile && setHoveredLink(link.key)}
      onMouseLeave={() => !isMobile && setHoveredLink(null)}
      onClick={() => onLinkClick && onLinkClick()}
    >
      <a 
        href={link.href} 
        className="pb-1.5 hover:text-green-600 transition-colors duration-300"
      >
        {link.label}
      </a>
      {!isMobile && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: hoveredLink === link.key ? 1 : 0,
            opacity: hoveredLink === link.key ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
        />
      )}
    </motion.li>
  ));
};