import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function WhatOurClientSays() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      role: "Patient",
      rating: 5,
      content: "The medical care I received here was exceptional. The staff was very professional and caring. I highly recommend their services to anyone in need of quality healthcare."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Patient",
      rating: 5,
      content: "I was very impressed with the level of care and attention I received. The doctors took the time to listen to my concerns and provided excellent treatment."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            What Our <span className="text-blue-600">Client Says</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from our valued patients about their experiences with our healthcare services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-md p-8 relative">
              <div className="absolute top-8 right-8 text-blue-100">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-slate-200 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-12 space-x-4">
          <button className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="h-12 w-12 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center hover:bg-blue-700 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}