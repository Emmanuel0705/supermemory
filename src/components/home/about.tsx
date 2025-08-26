"use client";
import { Link, Brain, Compass } from "lucide-react";
import { OrbitingCircles } from "./orbiting-circle";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "keyframes",
      duration: 0.3,
      ease: "easeInOut",
      // delay: 0.5,
    },
  },
};

export function About() {
  return (
    <section
      className="z-30 md:h-screen grid max-md:pt-16 grid-cols-2 max-md:grid-cols-1 gap-10 items-center justify-center px-8 max-w-[1400px] mx-auto text-white"
      id="about"
      style={{ transform: "translateY(50px)" }}
    >
      <div className="px-8 max-md:px-0 relative h-full flex flex-col gap-8 justify-center items-start">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 min-h-full min-w-full -z-10 pointer-events-none"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b6b6b' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage: "radial-gradient(circle, white 5%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(circle, white 5%, transparent 60%)",
          }}
        ></div>

        <h2 className="text-5xl max-md:text-4xl max-md:text-center font-bold">
          Your second brain, always within reach
        </h2>

        <div className="space-y-6">
          {/* Feature Card 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Link className="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  supermemory bridges the gaps between your favorite apps, so
                  your memories stay in sync — no matter where you work.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Brain className="size-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  supermemory captures everything — ideas, files, links,
                  thoughts — and makes it all accessible when you need it most.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Compass className="size-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wherever you write, browse, or build — supermemory is there,
                  quietly remembering, connecting, and surfacing what matters
                  most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="size-full max-md:hidden flex items-center justify-center"
        id="about-anchor"
      >
        <motion.div
          style={
            {
              // scaleX: scaleX,
              // opacity: opacity,
            }
          }
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, margin: "-200px 0px -200px 0px" }}
          className="relative  size-[500px] flex items-center justify-center"
        >
          <OrbitingCircles radius={240} iconSize={60}>
            <img
              src="/notion.NKlZ2H3_.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
            <img
              src="/onedrive.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
            <img
              src="/openai.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
            <img
              src="/cursor2.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
            <img
              src="/claude.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
            <img
              src="/gdrive.svg"
              alt="brain avatar"
              className="size-full"
              width={60}
              height={60}
            />
          </OrbitingCircles>
        </motion.div>
        <div className="-mr-30 relative">
          {/* This div will be the target for the brain animation */}
        </div>
      </div>
    </section>
  );
}
