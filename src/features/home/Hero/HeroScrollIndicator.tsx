import { ChevronDown } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <div className="scroll-indicator absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
      <div className="flex flex-col items-center text-zinc-400">
        <span className="mb-2 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ChevronDown
          size={24}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}