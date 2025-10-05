import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUserMd, FaClock } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../config";
import Swal from "sweetalert2";

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
    message: "",
  });

  const departments = [
    "General & Laparoscopic Surgery",
    "Cancer Surgery",
    "Urology",
    "Gastroenterology",
    "Robotic Surgery",
  ];

  const doctors = {
    "General & Laparoscopic Surgery": ["Dr. Pramod Kadam", "Dr. Mahesh Sinnarkar"],
    "Cancer Surgery": ["Dr. Chetan Deshmukh", "Dr. Priya Sharma"],
    "Urology": ["Dr. Suraj Lunawat", "Dr. Anil Gupta"],
    "Gastroenterology": ["Dr. Viraj Shinde", "Dr. Sunita Singh"],
    "Robotic Surgery": ["Dr. Pramod Kadam"],
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newState = { ...prev, [name]: value };
      // Reset doctor if department changes
      if (name === "department") {
        newState.doctor = "";
      }
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/appointments`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.doctor,
        appointmentDate: formData.date,
        appointmentTime: formData.time,
        message: formData.message,
      });

      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Appointment booked successfully. Thank you!",
          confirmButtonColor: "#f59e0b", // amber-500
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          department: "",
          doctor: "",
          message: "",
        });
        setStep(1);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        confirmButtonColor: "#f59e0b", // amber-500
      });
    }
  };

  const nextStep = () => {
    let isValid = false;
    if (step === 1) {
      if (formData.name && formData.email && formData.phone) {
        isValid = true;
      }
    } else if (step === 2) {
      if (formData.department && formData.doctor) {
        isValid = true;
      }
    }

    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    } else {
      Swal.fire({
        icon: "error",
        title: "Incomplete Form",
        text: "Please fill out all required fields to continue.",
        confirmButtonColor: "#f59e0b", // amber-500
      });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-24 pb-12 px-4 font-sans"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4"
        >
          Book Your Appointment
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-stone-600 text-lg"
        >
          Schedule a consultation with our expert doctors.
        </motion.p>
      </div>

      {/* Progress Steps */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[
            { step: 1, label: "Personal" },
            { step: 2, label: "Service" },
            { step: 3, label: "Time" },
          ].map((item, index) => (
            <React.Fragment key={item.step}>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.step * 0.1 }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    step >= item.step
                      ? "bg-amber-500 text-white"
                      : "bg-stone-200 text-stone-500"
                  }`}
                >
                  {item.step}
                </div>
                <span
                  className={`ml-3 font-semibold ${
                    step >= item.step ? "text-amber-600" : "text-stone-500"
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
              {index < 2 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                    step > item.step ? "bg-amber-500" : "bg-stone-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-200/70"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-stone-900 mb-4 flex items-center gap-3">
                <FaUserMd className="text-teal-600" />
                Your Information
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="e.g. john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="e.g. 9876543210"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Department & Doctor Selection */}
          {step === 2 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-stone-900 mb-4 flex items-center gap-3">
                <FaUserMd className="text-teal-600" />
                Select Service
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Department
                  </label>
                  <select
                    required
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition appearance-none bg-white"
                  >
                    <option value="">Select a Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Doctor
                  </label>
                  <select
                    required
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition appearance-none bg-white disabled:bg-stone-100"
                    disabled={!formData.department}
                  >
                    <option value="">Select a Doctor</option>
                    {formData.department &&
                      doctors[formData.department]?.map((doc) => (
                        <option key={doc} value={doc}>
                          {doc}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Date & Time Selection */}
          {step === 3 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-stone-900 mb-4 flex items-center gap-3">
                <FaClock className="text-teal-600" />
                Choose Date & Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition appearance-none bg-white"
                  >
                    <option value="">Select a Time Slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="Share any relevant details for your appointment..."
                  ></textarea>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={prevStep}
              className={`px-8 py-3 rounded-xl font-semibold text-teal-700 border border-teal-700 hover:bg-teal-50 transition-all duration-300 ${
                step === 1 ? "invisible" : ""
              }`}
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type={step === 3 ? "submit" : "button"}
              onClick={step < 3 ? nextStep : undefined}
              className="px-8 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {step === 3 ? "Confirm Appointment" : "Next Step"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
