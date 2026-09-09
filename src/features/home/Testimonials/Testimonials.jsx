import { useEffect, useState } from "react";
const testimonials = [
    {
        quote: "LENSING completely transformed the way our brand presents itself. Every frame felt intentional and the final result exceeded our expectations.",
        name: "David N.",
        role: "Founder, Creative Brand",
    },
    {
        quote: "The editing captured exactly what we wanted to communicate. The pacing, transitions and overall storytelling were incredible.",
        name: "Michael A.",
        role: "Brand Director",
    },
    {
        quote: "Professional from the first conversation to the final delivery. The finished film looked far beyond what we imagined.",
        name: "Sarah O.",
        role: "Creative Producer",
    },
];
export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            setVisible(false);
            // Change testimonial after fade-out
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setVisible(true);
            }, 700);
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    const testimonial = testimonials[currentIndex];
    return (<section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
            Client Stories
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Built on trust.
            <br />
            <span className="text-white/40">Driven by the work.</span>
          </h2>
        </div>

        {/* Testimonial */}
        <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.02]">
          <article className={`flex min-h-[420px] flex-col justify-between p-8 md:p-14 lg:p-20 transition-opacity duration-700 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
            {/* Quote */}
            <div>
              <div className="mb-10 font-serif text-6xl leading-none text-amber-400/70">
                “
              </div>

              <blockquote className="max-w-5xl text-2xl leading-relaxed text-white/80 md:text-3xl lg:text-4xl">
                {testimonial.quote}
              </blockquote>
            </div>

            {/* Client */}
            <div className="mt-16 border-t border-white/10 pt-6">
              <p className="font-medium text-lg">{testimonial.name}</p>

              <p className="mt-1 text-sm text-white/40">
                {testimonial.role}
              </p>
            </div>
          </article>

          {/* Progress indicators */}
          <div className="absolute bottom-6 right-8 flex gap-2 md:right-14">
            {testimonials.map((_, index) => (<button key={index} onClick={() => {
                setVisible(false);
                setTimeout(() => {
                    setCurrentIndex(index);
                    setVisible(true);
                }, 400);
            }} aria-label={`Show testimonial ${index + 1}`} className={`h-1 transition-all duration-500 ${currentIndex === index
                ? "w-10 bg-amber-400"
                : "w-4 bg-white/20"}`}/>))}
          </div>
        </div>
      </div>
    </section>);
}
