import { SocialIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-zinc-950/60 px-5 py-12 backdrop-blur-sm sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary">
                RW
              </span>
              <span className="font-semibold tracking-tight text-white">{personalInfo.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Python Engineer · Data & GenAI Engineering · Vector Databases & RAG Pipelines
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const external = link.name === "LinkedIn" || link.name === "GitHub";
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={link.name}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <SocialIcon name={link.icon} className="size-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center">
          <p>© {year} {personalInfo.name}. Built with curiosity, data and AI.</p>
          <p>Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
