export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top header row */}
        <div className="grid gap-10 lg:grid-cols-12 items-center mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-primary-maroon">
              Advanced Surgery
              <br />
              With Precision
              <br />
              <span className="text-primary-green">& Care</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-primary-maroon/80 text-base sm:text-lg leading-relaxed">
              We combine cutting-edge robotic and laparoscopic technology with expert surgical care. 
              Our team of specialized surgeons is committed to delivering minimally invasive procedures 
              with maximum precision, ensuring faster recovery and better outcomes for every patient.
            </p>
          </div>
        </div>

        {/* Middle row: left card + right large image - properly aligned */}
        <div className="grid gap-6 lg:grid-cols-12 mb-6">
          {/* Left card */}
          <div className="lg:col-span-5 flex">
            <div className="rounded-3xl bg-deep-wine text-white p-8 shadow-lg w-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold leading-tight">
                Robotic & Laparoscopic
                <br />Excellence
              </h3>
              <p className="mt-5 text-white/90 leading-relaxed text-lg">
                State-of-the-art robotic systems and advanced laparoscopic techniques enable us to perform 
                complex procedures with minimal incisions, reducing pain and accelerating your recovery time.
              </p>
            </div>
          </div>

          {/* Right large image */}
          <div className="lg:col-span-7 flex">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
                alt="Advanced surgical technology"
                className="w-full h-full object-cover min-h-[280px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: three equal cards - properly aligned */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Expert Surgeons */}
          <div className="flex">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-primary-green/20 w-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold text-primary-maroon leading-tight">
                  Expert
                  <br />Surgeons
                </h4>
                <p className="mt-5 text-primary-maroon/80 leading-relaxed">
                  Our team consists of highly qualified surgeons with extensive experience in robotic and 
                  laparoscopic procedures, ensuring world-class surgical care for every patient.
                </p>
              </div>
            </div>
          </div>

          {/* Patient Care */}
          <div className="flex">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Compassionate patient care"
                className="w-full h-full object-cover min-h-[240px]"
              />
            </div>
          </div>

          {/* Advanced Technology */}
          <div className="flex">
            <div className="rounded-3xl p-8 bg-primary-green/10 text-primary-maroon shadow-lg w-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold leading-tight">
                  Comfort &
                  <br />Safety First
                </h4>
                <p className="mt-5 text-primary-maroon/90 leading-relaxed">
                  From consultation to recovery, we prioritize your comfort and safety with personalized care plans, 
                  modern facilities, and comprehensive post-operative support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}