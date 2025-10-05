import { Award, Stethoscope, GraduationCap, Clock, ArrowRight, Sparkles, Shield } from 'lucide-react';

const DOCTORS = [
  {
    name: 'Dr. Pramod Kadam',
    title: 'Lead General & Laparoscopic Surgeon',
    image: '/pramod_kadam.jpg',
    credentials: 'MBBS, DNB',
    experience: '15+',
    procedures: '1000+',
    specializations: [
      'Umbilical Hernia Surgery',
      'Laser Treatment for Varicose Veins',
      'Benign and Cancer Surgeries',
      'Colorectal Surgery',
      'Total Thyroidectomy',
    ],
  },
  {
    name: 'Dr. Shital Sharma',
    title: 'Laparoscopic & Gynecological Surgeon',
    image: '/sharma.jpg',
    credentials: 'MBBS, MS',
    experience: '12+',
    procedures: '800+',
    specializations: [
      'Laparoscopic Surgery',
      'Breast Cancer Surgery',
      'Gynecological Procedures',
      'Minimally Invasive Surgery',
      'Women\'s Health Surgery',
    ],
  },
];

function DoctorCard({ doctor }) {
  return (
    <div className="group relative bg-deep-wine rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-maroon/30 to-accent-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 text-white">
        <div className="flex items-start gap-6 mb-6">
          <div className="relative flex-shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-28 w-28 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-primary-green to-accent-red rounded-lg p-1.5 shadow-lg">
              <Shield className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-2xl font-light text-white mb-1">{doctor.name}</h3>
            <p className="text-sm text-primary-green/80 mb-3">{doctor.title}</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 px-2 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {doctor.experience} Years
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 px-2 py-1 rounded-full">
                <GraduationCap className="h-3 w-3" />
                {doctor.credentials}
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10 my-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-semibold text-primary-green/70 uppercase tracking-wider mb-3">Specializations</h4>
            <div className="space-y-1.5">
              {doctor.specializations.slice(0, 4).map((spec, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-sky-100/90">
                  <div className="w-1 h-1 rounded-full bg-primary-green"></div>
                  {spec}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-primary-green/70 uppercase tracking-wider mb-3">Stats</h4>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-light text-white">{doctor.experience}</div>
                <div className="text-xs text-primary-green/70 uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white">{doctor.procedures}</div>
                <div className="text-xs text-primary-green/70 uppercase tracking-wide">Procedures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainDoctors() {
  return (
    <section id="main-doctors" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-green/10 px-4 py-2 text-sm font-semibold text-primary-green mb-4">
            <Sparkles className="h-4 w-4 text-primary-green" />
            Medical Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary-maroon mb-4">
            Our Surgeons
          </h2>
          <p className="mt-4 text-lg text-primary-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Distinguished specialists committed to delivering exceptional surgical care with precision and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-green/10 border border-primary-green/20 rounded-full mb-8 shadow-sm">
            <Award className="h-5 w-5 text-primary-green" />
            <span className="text-sm text-primary-maroon">Board Certified • Licensed Practitioners • 25+ Years Combined Experience</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/book"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-maroon text-white font-semibold rounded-full hover:bg-deep-wine transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-maroon font-semibold rounded-full border border-primary-green/50 hover:bg-primary-green/10 transition-all duration-300 w-full sm:w-auto"
            >
              <Stethoscope className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}