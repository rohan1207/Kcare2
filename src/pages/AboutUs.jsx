import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Home,
  Calendar,
  Clock,
  Eye,
  Heart,
  Shield,
  Activity,
  Users,
  UserCheck,
  MapPin,
  Award,
  CheckCircle,
} from "react-feather";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("founder");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const specialties = [
    "DIABETIC FOOT",
    "BREAST",
    "THYROID",
    "FISSURE",
    "PILES",
    "FISTULA",
    "APPENDIX",
    "HERNIA",
    "GALL BLADDER",
    "HYDROCELE",
    "PILONIDAL SINUS",
    "RECTAL PROLAPSE",
    "PHYMOSIS",
    "ABSCESS",
    "CYST",
    "Robotic Surgery",
    "Laparoscopic Surgery",
  ];

  const facilities = [
    {
      icon: Activity,
      title: "Advanced Robotic Surgery Suite",
      desc: "Utilizing the latest in robotic technology for precision and minimally invasive procedures.",
    },
    {
      icon: Eye,
      title: "State-of-the-art Laparoscopic Equipment",
      desc: "High-definition imaging and instruments for complex laparoscopic surgeries.",
    },
    {
      icon: Home,
      title: "Modern Operation Theaters",
      desc: "Equipped with advanced technology to handle a wide range of surgical procedures.",
    },
    {
      icon: Users,
      title: "Comprehensive Diagnostic Lab",
      desc: "In-house laboratory for fast and accurate diagnostic results.",
    },
    {
      icon: Shield,
      title: "24/7 Emergency & Trauma Care",
      desc: "Dedicated team and infrastructure for immediate response to emergencies.",
    },
    {
      icon: Heart,
      title: "Comfortable Recovery Rooms",
      desc: "Patient-centric rooms to ensure a comfortable and speedy recovery.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", icon: Calendar },
    { number: "10k+", label: "Successful Surgeries", icon: Users },
    { number: "11+", label: "Years as Specialist", icon: UserCheck },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-sky-800 to-teal-700 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 sm:mt-20 mt-5"
            >
              <Heart className="w-5 h-5 mr-2 text-sky-200" />
              <span className="text-sm font-medium">
                Advanced Surgical Care
              </span>
            </motion.div>{" "}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display"
            >
              About <span className="text-sky-200">Kcare Clinic</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-sky-200/90"
            >
              Pioneering the future of surgical care with robotic and
              laparoscopic expertise.
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-sky-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-sky-700 mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-sky-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sky-800/90 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {[
              { id: "founder", label: "Founder" },
              { id: "overview", label: "Overview" },
              { id: "vision", label: "Vision & Mission" },
              { id: "facilities", label: "Facilities" },
              { id: "team", label: "Our Team" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-700 to-teal-600 text-white shadow-lg"
                    : "bg-sky-50/70 text-sky-800 hover:bg-sky-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full"
            >
              {" "}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-8 font-display">
                  About <span className="text-teal-600">Kcare Clinic</span>
                </h2>
                <div className="flex-grow space-y-6 text-sky-800/90 leading-relaxed">
                  <p className="text-lg">
                    Kcare Clinic is a premier surgical facility in Pune,
                    specializing in advanced robotic and laparoscopic
                    surgeries. Our commitment is to provide patient-centric
                    care using cutting-edge technology, ensuring better
                    outcomes and faster recovery.
                  </p>
                </div>{" "}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-teal-500/5 rounded-xl p-6 border border-teal-500/20 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="bg-white/80 rounded-full p-3 mb-3">
                      <MapPin className="w-6 h-6 text-sky-700" />
                    </div>
                    <h3 className="font-semibold text-sky-900 mb-2">
                      Location
                    </h3>
                    <p className="text-sky-800/90">Pune, Maharashtra</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-teal-500/5 rounded-xl p-6 border border-teal-500/20 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="bg-white/80 rounded-full p-3 mb-3">
                      <Award className="w-6 h-6 text-sky-700" />
                    </div>
                    <h3 className="font-semibold text-sky-900 mb-2">
                      Accreditation
                    </h3>
                    <p className="text-sky-800/90">NABH Accredited Facility</p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-sky-800 to-teal-700 rounded-3xl p-8 text-white h-full flex flex-col">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm flex-grow">
                    <h3 className="text-2xl font-bold mb-6 font-display">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Pioneers in Robotic & Laparoscopic Surgery",
                        "Led by highly experienced surgeons",
                        "State-of-the-art medical equipment",
                        "Affordable healthcare packages",
                        "Cashless facility for all mediclaims",
                        "24/7 emergency and ambulance services",
                        "Comprehensive diagnostic services",
                        "Patient-centric care with compassion",
                        "Hygienic and comfortable environment",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-sky-200 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Vision & Mission Tab */}
          {activeTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-sky-800 to-teal-700 backdrop-blur-lg rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-8">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-display">
                      Our Vision
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                      To be a leading center of excellence in surgical care,
                      renowned for our expertise in robotic and laparoscopic
                      procedures, and our unwavering commitment to patient
                      well-being.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-sky-100/80 relative overflow-hidden"
                >
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-sky-100/50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-200/30 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    {" "}
                    <div className="bg-gradient-to-br from-sky-700 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mb-8">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-sky-900 font-display">
                      Our Mission & Objectives
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-sky-800/90">
                      Our mission is to provide accessible, affordable, and
                      high-quality surgical care. We aim to leverage advanced
                      technology to minimize patient discomfort, reduce
                      recovery time, and achieve the best possible clinical
                      outcomes, always adhering to the highest ethical
                      standards.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-sky-100/80 overflow-hidden"
              >
                <div className="relative p-8 sm:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 to-white"></div>
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-8 text-center font-display">
                      Our Core Values
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          icon: Heart,
                          title: "Compassion",
                          desc: "Caring with empathy",
                          gradient: "from-sky-700 to-teal-600",
                          bg: "from-sky-100/50 to-teal-100/50",
                        },
                        {
                          icon: Shield,
                          title: "Safety",
                          desc: "Ensuring patient safety",
                          gradient: "from-sky-600 to-teal-500",
                          bg: "from-sky-100/50 to-teal-100/50",
                        },
                        {
                          icon: Award,
                          title: "Excellence",
                          desc: "Striving for the best",
                          gradient: "from-sky-700 to-teal-600",
                          bg: "from-sky-100/50 to-teal-100/50",
                        },
                        {
                          icon: Users,
                          title: "Respect",
                          desc: "Treating all with dignity",
                          gradient: "from-sky-600 to-teal-500",
                          bg: "from-sky-100/50 to-teal-100/50",
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                          }}
                          className="group relative rounded-2xl p-6 transition-all duration-300"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${value.bg} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                          <div className="relative">
                            <div
                              className={`bg-gradient-to-br ${value.gradient} rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}
                            >
                              <value.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-sky-900 mb-2 text-center">
                              {value.title}
                            </h4>
                            <p className="text-sm text-sky-800/90 text-center">
                              {value.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4 font-display">
                  World-Class{" "}
                  <span className="text-teal-600">Facilities & Services</span>
                </h2>
                <p className="text-lg text-sky-800/90 max-w-3xl mx-auto">
                  State-of-the-art infrastructure and advanced medical equipment
                  to provide the best possible care
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-sky-900 mb-6 font-display">
                    Key Facilities
                  </h3>
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-sky-100/80 hover:shadow-md transition-all"
                    >
                      <div className="bg-sky-100/70 p-3 rounded-xl">
                        <facility.icon className="w-6 h-6 text-sky-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sky-900 mb-1">
                          {facility.title}
                        </h4>
                        <p className="text-sky-800/90 text-sm">
                          {facility.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-sky-900 mb-6 font-display">
                    Our Specialties
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-sky-50/70 to-sky-100/70 rounded-3xl p-8"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {specialties.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-sky-900 text-sm sm:text-base">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
          {/* Founder & Team Tab */}
          {(activeTab === "founder" || activeTab === "team") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4 font-display">
                  Our Expert Team
                </h2>
                <p className="text-lg text-sky-800/90 max-w-3xl mx-auto">
                  Led by our founder, our team is composed of dedicated professionals committed to excellence in surgical care.
                </p>
              </div>
              <OurTeam />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Contact Strip */}
      <div className="mt-16 sm:mt-24 bg-gradient-to-r from-sky-50/70 to-teal-50/70 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F04E30' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-900 mb-3 sm:mb-4 font-display">
            Have any questions or need a consultation?
          </h3>
          <p className="text-sky-800/90 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Our medical experts are here to help. Get in touch with us for any
            medical queries or appointment scheduling.
          </p>

          <Link
            to="/contact"
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-700 to-teal-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:from-sky-800 hover:to-teal-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
