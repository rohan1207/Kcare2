import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h2 className="text-3xl font-bold text-sky-900 mb-6 font-display">Advantages of Laser Treatment</h2>
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
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">The Laser Advantage</h2>
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Find Relief Today</h3>
              <p className="text-center text-gray-600 mb-6">Don't endure the pain. Schedule a consultation for a lasting solution.</p>
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

const LaserFissureTreatmentPage = () => {
  const serviceData = {
    title: "Laser Fissure Treatment",
    subtitle: "A minimally invasive, highly effective solution for anal fissures.",
    image: "/fissure.jpg",
    Icon: Zap,
    overview: [
      "An anal fissure is a small tear in the lining of the anus, which can cause significant pain and bleeding during bowel movements. While many fissures heal with conservative treatment, chronic fissures often require surgical intervention.",
      "Laser Fissure Treatment, specifically Laser Sphincterotomy, is a state-of-the-art procedure that offers a precise and minimally invasive alternative to traditional surgery. It provides rapid pain relief and promotes quick healing with minimal side effects."
    ],
    benefits: [
      {
        title: "Minimally Invasive",
        description: "No cuts or stitches are required, resulting in less pain and a much faster recovery period."
      },
      {
        title: "High Precision",
        description: "The laser precisely targets the internal sphincter muscle, reducing spasm without damaging surrounding tissue."
      },
      {
        title: "Low Risk of Incontinence",
        description: "Laser surgery offers better control and significantly lowers the risk of incontinence compared to conventional surgery."
      },
      {
        title: "Quick Procedure",
        description: "The treatment is typically completed as a day-care procedure, allowing you to return home the same day."
      }
    ],
    technology: {
      description: "We use a sophisticated diode laser to perform the Lateral Internal Sphincterotomy (LIS). The laser energy is delivered through a fine probe, allowing for a highly controlled and targeted release of the internal anal sphincter. This reduces the hypertonia (excessive muscle tone) that prevents the fissure from healing, all without the need for a scalpel. The result is immediate relief and a faster, more comfortable recovery."
    },
    timeline: [
      {
        title: "Consultation and Diagnosis",
        description: "A gentle physical examination is conducted to confirm the diagnosis of a chronic anal fissure and rule out other conditions."
      },
      {
        title: "Trial of Conservative Management",
        description: "We may first recommend dietary changes, topical creams, and sitz baths. If these fail, laser surgery is considered."
      },
      {
        title: "Pre-Procedure Assessment",
        description: "A brief assessment is done to ensure you are fit for the day-care procedure, which is performed under short anesthesia."
      },
      {
        title: "Laser Sphincterotomy",
        description: "The minimally invasive laser procedure is performed, taking only about 15-20 minutes to complete."
      },
      {
        title: "Immediate Post-Op Care",
        description: "After a short observation period, you are discharged on the same day with instructions for pain management and sitz baths."
      },
      {
        title: "Full Recovery & Follow-Up",
        description: "Most patients return to normal activities within a few days. A follow-up visit ensures complete healing and provides long-term dietary advice."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaserFissureTreatmentPage;