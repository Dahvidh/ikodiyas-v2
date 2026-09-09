import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    handle: "@lensing",
    href: "https://www.instagram.com/lensing",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    handle: "@lensing",
    href: "https://www.youtube.com/@lensing",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    handle: "lensing",
    href: "https://www.linkedin.com/company/lensing",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <p className="text-3xl font-semibold tracking-tight">
              lensing<span className="text-amber-400">.</span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Cinematic video editing and visual storytelling for brands,
              creators, and businesses.
            </p>

            <a
              href="mailto:hello@lensing.com"
              className="mt-7 inline-block text-sm text-white/60 transition-colors duration-300 hover:text-amber-400"
            >
              hello@lensing.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/30">
              Navigation
            </p>

            <div className="flex flex-col items-start gap-4">
              <a
                href="#work"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Work
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#process"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Process
              </a>

              <a
                href="#faq"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                FAQ
              </a>

             
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/30">
              Follow Us
            </p>

            <div className="flex flex-col">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} - ${social.handle}`}
                    className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-300 hover:border-amber-400/40"
                  >
                    <div className="flex items-center gap-4">

                      {/* Social Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-amber-400/50 group-hover:text-amber-400">
                        <Icon
                          size={18}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Handle */}
                      <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white">
                        {social.handle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} lensing. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}