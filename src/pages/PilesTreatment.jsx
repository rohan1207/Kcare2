import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
import ProcedureTimeline from '../components/Timeline';

const ServicePageLayout = ({ service }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
          >
            <service.Icon className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-sky-100/90"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {service.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-3xl font-bold text-sky-900 mb-6 font-display">Benefits of Laser Hemorrhoidoplasty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-teal-100 rounded-full">
                      <ShieldCheck className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technology Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">Advanced Laser Technology</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{service.technology.description}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (CTA & Info) */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-sky-100/80"
            >
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Get Lasting Relief</h3>
              <p className="text-center text-gray-600 mb-6">Schedule a private consultation to discuss our advanced, painless treatments.</p>
              <Link 
                to="/contact"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-700 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-sky-800 hover:to-teal-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-sky-50/70 p-8 rounded-2xl border border-sky-100/90"
            >
              <h3 className="text-xl font-bold text-sky-900 mb-4">Why Choose K-Care?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Stethoscope className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />Expert surgical team with years of experience.</li>
                <li className="flex items-start"><HeartPulse className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />Patient-centric approach with compassionate care.</li>
                <li className="flex items-start"><ShieldCheck className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />State-of-the-art technology for better outcomes.</li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>

      {/* Timeline Section */}
      {service.timeline && <ProcedureTimeline steps={service.timeline} />}
    </div>
  );
};

const PilesTreatmentPage = () => {
  const serviceData = {
    title: "Piles (Hemorrhoids) Treatment",
    subtitle: "Advanced laser solutions for a common and painful condition.",
    image: "/piles.jpg",
    Icon: Droplets,
    overview: [
      "Piles, or hemorrhoids, are swollen veins in the lower rectum and anus. They are a very common condition that can cause pain, itching, and bleeding, significantly affecting quality of life. While many cases can be managed with lifestyle changes, persistent or severe hemorrhoids require medical intervention.",
      "We specialize in Laser Hemorrhoidoplasty (LHP), a minimally invasive procedure that offers a quick and virtually painless solution. This advanced technique avoids the cuts and stitches of traditional surgery, leading to a much faster recovery."
    ],
    benefits: [
      {
        title: "Painless & Bloodless",
        description: "The laser procedure is precise, involves no cutting, and results in minimal to no post-operative pain."
      },
      {
        title: "Rapid Recovery",
        description: "Patients can typically resume their normal daily activities within 24-48 hours."
      },
      {
        title: "No Open Wounds",
        description: "Unlike traditional surgery, LHP leaves no open wounds, drastically reducing the risk of infection."
      },
      {
        title: "High Success Rate",
        description: "Laser treatment is highly effective for various grades of hemorrhoids, with a very low rate of recurrence."
      }
    ],
    technology: {
      description: "Laser Hemorrhoidoplasty (LHP) uses a specialized radial fiber to deliver laser energy directly into the hemorrhoidal pile. This energy seals the blood vessels from within, causing the hemorrhoid to shrink and eventually disappear. The procedure is performed with high precision, preserving the sensitive anal sphincter muscle and mucosa, which is why it is so well-tolerated by patients."
    },
    timeline: [
      {
        title: "Consultation and Proctoscopy",
        description: "A careful examination and proctoscopy are performed to accurately grade the hemorrhoids and confirm the diagnosis."
      },
      {
        title: "Personalized Treatment Plan",
        description: "We discuss your options and determine if Laser Hemorrhoidoplasty (LHP) is the right choice for your specific condition."
      },
      {
        title: "Day-Care Procedure",
        description: "The LHP procedure is performed in a day-care setting under short anesthesia and is completed in about 20-30 minutes."
      },
      {
        title: "Post-Procedure Observation",
        description: "You will be monitored for a few hours before being discharged home with medication and dietary advice."
      },
      {
        title: "Quick Return to Normalcy",
        description: "Experience minimal discomfort and return to your work and regular life within 1-2 days."
      },
      {
        title: "Follow-Up for Complete Care",
        description: "A follow-up appointment ensures everything has healed perfectly and provides an opportunity to discuss long-term prevention."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PilesTreatmentPage;