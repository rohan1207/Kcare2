import AppointmentTab from './AppointmentTab';
 // Inline appointment tab; removed right-side profiles card for a centered, elegant hero

export default function Hero() {
  // Premium, centered hero with inline appointment booking
  return (
    <section className="relative h-screen h-[100svh] text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-95"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Softer, lighter overlay to let the video show through */}
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 flex flex-col justify-center">
        <div className="w-full max-w-4xl mx-auto text-center -mt-16">
          <h1 className="font-normal text-primary-maroon text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
            Precision, 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green/80 to-primary-green">Human Touch</span>
          </h1>
          <p className="mt-6 text-deep-wine/90 text-sm sm:text-base md:text-lg mx-auto max-w-2xl">
            Advanced laparoscopic and robotic surgery for faster recovery, minimal scarring, and better outcomes.
          </p>
        </div>
        <div className="mt-12">
          <AppointmentTab />
        </div>
      </div>
    </section>
  );
}