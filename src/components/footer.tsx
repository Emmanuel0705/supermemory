"use client";

import Link from "next/link";
import Github from "./icons/github";
import FooterLogo from "./icons/footer-logo";
import FooterGradient from "./icons/footer-gradient";
import UnicornScene from "unicornstudio-react/next";

export function Footer() {
  return (
    <footer className="relative pb-16 lg:pb-6 min-h-96 flex flex-col items-center z-50 mx-auto bg-black">
      <FooterGradient className="h-10 object-cover w-full" />
      <FooterGradient className="rotate-180 h-10 object-cover w-full" />
      <FooterLogo className="w-full h-full lg:pt-12 lg:pb-20 lg:px-8 px-2 py-8" />

      <div className="flex gap-4 pb-8 max-sm:flex-col">
        <Link
          className="p-0.5 whitespace-nowrap group text-white sm:w-fit rounded-2xl gradient-button-wrapper bg-card"
          href="/"
        >
          <div className="rounded-[14px] p-1 bg-gradient-to-b from-zinc-800 to-zinc-900/90">
            <div className="rounded-[10px] font-light text-xl flex gap-8 group-hover:bg-black transition-colors duration-300 py-3 px-16 bg-card shadow-[0_0_10px_rgba(0,0,0,0.4)]">
              <span>Get Tau</span>
            </div>
          </div>
        </Link>
        <Link
          className="p-0.5 whitespace-nowrap group text-white sm:w-fit rounded-2xl gradient-button-wrapper bg-card"
          href="/"
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

      <div className="gap-4 flex lg:px-8 lg:justify-between w-full flex-col lg:flex-row-reverse items-center text-white text-xs font-light">
        <div className="flex flex-col lg:flex-row gap-4 items-center uppercase">
          <Link href="/blog">Updates</Link>
          <a href="https://supermemory.chat/">Web App</a>
          <Link href="/docs">Docs</Link>
        </div>
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="flex items-center gap-2">
            <Github className="size-3" width={12} height={12} />
            <a href="https://github.com/taugraindor/taugraindor">9.5K</a>
          </div>
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="uppercase">© 2025 graindor.org </div>
      </div>

      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <UnicornScene
          projectId="uyHjeqAD3OkD10tavjsD" // Replace with your Unicorn Studio project ID
          width="100%" // Set desired width
          height="100%" // Set desired height
          // scale={0.5}
          // scale={-1} // Optional: Adjust rendering scale (0.25–1)
          dpi={1.5} // Optional: Adjust resolution
          fps={60} // Optional: Set frames per second
          altText="Unicorn Studio Scene" // Optional: For SEO
          ariaLabel="Interactive Unicorn Studio Scene" // Optional: For accessibility
          lazyLoad={true} // Optional: Defer loading until in viewport
          className="w-full h-full rotate-180 transform scale-y-[-1]"
          placeholder={
            <canvas
              width="1783"
              height="1167"
              style={{ width: "100%", height: "100%" }}
              aria-label="Unicorn Studio Scene"
              role="img"
            />
          }
        ></UnicornScene>
      </div>
    </footer>
  );
}
