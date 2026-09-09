import HeroButtons from "./HeroButtons";
export default function HeroContent() {
    return (<div className="relative z-20 max-w-4xl">
      <span className="hero-eyebrow inline-block rounded-full border border-yellow-500/30 px-4 py-2 text-xs uppercase tracking-[0.4em] text-yellow-400">
        Creative Studio
      </span>

      <h1 className="hero-title mt-8 text-6xl font-bold leading-[0.9] md:text-8xl xl:text-[9rem]">
        Every Frame
        <br />
        Tells A Story.
      </h1>

      <p className="hero-text mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
        Cinematic video editing for brands, creators and businesses who
        want every story to leave a lasting impression.
      </p>

      <HeroButtons />
    </div>);
}
