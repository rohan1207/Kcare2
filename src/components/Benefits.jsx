// Stacked sticky benefits section inspired by the screenshot
// Each card sticks as you scroll and the next one stacks on top
const ITEMS = [
  {
    title: "Precision & Accuracy",
    body: "Leverage robotic assistance for unmatched surgical precision and control.",
    img: "/robo6.png",
  },
  {
    title: "Minimally Invasive",
    body: "Smaller incisions, less scarring, and faster patient recovery.",
    img: "/robo1.png",
  },
  {
    title: "Enhanced Visualization",
    body: "High-definition 3D imaging gives surgeons superior clarity and detail.",
    img: "/robo6.png",
  },
  {
    title: "Faster Recovery & Less Pain",
    body: "Reduced blood loss, lower complications, and quicker return to daily life.",
    img: "/robo1.png",
  },
];

export default function Benefits() {
  return (
    <section className="relative isolate py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
          Benefits
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-stone-900 sm:text-4xl md:text-5xl">
          Robotic surgery benefits
          <br /> that feel effortless
        </h2>
      </div>

      {/* Stacked cards container */}
      <div className="relative mt-12 h-[300vh]">
        <div className="sticky top-1/4 -translate-y-1/4">
          {ITEMS.map((it, idx) => {
            return (
              <div
                key={idx}
                className="absolute top-0 left-0 right-0 mx-auto max-w-5xl overflow-visible rounded-2xl transition-all duration-500 ease-in-out md:rounded-3xl"
                style={{
                  transform: `translateY(calc(${
                    idx * 10
                  }vh - var(--scroll, 0) * ${
                    idx * 10
                  }vh)) scale(calc(1 - (var(--scroll, 0) * ${
                    ITEMS.length - idx
                  }) * 0.1))`,
                  zIndex: 10 + idx,
                  opacity: `calc(1 - (var(--scroll, 0) * ${
                    ITEMS.length - idx
                  }) * 0.5)`,
                }}
              >
                <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:rounded-3xl md:p-8">
                  <div className="grid items-center gap-6 md:grid-cols-2">
                    {/* Left copy */}
                    <div>
                      <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-stone-600">
                        <span className="text-[12px]">◆</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-stone-900 md:text-3xl">
                        {it.title}
                      </h3>
                      <p className="mt-2 max-w-md text-stone-600">{it.body}</p>
                    </div>

                    {/* Right image */}
                    <div className="relative">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                        <img
                          src={it.img}
                          alt={it.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @property --scroll {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .relative.mt-12 {
          animation: scroll-animation linear;
          animation-timeline: view();
        }

        @keyframes scroll-animation {
          to {
            --scroll: 1;
          }
        }
      `}</style>
    </section>
  );
}
