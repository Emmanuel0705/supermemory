import { FloatingCard } from "./floating-card";
import { floatingCardsData } from "./floating-cards-data";

export function AISection() {
  return (
    <section className="h-screen relative max-md:mt-8" id="ai-section">
      <div className="absolute size-full flex items-center justify-center">
        <div className="pt-56 -mt-56">
          <div className=""></div>
        </div>
      </div>

      <div className="px-24 max-md:px-8 text-white flex flex-col justify-end py-36 max-md:py-16 h-full space-y-4 z-40 relative">
        {/* Gradient Overlays */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[40%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.05) 85%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        {/* Blur Effects */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[40%]">
          {[0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5].map((blur, index) => (
            <div
              key={index}
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                maskImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) ${
                  index * 11.11
                }%, rgba(255, 255, 255, 1) ${
                  (index + 1) * 11.11
                }%, rgba(255, 255, 255, 1) ${
                  (index + 2) * 11.11
                }%, rgba(255, 255, 255, 0) ${(index + 3) * 11.11}%)`,
                WebkitMaskImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) ${
                  index * 11.11
                }%, rgba(255, 255, 255, 1) ${
                  (index + 1) * 11.11
                }%, rgba(255, 255, 255, 1) ${
                  (index + 2) * 11.11
                }%, rgba(255, 255, 255, 0) ${(index + 3) * 11.11}%)`,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
              }}
            ></div>
          ))}
        </div>

        <h2 className="text-5xl max-md:text-4xl font-bold relative z-10">
          AI that understands <span className="italic">Web3</span>
        </h2>
        <p className="text-white opacity-90 text-base max-w-prose relative z-10">
          TAU intelligently interprets data from your wallets, transactions,
          dApps, and AI agents — weaving together context across chains to
          create insights that feel uniquely tailored to you.
        </p>
      </div>

      {/* 3D Canvas Container */}
      <div className="absolute inset-0 z-20 h-full w-full pointer-events-none">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "auto",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <canvas
              style={{ display: "block", width: "1189px", height: "778px" }}
              data-engine="three.js r178"
              width="2378"
              height="1556"
            ></canvas>
          </div>
          {/* 3D Elements would be rendered here by Three.js */}
          {/* Floating Cards */}
          {floatingCardsData.map((card, index) => (
            <FloatingCard
              key={index}
              zIndex={card.zIndex}
              transform={card.transform}
              logo={card.logo}
              logoAlt={card.logoAlt}
              title={card.title}
              content={card.content}
              isLarge={card.isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
