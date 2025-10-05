import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Spline, ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
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
              <h2 className="text-3xl font-bold text-sky-900 mb-6 font-display">Advantages of Laser Fistula Repair</h2>
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
              <h2 className="text-3xl font-bold text-sky-900 mb-4 font-display">Advanced FiLaC® Technology</h2>
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
              <h3 className="text-2xl font-bold text-sky-900 mb-6 text-center">Heal Completely</h3>
              <p className="text-center text-gray-600 mb-6">Our sphincter-preserving techniques offer the best chance for a full recovery.</p>
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

const FistulaTreatmentPage = () => {
  const serviceData = {
    title: "Fistula Treatment",
    subtitle: "Sphincter-preserving laser surgery for a complex condition.",
    image: "/fistula.jpg",
    Icon: Spline,
    overview: [
      "An anal fistula is an abnormal tunnel that forms between the inside of the anus and the skin outside. It is a complex condition that does not heal on its own and requires surgical treatment. Traditional surgeries can carry a risk of damage to the anal sphincter muscles, which control bowel movements.",
      "We specialize in advanced, sphincter-preserving laser surgery (FiLaC® - Fistula-tract Laser Closure). This minimally invasive technique effectively closes the fistula tract from the inside out, preserving muscle function and ensuring a high success rate with minimal pain."
    ],
    benefits: [
      {
        title: "Sphincter Preservation",
        description: "Our primary goal is to heal the fistula while completely preserving the integrity of the anal sphincter muscles, eliminating the risk of incontinence."
      },
      {
        title: "Minimal Pain & Discomfort",
        description: "The laser procedure is gentle, involving no large cuts, which translates to significantly less postoperative pain."
      },
      {
        title: "Faster Healing & Recovery",
        description: "Patients experience a much quicker recovery and can return to normal life faster than with conventional surgery."
      },
      {
        title: "High Success Rate",
        description: "FiLaC® has demonstrated high success rates for even complex fistulas, offering a reliable and definitive cure."
      }
    ],
    technology: {
      description: "The FiLaC® procedure involves passing a radial laser fiber through the fistula tract. The laser's energy is applied circumferentially to the tract wall, causing the tissue to shrink and close in a controlled manner. This process destroys the fistula epithelium and seals the tract without the need for cutting or stitches, making it an exceptionally safe and effective treatment."
    },
    timeline: [
      {
        title: "Consultation & Advanced Imaging",
        description: "A clinical evaluation is followed by an MRI or fistulogram to precisely map the fistula's path, which is crucial for successful treatment."
      },
      {
        title: "Strategic Treatment Planning",
        description: "We review the imaging to plan the procedure, confirming that a sphincter-preserving laser approach like FiLaC® is the optimal choice."
      },
      {
        title: "Minimally Invasive Laser Procedure",
        description: "The FiLaC® procedure is performed under anesthesia as a day-care case, gently sealing the fistula tract from within."
      },
      {
        title: "Post-Operative Care",
        description: "After a brief recovery period, you are discharged with instructions for local wound care and hygiene to support healing."
      },
      {
        title: "Healing Phase",
        description: "The treated tract heals gradually over several weeks. You will be able to resume most activities with minimal discomfort."
      },
      {
        title: "Follow-Up & Confirmation of Closure",
        description: "Follow-up visits are scheduled to monitor the healing process and confirm that the fistula has closed completely, ensuring a lasting cure."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default FistulaTreatmentPage;