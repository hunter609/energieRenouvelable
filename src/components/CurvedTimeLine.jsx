import { motion } from "framer-motion";

const CurvedTimeline = () => {
  return (
    <svg width="100%" height="200" viewBox="0 0 1000 200">
      <motion.path
        d="M 50 150 Q 500 50 950 150"  
        stroke="green"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <circle cx="50" cy="150" r="8" fill="green" />
      <circle cx="500" cy="50" r="8" fill="green" />
      <circle cx="950" cy="150" r="8" fill="green" />
    </svg>
  );
};

export default CurvedTimeline;
