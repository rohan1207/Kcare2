import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-deep-wine">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-white ring-1 ring-primary-green/20 shadow-sm p-8">
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-center">
            {/* Left copy */}
            <div>
              {/* Avatars */}
              <div className="flex -space-x-3 mb-6">
                <img
                  src="/pramod_kadam2.jpg"
                  alt="Dr. Pramod Kadam"
                  className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                />
                <img
                  src="/sharma.jpg"
                  alt="Dr. Shital Satish Sharma"
                  className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-maroon">
                The Future of Surgery,
                <br />
                Delivered with Care.
              </h2>

              <p className="mt-6 text-primary-maroon/80 max-w-xl leading-relaxed">
                We are a team of dedicated specialists committed to providing personalized, top-quality surgical care. By blending state-of-the-art robotic and laparoscopic technology with a human touch, we ensure better outcomes and a seamless patient experience.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-green px-5 py-2.5 text-sm font-medium text-primary-maroon hover:bg-primary-green/20"
                >
                  About Clinic <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right image */}
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
                  alt="Surgical team in operating room"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[420px] object-cover rounded-2xl ring-1 ring-primary-green/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}