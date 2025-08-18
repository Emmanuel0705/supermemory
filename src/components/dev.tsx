"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Github from "./icons/github";
import FooterLogo from "./icons/footer-logo";
import FooterGradient from "./icons/footer-gradient";
import Asteric from "./icons/asteric";
import HeroGrid from "./icons/hero-grid";

export function Developers() {
  const [activeTab, setActiveTab] = useState(0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <section
        id="motivation"
        className="flex flex-col relative gap-8 max-sm:gap-4 justify-center pt-16 max-sm:pt-6 lg:py-52 isolate pb-32 px-4 lg:px-8 2xl:px-12 text-center"
      >
        <HeroGrid
          className="absolute top-0 left-0 w-full opacity-20 -z-10"
          width={1200}
          height={600}
        />
        <img
          src="https://supermemory.ai/_astro/gradient-icon.DNStxMeh.svg"
          alt="gradient-icon"
          className="h-24 max-sm:h-16 mx-auto"
          width={96}
          height={96}
        />

        <h1 className="text-[5rem] max-sm:text-5xl max-sm:leading-12 leading-20 tracking-tighter text-white font-medium">
          Context <br />
          is everything
        </h1>

        <p className="tracking-tight leading-5 max-sm:mb-10 text-white font-light mx-auto lg:max-w-56">
          Without it, even the smartest AI is just an expensive chatbot
        </p>

        <div className="flex justify-center lg:mt-22 max-sm:hidden">
          <img
            src="/memory-engineering.png"
            alt="memory-engineering"
            className="w-9/10 max-w-4xl h-auto"
            width={800}
            height={400}
            loading="lazy"
          />
        </div>
        <div
          id="marquee-wrapper"
          className="relative w-full overflow-x-clip cursor-grab"
        >
          <div className="pointer-events-none absolute z-10 inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute z-10 inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
          <ul
            id="marquee"
            className="flex gap-4 w-max rotator"
            onMouseDown={(e) => e.currentTarget.classList.add("pressed")}
            onMouseUp={(e) => e.currentTarget.classList.remove("pressed")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("pressed")}
            style={{
              willChange: "transform",
              transform: "translateX(-841.55px)",
            }}
          >
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-7.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ init multimodal support
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Websites: JS &amp; rate limits are messy</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>PDFs: OCR fails, extraction inconsistent</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Authentication tokens expire constantly</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-4.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ init vector_database
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Way too expensive. Time to switch.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Painfully slow. Let's try another.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Won't scale. Back to square one.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Maintenance nightmare. Need alternatives.</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-1.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ choose embedding_model
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Which model fits your use case?</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Confusing performance tradeoffs</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Can't keep up with new releases</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "1.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ handle format_parsing
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Markdown: Tables break everything</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>HTML: Scripts and styles interfere</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>PDF: Layout ruins extraction</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "4.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ calculate scaling_costs
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Costs explode at production scale</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Performance degrades as data grows</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Engineering hours pile up fast</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "7.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ setup connection_sync
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Sync failures between data sources</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>API rate limits during large syncs</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Images: Need vision models now?</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Audio/Video: Transcription costs soar</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-7.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ init multimodal support
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Websites: JS &amp; rate limits are messy</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>PDFs: OCR fails, extraction inconsistent</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Authentication tokens expire constantly</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-4.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ init vector_database
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Way too expensive. Time to switch.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Painfully slow. Let's try another.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Won't scale. Back to square one.</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Maintenance nightmare. Need alternatives.</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "-1.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ choose embedding_model
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Which model fits your use case?</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Confusing performance tradeoffs</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Can't keep up with new releases</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "1.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ handle format_parsing
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Markdown: Tables break everything</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>HTML: Scripts and styles interfere</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/warning.DXtqSwJQ.svg"
                        alt="warning"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>PDF: Layout ruins extraction</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "4.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ calculate scaling_costs
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Costs explode at production scale</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Performance degrades as data grows</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Engineering hours pile up fast</span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="bg-zinc-800 text-left p-0.4 rounded-3xl w-96 h-fit transition-transform duration-150 select-none"
              style={{ "--rotation": "7.5deg" } as React.CSSProperties}
            >
              <div className="bg-card rounded-[22px] flex flex-col gap-8 p-6 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                <span className="text-white font-light">
                  $ setup connection_sync
                </span>
                <ul className="text-zinc-500 flex flex-col gap-3 whitespace-nowrap">
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Sync failures between data sources</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>API rate limits during large syncs</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Images: Need vision models now?</span>
                  </li>
                  <li className="flex items-center gap-2 uppercase text-xs">
                    <div className="size-3">
                      <img
                        src="https://supermemory.ai/_astro/error.C9UR1YQs.svg"
                        alt="error"
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                    <span>Audio/Video: Transcription costs soar</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="solutions"
        className="flex flex-col relative gap-8 justify-center pt-16 pb-32 px-4 lg:px-8 2xl:px-12 max-sm:pb-12"
      >
        <div className="mx-auto text-center max-w-[30rem] w-full flex flex-col gap-8">
          <div className="text-zinc-500 uppercase text-xs font-light">
            solution • solution • solution
          </div>
          <p className="tracking-tight leading-5 text-white font-light text-pretty">
            We&apos;ve seen what it&apos;s like to build memory infrastructure
            the hard way — so we built supermemory to make it disappear.
          </p>
        </div>

        <div className="bg-gradient-to-b max-sm:rounded-3xl from-sky-200 to-blue-950 via-blue-600 p-3">
          <div className="bg-background p-12 max-sm:p-6 lg:p-20 rounded-2xl flex flex-col lg:flex-row justify-between gap-16">
            <div className="space-y-4 lg:space-y-12">
              <div className="text-zinc-500 uppercase text-xs font-light">
                product • product • product
              </div>
              <h2 className="text-white text-[44px] max-sm:text-4xl max-sm:leading-9 font-medium lg:text-5xl tracking-tighter leading-11">
                Edit one line. <br />
                Get longer threads, <br />
                cost savings <br />
                memory.
              </h2>
              <p className="text-white font-light tracking-tight leading-5 max-w-[30rem] w-full">
                Just add{" "}
                <a
                  href="https://api.supermemory.ai/v3"
                  className="text-gradient"
                  data-analytics-id="api-base-url"
                >
                  api.supermemory.ai/v3
                </a>{" "}
                to your OpenAI base URL — and get automatic long-term context
                across conversations.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:gap-12 items-center justify-center">
              <div className="bg-zinc-800 p-0.4 rounded-3xl w-full border-1 border-zinc-700">
                <div className="bg-card relative rounded-[22px] flex flex-col gap-8 p-8 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                  <div className="absolute top-4 right-6 max-sm:hidden">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import OpenAI from &quot;openai&quot;
const client = new OpenAI({
   baseUrl: &quot;https://api.supermemory.ai/v3/https://api.openai.com/v1/&quot;
})`
                        )
                      }
                      className="flex gap-2 items-center cursor-pointer text-white"
                    >
                      <div className="size-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-full h-full"
                        >
                          <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </div>
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="lg:text-lg text-sm sm:text-base">
                    <pre
                      className="overflow-x-auto"
                      style={{ backgroundColor: "undefined", color: "#ffffff" }}
                    >
                      <code>
                        <span className="hljs-keyword">import</span>{" "}
                        <span className="hljs-title class_">OpenAI</span>{" "}
                        <span className="hljs-keyword">from</span>{" "}
                        <span className="hljs-string">&quot;openai&quot;</span>
                        <br />
                        <span className="hljs-keyword">const</span> client ={" "}
                        <span className="hljs-keyword">new</span>{" "}
                        <span className="hljs-title class_">OpenAI</span>({"{"}
                        <br />
                        &nbsp;&nbsp;<span className="hljs-attr">
                          baseUrl
                        </span>:{" "}
                        <span className="hljs-string">
                          &quot;https://api.supermemory.ai/v3/https://api.openai.com/v1/&quot;
                        </span>
                        <br />
                        {"}"})
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <a
                className="p-0.5 whitespace-nowrap group text-white w-fit rounded-2xl gradient-button-wrapper bg-card"
                href="https://docs.supermemory.ai/"
                data-analytics-id="solutions-start-building"
              >
                <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                  <div className="rounded-[10px] font-light text-xl flex gap-8 group-hover:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                    <span>
                      Start building <sup className="text-xs -top-2">DOCS</sup>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="sm:py-20 py-10 px-4 lg:px-8 2xl:px-12 relative"
      >
        <div className="grid mx-4 grid-cols-6 -mt-32 absolute inset-0 h-full -z-10 border-x divide-x border-zinc-700 divide-zinc-700">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="mx-auto text-center max-w-[30rem] w-full flex flex-col gap-8">
          <div className="text-zinc-500 uppercase text-xs font-light">
            features • features • features
          </div>
          <h2 className="text-white text-[44px] tracking-tighter font-medium leading-11">
            Unlock the Full Potential of Your Data
          </h2>
        </div>

        <div
          id="features-grid"
          className="grid grid-cols-6 h-[600px] mt-12 max-sm:mt-0 relative"
        >
          <div
            className="bg-gradient-to-b h-1/2 from-sky-100 via-blue-500 to-100%"
            data-animate="true"
            style={{ transform: "translateY(100%)" }}
          ></div>
          <div
            className="bg-gradient-to-b h-1/2 self-end col-span-2 from-sky-100 via-blue-500 to-100%"
            data-animate="true"
            style={{ transform: "translateY(-100%)" }}
          ></div>
          <div
            className="bg-gradient-to-b h-1/2 col-span-2 from-sky-100 via-blue-500 to-100%"
            data-animate="true"
            style={{ transform: "translateY(100%)" }}
          ></div>
          <div
            className="bg-gradient-to-b h-1/2 self-end from-sky-100 via-blue-500 to-100%"
            data-animate="true"
            style={{ transform: "translateY(-100%)" }}
          ></div>

          <div className="absolute top-0 left-0 w-full col-start-1 col-span-6 lg:col-start-2 lg:col-span-4 h-full sm:py-24 py-10 px-8">
            <div className="bg-white h-fit sm:min-h-full border-1 border-zinc-200 w-full divide-y divide-zinc-200 rounded-3xl shadow">
              <div className="flex justify-between items-center">
                <div
                  className="m-3 p-1 bg-zinc-100 rounded-2xl gap-1 flex items-center overflow-x-auto whitespace-nowrap"
                  id="api-tabs"
                >
                  <button
                    className={`px-3.5 py-3 rounded-xl transition-colors duration-300 ${
                      activeTab === 0
                        ? "text-white bg-zinc-800"
                        : "text-zinc-500 hover:bg-zinc-200"
                    }`}
                    onClick={() => setActiveTab(0)}
                  >
                    Add memories
                  </button>
                  <button
                    className={`px-3.5 py-3 rounded-xl transition-colors duration-300 ${
                      activeTab === 1
                        ? "text-white bg-zinc-800"
                        : "text-zinc-500 hover:bg-zinc-200"
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    Search memories
                  </button>
                  <button
                    className={`px-3.5 py-3 rounded-xl transition-colors duration-300 ${
                      activeTab === 2
                        ? "text-white bg-zinc-800"
                        : "text-zinc-500 hover:bg-zinc-200"
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    Connect apps
                  </button>
                </div>
              </div>

              <div className="p-6 text-sm" id="code-display">
                <div className={activeTab === 0 ? "block" : "hidden"}>
                  <pre
                    className="overflow-x-auto"
                    style={{
                      backgroundColor: "undefined",
                      color: "rgb(17, 24, 39)",
                    }}
                  >
                    <code>
                      <span className="hljs-keyword">const</span> response ={" "}
                      <span className="hljs-keyword">await</span>{" "}
                      <span className="hljs-title function_">fetch</span>(
                      <span className="hljs-string">
                        &apos;https://api.supermemory.ai/v3/memories&apos;
                      </span>
                      , {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="hljs-attr">
                        method
                      </span>:{" "}
                      <span className="hljs-string">&apos;POST&apos;</span>,
                      <br />
                      &nbsp;&nbsp;<span className="hljs-attr">
                        headers
                      </span>: {"{"}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-string">
                        &apos;Authorization&apos;
                      </span>
                      :{" "}
                      <span className="hljs-string">
                        &apos;Bearer
                        sm_ywdhjSbiDLkLIjjVotSegR_rsq3ZZKNRJmVr12p4ItTcf&apos;
                      </span>
                      <br />
                      &nbsp;&nbsp;{"}"},
                      <br />
                      &nbsp;&nbsp;<span className="hljs-attr">body</span>:{" "}
                      <span className="hljs-title class_">JSON</span>.
                      <span className="hljs-title function_">stringify</span>(
                      {"{"}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-attr">content</span>:{" "}
                      <span className="hljs-string">
                        &apos;You can add text&apos;
                      </span>
                      ,
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-comment">
                        {/* or a url https://example.com */}
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-comment">
                        {/* or pdfs, videos, images. https://example.com/page.pdf */}
                      </span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-attr">metadata</span>: {"{"}
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="hljs-attr">user_id</span>:{" "}
                      <span className="hljs-string">&apos;123&apos;</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                      <br />
                      &nbsp;&nbsp;{"}"}),
                      <br />
                      {"}"})
                      <br />
                      <br />
                      <span className="hljs-keyword">const</span> data ={" "}
                      <span className="hljs-keyword">await</span> response.
                      <span className="hljs-title function_">json</span>();
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-neutral-100 py-20 lg:py-40 px-4 lg:px-8 2xl:px-12"
        id="more-features"
      >
        <div className="max-w-[30rem] px-4 lg:px-10 space-y-6 lg:space-y-12 pb-11 lg:pb-22">
          <div className="text-zinc-500 uppercase text-xs font-light">
            features • features • features
          </div>
          <h2 className="text-black text-[44px] tracking-tighter font-medium leading-11">
            Build the memory layer your product deserves
          </h2>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div
            id="f4f22edd-1d38-4546-92c0-01058429039b"
            data-muted="false"
            className="features-item group features-item-clip-path py-px pr-px data-[muted=true]:bg-zinc-200"
          >
            {" "}
            <div className="py-8 sm:px-10 px-6 sm:gap-8 gap-4 lg:gap-16 flex flex-col lg:py-22 lg:px-10 lg:items-end lg:flex-row bg-white transition-colors duration-300 features-item-clip-path group-data-[muted=true]:bg-zinc-100">
              {" "}
              <div className="flex items-center sm:gap-10 gap-4 lg:gap-16 max-sm:flex-col max-sm:items-start">
                {" "}
                <div className="flex items-center gap-10 lg:gap-16">
                  {" "}
                  <div className="text-3xl text-background transition-colors duration-300 font-medium group-data-[muted=true]:text-zinc-400">
                    {" "}
                    01.{" "}
                  </div>{" "}
                  <div className="sm:size-24">
                    {" "}
                    <Asteric className="max-sm:h-12 w-full" />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-2 lg:space-y-6 w-80 lg:w-96">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light whitespace-nowrap">
                    {" "}
                    Your data grows. supermemory keeps up{" "}
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    Enterprise-Grade Performance at Any Scale
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                supermemory is built to handle billions of data points with
                low-latency retrieval — whether you're indexing documents,
                video, or structured product data.{" "}
              </p>{" "}
            </div>{" "}
          </div>
          <div
            id="c0224f95-972d-4ee8-84a1-66d82ded32ca"
            data-muted="false"
            className="features-item group features-item-clip-path py-px pr-px data-[muted=true]:bg-zinc-200"
          >
            {" "}
            <div className="py-8 sm:px-10 px-6 sm:gap-8 gap-4 lg:gap-16 flex flex-col lg:py-22 lg:px-10 lg:items-end lg:flex-row bg-white transition-colors duration-300 features-item-clip-path group-data-[muted=true]:bg-zinc-100">
              {" "}
              <div className="flex items-center sm:gap-10 gap-4 lg:gap-16 max-sm:flex-col max-sm:items-start">
                {" "}
                <div className="flex items-center gap-10 lg:gap-16">
                  {" "}
                  <div className="text-3xl text-background transition-colors duration-300 font-medium group-data-[muted=true]:text-zinc-400">
                    {" "}
                    02.{" "}
                  </div>{" "}
                  <div className="sm:size-24">
                    {" "}
                    <Asteric className="max-sm:h-12 w-full" />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-2 lg:space-y-6 w-80 lg:w-96">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light whitespace-nowrap">
                    {" "}
                    No heavy lifting. Just smart, connected infrastructure{" "}
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    Seamless Integration Across Teams &amp; Tools
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                Connect directly to your existing stack — from Notion to Google
                Drive to custom CRMs — with flexible APIs and SDKs that let
                every team tap into memory instantly.{" "}
              </p>{" "}
            </div>{" "}
          </div>
          <div
            id="69bf68fb-ee76-4a19-9374-f6e08a3a591f"
            data-muted="false"
            className="features-item group features-item-clip-path py-px pr-px data-[muted=true]:bg-zinc-200"
          >
            {" "}
            <div className="py-8 sm:px-10 px-6 sm:gap-8 gap-4 lg:gap-16 flex flex-col lg:py-22 lg:px-10 lg:items-end lg:flex-row bg-white transition-colors duration-300 features-item-clip-path group-data-[muted=true]:bg-zinc-100">
              {" "}
              <div className="flex items-center sm:gap-10 gap-4 lg:gap-16 max-sm:flex-col max-sm:items-start">
                {" "}
                <div className="flex items-center gap-10 lg:gap-16">
                  {" "}
                  <div className="text-3xl text-background transition-colors duration-300 font-medium group-data-[muted=true]:text-zinc-400">
                    {" "}
                    03.{" "}
                  </div>{" "}
                  <div className="sm:size-24">
                    {" "}
                    <Asteric className="max-sm:h-12 w-full" />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="space-y-2 lg:space-y-6 w-80 lg:w-96">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light whitespace-nowrap">
                    {" "}
                    Own your data. Maintain compliance. Stay in control{" "}
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    Secure by Design. <br /> Fully Controllable.
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                Deploy supermemory in the cloud, on-prem, or directly on-device
                — with full control over where and how your data is stored.{" "}
              </p>{" "}
            </div>{" "}
          </div>
        </div>
      </section>

      <section
        className="bg-neutral-100 py-20 lg:py-40 sm:px-8 px-4 2xl:px-12"
        id="even-more-features"
      >
        <div className="sm:gap-8 gap-2 lg:gap-6 flex flex-col lg:flex-row">
          {" "}
          <div className="max-w-80 text-pretty lg:max-w-1/3 lg:w-full lg:px-4 space-y-6 lg:space-y-12 pb-11">
            <div className="text-zinc-500 uppercase text-xs font-light">
              features • features • features
            </div>{" "}
            <h2 className="text-black text-[44px] max-sm:text-4xl max-sm:leading-9 tracking-tighter font-medium leading-11">
              It just clicks with your stack
            </h2>{" "}
          </div>{" "}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {" "}
            <div className="more-features-item-clip-path p-px bg-zinc-200">
              {" "}
              <div className="bg-white more-features-item-clip-path h-full sm:p-12 p-6 space-y-6 sm:space-y-12">
                <div className="flex justify-between items-center">
                  {" "}
                  <img
                    src="https://supermemory.ai/_astro/icon-03._KXGhOq7.png"
                    alt="Model-interoperable APIs"
                    loading="lazy"
                    className="w-18"
                  />
                </div>{" "}
                <div className="space-y-4 lg:space-y-6">
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    {" "}
                    Interoperability{" "}
                  </div>
                  <h3 className="text-black text-[28px] max-sm:text-2xl lg:text-[32px] lg:font-medium tracking-tighter font-normal leading-7">
                    Model-interoperable APIs{" "}
                  </h3>
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    supermemory works with any LLM provider. So you can keep
                    switching, without lock-in. Switch between models. keep your
                    memory.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="more-features-item-clip-path p-px bg-zinc-200">
              <div className="bg-white more-features-item-clip-path h-full sm:p-12 p-6 space-y-6 sm:space-y-12">
                <div className="flex justify-between items-center">
                  <img
                    src="https://supermemory.ai/_astro/icon-02.Be4Mh2So.png"
                    alt="Sub-400ms latency at scale"
                    loading="lazy"
                    className="w-18"
                  />
                </div>{" "}
                <div className="space-y-4 lg:space-y-6">
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    Performance{" "}
                  </div>
                  <h3 className="text-black text-[28px] max-sm:text-2xl lg:text-[32px] lg:font-medium tracking-tighter font-normal leading-7">
                    Sub-400ms latency at scale{" "}
                  </h3>
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    supermemory is built for speed and scale. We re-imagined RAG
                    to be faster and more efficient.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="features-item-clip-path p-px sm:col-span-2 bg-zinc-200">
              <div className="bg-white features-item-clip-path h-full p-8 lg:p-12 gap-8 grid sm:grid-cols-2">
                <div className="space-y-6 flex flex-col lg:justify-between lg:space-y-12">
                  <div className="flex justify-between items-center">
                    <img
                      src="https://supermemory.ai/_astro/icon-05.D-APBZON.png"
                      alt="Best in class performance"
                      loading="lazy"
                      className="w-18"
                    />
                  </div>{" "}
                  <div className="space-y-4 lg:space-y-6">
                    <div className="text-zinc-500 uppercase text-xs font-light">
                      Efficiency{" "}
                    </div>
                    <h3 className="text-black text-[28px] max-sm:text-2xl lg:text-[32px] lg:font-medium lg:max-w-56 tracking-tighter font-normal leading-7">
                      Best in class performance{" "}
                    </h3>{" "}
                    <p className="text-zinc-500 tracking-tight leading-5 font-light">
                      supermemory delivers stronger precision and recall at
                      every benchmark. And it's ridiculously easy to start.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>
                <div className="space-y-4 sm:text-center">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    comparison of evaluation metrics:
                    <br />
                    <span className="text-gradient">supermemory</span> vs major
                    memory provider
                  </div>{" "}
                  <img
                    src="https://supermemory.ai/_astro/graph.TiFAP9PE.svg"
                    alt='comparison of evaluation metrics:<br> <span className="text-gradient">supermemory</span> vs major memory provider'
                    loading="lazy"
                    className="w-full"
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="more-features-item-clip-path p-px bg-zinc-200">
              {" "}
              <div className="bg-white more-features-item-clip-path h-full sm:p-12 p-6 space-y-6 sm:space-y-12">
                {" "}
                <div className="flex justify-between items-center">
                  {" "}
                  <img
                    src="https://supermemory.ai/_astro/icon-04.C-YwUqEL.png"
                    alt="Works with AI SDK, Langchain, and more"
                    loading="lazy"
                    className="w-18"
                  />
                </div>{" "}
                <div className="space-y-4 lg:space-y-6">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    {" "}
                    Tooling{" "}
                  </div>{" "}
                  <h3 className="text-black text-[28px] max-sm:text-2xl lg:text-[32px] lg:font-medium tracking-tighter font-normal leading-7">
                    {" "}
                    Works with AI SDK, Langchain, and more{" "}
                  </h3>{" "}
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    supermemory works with any LLM provider. So you can keep
                    switching, without lock-in.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="more-features-item-clip-path p-px bg-zinc-200">
              {" "}
              <div className="bg-white more-features-item-clip-path h-full sm:p-12 p-6 space-y-6 sm:space-y-12">
                {" "}
                <div className="flex justify-between items-center">
                  {" "}
                  <img
                    src="https://supermemory.ai/_astro/icon-01.BxCGHlCj.png"
                    alt="Deploy in a day, not months"
                    loading="lazy"
                    className="w-18"
                  />
                  <img
                    src="https://supermemory.ai/_astro/framework-logos.DnOi-bJz.svg"
                    alt="Python, Typescript, Next.js, and React logos"
                    loading="lazy"
                  />{" "}
                </div>{" "}
                <div className="space-y-4 lg:space-y-6">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    {" "}
                    Language Agnostic{" "}
                  </div>{" "}
                  <h3 className="text-black text-[28px] max-sm:text-2xl lg:text-[32px] lg:font-medium tracking-tighter font-normal leading-7">
                    {" "}
                    Deploy in a day, not months{" "}
                  </h3>{" "}
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    SDKs available for Python and Javascript.
                    <br />
                    <br />{" "}
                    <a
                      href="https://docs.supermemory.ai/sdks/typescript"
                      className="underline"
                      aria-label="Learn more about the supermemory SDKs"
                      data-analytics-id="features-learn-more-sdks"
                    >
                      Learn more
                    </a>
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section
        id="solutions"
        className="flex flex-col relative gap-8 justify-center pt-16 pb-32 px-4 lg:px-8 2xl:px-12"
      >
        <div className="bg-gradient-to-b max-sm:rounded-3xl from-sky-200 to-blue-950 via-blue-600 p-3">
          <div className="bg-background p-12 max-sm:p-6 lg:p-20 rounded-2xl flex flex-col lg:flex-row justify-between gap-16 max-sm:gap-8">
            <div className="space-y-4 lg:space-y-12 max-w-[30rem]">
              <div className="text-zinc-500 uppercase text-xs font-light">
                product • product • product
              </div>
              <h2 className="text-white text-[44px] max-sm:text-4xl max-sm:leading-9 lg:text-5xl lg:font-medium tracking-tighter leading-11">
                Add context to your agentic apps with few lines of code
              </h2>
              <p className="text-white font-light tracking-tight leading-5 max-w-[30rem] w-full">
                supermemory provides SDKs to make integration as simple as
                possible
              </p>
            </div>
            <div
              id="installation-language"
              data-active-language="typescript"
              className="flex flex-col group gap-4 w-full items-center text-sm"
            >
              <div
                className="p-1 bg-black rounded-2xl gap-1 flex items-center overflow-x-auto whitespace-nowrap"
                id="installation-language-tabs"
              >
                <button
                  className="px-4 py-3 rounded-xl transition-colors duration-300 text-zinc-500 hover:bg-zinc-800/75 group-data-[active-language='typescript']:text-white group-data-[active-language='typescript']:bg-zinc-800"
                  data-language="typescript"
                >
                  Typescript
                </button>
                <button
                  className="px-4 py-3 rounded-xl transition-colors duration-300 text-zinc-500 hover:bg-zinc-800/75 group-data-[active-language='python']:text-white group-data-[active-language='python']:bg-zinc-800"
                  data-language="python"
                >
                  Python
                </button>
              </div>
              <div className="bg-zinc-800 p-0.4 rounded-3xl lg:w-4/5 w-full border-1 border-zinc-700">
                <div className="bg-card relative rounded-[22px] flex flex-col gap-8 p-8 lg:text-lg lg:p-12 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440]">
                  <div className="hidden group-data-[active-language='typescript']:block">
                    <div className="text-white font-mono">
                      <span className="text-pink-600">npm</span> install
                      <span className="text-gradient">supermemory</span>
                    </div>
                    <div className="absolute top-4 right-6 max-sm:hidden">
                      <button
                        data-code="npm install supermemory"
                        id="2ad424ef-f969-462f-b391-f057e2e52baf"
                        className="flex gap-2 items-center cursor-pointer text-white"
                        onClick={() =>
                          copyToClipboard("npm install supermemory")
                        }
                      >
                        <div className="size-4">
                          <svg
                            id="2ad424ef-f969-462f-b391-f057e2e52baf-copy"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </div>
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                  <div className="hidden group-data-[active-language='python']:block">
                    <div className="text-white font-mono">
                      <span className="text-pink-600">pip</span> install
                      <span className="text-gradient">supermemory</span>
                    </div>
                    <div className="absolute top-4 right-6 max-sm:hidden">
                      <button
                        data-code="pip install supermemory"
                        id="a28e8f29-c64c-4dcd-8ee2-8e08cb79f5b7"
                        className="flex gap-2 items-center cursor-pointer text-white"
                        onClick={() =>
                          copyToClipboard("pip install supermemory")
                        }
                      >
                        <div className="size-4">
                          <svg
                            id="a28e8f29-c64c-4dcd-8ee2-8e08cb79f5b7-copy"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>
                        </div>
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="p-0.5 whitespace-nowrap group text-white w-fit rounded-2xl lg:mt-8 gradient-button-wrapper bg-card"
                href="https://docs.supermemory.ai/"
                data-analytics-id="sdks-start-building"
              >
                <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                  <div className="rounded-[10px] font-light text-xl flex gap-8 group-hover:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                    <span>
                      Start building <sup className="text-xs -top-2">DOCS</sup>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="pt-16 px-6 pb-32 lg:py-52 relative">
        <img
          src="https://supermemory.ai/_astro/hero-grid.DF71ygke.svg"
          alt="hero-grid"
          className="absolute top-0 left-0 w-full opacity-40 -z-10"
        />
        <div className="flex flex-col items-center gap-4 text-center mx-auto lg:max-w-5xl w-full">
          <h3 className="text-white text-[28px] max-sm:text-xl max-w-[400px] tracking-tighter font-normal leading-7 mx-auto">
            Trusted by Open Source, enterprise, and more than
          </h3>
          <img
            src="https://supermemory.ai/_astro/35k.6cN56SOd.svg"
            alt="testimonial"
            className="mt-4 sm:h-40 h-20 lg:h-60"
          />
          <h3 className="text-white text-[28px] max-w-[400px] tracking-tighter font-normal leading-7">
            of you
          </h3>
          <div className="flex max-lg:flex-wrap text-pretty gap-16 mt-8 text-white uppercase text-xs font-light mx-auto justify-center">
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full">
              <img
                src="https://supermemory.ai/_astro/product-hunt.Ciyf5YNm.svg"
                alt="Product Hunt"
                className="size-16"
              />
              <div>#1 Product of the day at Product hunt</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-20">
              <img
                src="https://supermemory.ai/_astro/github.CfXqoa4M.svg"
                alt="Github"
                className="size-16"
              />
              <div>Starred by over 9,000 users on Github</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-32">
              <img
                src="https://supermemory.ai/_astro/flow.PnwRS8Qx.png"
                alt="Flow"
                className="size-16"
              />
              <div>Flow uses supermemory to build the cursor for writing</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-20">
              <img
                src="https://supermemory.ai/_astro/medtech.C6Dus75J.png"
                alt="Medtech Vendors"
                className="h-9"
              />
              <div>
                Medtech Vendors uses supermemory to search through 500k vendors
              </div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full">
              <img
                src="https://supermemory.ai/_astro/mixus.C89kGzQv.png"
                alt="Mixus"
                className="h-10"
              />
              <div>
                Mixus uses supermemory to power co-intelligence Agentic platform
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="blogs"
        className="flex flex-col relative gap-8 justify-center pt-16 pb-32 px-8 lg:px-16 2xl:px-24"
      >
        <div className="pb-16">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <div className="text-zinc-500 uppercase text-xs font-light">
                A glimpse into the minds behind supermemory
              </div>
              <h2 className="text-white text-[44px] tracking-tighter font-medium leading-11">
                Latest blog posts
              </h2>
            </div>
            <a
              className="p-0.5 whitespace-nowrap group/button text-white rounded-2xl gradient-button-wrapper bg-card text-base hidden sm:block font-medium"
              href="/blog"
            >
              <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                <div className="rounded-[10px] flex items-center justify-center group-hover/button:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                  View all
                </div>
              </div>
            </a>
          </div>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 text-white pt-16 gap-8"></ul>
          <a
            className="p-0.5 whitespace-nowrap group/button text-white rounded-2xl gradient-button-wrapper bg-card text-base block sm:hidden font-medium"
            href="/blog"
          >
            <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
              <div className="rounded-[10px] flex items-center justify-center group-hover/button:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                View all
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
