"use client";

import { Footer } from "../footer";
import { About } from "./about";
import { AISection } from "./ai";
import { HeroSection } from "./hero";

export const Main = () => {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <AISection />

      {/* footer  */}
      <Footer />
    </>
  );
};
