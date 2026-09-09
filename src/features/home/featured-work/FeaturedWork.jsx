import { projects } from "./data/projects";
export default function FeaturedWork() {
    return (<section id="work" className="relative bg-[#050505] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
              Featured Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Stories We've
              <br />
              Brought to Life.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              A curated selection of projects crafted with purpose,
              precision, and cinematic storytelling.
            </p>
          </div>

          <a href="/work" className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:border-amber-400 hover:text-amber-400">
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .map((project) => (<article key={project.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/60">
                {/* Video */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src={project.video} muted loop playsInline preload="metadata" onMouseEnter={(event) => {
                event.currentTarget.play().catch(() => { });
            }} onMouseLeave={(event) => {
                event.currentTarget.pause();
            }}/>

                  {/* Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/>
                </div>

                {/* Project information */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">
                      {project.category}
                    </span>

                    <span className="text-xs text-white/40">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between text-sm text-white/40">
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </article>))}
        </div>
      </div>
    </section>);
}
