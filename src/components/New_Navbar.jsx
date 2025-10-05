import { Stethoscope } from "lucide-react";

export default function New_Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-[#ecf3ff] to-[#f7fbff]/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span className="text-slate-900 font-semibold tracking-tight">Dr. John Smith</span>
          </a>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a href="#" className="text-slate-900 font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-600 hover:text-slate-900">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="text-slate-600 hover:text-slate-900">
                Services
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-blue-300 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
            >
              Contact us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

