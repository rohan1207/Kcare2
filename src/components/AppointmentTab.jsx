import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  X,
  User,
  Stethoscope,
  Calendar,
  Clock,
} from "lucide-react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths, 
  startOfWeek, 
  endOfWeek 
} from 'date-fns';

const doctors = ["Dr. Pramod Kadam", "Dr. Shital Sharma"];
const conditions = [
  "Piles",
  "Fissure",
  "Fistula",
  "Hernia",
  "Gall Bladder",
  "Appendix",
  "Hydrocele",
  "Thyroid",
];
const generateTimeSlots = () => {
  const slots = [];
  // Start from 9:30 AM
  for (let i = 0; i < (23 - 9.5) * 2; i++) {
    const totalMinutes = 9 * 60 + 30 + i * 30;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    slots.push(
      `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`
    );
  }
  slots.push("11:00 PM");
  return slots;
};

const times = generateTimeSlots();

function CalendarDatePicker({ selectedDate, onDateChange, close }) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-4 z-20 border border-primary-green/20 max-h-[300px] overflow-y-auto custom-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={prevMonth} className="p-1 rounded-full hover:bg-primary-green/20"><ChevronLeft size={18} /></button>
        <div className="font-semibold text-primary-maroon">{format(currentMonth, 'MMMM yyyy')}</div>
        <button type="button" onClick={nextMonth} className="p-1 rounded-full hover:bg-primary-green/20"><ChevronRight size={18} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = isSameDay(day, selectedDate);
          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => { onDateChange(day); close(); }}
              className={`w-full aspect-square text-sm rounded-full transition-colors ${isCurrentMonth ? 'text-primary-maroon' : 'text-gray-300'} ${isSelected ? 'bg-primary-green text-white font-semibold' : 'hover:bg-primary-green/20'}`}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function Dropdown({ options, selected, onSelect, close, isScrollable = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`absolute mt-2 w-full bg-white/95 backdrop-blur-lg rounded-xl shadow-lg p-2 z-20 border border-primary-green/20 ${isScrollable ? 'max-h-[180px] overflow-y-auto custom-scrollbar' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            onSelect(option);
            close();
          }}
          className={`w-full text-left px-3 py-2 rounded-md text-sm ${
            selected === option
              ? "bg-primary-green/20 text-primary-maroon"
              : "text-primary-maroon hover:bg-primary-green/20"
          }`}
        >
          {option}
        </button>
      ))}
    </motion.div>
  );
}

export default function AppointmentTab() {
  const [formData, setFormData] = useState({
    doctor: "",
    condition: "",
    date: new Date(),
    time: "",
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (field) => {
    setOpenDropdown(openDropdown === field ? null : field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { doctor, condition, date, time } = formData;
    if (!doctor || !condition || !date || !time) {
      setFormError('All fields are required.');
      setTimeout(() => setFormError(''), 3000);
      return;
    }
    setModalOpen(true);
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const renderFieldContent = (field) => {
    if (field === "date") {
      return formData.date
        ? format(formData.date, 'MMM d, yyyy')
        : "Date";
    }
    return formData[field] || field.charAt(0).toUpperCase() + field.slice(1);
  };

  const icons = {
    doctor: <User className="w-4 h-4 mr-2" />,
    condition: <Stethoscope className="w-4 h-4 mr-2" />,
    date: <Calendar className="w-4 h-4 mr-2" />,
    time: <Clock className="w-4 h-4 mr-2" />,
  };

  return (
    <>
      <motion.div
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto p-3 sm:p-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary-green/20 ring-1 ring-primary-green/30"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {["doctor", "condition", "date", "time"].map((field) => (
            <div key={field} className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown(field)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white/90 rounded-xl shadow-sm border border-gray-200 text-primary-maroon hover:border-primary-green transition-colors"
              >
                <div className="flex items-center">
                  {icons[field]}
                  <span className="text-sm font-medium">{renderFieldContent(field)}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openDropdown === field ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === field &&
                  (field === "doctor" ? (
                    <Dropdown options={doctors} selected={formData.doctor} onSelect={(v) => handleSelect("doctor", v)} close={() => setOpenDropdown(null)} />
                  ) : field === "condition" ? (
                    <Dropdown options={conditions} selected={formData.condition} onSelect={(v) => handleSelect("condition", v)} close={() => setOpenDropdown(null)} isScrollable={true} />
                  ) : field === "date" ? (
                    <CalendarDatePicker selectedDate={formData.date} onDateChange={(v) => handleSelect("date", v)} close={() => setOpenDropdown(null)} />
                  ) : field === "time" ? (
                    <Dropdown options={times} selected={formData.time} onSelect={(v) => handleSelect("time", v)} close={() => setOpenDropdown(null)} isScrollable={true} />
                  ) : null)}
              </AnimatePresence>
            </div>
          ))}
          <button
            type="submit"
            className="w-full lg:col-span-1 md:col-span-3 sm:col-span-2 px-4 py-3 bg-primary-green text-white rounded-xl shadow-lg hover:bg-primary-gree/90 transition-colors font-semibold text-sm"
          >
            Book Now
          </button>
        </form>
        <AnimatePresence>
          {formError && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-accent-red bg-white/80 px-3 py-1 rounded-full shadow-md">
              {formError}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center relative">
              <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:bg-primary-green/20"><X size={18} /></button>
              <CheckCircle className="w-16 h-16 text-primary-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary-maroon mb-2">Appointment Confirmed!</h2>
              <p className="text-primary-maroon/80 mb-6">Your appointment has been successfully booked.</p>
              <div className="text-left bg-primary-green/10 rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Doctor:</strong> {formData.doctor}</p>
                <p><strong>Condition:</strong> {formData.condition}</p>
                <p><strong>Date:</strong> {format(formData.date, 'EEEE, MMMM d, yyyy')}</p>
                <p><strong>Time:</strong> {formData.time}</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="mt-6 w-full bg-primary-green text-white py-2.5 rounded-lg font-semibold hover:bg-accent-red transition-colors">
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
