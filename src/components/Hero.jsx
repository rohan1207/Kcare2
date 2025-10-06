import React from 'react';
import { motion } from 'framer-motion';
import AppointmentTab from './AppointmentTab';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Surgeries' },
  { value: '98%', label: 'Success Rate' },
  { value: '24/7', label: 'Emergency Care' },
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-transparent" />
      </div>

      {/* Stats - Vertical on Right */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-right group cursor-pointer"
            >
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index + 0.5 }}
                className="relative"
              >
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-white/20 group-hover:bg-white/40 transition-colors" />
                <p className="text-3xl font-light text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/70 font-light tracking-wider uppercase">
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center text-center">
              {/* Tagline */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <p className="text-white/80 text-lg font-light tracking-wide">WELCOME TO KCARE</p>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight mb-8"
              >
                Precision Care
                <span className="block text-primary-green">Trusted Hands</span>
              </motion.h1>
              
              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-12 mx-auto"
              >
                Experience world-class healthcare with our advanced medical techniques 
                and compassionate care approach.
              </motion.p>
              
              {/* CTA Button and Appointment Tab Container */}
              <div className="flex flex-col items-center w-full">
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8"
                >
                  <button className="px-12 py-5 bg-primary-green text-white text-lg font-light hover:bg-primary-green/90 transition-all rounded-full hover:shadow-lg hover:shadow-primary-green/20">
                    Learn More
                  </button>
                </motion.div>

                {/* Appointment Tab */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full max-w-[1000px]"
                >
                  <AppointmentTab />
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;