import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footprints, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h2 className="text-3xl font-bold text-sky-900 mb-6 font-display">Key Benefits</h2>
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
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">Advanced Technology</h2>
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Book a Consultation</h3>
              <p className="text-center text-gray-600 mb-6">Take the first step towards better health. Our team is here to help.</p>
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

const DiabeticFootCarePage = () => {
  const serviceData = {
    title: "Diabetic Foot Care",
    subtitle: "Specialized care to protect your foundation and preserve mobility.",
    image: "/diabetic_foot.jpg",
    Icon: Footprints,
    overview: [
      "Diabetes can have a significant impact on foot health, leading to complications like nerve damage (neuropathy) and poor circulation. These issues make the feet vulnerable to sores, ulcers, and infections that can be difficult to heal.",
      "Our Diabetic Foot Care program is a comprehensive service designed to manage and prevent these complications. We focus on early detection, advanced wound care, and patient education to reduce the risk of serious outcomes, including amputation."
    ],
    benefits: [
      {
        title: "Prevent Amputation",
        description: "Proactive care and advanced treatments drastically reduce the risk of limb loss, preserving your independence."
      },
      {
        title: "Promote Faster Healing",
        description: "We utilize specialized techniques to create an optimal healing environment for chronic wounds and ulcers."
      },
      {
        title: "Pain & Risk Reduction",
        description: "Regular check-ups and proper care minimize the risk of infection and alleviate discomfort from neuropathy."
      },
      {
        title: "Improve Quality of Life",
        description: "By keeping your feet healthy, we help you stay active, mobile, and engaged in your daily life."
      }
    ],
    technology: {
      description: "Our clinic is equipped with advanced wound care technologies, including debridement tools, specialized dressings, and non-invasive vascular assessments to monitor blood flow. For severe cases, we coordinate with facilities offering Hyperbaric Oxygen Therapy (HBOT), a treatment that enhances the body's natural healing processes by delivering 100% oxygen in a pressurized environment."
    },
    timeline: [
        {
            title: "Comprehensive Foot Examination",
            description: "A detailed assessment of nerve function, circulation, and skin integrity to identify risk factors and existing issues."
        },
        {
            title: "Personalized Management Plan",
            description: "Based on the assessment, we create a tailored plan including wound care protocols, footwear recommendations, and glucose management strategies."
        },
        {
            title: "Advanced Wound Care & Debridement",
            description: "For existing ulcers, we perform meticulous cleaning and debridement to remove non-viable tissue and promote a healthy wound bed."
        },
        {
            title: "Offloading & Pressure Reduction",
            description: "Customized offloading devices or footwear are provided to relieve pressure from vulnerable areas, preventing ulcer formation and aiding healing."
        },
        {
            title: "Patient Education & Self-Care Training",
            description: "We empower you with the knowledge to perform daily foot checks and manage your foot health proactively at home."
        },
        {
            title: "Long-Term Monitoring & Prevention",
            description: "Regular follow-up appointments are scheduled to monitor progress, prevent recurrence, and ensure lasting foot health."
        }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default DiabeticFootCarePage;