import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Urgent Care Available</h3>
              <p className="text-center text-gray-600 mb-6">Abscesses require prompt medical attention. Contact us for immediate care.</p>
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

const AbscessDrainagePage = () => {
  const serviceData = {
    title: "Abscess Drainage",
    subtitle: "Prompt, effective relief from painful skin and soft tissue infections.",
    image: "/Abscess.jpg",
    Icon: HeartPulse,
    overview: [
      "An abscess is a tender, pus-filled pocket that forms in tissue, usually due to a bacterial infection. It can be painful, swollen, and warm to the touch. Attempting to drain an abscess at home is dangerous and can worsen the infection.",
      "Professional incision and drainage (I&D) is the required medical treatment. This procedure involves safely opening the abscess to allow the pus to drain, which provides immediate pain relief and is the first step toward healing."
    ],
    benefits: [
      {
        title: "Immediate Pain Relief",
        description: "Draining the pus instantly relieves the pressure and pain caused by the abscess."
      },
      {
        title: "Prevents Spread of Infection",
        description: "Proper drainage and cleaning prevent the bacteria from spreading to other parts of the body."
      },
      {
        title: "Promotes Faster Healing",
        description: "Once drained, the body can begin the process of healing the affected tissue effectively."
      },
      {
        title: "Reduces Scarring",
        description: "Professional drainage is done with precision to minimize tissue damage and subsequent scarring."
      }
    ],
    technology: {
      description: "For deeper or more complex abscesses, we use ultrasound guidance to precisely locate the fluid pocket. This ensures that the incision is made in the optimal location for complete drainage, improving the effectiveness of the procedure and minimizing trauma to surrounding healthy tissue. The procedure is performed under local anesthesia in a sterile environment to ensure it is both painless and safe."
    },
    timeline: [
      {
        title: "Initial Consultation & Diagnosis",
        description: "Our medical team will conduct a thorough examination of the affected area to confirm the presence of an abscess and determine the best course of action."
      },
      {
        title: "Pre-Procedure Preparation",
        description: "The area is cleaned with an antiseptic solution, and a local anesthetic is administered to ensure the procedure is completely painless."
      },
      {
        title: "Incision & Drainage (I&D)",
        description: "A small, precise incision is made over the abscess, allowing the pus to drain completely. For deeper abscesses, ultrasound guidance may be used."
      },
      {
        title: "Wound Care & Packing",
        description: "The cavity is irrigated with a sterile solution. In some cases, a sterile packing is placed inside to allow it to continue draining and heal from the inside out."
      },
      {
        title: "Post-Procedure Instructions",
        description: "You will receive detailed instructions on how to care for the wound at home, including dressing changes and signs of complications to watch for."
      },
      {
        title: "Follow-up & Recovery",
        description: "A follow-up appointment is scheduled to monitor healing and remove any packing. Most patients experience rapid improvement and a smooth recovery."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default AbscessDrainagePage;