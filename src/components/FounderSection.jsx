import React from 'react';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-primary-maroon mb-4 font-display">
        Meet Our Founder
      </h2>
      <p className="text-lg text-primary-maroon/80 max-w-3xl mx-auto">
        Dr. Pramod Kadam is a distinguished and board-certified general surgeon with over a decade of experience, dedicated to pioneering advanced surgical procedures with a commitment to exceptional patient care.
      </p>
      {/* Add more founder details here */}
    </motion.div>
  );
};

export default FounderSection;
