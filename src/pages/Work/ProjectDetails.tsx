import { Link, useParams } from "react-router-dom";

const projects = {
  "project-one": {
    title: "Project One",
    category: "Featured Work",
    year: "2026",
    client: "Client Name",
    role: "Video Editing & Post Production",

    description:
      "A cinematic visual project crafted around strong storytelling, intentional pacing, and a polished visual language.",

    heroVideo:
      "https://res.cloudinary.com/dgqcoefvx/video/upload/v1783816345/hero_g6qmqy.mp4",

    projectVideo:
      "https://res.cloudinary.com/dgqcoefvx/video/upload/v1783816345/hero_g6qmqy.mp4",
  },

  "project-two": {
    title: "Project Two",
    category: "Personal Project",
    year: "2026",
    client: "LENSING",
    role: "Editing & Creative Direction",

    description:
      "An experimental visual piece exploring movement, atmosphere, rhythm, and cinematic storytelling.",

    heroVideo:
      "https://res.cloudinary.com/dgqcoefvx/video/upload/v1783816345/hero_g6qmqy.mp4",

    projectVideo:
      "https://res.cloudinary.com/dgqcoefvx/video/upload/v1783816345/hero_g6qmqy.mp4",
  },
};

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project =
    projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            Project not found.
          </h1>

          <Link
            to="/work"
            className="mt-8 inline-flex text-sm text-amber-400"
          >
            ← Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/work"
            className="text-xs uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-amber-400"
          >
            ← Back to work
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
              {project.description}
            </p>
          </div>

          {/* HERO VIDEO */}
          <div className="mt-16 overflow-hidden border border-white/10 bg-black">
            <video
              src={project.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="border-y border-white/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Client
            </p>

            <p className="mt-3 text-sm text-white/70">
              {project.client}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Year
            </p>

            <p className="mt-3 text-sm text-white/70">
              {project.year}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Category
            </p>

            <p className="mt-3 text-sm text-white/70">
              {project.category}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              Role
            </p>

            <p className="mt-3 text-sm text-white/70">
              {project.role}
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              About the project
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Built around the story.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/50">
              {project.description}
            </p>

            <p className="mt-6 text-base leading-8 text-white/50">
              Every element was considered to create a cohesive visual
              experience — from pacing and transitions to sound design,
              color and final delivery.
            </p>
          </div>

        </div>
      </section>

      {/* MAIN PROJECT VIDEO */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden border border-white/10">
            <video
              src={project.projectVideo}
              controls
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            The approach
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">

            {[
              ["01", "Story", "Building the narrative around the strongest moments."],
              ["02", "Edit", "Creating rhythm through precise cuts and pacing."],
              ["03", "Look", "Developing a cohesive cinematic visual identity."],
              ["04", "Sound", "Using sound and music to elevate the experience."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="bg-[#050505] p-8 md:p-10"
              >
                <p className="text-xs text-white/20">
                  {number}
                </p>

                <h3 className="mt-8 text-xl font-medium">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BACK TO WORK */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Continue exploring
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
              More work.
            </h2>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-3 border border-white/10 px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:border-amber-400/50 hover:text-amber-400"
          >
            View all work

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}