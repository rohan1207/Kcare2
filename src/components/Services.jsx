import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  {
    title: "Diabetic Foot",
    image: "/diabetic_foot.jpg",
    description: "Advanced care for diabetic foot complications with precision healing and preventive strategies.",
    category: "Specialized Care",
    duration: "2-3 hours"
  },
  {
    title: "Breast",
    image: "/breast.jpg",
    description: "Comprehensive breast surgery with minimally invasive techniques for optimal outcomes.",
    category: "Oncology",
    duration: "1-2 hours"
  },
  {
    title: "Thyroid",
    image: "/thyroid.jpg",
    description: "Expert thyroid procedures using advanced robotic technology for precise results.",
    category: "Endocrine",
    duration: "1.5-2 hours"
  },
  {
    title: "Fissure",
    image: "/fissure.jpg",
    description: "Modern treatment approaches for anal fissures with minimal discomfort.",
    category: "Proctology",
    duration: "30-45 mins"
  },
  {
    title: "Piles",
    image: "/piles.jpg",
    description: "Advanced hemorrhoid treatment with quick recovery time.",
    category: "Proctology",
    duration: "45-60 mins"
  },
  {
    title: "Fistula",
    image: "/fistula.jpg",
    description: "Specialized fistula procedures using latest surgical techniques.",
    category: "Proctology",
    duration: "1-1.5 hours"
  },
  {
    title: "Appendix",
    image: "/appendix.jpg",
    description: "Laparoscopic appendectomy with minimal scarring and faster healing.",
    category: "General Surgery",
    duration: "45-60 mins"
  },
  {
    title: "Hernia",
    image: "/hernia.webp",
    description: "State-of-the-art hernia repair with robotic precision.",
    category: "General Surgery",
    duration: "1-2 hours"
  },
  {
    title: "Gall Bladder",
    image: "/gall_bladder.jpg",
    description: "Advanced laparoscopic gallbladder surgery with reduced recovery time.",
    category: "General Surgery",
    duration: "1-1.5 hours"
  },
  {
    title: "Hydrocele",
    image: "/hydrocele.jpg",
    description: "Modern hydrocele treatment with minimal invasive approach.",
    category: "Urology",
    duration: "45-60 mins"
  },
  {
    title: "Pilonidal Sinus",
    image: "/pilonidal_sinus.jpg",
    description: "Expert treatment of pilonidal sinus with focus on prevention.",
    category: "Specialized Care",
    duration: "1-1.5 hours"
  },
  {
    title: "Rectal Prolapse",
    image: "/rectal_prolapse.jpg",
    description: "Comprehensive care for rectal prolapse using advanced techniques.",
    category: "Proctology",
    duration: "2-3 hours"
  },
  {
    title: "Phymosis",
    image: "/Phymosis.png",
    description: "Gentle and effective phimosis treatment with expert care.",
    category: "Urology",
    duration: "30-45 mins"
  },
  {
    title: "Abscess",
    image: "/Abscess.jpg",
    description: "Quick and effective abscess treatment with proper healing support.",
    category: "General Surgery",
    duration: "20-30 mins"
  },
  {
    title: "Cyst",
    image: "/cyst.jpg",
    description: "Professional cyst removal with minimal scarring and recovery time.",
    category: "General Surgery",
    duration: "30-45 mins"
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Image with gradient */}
      <div className="relative aspect-[4/5]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Default state content */}
        <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          <span className="inline-flex rounded-full bg-teal-500/90 text-white backdrop-blur-sm px-3 py-1 text-xs font-medium mb-3">
            {service.category}
          </span>
          <h3 className="text-white text-2xl font-semibold tracking-tight drop-shadow-lg">
            {service.title}
          </h3>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="inline-flex rounded-full bg-teal-500/90 text-white backdrop-blur-sm px-3 py-1 font-medium">
              {service.category}
            </span>
            <span className="text-teal-300 font-medium">{service.duration}</span>
          </div>
          <h3 className="text-white text-2xl font-semibold tracking-tight mb-2">
            {service.title}
          </h3>
          <p className="text-slate-300 leading-relaxed line-clamp-2 text-sm mb-4">
            {service.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start rounded-full bg-teal-500 text-white px-4 py-2 text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-xl"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Static circle button - visible in default state */}
        <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-white flex items-center justify-center transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          <ArrowUpRight className="h-6 w-6 text-slate-900" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [visibleRows, setVisibleRows] = useState(2);
  
  const ITEMS_PER_ROW = 3;
  const visibleServices = SERVICES.slice(0, visibleRows * ITEMS_PER_ROW);
  const hasMore = visibleServices.length < SERVICES.length;

  const handleViewMore = () => {
    if (visibleRows * ITEMS_PER_ROW < SERVICES.length) {
      setVisibleRows(prev => prev + 1);
    }
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
            Advanced Surgical Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Robotic precision. Minimal invasion. Faster recovery. 
            <br className="hidden sm:block" />
            Experience world-class surgical care with cutting-edge technology.
          </p>
        </motion.div>

        {/* Cards Grid - 3 per row */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <button
              onClick={handleViewMore}
              className="group inline-flex items-center gap-3 rounded-full bg-white border-2 border-slate-200 px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white hover:shadow-xl hover:-translate-y-1"
            >
              View More Services
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              Showing {visibleServices.length} of {SERVICES.length} services
            </p>
          </motion.div>
        )}

        {/* Decorative element */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-teal-50/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
      </div>
    </section>
  );
}