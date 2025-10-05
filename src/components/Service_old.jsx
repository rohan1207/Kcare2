import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

const SERVICES = [
  {
    title: "Diabetic Foot",
    image: "/diabetic_foot.jpg",
    description:
      "Advanced care for diabetic foot complications with precision healing and preventive strategies.",
  },
  {
    title: "Breast",
    image: "/breast.jpg",
    description:
      "Comprehensive breast surgery with minimally invasive techniques for optimal outcomes.",
  },
  {
    title: "Thyroid",
    image: "/thyroid.jpg",
    description:
      "Expert thyroid procedures using advanced technology for precise results.",
  },
  {
    title: "Fissure",
    image: "/fissure.jpg",
    description:
      "Modern treatment approaches for anal fissures with minimal discomfort.",
  },
  {
    title: "Piles",
    image: "/piles.jpg",
    description: "Advanced hemorrhoid treatment with quick recovery time.",
  },
  {
    title: "Fistula",
    image: "/fistula.jpg",
    description:
      "Specialized fistula procedures using latest surgical techniques.",
  },
  {
    title: "Appendix",
    image: "/appendix.jpg",
    description:
      "Laparoscopic appendectomy with minimal scarring and faster healing.",
  },
  {
    title: "Hernia",
    image: "/hernia.webp",
    description: "State-of-the-art hernia repair with robotic precision.",
  },
  {
    title: "Gall Bladder",
    image: "/gall_bladder.jpg",
    description:
      "Advanced laparoscopic gallbladder surgery with reduced recovery time.",
  },
  {
    title: "Hydrocele",
    image: "/hydrocele.jpg",
    description: "Modern hydrocele treatment with minimal invasive approach.",
  },
  {
    title: "Pilonidal Sinus",
    image: "/pilonidal_sinus.jpg",
    description:
      "Expert treatment of pilonidal sinus with focus on prevention.",
  },
  {
    title: "Rectal Prolapse",
    image: "/rectal_prolapse.jpg",
    description:
      "Comprehensive care for rectal prolapse using advanced techniques.",
  },
  {
    title: "Phymosis",
    image: "/Phymosis.png",
    description: "Gentle and effective phimosis treatment with expert care.",
  },
  {
    title: "Abscess",
    image: "/Abscess.jpg",
    description:
      "Quick and effective abscess treatment with proper healing support.",
  },
  {
    title: "Cyst",
    image: "/cyst.jpg",
    description:
      "Professional cyst removal with minimal scarring and recovery time.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-medium text-stone-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          {service.description}
        </p>
        <div className="mt-4">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-100">
            Learn more
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative isolate py-16 md:py-24">
      {/* Soft gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute left-[20%] top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-teal-100 to-amber-100 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-100 to-teal-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-sm text-stone-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
            Our Expertise
          </div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-stone-900 sm:text-5xl md:text-6xl">
            Specialized Surgical
            <br /> Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Advanced surgical procedures with robotic precision and
            compassionate care for optimal patient outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-16 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/80 px-4 -py-1 -mb-12 text-sm text-stone-700 shadow-sm backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Board-certified excellence in surgical care
          </div>
        </div>
      </div>
    </section>
  );
}