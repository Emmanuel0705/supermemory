"use client";

import { useEffect } from "react";
import Link from "next/link";
import Github from "./icons/github";
import FooterLogo from "./icons/footer-logo";
import FooterGradient from "./icons/footer-gradient";

export function Footer() {
  useEffect(() => {
    // Initialize UnicornStudio
    if (typeof window !== "undefined" && !(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio?.init?.();
          (window as any).UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <footer className="relative pb-16 lg:pb-6 min-h-96 flex flex-col items-center z-50 mx-auto">
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
              <span>
                Get supermemory <sup className="text-[0.5rem] -top-1">TM</sup>
              </span>
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
          <a href="https://docs.supermemory.ai/changelog/overview">Updates</a>
          <a href="mailto:dhravya@supermemory.com">Contact Us</a>
          <a href="https://supermemory.chat/">Web App</a>
          <a href="https://docs.supermemory.ai/introduction">Docs</a>
        </div>
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="flex items-center gap-2">
            <Github className="size-3" width={12} height={12} />
            <a href="https://github.com/supermemoryai/supermemory">9.5K</a>
          </div>
          <div className="flex gap-4 items-center flex-col lg:flex-row">
            <a href="https://supermemory.ai/terms-of-service">
              Terms of Service
            </a>
            <a href="https://supermemory.ai/privacy-policy">Privacy Policy</a>
          </div>
        </div>
        <div className="uppercase">© 2025 supermemory.ai</div>
      </div>

      <div className="absolute inset-0 w-full h-full -z-10">
        <div
          data-us-project="uyHjeqAD3OkD10tavjsD"
          style={{ width: "100%", height: "100%" }}
          data-scene-id="id-cvosh6mpkprtstejr5okdi"
        ></div>
      </div>
    </footer>
  );
}
