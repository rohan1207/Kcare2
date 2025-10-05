import ContactInfo from "../components/ContactInfo";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <motion.div
      className="container mx-auto p-6 bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Map & Contact Info */}
      <div className="relative w-full h-[400px] mb-24">
        <div
          className="w-full h-full rounded-lg cursor-pointer relative bg-stone-200"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Camp,+Pune,+Maharashtra",
              "_blank"
            )
          }
        >
          {isMapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-stone-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-stone-600 font-light tracking-widest">
                  LOADING MAP...
                </p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 z-10 rounded-lg"></div>
          <iframe
            className="w-full h-full rounded-lg relative z-0 filter"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.89122212101!2d73.863997!3d18.519568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06546666667%3A0x43a3d367b3a9ac19!2sCamp%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620201394019!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoading(false)}
          ></iframe>
        </div>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-2xl w-[90%] max-w-4xl z-20 border border-teal-200">
          <h2 className="text-2xl font-display tracking-[0.2em] mb-4 text-center text-teal-700">
            Kcare Clinic
          </h2>
          <ContactInfo />
        </div>
      </div>

      {/* Contact Form & Opening Hours */}
      <div className="mt-20 pt-10 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-display tracking-[0.2em] mb-2 text-stone-800">
            SCHEDULE AN APPOINTMENT
          </h2>
          <div className="w-24 h-px bg-teal-500 mb-8"></div>
          <ContactForm />
        </div>
        <div className="pt-16">
          <div className="bg-teal-50 p-8 border border-teal-200 rounded-lg">
            <h2 className="text-2xl font-display tracking-[0.2em] mb-2 text-stone-800">
              OPENING HOURS
            </h2>
            <div className="w-24 h-px bg-stone-300 mb-6"></div>
            <div className="space-y-3 text-stone-700 font-light">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 am – 7:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 am – 3:00 pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Off Day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
