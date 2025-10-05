import { useState } from 'react';
import { Stethoscope } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    image: '/pramod.png',
    slots: ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM'],
  },
  {
    name: 'Dr. Jane Doe',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    slots: ['9:30 AM', '12:15 PM', '2:45 PM', '5:00 PM'],
  },
];

export default function New_Hero() {
  const [isBooking, setIsBooking] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf3ff] to-[#f6faff] py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left copy */}
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm md:text-base">A healthier tomorrow starts today</p>
            <div className="mt-3 flex items-start gap-3">
              <Stethoscope className="h-10 w-10 text-blue-600" />
              <div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Welcome to
                </div>
                <div className="-mt-1 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                  Kcare
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-slate-600">
              Schedule your appointment today. Your wellness, our expertise in advanced laparoscopic and robotic
              procedures.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setIsBooking(!isBooking)}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_RGBA(37,99,235,0.35)] hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Concentric rings background to match reference */}
              <svg
                className="pointer-events-none absolute -right-6 top-2 h-[440px] w-[440px] text-blue-200"
                viewBox="0 0 440 440"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="300" cy="220" r="200" stroke="currentColor" strokeWidth="2" />
                <circle cx="300" cy="220" r="160" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                <circle cx="300" cy="220" r="120" stroke="currentColor" strokeWidth="2" opacity="0.7" />
                <circle cx="300" cy="220" r="80" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              </svg>

              {/* Doctor image */}
              <img
                src="/pramod.png"
                alt="Dr. John Smith"
                className="relative z-10 ml-auto h-auto w-full max-w-[380px] object-contain drop-shadow-xl"
              />

              {/* White rounded squares accents */}
              <div className="absolute left-6 bottom-6 h-16 w-16 rounded-2xl bg-white shadow-xl" aria-hidden="true" />
              <div className="absolute right-16 top-20 h-14 w-14 rounded-2xl bg-white shadow-xl" aria-hidden="true" />
            </div>
          </div>
        </div>

        {isBooking && (
          <div className="mt-16 rounded-xl bg-white/80 p-8 shadow-xl backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-slate-900">Book an Appointment</h2>

            {/* Tabs */}
            <div role="tablist" aria-label="Doctor tabs" className="mt-6 flex flex-wrap gap-2 rounded-lg bg-slate-100 p-1">
              {doctors.map((doc, idx) => (
                <button
                  key={doc.name}
                  role="tab"
                  aria-selected={activeDoctor === idx}
                  onClick={() => {
                    setActiveDoctor(idx);
                    setSelectedTime('');
                  }}
                  className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition ${
                    activeDoctor === idx ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <img src={doc.image} alt={doc.name} className="h-8 w-8 rounded-full object-cover" />
                  <span>{doc.name}</span>
                </button>
              ))}
            </div>

            {/* Active doctor content */}
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src={doctors[activeDoctor].image}
                    alt={doctors[activeDoctor].name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{doctors[activeDoctor].name}</h3>
                    <p className="text-slate-500">{doctors[activeDoctor].specialty}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700">Date</label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Select a slot</label>
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      {doctors[activeDoctor].slots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`rounded-md border px-3 py-2 text-sm ${
                            selectedTime === slot
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h4 className="text-lg font-semibold text-slate-800">Appointment Summary</h4>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li><span className="font-semibold">Doctor:</span> {doctors[activeDoctor].name}</li>
                  <li><span className="font-semibold">Specialty:</span> {doctors[activeDoctor].specialty}</li>
                  <li><span className="font-semibold">Date:</span> {selectedDate || '—'}</li>
                  <li><span className="font-semibold">Time:</span> {selectedTime || '—'}</li>
                </ul>
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => {
                    alert(
                      `Appointment requested with ${doctors[activeDoctor].name} on ${selectedDate} at ${selectedTime}. (Dummy data)`
                    );
                  }}
                  className={`mt-6 w-full rounded-md px-4 py-2 text-white transition ${
                    !selectedDate || !selectedTime
                      ? 'cursor-not-allowed bg-slate-300'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
