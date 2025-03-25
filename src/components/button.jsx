import React from "react";

export const Button = ({ color, text = "Explore More" }) => {
  const buttonClasses = `${color} text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#27ae60] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#2ecc71] focus:ring-opacity-50`
  return (
    <button 
      className={buttonClasses}
    >
      {text}
    </button>
  );
};