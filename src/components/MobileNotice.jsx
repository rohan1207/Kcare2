import { useEffect, useState } from "react";

export default function MobileNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on small screens and if not dismissed before
    const dismissed = localStorage.getItem("kc_mobile_notice_dismissed");
    if (dismissed) return;

    const handleResize = () => {
      // match small screens: <= 768px
      if (window.innerWidth <= 768) setShow(true);
      else setShow(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!show) return null;

  function dismiss() {
    localStorage.setItem("kc_mobile_notice_dismissed", "1");
    setShow(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-6">
      <div className="max-w-md text-center rounded-2xl border border-slate-200 shadow-xl p-6 bg-gradient-to-b from-white to-sky-50">
        <img src="/logo.png" alt="Kcare" className="mx-auto mb-4 h-12 w-12 object-contain" />
        <h3 className="text-lg font-semibold text-slate-900">Best viewed on desktop</h3>
        <p className="mt-2 text-sm text-slate-600">This website is optimized for desktop screens. For the best experience, please open it on a laptop or desktop device.</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button onClick={dismiss} className="inline-flex items-center rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">Continue on mobile</button>
        </div>
      </div>
    </div>
  );
}
