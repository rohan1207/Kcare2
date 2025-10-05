import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
    quote:
      "It was the best decision I made for my health. The team is caring and precise. They explained everything and made me comfortable every step of the way.",
    tone: "lightBlue",
  },
  {
    name: "Emily Davis",
    role: "Teacher",
    avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote:
      "As someone with surgical anxiety, finding a clinic where I felt at ease was crucial. The robotic approach made recovery smoother than I imagined.",
    tone: "white",
  },
  {
    name: "Michael Chen",
    role: "Financial Analyst",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote:
      "I've been a patient for years. Consistent high‑quality care keeps me coming back. Professionalism and empathy are evident in every visit. I highly recommend this clinic to anyone in need of surgical care. The staff is always friendly and helpful. The clinic is also very affordable. I would highly recommend this clinic to anyone in need of surgical care.",
    tone: "mint",
  },
];

const popUp = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 220,
      damping: 20,
      mass: 0.7,
    },
  }),
};

function TestimonialCard({ t, index }) {
  const base =
    "rounded-3xl p-6 sm:p-7 shadow-sm ring-1 text-gray-700 leading-relaxed";
  const tones = {
    lightBlue: "bg-sky-50/70 ring-sky-200/80",
    white: "bg-white ring-gray-200/80",
    mint: "bg-teal-50/70 ring-teal-200/80",
  };
  return (
    <motion.article
      variants={popUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${base} ${tones[t.tone]}`}
    >
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
        />
        <div>
          <div className="font-semibold text-gray-900">{t.name}</div>
          <div className="text-xs text-gray-500">{t.role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm">{t.quote}</p>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate py-20 sm:py-28 bg-sky-50/30">
      {/* Pattern overlay */}
      <div className="text-center mb-12">
          <p className="text-sm font-semibold text-sky-600">Patient Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
          Trust in our expertise
          </h2>
        </div>
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230284c7\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Top header and hero image */}
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span>Patient Stories</span>
             
            </div>
            <h2 className="mt-3 text-sky-900 text-3xl sm:text-4xl font-bold tracking-tight">
              Patients Gave
              <br />
              Lots of Love
            </h2>

            {/* First row cards (visible as soon as section is in view) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <TestimonialCard t={TESTIMONIALS[0]} index={0} />
              <TestimonialCard t={TESTIMONIALS[1]} index={0.2} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl ring-1 ring-gray-200/80 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
                alt="Happy patient and surgeon"
                className="w-full h-[200px] sm:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Second wave on scroll: pop up from below */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={popUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="lg:col-span-7 overflow-hidden rounded-3xl ring-1 ring-gray-200/80"
          >
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1600&auto=format&fit=crop"
              alt="Medical professionals providing care"
              className="w-full h-[200px] sm:h-[240px] lg:h-[240px] object-cover"
            />
          </motion.div>

          <div className="lg:col-span-5">
            <TestimonialCard t={TESTIMONIALS[2]} index={0.15} />
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50"
          >
            View all testimonials <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}