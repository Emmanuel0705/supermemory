"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Developers", href: "/developers" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 w-[96%] xl:w-full z-50 max-w-7xl">
      <div className="py-1 relative overflow-hidden text-white rounded-2xl backdrop-blur-sm z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:transition-all before:duration-200 before:pointer-events-none before:-z-10 before:[mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2))] before:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3))] before:border-2 before:bg-white/40 before:border-white/30 pointer-events-auto transition-all duration-300 ease-in-out">
        <div className="flex lg:p-3 p-5 gap-4 rounded-xl size-full justify-between items-center">
          {/* Logo */}
          <a className="flex items-center gap-3.5" href="/">
            <img src="/logo.QY9mG6Yr.svg" alt="logo" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="lg:block hidden flex-1 mx-8">
            <div className="w-full flex flex-col font-light lg:flex-row lg:items-center lg:justify-between gap-4 text-white">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4 lg:mb-0">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex items-center gap-4 text-xs">
                  <a className="text-sm pr-4 underline" href="/developers">
                    For Developers
                  </a>
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/taugraindor"
                  >
                    <Github className="size-3" />
                    <span>9.5K</span>
                  </a>
                  <a
                    href="https://x.com/taugraindor"
                    className="flex items-center gap-2"
                  >
                    <Twitter className="size-3" />
                    <span>4.1K</span>
                  </a>
                </div>
                <a className="whitespace-nowrap group text-white w-full md:w-fit rounded-2xl py-3 px-5 border-2 border-white/30 hover:bg-white/10 transition-colors duration-200">
                  <span>Connect Wallet</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            id="menu-toggle"
            aria-label="menu"
            className="flex lg:hidden cursor-pointer flex-col justify-between h-4.5 w-6 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/20"
            >
              <div className="py-4 space-y-4 px-5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-gray-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="https://github.com/taugraindor/taugraindor"
                    className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200 mb-4"
                  >
                    <Github className="w-4 h-4" />
                    <span>9.5K</span>
                  </a>
                  <a
                    href="https://x.com/taugraindor"
                    className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200 mb-4"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>4.1K</span>
                  </a>
                  <a className="block w-full text-center text-white rounded-2xl py-3 px-5 border-2 border-white/30 hover:bg-white/10 transition-colors duration-200">
                    <span>Connect Wallet </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
