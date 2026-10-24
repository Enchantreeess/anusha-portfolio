
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experiences } from "@/data/experienceData";

export function ExperienceList() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="block">
      {experiences.map((item, idx) => {
        const isOpen = openIdx === idx;
        const isLast = idx === experiences.length - 1;

        return (
          <div key={idx} className="group relative">
            {/* Dashed separator */}
            {!isLast && (
              <div
                className="pointer-events-none absolute bottom-0 left-[-16px] right-[-16px] z-10 h-0 border-b border-[#D9A4B9]/70 dark:border-white/15"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}

            {/* Final separator */}
            {isLast && (
              <>
                <div
                  className="pointer-events-none absolute bottom-0 left-[-100vw] right-[-100vw] z-10 h-0 border-b border-[#D9A4B9]/70 dark:border-white/15"
                  style={{
                    maskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="pointer-events-none absolute bottom-0 -left-4 z-20 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
                <div className="pointer-events-none absolute bottom-0 -right-4 z-20 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
              </>
            )}

            {/* Experience header */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="relative z-20 -mx-4 flex w-[calc(100%+2rem)] cursor-pointer flex-col items-start gap-2.5 rounded-lg px-4 py-3.5 text-left transition-colors hover:bg-[#F6DCE7]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C77C9D] dark:hover:bg-zinc-900/50 sm:gap-3 sm:py-4 2xl:flex-row 2xl:items-center 2xl:justify-between"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                {/* Company logo */}
                <div className="size-10 shrink-0 rounded-[10px] border border-[#E5B8CA] bg-[#FCEBF2] p-[2px] shadow-sm shadow-[#D9A4B9]/20 dark:border-zinc-800 dark:bg-[#171316] dark:shadow-black/40">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[7px] border border-[#EAD0DA] bg-[#FFF7FA] dark:border-white/10 dark:bg-[#111111]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={40}
                      height={40}
                      sizes="40px"
                      quality={60}
                      style={
                        item.imageZoom
                          ? { transform: `scale(${item.imageZoom})` }
                          : undefined
                      }
                      className={`h-full w-full ${
                        item.imageFit === "contain"
                          ? "object-contain"
                          : "object-cover"
                      } ${item.imageBleed ? "" : "p-0.5"}`}
                    />
                  </div>
                </div>

                {/* Role and organisation */}
                <div className="flex min-w-0 flex-col gap-0.5 pr-2 sm:pr-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-bold leading-tight text-[#24171D] dark:text-zinc-100 sm:text-[17px]">
                      {item.title}
                    </span>

                    {item.type && (
                      <span className="whitespace-nowrap rounded-[4px] border border-[#E5B8CA] bg-[#F7DFE9] px-1.5 py-[1px] text-[11px] font-medium text-[#805267] dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300">
                        {item.type}
                      </span>
                    )}
                  </div>

                  <span className="truncate text-[14px] text-[#785C69] dark:text-zinc-400 sm:text-[15px]">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Dates and location */}
              <div className="flex shrink-0 flex-col items-start gap-0.5 pl-[52px] pr-5 text-left sm:pl-[56px] 2xl:mt-0 2xl:items-end 2xl:pl-0 2xl:text-right">
                <div className="relative flex items-center text-[13px] font-medium text-[#38232D] dark:text-zinc-100 sm:text-[14px]">
                  <span>{item.dates}</span>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`absolute -right-5 top-1/2 -mt-[1.5px] h-3.5 w-3.5 -translate-y-1/2 text-[#B76E8B] transition-transform duration-300 dark:text-zinc-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                <span className="text-[13px] text-[#987B88] dark:text-zinc-400 sm:text-[14px]">
                  {item.location}
                </span>
              </div>
            </button>

            {/* Expandable details */}
            <div
              className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-6 pr-8 text-[14px] text-[#785C69] transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] dark:text-zinc-400 ${
                    isOpen
                      ? "translate-y-0 pb-4 pt-0 opacity-100"
                      : "-translate-y-2 pb-0 pt-0 opacity-0"
                  }`}
                >
                  {/* Metrics */}
                  {item.metrics && (
                    <div className="relative -ml-6 -mr-8 mb-4">
                      <div className="grid max-w-full grid-cols-2 pl-6 pr-8 2xl:grid-cols-4">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="relative min-w-0 px-3 py-2 after:absolute after:bottom-0 after:right-0 after:top-0 after:w-0 after:border-r after:border-[#D9A4B9]/70 after:[mask-image:repeating-linear-gradient(to_bottom,black_0,black_1px,transparent_1px,transparent_6px)] dark:after:border-white/15 [&:nth-child(2n)]:after:hidden 2xl:[&:not(:last-child)]:after:block 2xl:[&:last-child]:after:hidden"
                          >
                            <p
                              className={`whitespace-nowrap font-bold leading-none text-[#38232D] dark:text-zinc-100 ${
                                metric.value.includes(" - ")
                                  ? "text-[13px]"
                                  : "text-[16px]"
                              }`}
                            >
                              {metric.value}
                            </p>

                            <p className="mt-1 text-[10px] font-medium uppercase text-[#B18A9B] dark:text-zinc-500">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <span
                        className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-[#D9A4B9]/70 dark:border-white/15"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />

                      <span
                        className="pointer-events-none absolute inset-x-0 top-1/2 h-0 border-t border-[#D9A4B9]/70 dark:border-white/15 2xl:hidden"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />

                      <span
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-0 border-b border-[#D9A4B9]/70 dark:border-white/15"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />

                      <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
                      <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
                      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
                      <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-[#B76E8B] dark:bg-white/25" />
                    </div>
                  )}

                  {/* Screenshot */}
                  {isOpen && item.screenshot && (
                    <div className="relative mb-4 overflow-hidden rounded-lg border border-[#E5B8CA] bg-[#F6DCE7] dark:border-zinc-800 dark:bg-black">
                      <Image
                        src={item.screenshot}
                        alt={`${item.title} analytics screenshot`}
                        width={1400}
                        height={1050}
                        sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
                        quality={70}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                    {item.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((point, i) => {
                        const [label, ...detail] = point.trim().split(":");

                        return (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-[2px] text-[14px] leading-none text-[#B76E8B] dark:text-zinc-500">
                              •
                            </span>

                            <span>
                              {detail.length > 0 ? (
                                <>
                                  <strong className="font-semibold text-[#38232D] dark:text-zinc-200">
                                    {label}:
                                  </strong>

                                  {detail
                                    .join(":")
                                    .split(
                                      /(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)/,
                                    )
                                    .map((part, partIndex) =>
                                      /^(kgateway|FOSSology|FOSSASIA Eventyay|Extralit|React JSON Schema Form)$/.test(
                                        part,
                                      ) ? (
                                        <strong
                                          key={partIndex}
                                          className="font-semibold text-[#38232D] dark:text-zinc-200"
                                        >
                                          {part}
                                        </strong>
                                      ) : (
                                        part
                                      ),
                                    )}
                                </>
                              ) : (
                                point.trim()
                              )}
                            </span>
                          </li>
                        );
                      })}
                  </ul>

                  {/* Technologies */}
                  {item.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[4px] border border-[#E5B8CA] bg-[#FCEBF2] px-2 py-0.5 text-[11px] font-medium text-[#805267] dark:border-zinc-800 dark:bg-[#171316] dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* External links */}
                  {item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group/link inline-flex items-center gap-1.5 rounded-[6px] border border-[#D9A4B9] bg-[#FCEBF2] px-2.5 py-1 text-[11.5px] font-semibold text-[#684253] shadow-sm transition-all hover:border-[#B76E8B] hover:bg-[#F6DCE7] hover:text-[#38232D] dark:border-zinc-700 dark:bg-[#18181b] dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white"
                        >
                          {link.label}

                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-2.5 w-2.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
