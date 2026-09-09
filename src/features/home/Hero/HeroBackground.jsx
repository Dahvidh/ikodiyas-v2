export default function HeroBackground() {
    return (<div className="absolute inset-0 overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 h-full w-full object-cover" src="https://res.cloudinary.com/dgqcoefvx/video/upload/v1783816345/hero_g6qmqy.mp4" autoPlay muted loop playsInline preload="auto"/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"/>

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black"/>

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]"/>
    </div>);
}
