"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="z-50 min-h-screen pb-16 flex justify-center max-md:px-8 px-16"
      style={{ opacity: 1, transform: "none" }}
      id="hero"
    >
      <div className="text-white gap-6 z-10 flex flex-col items-center max-md:pt-40 pt-56 text-center">
        {/* Beta Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-full px-5 py-2 border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
            <div
              className="absolute aspect-square bg-zinc-500"
              style={{
                width: "20px",
                offsetPath: "rect(0px auto auto 0px round 20px)",
                boxShadow:
                  "rgba(255, 255, 255, 0.5) 0px 0px 20px 10px, rgba(0, 0, 0, 0.5) 0px 0px 20px 10px, rgba(0, 0, 0, 0.5) 0px 0px 24px 18px",
                offsetDistance: "0.84%",
              }}
            ></div>
          </div>
          <span className="max-md:text-sm">Private beta open now!</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-2xl overflow-y-visible flex-col text-7xl max-md:text-5xl font-bold font-grotesk"
        >
          Unified memory for
          <div className="relative inline-block whitespace-nowrap overflow-y-visible">
            <div style={{ opacity: 1, transform: "none" }}>
              <span>Claude</span>
            </div>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg max-w-xl max-md:text-base text-gray-300"
        >
          supermemory connects to all your favourite apps and services to let
          you access your memories from anywhere.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-4 max-md:flex max-md:gap-2 max-md:w-full max-md:flex-col-reverse grid-cols-2"
        >
          <div className="py-1 relative overflow-hidden text-white rounded-2xl backdrop-blur-sm z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:transition-all before:duration-200 before:pointer-events-none before:-z-10 before:[mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2))] before:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3))] before:border-2 before:border-white/30 hover:scale-102 bg-transparent before:bg-transparent transition-transform duration-300">
            <Link
              className="text-white cursor-pointer group justify-center flex items-center gap-3 px-6 py-3 text-lg rounded-md"
              href="/developers"
            >
              <Wrench className="size-4" />
              For Developers
            </Link>
          </div>

          <div className="py-1 relative overflow-hidden text-white rounded-2xl backdrop-blur-sm z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:transition-all before:duration-200 before:pointer-events-none before:-z-10 before:[mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2))] before:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3))] before:border-2 before:bg-white/40 before:border-white/30 hover:scale-102 transition-transform duration-300">
            <Link
              className="text-white cursor-pointer group justify-center flex items-center gap-3 px-6 py-3 text-lg rounded-md"
              href="/waitlist"
            >
              Join the waitlist
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute left-1/2 -translate-x-1/2 -bottom-220"></motion.div>
    </section>
  );
}
