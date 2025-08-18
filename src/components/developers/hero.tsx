import UnicornScene from "unicornstudio-react/next";

export function DevelopersHero() {
  return (
    <section
      id="hero"
      className="pt-32 max-sm:pt-88 pb-24 max-sm:pb-16 relative h-screen max-sm:h-4/5 px-4 lg:px-8 2xl:px-24 "
    >
      <div className="absolute inset-0 w-full overflow-hidden h-full -z-10 ">
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
              style={{ width: "1189px", height: "778px" }}
              aria-label="Unicorn Studio Scene"
              role="img"
            />
          }
        >
          {/* <canvas
            width="1783"
            height="1167"
            style={{ width: "1189px", height: "778px" }}
            aria-label="Unicorn Studio Scene"
            role="img"
          /> */}
        </UnicornScene>
        {/* <div
          data-us-project="uyHjeqAD3OkD10tavjsD"
          style={{
            width: "100%",
            height: "100%",
            rotate: "180deg",
            transform: "scaleY(-1)",
          }}
          data-scene-id="id-1d4sexk8rja80c7h6so092"
          className=""
          data-us-initialized="true"
        >
         
        </div> */}
      </div>

      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-background to-45%"></div>
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-background to-0%"></div>

      <div className="relative flex flex-col justify-end h-full">
        <div
          id="hero-content"
          className="flex animate-fade-slide-up flex-col gap-10 pb-4"
        >
          <h1 className="text-[5rem] max-sm:text-5xl max-sm:leading-12 leading-20 max-w-4xl tracking-tighter text-white font-medium">
            The universal memory API for the AI era
          </h1>

          <p className="text-white text-lg leading-7 max-w-prose">
            Context engine for your app. Personalise LLMs for your users. <br />
            Built for developers who ship.
          </p>

          <div className="flex text-lg gap-6 items-center flex-col sm:flex-row">
            <a
              href="https://console.supermemory.ai/"
              data-analytics-id="hero-get-supermemory"
            >
              <div className="relative overflow-hidden text-white rounded-2xl backdrop-blur-sm z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:transition-all before:duration-200 before:pointer-events-none before:-z-10 before:[mask-image:linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.2))] before:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3))] before:border-2 before:bg-white/40 before:border-white/30 px-8 py-4 whitespace-nowrap flex items-center gap-4 group w-full sm:w-fit">
                <span>
                  Get supermemory
                  <sup className="text-[0.5rem] -top-1">TM</sup>
                </span>
                <span className="hidden opacity-50 sm:block">⌘ ⏎</span>
              </div>
            </a>

            <a
              href="https://supermemory.ai/docs"
              data-analytics-id="hero-start-building-docs"
            >
              <div className="px-8 py-4 relative text-white before:border-2 before:border-white/30 before:rounded-2xl before:content-[''] before:absolute before:inset-0 before:pointer-events-none">
                <span>Learn more</span>
              </div>
            </a>
          </div>

          <div className="flex gap-4 flex-col text-base text-white">
            <span>Trusted by developers and enterprises</span>
            <div
              className="overflow-hidden md:w-[500px]"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                className="flex w-max"
                style={{
                  flexDirection: "row",
                  gap: "28px",
                  transform: "translateX(-1.53281px)",
                }}
              >
                <div className="flex gap-4 shrink-0">
                  <img
                    src="https://supermemory.ai/_astro/product-hunt.Ciyf5YNm.svg"
                    alt="logo"
                    className="h-10 mix-blend-lighten shrink-0"
                  />
                  w-auto{" "}
                  <img
                    src="https://supermemory.ai/_astro/github.CfXqoa4M.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/medtech.C6Dus75J.png"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/mixus.C89kGzQv.png"
                    alt="logo"
                    className="h-10 mix-blend-lighten shrink-0"
                  />
                  w-auto{" "}
                  <img
                    src="https://supermemory.ai/_astro/notion.NKlZ2H3_.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/replit.2D7rjKXR.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                </div>
                <div className="flex gap-4 shrink-0">
                  <img
                    src="https://supermemory.ai/_astro/product-hunt.Ciyf5YNm.svg"
                    alt="logo"
                    className="h-10 mix-blend-lighten shrink-0"
                  />
                  w-auto{" "}
                  <img
                    src="https://supermemory.ai/_astro/github.CfXqoa4M.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/medtech.C6Dus75J.png"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/mixus.C89kGzQv.png"
                    alt="logo"
                    className="h-10 mix-blend-lighten shrink-0"
                  />
                  w-auto{" "}
                  <img
                    src="https://supermemory.ai/_astro/notion.NKlZ2H3_.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                  <img
                    src="https://supermemory.ai/_astro/replit.2D7rjKXR.svg"
                    alt="logo"
                    className="h-10 w-auto mix-blend-lighten shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
