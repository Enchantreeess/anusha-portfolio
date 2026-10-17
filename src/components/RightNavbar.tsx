"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { portfolio } from "~/portfolio.config";

export function RightNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const links = useMemo(
    () => [
      // Blog is hidden while portfolio.config.ts has sections.blog = false.
      ...(portfolio.sections.blog ? [{ name: "Blog", href: "#blogs" }] : []),
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Hackathons", href: "#hackathons" },
      { name: "DSA / CP", href: "#dsa" },
      { name: "Skills", href: "#skills" },
      { name: "Education", href: "#education" },
      { name: "Anime & Music", href: "#anime" },
      { name: "Highlights", href: "#highlights" },
      { name: "Guestbook", href: "#guestbook" },
    ],
    []
  );

  useEffect(() => {
    // Derived from `links`, so a new section can never be missed the way
    // hackathons, dsa, education and anime were by a hardcoded list.
    const ids = links.map((l) => l.href.slice(1));

    // Plain geometry rather than an observer band: a short section can sit
    // entirely inside an IntersectionObserver's dead zone and never register.
    // The active one is simply the last whose top has scrolled past the header.
    const sync = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveSection(current ?? ids[0] ?? null);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [links]);

  // Only render on the homepage where the #hash sections exist
  if (pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none hidden lg:block"
      style={{ width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))' }}
    >
      <nav className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto flex flex-col gap-4 mt-2">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">Index</h3>
        {links.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-3 ${isActive
                  ? "text-zinc-800 dark:text-zinc-200"
                  : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
                }`}
            >
              <span className={`h-[1px] transition-all duration-300 ease-out ${isActive
                  ? "w-3 bg-zinc-300 dark:bg-zinc-700"
                  : "w-0 bg-transparent"
                }`} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
