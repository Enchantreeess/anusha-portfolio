
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { movieSections, type Movie } from "@/data/moviesData";

const dashedX = {
  maskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
  WebkitMaskImage:
    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
} as const;

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
        {label}
      </span>
      <span className="text-[13px] font-medium text-zinc-800 tabular-nums dark:text-zinc-200">
        {value}
      </span>
    </div>
  );
}

export function MoviesGrid() {
  const [open, setOpen] = useState<Movie | null>(null);

  return (
    <>
      <div className="flex flex-col gap-10">
        {movieSections.map((section) => (
          <section key={section.id} aria-labelledby={`movies-${section.id}`}>
            <div className="flex items-center justify-between gap-4 pb-3">
              <h3
                id={`movies-${section.id}`}
                className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600"
              >
                {section.title}
              </h3>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                {String(section.items.length).padStart(2, "0")}
              </span>
            </div>

            {section.items.length === 0 ? (
              <p className="text-[12px] text-zinc-400 dark:text-zinc-600">
                Add your movies in src/data/moviesData.ts.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {section.items.map((item, index) => (
                  <article key={`${item.title}-${index}`} className="group relative">
                    <div className="pointer-events-none absolute -inset-[4px] rounded-[10px] border border-black/5 transition-colors group-hover:border-black/10 dark:border-white/5 dark:group-hover:border-white/10" />

                    <button
                      type="button"
                      onClick={() => setOpen(item)}
                      aria-label={`Details for ${item.title}`}
                      className="relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[6px] border border-black/5 bg-zinc-50 text-left shadow-sm transition-all group-hover:bg-zinc-100/80 dark:border-white/5 dark:bg-[#09090b] dark:group-hover:bg-[#121214]"
                    >
                      <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-100 dark:bg-[#0a0a0a]">
                        {item.cover ? (
                          <Image
                            src={item.cover}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
                            quality={70}
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full min-h-40 items-center justify-center p-3 text-center text-xs text-zinc-400">
                            {item.title}
                          </div>
                        )}

                        {item.score !== undefined && (
                          <span className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-1 font-mono text-[10px] text-white">
                            ★ {item.score}/10
                          </span>
                        )}
                      </div>

                      <div className="h-px bg-black/30 dark:bg-white/[0.15]" style={dashedX} />

                      <div className="flex flex-1 flex-col gap-1 px-2.5 py-2">
                        <h3 className="text-[12.5px] font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                          {item.year}
                        </p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(value) => !value && setOpen(null)}>
        <DialogContent className="max-w-[min(42rem,calc(100vw-2rem))] overflow-hidden p-0 sm:max-w-[42rem]">
          {open && (
            <div className="flex flex-col sm:flex-row">
              {open.cover && (
                <div className="relative hidden min-h-[280px] w-[200px] shrink-0 sm:block">
                  <Image
                    src={open.cover}
                    alt={open.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex min-w-0 flex-col gap-3 p-5">
                <DialogHeader className="gap-1 text-left">
                  <DialogTitle className="text-[17px] font-bold">
                    {open.title}
                  </DialogTitle>
                  <DialogDescription className="font-mono text-[11px] text-zinc-500">
                    {open.year}
                    {open.runtime ? ` · ${open.runtime} min` : ""}
                  </DialogDescription>
                </DialogHeader>

                {open.genres?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {open.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded border border-black/20 bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600 dark:border-white/15 dark:bg-[#0a0a0a] dark:text-zinc-400"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                ) : null}

                {open.synopsis && (
                  <p className="max-h-44 overflow-y-auto text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {open.synopsis}
                  </p>
                )}

                {open.note && (
                  <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {open.note}
                  </p>
                )}

                {open.score !== undefined && (
                  <Meta label="My rating" value={`${open.score}/10`} />
                )}

                {open.url && (
                  <a
                    href={open.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                  >
                    More info <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
