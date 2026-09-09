import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
 /*   const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarOffset,
      behavior: "smooth",
    });
  }*/
    <div  className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button  type="button"   onClick={() => window.location.href = '/work'}  className="group rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
        View Projects
      </button>

    </div>
  );
}