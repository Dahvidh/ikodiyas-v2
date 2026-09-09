export default function StartProject() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 sm:px-10 md:px-16 md:py-28">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

          <div className="relative max-w-4xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
              Start a Project
            </p>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Have a story
              <br />
              <span className="text-white/40">worth telling?</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              Tell us what you're creating, and let's turn your vision into
              something people won't forget.
            </p>

            <a
              href="mailto:hello@lensing.com"
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-amber-400"
            >
              Start a Conversation

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}