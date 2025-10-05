// import { useEffect, useState } from "react";
// import {
//   ArrowRightIcon,
//   BeakerIcon,
//   EyeIcon,
//   CogIcon,
//   LightningBoltIcon,
// } from "@heroicons/react/outline";

// const TECH = [
//   {
//     title: "da Vinci Xi Robotic Surgical System",
//     category: "Robotics",
//     description:
//       "World-leading robotic platform for minimally invasive procedures with unmatched precision and control.",
//     features: [
//       "4-arm robotic system",
//       "Tremor filtration",
//       "360° articulation",
//       "Immersive 3D vision",
//     ],
//     icon: CogIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "teal",
//   },
//   {
//     title: "Versius Robotic Surgical System",
//     category: "Robotics",
//     description:
//       "Next-generation compact robotic system offering flexibility in advanced laparoscopic surgeries.",
//     features: [
//       "Modular design",
//       "Open architecture",
//       "Portable setup",
//       "Enhanced dexterity",
//     ],
//     icon: CogIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "teal",
//   },
//   {
//     title: "4K/3D Laparoscopic Tower",
//     category: "Imaging",
//     description:
//       "Ultra-HD visualization for high-clarity minimally invasive surgeries.",
//     features: [
//       "4K resolution",
//       "3D stereoscopic view",
//       "HDR imaging",
//       "Real-time enhancement",
//     ],
//     icon: EyeIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "teal",
//   },
//   {
//     title: "Laser Surgery System",
//     category: "Energy",
//     description:
//       "Advanced laser technology for painless treatment of varicose veins and other conditions.",
//     features: [
//       "Precision targeting",
//       "Minimal scarring",
//       "Reduced recovery",
//       "Multiple wavelengths",
//     ],
//     icon: LightningBoltIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "amber",
//   },
//   {
//     title: "Harmonic Scalpel & LigaSure",
//     category: "Energy",
//     description:
//       "Cutting-edge energy devices for precise tissue dissection and vessel sealing.",
//     features: [
//       "Ultrasonic cutting",
//       "Vessel sealing",
//       "Minimal thermal damage",
//       "Smoke reduction",
//     ],
//     icon: LightningBoltIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "amber",
//   },
//   {
//     title: "ICG Fluorescence Imaging System",
//     category: "Imaging",
//     description:
//       "Real-time blood flow and tissue perfusion assessment during cancer and colorectal surgeries.",
//     features: [
//       "Near-infrared imaging",
//       "Real-time visualization",
//       "Enhanced contrast",
//       "Surgical guidance",
//     ],
//     icon: EyeIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "teal",
//   },
//   {
//     title: "Endoscopic Staplers & Advanced Suturing",
//     category: "Instruments",
//     description:
//       "Ensuring faster, safer, and minimally invasive resections and reconstructions.",
//     features: [
//       "Precise stapling",
//       "Advanced suturing",
//       "Minimal invasive",
//       "Enhanced safety",
//     ],
//     icon: BeakerIcon,
//     gradient: "from-teal-600 to-amber-600",
//     accentColor: "teal",
//   },
// ];

// const CATEGORIES = ["All", "Robotics", "Imaging", "Energy", "Instruments"];

// // Map category to safe Tailwind classes (no dynamic color strings)
// function pillClasses(category) {
//   switch (category) {
//     case "Robotics":
//     case "Instruments":
//       return "bg-teal-50 text-teal-700 border-teal-200";
//     case "Imaging":
//     case "Energy":
//       return "bg-amber-50 text-amber-700 border-amber-200";
//     default:
//       return "bg-stone-50 text-stone-700 border-stone-200";
//   }
// }

// function dotBgClass(category) {
//   switch (category) {
//     case "Robotics":
//     case "Instruments":
//       return "bg-teal-500";
//     case "Imaging":
//     case "Energy":
//       return "bg-amber-500";
//     default:
//       return "bg-stone-500";
//   }
// }

// function TechnologyCard({ item }) {
//   const IconComponent = item.icon;

//   return (
//     <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
//       <div className="p-6">
//         {/* Icon and Category */}
//         <div className="flex items-center justify-between mb-4">
//           <div className="p-2 rounded-lg bg-teal-50">
//             <IconComponent className="w-5 h-5 text-teal-600" />
//           </div>
//           <span className={`px-3 py-1 rounded-full text-xs font-medium border ${pillClasses(item.category)}`}>
//             {item.category}
//           </span>
//         </div>

//         {/* Title */}
//         <h3 className="font-display text-lg font-medium text-stone-900 mb-3">
//           {item.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm leading-relaxed text-stone-600 mb-4">
//           {item.description}
//         </p>

//         {/* Features */}
//         <div className="grid grid-cols-2 gap-2 mb-6">
//           {item.features.map((feature, idx) => (
//             <div key={idx} className="flex items-center text-xs text-stone-600">
//               <div className={`w-1 h-1 rounded-full mr-2 flex-shrink-0 ${dotBgClass(item.category)}`} />
//               {feature}
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="mt-4">
//           <button className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-100">
//             Learn more
//             <ArrowRightIcon className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Technology() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setIsLoaded(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   const filteredTech =
//     activeCategory === "All"
//       ? TECH
//       : TECH.filter((item) => item.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative px-6 py-24 text-center">
//         <div className="max-w-5xl mx-auto">
//           {/* Premium badge */}
//           <div
//             className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-stone-200 shadow-sm mb-8 transition-all duration-1000 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             <span className="h-2 w-2 rounded-full bg-amber-500" />
//             <span className="text-sm font-semibold text-stone-700">
//               Advanced Medical Technology
//             </span>
//           </div>

//           {/* Main heading */}
//           <h1
//             className={`text-5xl md:text-7xl leading-tight font-bold text-stone-900 mb-8 transition-all duration-1000 delay-200 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Precision. Innovation.
//             <br />
//             Excellence.
//           </h1>

//           {/* Subtitle */}
//           <p
//             className={`text-xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             Experience the future of surgical precision with our world-class
//             robotic systems, advanced imaging technology, and cutting-edge
//             energy devices designed for minimally invasive care.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <button className="px-8 py-4 rounded-2xl bg-amber-500 text-white font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-amber-600">
//               Schedule Consultation
//             </button>
//             <button className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-stone-200 text-stone-800 font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
//               Virtual Tour
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="px-6 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {CATEGORIES.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
//                   activeCategory === category
//                     ? "bg-teal-50 text-teal-700"
//                     : "text-stone-600 hover:bg-stone-50"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Grid */}
//       <section className="px-6 pb-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredTech.map((tech, index) => (
//               <div
//                 key={tech.title}
//                 className={`transition-all duration-700 ${
//                   isLoaded
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-12"
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <TechnologyCard item={tech} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 py-16 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
//             Ready to experience next‑generation care?
//           </h2>
//           <p className="text-lg text-stone-600 mb-8">
//             Speak with our specialists to learn how our technology supports
//             minimally invasive, precise outcomes.
//           </p>
//           <button className="px-8 py-4 rounded-2xl bg-amber-500 text-white font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-amber-600">
//             Get Started Today
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
