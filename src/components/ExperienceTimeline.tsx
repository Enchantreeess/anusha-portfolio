
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ExperienceTimeline.module.css";

type TimelineItem = {
  label: string;
  shortLabel: string;
  dates: string;
  detail: string;
  experienceIndex: number;
  start: number;
  end: number;
  align: "start" | "end";
  icon: string;
  barClassName: string;
};

const timelineItems: TimelineItem[] = [
  {
    label: "Infosys Springboard",
    shortLabel: "Infosys",
    dates: "Oct 2025 - Jan 2026",
    detail: "AI Intern",
    experienceIndex: 0,
    start: 6,
    end: 35,
    align: "end",
    icon: "/Experience-image/infosys.png",
    barClassName:
      "border-[#0878c9] bg-[#0878c9] text-white hover:border-[#3298e5] hover:bg-[#3298e5]",
  },
  {
    label: "Querencia",
    shortLabel: "Querencia",
    dates: "Dates to confirm",
    detail: "Graphics Lead",
    experienceIndex: 1,
    start: 25,
    end: 100,
    align: "start",
    icon: "/Experience-image/querencia.png",
    barClassName:
      "border-[#7c3aed] bg-[#7c3aed] text-white hover:border-[#8b5cf6] hover:bg-[#8b5cf6]",
  },
  {
    label: "Google Developer Groups",
    shortLabel: "GDG",
    dates: "Dates to confirm",
    detail: "Public Relations Member",
    experienceIndex: 2,
    start: 35,
    end: 100,
    align: "end",
    icon: "/Experience-image/gdg.png",
    barClassName:
      "border-[#16805d] bg-[#16805d] text-white hover:border-[#22a477] hover:bg-[#22a477]",
  },
  {
    label: "TECH SAGA",
    shortLabel: "TECH SAGA",
    dates: "2026 - Present",
    detail: "Editor-in-Chief, College Magazine",
    experienceIndex: 3,
    start: 45,
    end: 100,
    align: "start",
    icon: "/Experience-image/tech-saga.png",
    barClassName:
      "border-[#c24165] bg-[#c24165] text-white hover:border-[#e05278] hover:bg-[#e05278]",
  },
];

type ExperienceTimelineProps = {
  onSelect: (experienceIndex: number) => void;
};

export function ExperienceTimeline({
  onSelect,
}: ExperienceTimelineProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollLeft =
      scroller.scrollWidth - scroller.clientWidth;
  }, []);

  return (
    <section
      aria-labelledby="experience-timeline-title"
      className="relative z-10 flex h-full flex-col px-4 pb-4 pt-4"
    >
      <div className="flex h-8 shrink-0 items-start justify-between gap-4">
        <h2
          id="experience-timeline-title"
          className="text-[15px] font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-[16px]"
        >
          My Experience Timeline
        </h2>

        <span className="shrink-0 font-mono text-[10px] text-zinc-500 sm:text-[11px]">
          2025—PRESENT
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-4 top-[72px] z-0 grid grid-rows-4 gap-1"
      >
        {timelineItems.map((item) => (
          <span
            key={`lane-${item.experienceIndex}`}
            className="border-t border-black/[0.08] dark:border-white/[0.065]"
          />
        ))}
        <span className="absolute inset-x-0 bottom-0 border-b border-black/[0.08] dark:border-white/[0.065]" />
      </div>

      <div
        ref={scrollerRef}
        dir="rtl"
        className="relative min-h-0 flex-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          dir="ltr"
          className="flex h-full w-full flex-col sm:w-[620px] xl:w-full"
        >
          <div className="relative h-6 shrink-0 font-mono text-[9px] text-zinc-400 dark:text-zinc-600 sm:text-[10px]">
            <span className="absolute left-0">2025</span>
            <span className="absolute left-[59%] -translate-x-1/2">
              2026
            </span>
            <span className="absolute right-0 flex items-center gap-1">
              <span className="size-1 rounded-full bg-orange-500" />
              NOW
            </span>
          </div>

          <div
            className="relative grid min-h-0 flex-1 grid-rows-4 gap-1"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 24.5%, rgba(113,113,122,0.07) 24.5%, rgba(113,113,122,0.07) 25%, transparent 25%, transparent 49.5%, rgba(113,113,122,0.07) 49.5%, rgba(113,113,122,0.07) 50%, transparent 50%, transparent 74.5%, rgba(113,113,122,0.07) 74.5%, rgba(113,113,122,0.07) 75%, transparent 75%)",
            }}
          >
            {[5, 59].map((position) => (
              <span
                key={position}
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 z-0 w-px border-l border-black/20 dark:border-white/[0.12]"
                style={{ left: `${position}%` }}
              />
            ))}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-px bg-orange-500/90"
            />

            {timelineItems.map((item) => (
              <div
                key={item.experienceIndex}
                className="relative"
              >
                <div
                  className={`${styles.item} absolute top-1/2 z-10 -translate-y-1/2`}
                  style={{
                    left: `${item.start}%`,
                    right: `${100 - item.end}%`,
                  }}
                >
                  <button
                    type="button"
                    aria-label={`View ${item.label}`}
                    aria-describedby={`experience-timeline-tip-${item.experienceIndex}`}
                    onClick={() => onSelect(item.experienceIndex)}
                    className="relative flex h-8 w-full cursor-pointer items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                  >
                    <span
                      aria-hidden="true"
                      className={`${styles.bar} absolute inset-0 overflow-hidden rounded-md border shadow-[0_3px_10px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/15 ${item.barClassName}`}
                    />

                    <span
                      className={`relative z-10 flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-black/10 bg-white ${
                        item.end >= 95 ? "ml-1" : "ml-auto mr-1"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        width={16}
                        height={16}
                        sizes="16px"
                        quality={60}
                        className="size-full rounded-[3px] object-contain p-px"
                      />
                    </span>

                    <span
                      className={`pointer-events-none absolute z-10 whitespace-nowrap text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 sm:text-[11px] ${
                        item.end >= 95
                          ? "right-full mr-2"
                          : "left-full ml-2"
                      }`}
                    >
                      <span className="sm:hidden">
                        {item.shortLabel}
                      </span>
                      <span className="hidden sm:inline">
                        {item.label}
                      </span>
                    </span>
                  </button>

                  <div
                    id={`experience-timeline-tip-${item.experienceIndex}`}
                    role="tooltip"
                    className={`${styles.tooltip} pointer-events-none absolute z-50 w-max max-w-56 rounded-md border border-zinc-200 bg-white/95 px-2.5 py-2 text-left shadow-lg dark:border-zinc-700 dark:bg-zinc-900/95 ${
                      item.align === "end"
                        ? "right-0"
                        : "left-0"
                    } ${
                      item.experienceIndex < 2
                        ? "top-full mt-2"
                        : "bottom-full mb-2"
                    }`}
                  >
                    <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[10px] text-zinc-600 dark:text-zinc-300">
                      {item.detail}
                    </p>
                    <p className="mt-1.5 border-t border-zinc-100 pt-1.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-800">
                      {item.dates}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Timeline showing professional experience, design leadership,
        developer community involvement, and editorial leadership.
      </p>
    </section>
  );
}
