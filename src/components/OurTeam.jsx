import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import teamData from '../data/teamData.json';

const OurTeam = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {teamData.map((member, index) => (
        <motion.div
          key={member.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary-green/20 flex flex-col hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative h-80 bg-primary-green/5">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain object-bottom p-4 drop-shadow-lg"
            />
          </div>
          <div className="p-6 lg:p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-primary-maroon mb-2">{member.name}</h3>
            <p className="text-sm font-semibold text-primary-green mb-4 tracking-wide uppercase">{member.title}</p>
            <p className="text-primary-maroon/80 leading-relaxed flex-grow">{member.summary}</p>
            <div className="mt-6">
              <a href={`/team/${member.id}`} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-green hover:text-accent-red transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OurTeam;
