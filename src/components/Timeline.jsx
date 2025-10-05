import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TimelineItem = ({ item, isLast }) => (
  <div className="relative flex items-start pb-12">
    {!isLast && (
      <div className="absolute left-[18px] top-5 h-full w-0.5 bg-sky-200" />
    )}
    <motion.div 
      className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 shadow-md"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <CheckCircle2 className="h-5 w-5 text-white" />
    </motion.div>
    <div className="ml-6">
      <motion.h4 
        className="text-lg font-bold text-sky-900 font-display"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {item.title}
      </motion.h4>
      <motion.p 
        className="mt-1 text-gray-600"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {item.description}
      </motion.p>
    </div>
  </div>
);

const ProcedureTimeline = ({ steps }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 font-display">
            Your Journey to Recovery
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A step-by-step overview of your treatment process, from initial consultation to full recovery.
          </p>
        </div>

        <div className="relative">
          <motion.div 
            className="absolute left-[18px] top-0 h-full w-0.5 bg-sky-600 origin-top"
            style={{ scaleY: scrollYProgress }}
          />
          {steps.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcedureTimeline;
