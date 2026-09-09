import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen items-center overflow-hidden">
      <HeroBackground />


        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8">
    <HeroContent />
</div>  
    
      

      <HeroScrollIndicator />
    </section>
  );
}