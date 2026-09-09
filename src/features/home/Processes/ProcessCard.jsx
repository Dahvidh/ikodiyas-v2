export default function ProcessCard({ step }) {
  return (
    <article className="relative pl-14 pb-20">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-yellow-500 bg-black" />

      <span className="text-sm tracking-[0.3em] text-yellow-400">
        {step.id}
      </span>

      <h3 className="mt-3 text-3xl font-semibold">{step.title}</h3>

      <p className="mt-5 max-w-xl text-zinc-400">{step.text}</p>
    </article>
  );
}