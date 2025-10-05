import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function NewContactUs() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">+1 234 567 890</p>
                <p className="text-slate-600">+1 987 654 321</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">info@example.com</p>
                <p className="text-slate-600">support@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Location</h3>
                <p className="text-slate-600">123 Medical Center Drive</p>
                <p className="text-slate-600">San Francisco, CA 94158</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-6">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Working Hours</h3>
                <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-600">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+1 234 567 890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}