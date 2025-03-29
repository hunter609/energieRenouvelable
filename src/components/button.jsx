import React from "react";

export const Button = ({ color, textColor, hoverColor, text = "Explore More" }) => {
  // Utilisation de la prop hoverColor ou valeur par défaut si non fournie
  const hoverColorClass = hoverColor || "hover:bg-[#27ae60]";
  
  const buttonClasses = `${color} ${textColor} px-6 py-3 rounded-full text-base font-medium ${hoverColorClass} transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:ring-opacity-50`
  
  return (
    <button 
      className={buttonClasses}
    >
      {text}
    </button>
  );
};