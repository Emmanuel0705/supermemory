"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient?: boolean;
}

export function Pricing() {
  const [activeView, setActiveView] = useState<"infinite-chat" | "memory">(
    "infinite-chat"
  );
  const [sliderValue, setSliderValue] = useState(0);

  const pricingTiers: PricingTier[] = [
    {
      name: "Allocation",
      description: "Your TAU Tokens",
      // period: "/month, billed monthly",
      // description: "For small teams and personal use.",
      features: [
        "Contribution: 0.01 ETH = $30",
        "Base Allocation: 10,000 TAU (at $0.003)",
        "Unsold tokens → burned",
      ],
      popular: false,
    },
    {
      name: "Rewards",
      // price: "$20",
      description: "Extra Benefits",
      // description: "For startups and early stage teams.",
      features: [
        "5% bonus from your contribution in ETH",
        "5% bonus from TAU allocation",
        "Example: 0.01 ETH → +1,000 TAU bonus",
      ],
      popular: true,
      gradient: true,
    },
    {
      name: "Staking",
      // price: "Let's Chat",
      description: "Auto-Staked Rewards",
      // description: "Enterprises or larger teams",
      features: [
        "Total Staked: 11,000 TAU",
        "Earn ~15% APR in validator pools",
        "Unlocks perks: Anchor NFT + DAO voting rights",
      ],
      popular: false,
    },
  ];

  return (
    <div className="text-white flex flex-col whitespace-nowrap items-center my-40">
      {/* Toggle Buttons */}
      <div className="relative rounded-xl flex gap-2">
        <div
          className="pointer-events-none absolute inset-0 h-full w-full scale-[var(--scale)] transform-gpu blur-none rounded-xl opacity-80"
          style={
            {
              "--scale": 1,
              backfaceVisibility: "hidden",
              willChange: "transform",
            } as React.CSSProperties
          }
        ></div>
        <div className="relative bg-background rounded-xl p-1 m-px">
          <button
            aria-label="Infinite Chat view"
            className={`relative inline-flex py-2 px-3.5 items-center justify-center text-center transition-transform active:scale-[0.98] text-zinc-50 ${
              activeView === "infinite-chat" ? "bg-white/10" : ""
            }`}
            data-id="infinite-chat"
            type="button"
            onClick={() => setActiveView("infinite-chat")}
          >
            <div className="z-10">Infinite Chat</div>
          </button>
          <button
            aria-label="Memory view"
            className={`relative inline-flex py-2 px-3.5 items-center justify-center text-center transition-transform active:scale-[0.98] text-zinc-50 ${
              activeView === "memory" ? "bg-white/10" : ""
            }`}
            data-id="memory"
            type="button"
            onClick={() => setActiveView("memory")}
          >
            <div className="z-10">Memory</div>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="py-12 text-center space-y-6 max-w-prose text-pretty"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="sm:text-5xl text-4xl font-medium">
          Better responses and longer chats for your users.
        </h3>
        <p className="font-light text-balance">
          One simple, single line to integrate. Works with all providers and
          SDKs. And don't stress, you can always switch plan later.
        </p>
        <div className="flex flex-col items-center gap-4 relative">
          <div className="flex items-center gap-2 leading-none">
            <span className="font-medium">
              Slide to find the right plan for you.
            </span>
          </div>
          <input
            className="w-4/5 accent-sky-500"
            max="100"
            min="0"
            step="1"
            type="range"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full sm:w-4/5 2xl:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            className="relative h-full w-full min-w-full transition-opacity duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            {tier.gradient && (
              <div
                className="pointer-events-none absolute inset-0 h-full w-full scale-[var(--scale)] transform-gpu blur-xs rounded-4xl"
                style={
                  {
                    "--scale": 1,
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                    background:
                      "conic-gradient(from 360deg at 50% 50%, #0894FF, #1726EC, #6BF3FF, #0894FF)",
                  } as React.CSSProperties
                }
              />
            )}

            <div
              className={`relative h-full rounded-4xl ${
                tier.gradient
                  ? "bg-background bg-linear-to-tr from-card from-30% via-50% via-[#1726EC]/80 to-[#6BF3FF]/70 to-90%"
                  : "bg-card border-sky-700 border"
              }`}
            >
              <div className="size-full relative rounded-4xl shadow-md sm:p-12 p-6 border-10 border-black/30 flex flex-col gap-8">
                <h3 className="text-4xl font-medium mask-r-from-background mask-r-to-60% to-current">
                  {tier.name}
                </h3>

                <div className="flex flex-col gap-3">
                  {tier.price && (
                    <div className="font-light text-4xl leading-10">
                      {tier.price}
                    </div>
                  )}
                  {tier.period && (
                    <div className="text-lg font-light text-zinc-300">
                      {tier.period}
                    </div>
                  )}
                  <div className="text-lg font-light">{tier.description}</div>
                </div>

                <ul className="flex flex-col gap-2 text-base sm:text-lg font-light">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start py-0.5 gap-3 whitespace-normal"
                    >
                      <Check
                        className="size-5 bg-white rounded-full p-0.75 stroke-card shrink-0"
                        aria-hidden="true"
                      />
                      <span className="-mt-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex w-full mt-auto">
                  <Link
                    className="p-0.5 whitespace-nowrap group/button font-light text-xl text-white rounded-2xl gradient-button-wrapper bg-card w-full"
                    href="/"
                  >
                    <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
                      <div className="rounded-[10px] flex items-center justify-center group-hover/button:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                        Get Started
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
