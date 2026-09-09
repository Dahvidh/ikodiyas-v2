import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Work", href: "work" },
  { label: "Services", href: "services" },
  { label: "Process", href: "process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();

    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id="${id}" was not found.`);
      return;
    }

    const navbarOffset = 100;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:px-6"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="relative z-10 text-xl font-semibold tracking-tight text-white"
          >
            LENSING<span className="text-amber-400">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-amber-400"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:border-white/30 md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close navigation" : "Open navigation"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity] duration-500 md:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-5">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center justify-between border-b border-white/5 py-4 text-left text-lg text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <span className="text-white/20">
                      0{index + 1}
                    </span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="mt-5 flex items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-amber-400"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}