import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scan, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h2 className="text-3xl font-bold text-sky-900 mb-6 font-display">Advantages of the Laparoscopic Approach</h2>
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
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">Keyhole Surgery Explained</h2>
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Schedule a Consultation</h3>
              <p className="text-center text-gray-600 mb-6">Discuss your symptoms and learn if laparoscopic surgery is right for you.</p>
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

const LaparoscopicCholecystectomyPage = () => {
  const serviceData = {
    title: "Laparoscopic Cholecystectomy",
    subtitle: "The gold standard for gallbladder removal.",
    image: "/gallbladder.jpg",
    Icon: Scan,
    overview: [
      "The gallbladder is a small organ that stores bile, a digestive fluid. Gallstones can form in the gallbladder, leading to inflammation, pain, and other complications. When this happens, surgical removal of the gallbladder (cholecystectomy) is the most effective treatment.",
      "Laparoscopic cholecystectomy is a minimally invasive surgical procedure that has become the gold standard for gallbladder removal. It offers significant advantages over traditional open surgery, including a faster recovery and less pain."
    ],
    benefits: [
      {
        title: "Minimal Pain",
        description: "Patients experience significantly less postoperative pain compared to open surgery."
      },
      {
        title: "Short Hospital Stay",
        description: "Most patients can go home the same day or the day after the procedure."
      },
      {
        title: "Quick Recovery",
        description: "You can expect to return to your normal daily activities within a week."
      },
      {
        title: "Excellent Cosmetic Results",
        description: "The small 'keyhole' incisions result in minimal and often barely visible scars."
      }
    ],
    technology: {
      description: "The procedure is performed using a laparoscope, a thin tube with a high-definition camera, which is inserted through a small incision near the navel. The abdomen is inflated with carbon dioxide gas to create space for the surgeon to work. Specialized instruments are inserted through 2-3 other small incisions to carefully detach and remove the gallbladder. The surgeon is guided by the magnified, clear view on a video monitor, allowing for extreme precision."
    },
    timeline: [
      {
        title: "Consultation & Ultrasound",
        description: "Your symptoms are evaluated, and an abdominal ultrasound is performed to confirm the presence of gallstones and assess the gallbladder."
      },
      {
        title: "Pre-Operative Assessment",
        description: "A fitness check, including blood tests and an anesthesia consultation, is done to ensure you are ready for surgery."
      },
      {
        title: "The Laparoscopic Procedure",
        description: "The minimally invasive surgery is performed under general anesthesia and typically takes about 45-90 minutes."
      },
      {
        title: "Post-Anesthesia Care",
        description: "You will be monitored in a recovery unit as you wake up from anesthesia. Pain is managed with medication."
      },
      {
        title: "Discharge & Home Care",
        description: "Most patients are discharged within 24 hours with instructions for wound care, diet, and a gradual return to activity."
      },
      {
        title: "Follow-Up Visit",
        description: "A follow-up appointment is scheduled about a week after surgery to check on your recovery and ensure the incision sites are healing well."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaparoscopicCholecystectomyPage;