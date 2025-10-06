export default function Footer() {
  return (
    <footer className="mt-24 bg-deep-wine text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand + short mission */}
          <div className="lg:w-1/3">
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/logo2.png" alt="Kcare" className="h-10 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                Kcare Clinic
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Advanced robotic & laparoscopic surgery — faster recovery, minimal scarring, and care you can trust.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-primary-green text-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-accent-red transition-colors"
              >
                Book an Appointment
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-green/30 px-3 py-2 text-xs text-primary-green/90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-green" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 016 6v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a6 6 0 11-12 0v-1H3a1 1 0 01-1-1V10a1 1 0 011-1h1V9a6 6 0 016-6z" />
                </svg>
                Board-certified care
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-green/70">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#home">Home</a></li>
                <li><a className="hover:text-white" href="#services">Services</a></li>
                <li><a className="hover:text-white" href="/technology">Technology</a></li>
                <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-green/70">Patients</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#testimonials">Testimonials</a></li>
                <li><a className="hover:text-white" href="#faq">FAQ</a></li>
                <li><a className="hover:text-white" href="/book">Book consultation</a></li>
                <li><a className="hover:text-white" href="#learn">Learn more</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-green/70">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#contact">Get in touch</a></li>
                <li><a className="hover:text-white" href="#portal">Patient portal</a></li>
                <li><a className="hover:text-white" href="#location">Find us</a></li>
                <li><a className="hover:text-white" href="tel:+1234567890">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-green/20 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/70">© {new Date().getFullYear()} Kcare Clinic. All rights reserved.</div>
          <div className="text-sm text-white/70">Designed & Developed by TheSocialKollab</div>
        </div>
      </div>
    </footer>
  );
}
