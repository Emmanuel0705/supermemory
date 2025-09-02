"use client";

import { useState, useEffect } from "react";
import Asteric from "../icons/asteric";
import HeroGrid from "../icons/hero-grid";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import { InfiniteMovingCards } from "../infinite-moving-cards";
import { CodeBlock } from "../ui/code-block";
import Link from "next/link";

const tabs = [
  {
    name: "Add TauNet",
    code: `const response = await fetch('https://api.tau.network/v1/context', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tau_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: 'User swapped 5 ETH for TAU',
    metadata: {
      wallet: '0xabc123...',
      chain: 'Ethereum'
    }
  })
})

const data = await response.json()
`,
    language: "ts",
    filename: "add-taunet.js",
  },
  {
    name: "Search TauNet",
    code: `const response = await fetch('https://api.tau.network/v1/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tau_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'Show me last week’s TAU transactions',
    filters: { wallet: '0xabc123...' }
  })
})

const results = await response.json()
`,
    language: "ts",
    filename: "search-taunet.js",
  },
  {
    name: "Connect dApps & Agents",
    code: `const response = await fetch('https://api.tau.network/v1/connect', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tau_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    integration: 'Uniswap',
    permissions: ['read:swaps', 'write:alerts']
  })
})

const status = await response.json()
`,
    language: "ts",
    filename: "connect-taunet.js",
  },
];

