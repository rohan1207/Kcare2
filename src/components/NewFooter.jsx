import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-slate-400 mb-6">
              We are dedicated to providing high-quality healthcare services with a patient-centered approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Doctors', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Dental Care', 'Orthopedics', 'Physiotherapy', 'Eye Care'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-slate-400">123 Medical Center Drive, San Francisco, CA 94158</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-slate-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-slate-400">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}