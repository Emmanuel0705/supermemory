"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { BrainModel } from "./brain";
import { Suspense } from "react";
import { HeroSection } from "./hero";
import { About } from "./about";
import { AISection } from "./ai";
import { Footer } from "../footer";

export const AnimatedBrain = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 40,
          position: [0, 0, 9],
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          // pointerEvents: "none",
        }}
      >
        <ambientLight color={"#246dd1"} intensity={0.1} />

        <directionalLight color={"#246dd1"} intensity={2.8} />
        <directionalLight color={"#246dd1"} intensity={2.8} />

        {/* // Main directional light */}
        <directionalLight
          color={"0xffffff"}
          position={[5, 5, 5]}
          intensity={1.8}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />

        {/* // Additional fill light */}

        <directionalLight
          color={"0x4a90e2"}
          position={[-5, 3, -5]}
          intensity={1.0}
        />

        {/* // Rim light for depth */}
        <directionalLight
          color={"0xffffff"}
          position={[0, -5, 0]}
          intensity={0.8}
        />

        {/* // Point light for glow effect */}

        <pointLight
          color={"0x4a90e2"}
          position={[0, 0, 2]}
          intensity={2}
          distance={10}
        />

        {/* // Add emissive property for glow effect */}

        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3.64} damping={0.25}>
          <Suspense fallback={null}>
            <BrainModel />
            {/* <Environment preset="sunset" background /> */}
          </Suspense>
          <Scroll html style={{ width: "100%", height: "100%" }}>
            <div className="min-h-screen mx-auto  w-full">
              {/* Background Elements */}
              <div className="relative">
                {/* Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 h-screen w-screen z-10 pointer-events-none"
                  style={{
                    backgroundColor: "transparent",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b6b6b' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    maskImage:
                      "radial-gradient(circle, white 5%, transparent 60%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, white 5%, transparent 60%)",
                  }}
                ></div>

                {/* Hero Section */}
                <HeroSection />

                {/* About Section */}
                <About />

                {/* Features Section */}
                <AISection />

                {/* footer  */}
                <Footer />
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        style={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div
              className="w-1 h-3 bg-white rounded-full mt-2"
              style={{ transform: "translateY(10.6497px)" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