export function Developers() {
  const [activeTab, setActiveTab] = useState(0);

  const code = `
import OpenAI from "openai"
const client = new OpenAI({
  baseUrl: "https://api.tau.ai/v1/https://api.openai.com/v1/"
})
  `;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
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
          src="/gradient-icon.DNStxMeh.svg"
          alt="gradient-icon"
          className="h-24 max-sm:h-16 mx-auto"
          width={96}
          height={96}
        />

        <h1 className="text-[5rem] max-sm:text-5xl max-sm:leading-12 leading-20 tracking-tighter text-white font-medium">
          Meaning <br />
          gives power
        </h1>

        <p className="tracking-tight leading-5 max-sm:mb-10 text-white font-light mx-auto lg:max-w-md">
          Data without perspective is just numbers on a chain.
        </p>
        <p className="tracking-tight leading-5 max-sm:mb-10 text-white font-light mx-auto lg:max-w-md">
          TAU transforms activity into understanding — giving Web3 intelligence
          that acts with purpose.{" "}
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
          <InfiniteMovingCards>
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/warning.DXtqSwJQ.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
                        src="/error.C9UR1YQs.svg"
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
          </InfiniteMovingCards>
        </div>
      </section>

      <section
        id="solutions"
        className="flex flex-col relative gap-8 justify-center pt-16 pb-32 px-4 lg:px-8 2xl:px-12 max-sm:pb-12"
      >
        <div className="mx-auto text-center max-w-[30rem] w-full flex flex-col gap-8">
          <div className="text-zinc-500 uppercase text-xs font-light">
            Swap one line. Unlock deeper context, smarter chains, lower costs.
          </div>
          <p className="tracking-tight leading-5 text-white font-light text-pretty">
            Just point your dApp or AI agent to api.tau.ai/v1 — and instantly
            gain cross-chain intelligence, long-term memory, and context-aware
            execution without rewriting your stack.
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
                <Link
                  href="/docs"
                  className="text-gradient"
                  data-analytics-id="api-base-url"
                >
                  api.tau.ai/v11
                </Link>{" "}
                to your OpenAI base URL — and get automatic long-term context
                across conversations.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:gap-12 items-center justify-center">
              <div className="bg-zinc-800 p-0.4 rounded-3xl w-full border-1 border-zinc-700">
                <div className="bg-card relative rounded-[22px] flex flex-col gap-8 p-8 shadow-[inset_0_0_0_6px_#06060640,inset_0_6px_3px_#54545440] max-w-3xl w-full">
                  {/* <div className="absolute top-4 right-6 max-sm:hidden"></div> */}
                  <CodeBlock
                    code={code}
                    language="jsx"
                    filename="add-taunet.js"
                  />
                </div>
              </div>

              <Link
                className="p-0.5 whitespace-nowrap group text-white w-fit rounded-2xl gradient-button-wrapper bg-card"
                href="/docs"
                data-analytics-id="solutions-start-building"
              >
                <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                  <div className="rounded-[10px] font-light text-xl flex gap-8 group-hover:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                    <span>
                      Start building <sup className="text-xs -top-2">DOCS</sup>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="sm:py-20 py-10 px-4 lg:px-8 2xl:px-12 relative"
      >
        <div className="mx-auto text-center max-w-3xl w-full flex flex-col gap-8">
          <div className="text-zinc-500 uppercase text-xs font-light">
            Activate the True Power of Your On-Chain Data
          </div>
          <h2 className="text-white text-[44px] tracking-tighter font-medium leading-11">
            Turn raw blockchain signals into context-aware intelligence that
            adapts to every transaction, user, and protocol.
          </h2>
        </div>

        <div
          id="features-grid"
          className="grid grid-cols-6 h-[600px] mt-12 max-sm:mt-0 relative"
        >
          <div className="absolute top-0 left-0 w-full col-start-1 col-span-6 lg:col-start-2 lg:col-span-4 h-full sm:py-24 py-10 px-8">
            <div className="bg-card h-fit sm:min-h-full border-1 border-border w-full divide-y divide-border rounded-3xl shadow">
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
                    Add TauNet
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
                  <CodeBlock
                    code={tabs[activeTab].code}
                    language="jsx"
                    filename="add-taunet.js"
                  />
                </div>

                <div className={activeTab === 1 ? "block" : "hidden"}>
                  <CodeBlock
                    code={tabs[activeTab].code}
                    language="jsx"
                    filename="add-taunet.js"
                  />
                </div>

                <div className={activeTab === 2 ? "block" : "hidden"}>
                  <CodeBlock
                    code={tabs[activeTab].code}
                    language="jsx"
                    filename="add-taunet.js"
                  />
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
            Build the trust anchor your chain deserves
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
                    L2-Grade Performance at Any Scale
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    Your campaigns grow. TAU keeps up.
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                TAU is engineered as an Ethereum Layer-2, capable of handling
                millions of reward claims and proofs with ultra-low latency and
                low fees. From airdrops to loyalty programs, TAU scales with
                your ecosystem while ensuring every interaction is cheap, fast,
                and verifiable.
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
                    Seamless Integration Across Chains & Protocols
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    No heavy lifting. Just smart, connected infrastructure.
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                Plug TAU into your existing stack - from Ethereum mainnet to
                Polygon, Arbitrum, or any EVM chain. Flexible APIs, SDKs, and
                Solidity helpers (RewardDistributor, ProofAnchors) let any dApp,
                wallet, or protocol access fraud-resistant trust anchors
                instantly.
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
                    Secure by Design. Fraud-Resistant by Default.
                  </div>{" "}
                  <h3 className="text-black lg:text-[32px] transition-colors duration-300 group-data-[muted=true]:text-zinc-400 text-[28px] tracking-tighter font-normal leading-7">
                    Own your rules. Stay in control.
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              <p className="max-w-[400px] tracking-tight leading-5 font-light text-background">
                {" "}
                TAU campaigns are secured with wallet signatures, nonce checks,
                anomaly detection, and explainable scoring. Proofs are anchored
                on-chain, sensitive signals are hashed off-chain - giving you
                full transparency, compliance, and control over how trust is
                enforced.
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
              The fabric your chain runs on{" "}
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
                    src="/icon-03._KXGhOq7.png"
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
                    Chain-Interoperable APIs
                  </h3>
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    TAU works across Ethereum and EVM chains with standard APIs
                    and proof contracts. Switch between networks without lock-in
                    - campaigns, loyalty points, and rewards remain anchored in
                    TAU’s trust fabric no matter where your users are active.
                  </p>
                </div>{" "}
              </div>{" "}
            </div>
            <div className="more-features-item-clip-path p-px bg-zinc-200">
              <div className="bg-white more-features-item-clip-path h-full sm:p-12 p-6 space-y-6 sm:space-y-12">
                <div className="flex justify-between items-center">
                  <img
                    src="/icon-02.Be4Mh2So.png"
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
                    Sub-400ms Proof Verification at Scale
                  </h3>
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    TAU is engineered for speed and scale as an OP Stack
                    Layer-2. Fraud checks, proof verifications, and reward
                    settlements run in under 400ms - making high-volume
                    campaigns cheaper, faster, and verifiable by default.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="features-item-clip-path p-px sm:col-span-2 bg-zinc-200">
              <div className="bg-white features-item-clip-path h-full p-8 lg:p-12 gap-8 grid sm:grid-cols-2">
                <div className="space-y-6 flex flex-col lg:justify-between lg:space-y-12">
                  <div className="flex justify-between items-center">
                    <img
                      src="/icon-05.D-APBZON.png"
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
                      Best-in-class trust performance
                    </h3>{" "}
                    <p className="text-zinc-500 tracking-tight leading-5 font-light">
                      TAU outperforms traditional campaign systems by delivering
                      stronger precision in detecting Sybil wallets, anomalous
                      activity, and fraudulent behaviors. Every proof is
                      verifiable on-chain, giving projects unmatched reliability
                      - and it’s ridiculously easy to start integrating.
                    </p>{" "}
                  </div>{" "}
                </div>
                <div className="space-y-4 sm:text-center">
                  {" "}
                  <div className="text-zinc-500 uppercase text-xs font-light">
                    comparison of evaluation metrics:
                    <br />
                    <span className="text-gradient"> TAU</span> vs major trust
                    provider
                  </div>{" "}
                  <img
                    src="/graph.TiFAP9PE.svg"
                    alt='comparison of evaluation metrics:<br> <span className="text-gradient">tau</span> vs major memory provider'
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
                    src="/icon-04.C-YwUqEL.png"
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
                    Works with wallets, dApps, and more{" "}
                  </h3>{" "}
                  <p className="text-zinc-500 tracking-tight leading-5 font-light">
                    TAU ships with SDKs and Solidity helpers (RewardDistributor,
                    ProofAnchors) that plug into any EVM chain. No vendor
                    lock-in - just seamless integration into your existing Web3
                    stack.
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
                    src="/icon-01.BxCGHlCj.png"
                    alt="Deploy in a day, not months"
                    loading="lazy"
                    className="w-18"
                  />
                  <img
                    src="/framework-logos.DnOi-bJz.svg"
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
                    TAU SDKs are available for JavaScript/TypeScript and Python,
                    making it easy to launch campaigns, anchor proofs, and
                    verify rewards with just a few lines of code. Build trust
                    into your app without weeks of setup.
                    <br />
                    <br />{" "}
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
                Add trust to your Web3 apps with a few lines of code
              </h2>
              <p className="text-white font-light tracking-tight leading-5 max-w-[30rem] w-full">
                TAU provides SDKs and Solidity helpers so you can integrate
                fraud-resistant campaigns, referral links, and proof
                verifications in minutes — not months.
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
                      <span className="text-gradient"> @tau/sdk</span>
                    </div>
                    <div className="absolute top-4 right-6 max-sm:hidden">
                      <button
                        data-code="npm install tau/sdk"
                        id="2ad424ef-f969-462f-b391-f057e2e52baf"
                        className="flex gap-2 items-center cursor-pointer text-white"
                        onClick={() => copyToClipboard("npm install tau/sdk")}
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
                      <span className="text-gradient">tau/sdk</span>
                    </div>
                    <div className="absolute top-4 right-6 max-sm:hidden">
                      <button
                        data-code="pip install tau/sdk"
                        id="a28e8f29-c64c-4dcd-8ee2-8e08cb79f5b7"
                        className="flex gap-2 items-center cursor-pointer text-white"
                        onClick={() => copyToClipboard("pip install tau/sdk")}
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
              <Link
                className="p-0.5 whitespace-nowrap group text-white w-fit rounded-2xl lg:mt-8 gradient-button-wrapper bg-card"
                href="/docs"
                data-analytics-id="sdks-start-building"
              >
                <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                  <div className="rounded-[10px] font-light text-xl flex gap-8 group-hover:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                    <span>
                      Start building <sup className="text-xs -top-2">DOCS</sup>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="pt-16 px-6 pb-32 lg:py-52 relative">
        <img
          src="/hero-grid.DF71ygke.svg"
          alt="hero-grid"
          className="absolute top-0 left-0 w-full opacity-40 -z-10"
        />
        <div className="flex flex-col items-center gap-4 text-center mx-auto lg:max-w-5xl w-full">
          <h3 className="text-white text-[28px] max-sm:text-xl max-w-[400px] tracking-tighter font-normal leading-7 mx-auto">
            Trusted by Projects, Protocols, and Chains
            <br />
            More than
          </h3>
          <img
            src="/35k.6cN56SOd.svg"
            alt="testimonial"
            className="mt-4 sm:h-40 h-20 lg:h-60"
          />
          <h3 className="text-white text-[28px] max-w-[400px] tracking-tighter font-normal leading-7">
            wallets and developers already interact with TAU’s proof and trust
            infrastructure — from testnet campaigns to early ecosystem
            integrations.{" "}
          </h3>
          <div className="flex max-lg:flex-wrap text-pretty gap-16 mt-8 text-white uppercase text-xs font-light mx-auto justify-center">
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full">
              <img
                src="https://ethereum.org/static/28214bb144d54b4eb9e14c7b4d02e9b3/ee08f/eth-diamond-white.webp"
                alt="Ethereum"
                className="size-16"
              />
              <div>Anchored to Ethereum for settlement and security.</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-20">
              <img
                src="https://optimism.io/brand"
                alt="Optimism"
                className="size-16"
              />
              <div>Built on OP Stack for scalable Layer-2 performance.</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-32">
              <img
                src="https://polygon.technology/brand-assets"
                alt="polygon"
                className="size-16"
              />
              <div>
                Multi-chain ready: campaigns run across Polygon and beyond.
              </div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full lg:mt-20">
              <img src="/github.CfXqoa4M.svg" alt="GitHub" className="h-9" />
              <div>Open-source SDKs trusted by developers worldwide.</div>
            </div>
            <div className="gap-7 flex flex-col items-center max-lg:w-52 w-full">
              <img
                src="https://walletconnect.com/branding"
                alt="WalletConnect"
                className="h-10"
              />
              <div>Seamless wallet integration across Web3 ecosystems. </div>
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
                A glimpse into the minds behind Tau
              </div>
              <h2 className="text-white text-[44px] tracking-tighter font-medium leading-11">
                Latest Updates
              </h2>
            </div>
            <Link
              className="p-0.5 whitespace-nowrap group/button text-white rounded-2xl gradient-button-wrapper bg-card text-base hidden sm:block font-medium"
              href="/blog"
            >
              <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                <div className="rounded-[10px] flex items-center justify-center group-hover/button:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                  View all
                </div>
              </div>
            </Link>
          </div>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 text-white pt-16 gap-8"></ul>
          <Link
            className="p-0.5 whitespace-nowrap group/button text-white rounded-2xl gradient-button-wrapper bg-card text-base block sm:hidden font-medium"
            href="/blog"
          >
            <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
              <div className="rounded-[10px] flex items-center justify-center group-hover/button:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                View all
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
