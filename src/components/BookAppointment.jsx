import { HeartPulse, Star } from "lucide-react";

export default function BookAppointment() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* subtle radial background dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%230f172a\\' fill-opacity=\\'0.02\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left visual */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <div className="absolute h-[520px] w-[520px] rounded-full ring-1 ring-blue-200/40" />
                <div className="absolute h-[420px] w-[420px] rounded-full ring-1 ring-blue-200/40" />
                <div className="absolute h-[320px] w-[320px] rounded-full ring-1 ring-blue-200/40" />
              </div>

              {/* doctor image (replace with /shital.png) */}
              <img
                src="/shital.png"
                alt="Doctor"
                className="relative z-10 mx-auto h-[520px] w-auto object-contain drop-shadow-xl"
              />

              {/* Floating rating card */}
              <div className="absolute top-10 right-[14%] rounded-2xl bg-white/95 backdrop-blur ring-1 ring-blue-100 shadow-lg px-4 py-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-1 text-[12px] text-slate-500">Trusted by patient</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img className="h-7 w-7 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" alt="" />
                    <img className="h-7 w-7 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="" />
                    <img className="h-7 w-7 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="" />
                    <img className="h-7 w-7 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=200&auto=format&fit=crop" alt="" />
                  </div>
                  <div className="ml-1 inline-flex items-center rounded-full bg-blue-600/10 px-2 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-200">
                    +3k
                  </div>
                </div>
              </div>

              {/* Blue badge bottom-left */}
              <div className="absolute -bottom-5 left-6 rounded-2xl bg-blue-600 text-white shadow-xl px-5 py-4">
                <div className="text-3xl font-bold leading-none">9</div>
                <div className="text-xs opacity-90">Years of</div>
                <div className="text-xs opacity-90">Experience</div>
              </div>

              {/* HeartPulse icon top-left */}
              <div className="absolute top-6 left-6 h-12 w-12 rounded-2xl bg-white ring-1 ring-blue-100 shadow-lg flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-blue-600" />
              </div>

              {/* Decorative blue dot */}
              <div className="absolute bottom-10 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
            </div>
          </div>

          {/* Right copy */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Dr. John Smith</h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              We believe in a holistic approach to healthcare that emphasizes the interconnectedness of the body\'s
              systems. By gaining a deep understanding of how the various physiological processes interact, we are able
              to provide personalized care tailored to each patient\'s unique needs.
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Using state-of-the-art diagnostic tools and techniques, we meticulously analyze the body\'s functions to
              identify underlying issues and develop comprehensive treatment plans.
            </p>

            <div className="mt-8">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:bg-blue-700"
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
