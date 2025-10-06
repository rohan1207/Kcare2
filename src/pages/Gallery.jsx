import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/gallery1.webp',
    alt: 'Surgeons performing robotic-assisted surgery in a modern operating room.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 2,
    src: '/gallery2.webp',
    alt: "Close-up of a surgeon's hands in sterile gloves during an operation.",
  },
  {
    id: 3,
    src: '/gallery3.png',
    alt: 'Advanced medical imaging display showing a human organ.',
  },
  {
    id: 4,
    src: '/gallery4.png',
    alt: 'A modern, well-lit hospital corridor.',
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    src: '/gallery5.png',
    alt: 'A team of medical professionals in discussion.',
    colSpan: 'md:col-span-2',
  },
  {
    id: 6,
    src: '/gallery6.png',
    alt: 'Detailed view of a surgical robot arm.',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 7,
    src: '/gallery7.png',
    alt: 'Patient resting comfortably in a hospital bed post-surgery.',
  },
  {
    id: 8,
    src: '/gallery8.png',
    alt: 'Sterile surgical instruments laid out on a tray.',
  },
];

const GalleryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary-maroon to-deep-wine py-24 sm:py-32 text-white"
      >
        <div className="absolute inset-0 bg-[url('/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight"
          >
            Our Advanced Surgical Gallery
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
          >
            A glimpse into the precision, technology, and care that define our practice.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`rounded-2xl overflow-hidden shadow-lg group ${image.colSpan || ''} ${image.rowSpan || ''}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
