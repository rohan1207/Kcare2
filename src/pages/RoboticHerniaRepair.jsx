import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Consult Our Hernia Specialist</h3>
              <p className="text-center text-gray-600 mb-6">Get a durable, modern repair for your hernia. Contact us to learn more.</p>
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

const RoboticHerniaRepairPage = () => {
  const serviceData = {
    title: "Robotic Hernia Repair",
    subtitle: "The most advanced and durable solution for complex hernias.",
    image: "/hernia.webp",
    Icon: Shield,
    overview: [
      "A hernia occurs when an organ pushes through a weak spot in the surrounding muscle or connective tissue. While some hernias are simple, others can be large, complex, or recurrent, requiring a more advanced surgical approach.",
      "Robotic hernia repair represents the pinnacle of minimally invasive surgery. Using the da Vinci system, we can perform highly complex repairs with unmatched precision, leading to a stronger, more durable result and a smoother recovery for the patient."
    ],
    benefits: [
      {
        title: "Unmatched Precision",
        description: "The robotic platform provides 3D visualization and wristed instruments, allowing for intricate suturing and mesh placement."
      },
      {
        title: "Reduced Recurrence Rate",
        description: "The strength and precision of the robotic repair can lead to a lower chance of the hernia returning."
      },
      {
        title: "Minimal Pain & Scarring",
        description: "Like laparoscopy, the procedure is performed through tiny incisions, resulting in less pain and better cosmetic outcomes."
      },
      {
        title: "Faster Return to Activity",
        description: "Patients can often return to non-strenuous activities faster than with traditional open surgery."
      }
    ],
    technology: {
      description: "The da Vinci Surgical System is the cornerstone of our robotic hernia repair. I control the robotic arms from a console, translating my movements into extremely precise actions inside the body. This technology allows us to dissect tissues and place surgical mesh with a level of accuracy that is beyond the capability of the human hand alone, which is especially beneficial for complex abdominal wall reconstructions."
    },
    timeline: [
      {
        title: "Comprehensive Evaluation",
        description: "Your journey starts with a physical exam and often imaging (like a CT scan) to understand the size and complexity of the hernia."
      },
      {
        title: "Surgical Planning",
        description: "We determine the best approach for your specific hernia, planning the robotic procedure for optimal mesh placement and reinforcement."
      },
      {
        title: "Pre-Operative Anesthesia Check",
        description: "You will have a consultation with our anesthesia team to ensure you are fully prepared and safe for surgery."
      },
      {
        title: "Robotic-Assisted Surgery",
        description: "The hernia is repaired using the da Vinci system through small incisions, allowing for a meticulous and durable reconstruction of the abdominal wall."
      },
      {
        title: "Post-Operative Recovery",
        description: "You'll be monitored in our recovery unit. Most patients are discharged within 1-2 days, depending on the complexity of the repair."
      },
      {
        title: "Guided Return to Activity",
        description: "We provide a structured plan for your recovery, including when to resume walking, work, and exercise to ensure a strong, lasting repair."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default RoboticHerniaRepairPage;