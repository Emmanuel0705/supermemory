"use client";

import React from "react";

export default function Blog() {
  return (
    <div className="viewport">
      <header id="gh-head" className={`gh-head outer bg-background`}>
        <div className="gh-head-inner inner">
          <div className="gh-head-brand ">
            {/* <a className="gh-head-logo" href="https://supermemory.ai/blog">
              <img
                src="/images/2025/06/Frame-2147223248.svg"
                alt="supermemory - Blog"
              />
            </a> */}
            <button
              className="gh-search gh-icon-btn"
              aria-label="Search this site"
              data-ghost-search
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button className="gh-burger" aria-label="Main Menu"></button>
          </div>

          <nav className="gh-head-menu ">
            <ul className="nav text-white">
              <li className="text-white">
                <a className="text-white" href="https://supermemory.ai">
                  Home
                </a>
              </li>
              <li className="text-white">
                <a className="text-white" href="https://supermemory.ai/blog">
                  Blogs
                </a>
              </li>
              <li className="text-white">
                <a
                  className="text-white"
                  href="https://docs.supermemory.ai/changelog/overview"
                >
                  Updates
                </a>
              </li>
              <li className="text-white">
                <a className="text-white" href="https://docs.supermemory.ai">
                  Docs
                </a>
              </li>
            </ul>
          </nav>

          <div className="gh-head-actions text-white">
            <button
              className="gh-search gh-icon-btn "
              aria-label="Search this site"
              data-ghost-search
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                width="20"
                height="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="site-content">
        <div className="site-header-content outer">
          <div className="site-header-inner inner">
            <img
              className="site-logo"
              src="https://supermemory.ai/blog/content/images/2025/06/Frame-2147223248.svg"
              alt="supermemory - Blog"
            />
            <p className="site-description font-grotesk">
              How we build supermemory - best memory engine on the planet.
            </p>
          </div>
        </div>

        <main id="site-main" className="site-main outer">
          <div className="inner posts">
            <div className="post-feed">
              <article className="post-card post keep-ratio">
                <a
                  className="post-card-image-link"
                  href="blog/unified-memory-that-works-where-you-work-your-second-brain-with-supermemory/index.html"
                >
                  <img
                    className="post-card-image"
                    sizes="(max-width: 1000px) 400px, 800px"
                    src="/images/size/w600/2025/07/Frame_2147223412.webp"
                    alt="Unified Memory That Works Where You Work: Your Second Brain With Supermemory"
                    loading="lazy"
                  />
                </a>

                <div className="post-card-content">
                  <a
                    className="post-card-content-link"
                    href="blog/unified-memory-that-works-where-you-work-your-second-brain-with-supermemory/index.html"
                  >
                    <header className="post-card-header">
                      <div className="post-card-tags"></div>
                      <h2 className="text-2xl font-bold">
                        Unified Memory That Works Where You Work: Your Second
                        Brain With Supermemory
                      </h2>
                    </header>
                    <div className="mt-2 line-clamp-3">
                      Hi everyone, I’m Dhravya, the founder of Supermemory. I
                      want to start with a little story behind why this product
                      means so much to me. You can also skip straight to what it
                      is and how it works below.  Anyways, when I started
                      Supermemory one year ago, we were
                    </div>
                  </a>

                  <footer className="post-card-meta">
                    <time className="text-sm" dateTime="2025-07-25">
                      25 Jul 2025
                    </time>
                    <span className="text-sm">5 min read</span>
                  </footer>
                </div>
              </article>

              <article className="post-card post keep-ratio">
                <a
                  className="post-card-image-link"
                  href="blog/building-an-ai-compliance-chatbot-with-supermemory-and-google-drive/index.html"
                >
                  <img
                    className="post-card-image"
                    sizes="(max-width: 1000px) 400px, 800px"
                    src="/images/size/w600/2025/07/Frame_2147223301.webp"
                    alt="Building an AI Compliance Chatbot With Supermemory and Google Drive"
                    loading="lazy"
                  />
                </a>

                <div className="post-card-content">
                  <a
                    className="post-card-content-link"
                    href="blog/building-an-ai-compliance-chatbot-with-supermemory-and-google-drive/index.html"
                  >
                    <header className="post-card-header">
                      <div className="post-card-tags"></div>
                      <h2 className="text-2xl font-bold">
                        Building an AI Compliance Chatbot With Supermemory and
                        Google Drive
                      </h2>
                    </header>
                    <div className="mt-2 line-clamp-3">
                      Contract compliance reviews are a serious drain on time
                      and focus. It’s a repetitive process that takes away from
                      actual legal thinking, and the workflow is absolutely
                      broken. Files live in different places. You’re never sure
                      if you’re reading the latest version. And no one has time
                    </div>
                  </a>

                  <footer className="post-card-meta">
                    <time className="text-sm" dateTime="2025-07-20">
                      20 Jul 2025
                    </time>
                    <span className="text-sm">15 min read</span>
                  </footer>
                </div>
              </article>

              <article className="post-card post keep-ratio">
                <a
                  className="post-card-image-link"
                  href="blog/supermemory-just-got-faster-on-planetscale/index.html"
                >
                  <img
                    className="post-card-image"
                    sizes="(max-width: 1000px) 400px, 800px"
                    src="/images/size/w600/2025/07/new1.webp"
                    alt="Supermemory just got faster on PlanetScale"
                    loading="lazy"
                  />
                </a>

                <div className="post-card-content">
                  <a
                    className="post-card-content-link"
                    href="blog/supermemory-just-got-faster-on-planetscale/index.html"
                  >
                    <header className="post-card-header">
                      <div className="post-card-tags"></div>
                      <h2 className="text-2xl font-bold">
                        Supermemory just got faster on PlanetScale
                      </h2>
                    </header>
                    <div className="mt-2 line-clamp-3">
                      What is Supermemory? Supermemory completes the missing
                      part of the LLM puzzle: memory. Just as memory is crucial
                      for human intelligence, it&#39;s essential for truly
                      intelligent AI systems. We&#39;ve built a portable memory
                      engine that works seamlessly across different LLMs through
                      multiple interfaces, including an API,
                    </div>
                  </a>

                  <footer className="post-card-meta">
                    <time className="text-sm" dateTime="2025-07-18">
                      18 Jul 2025
                    </time>
                    <span className="text-sm">2 min read</span>
                  </footer>
                </div>
              </article>
            </div>

            <nav className="pagination">
              <span className="page-number">Page 1 of 1</span>
            </nav>
          </div>
        </main>
      </div>

      <footer className="site-footer outer">
        <div className="inner">
          <section className="copyright">
            <a href="https://supermemory.ai/blog">supermemory - Blog</a> &copy;
            2025
          </section>
          <nav className="site-footer-nav">
            <ul className="nav">
              <li className="nav-sign-up nav-current">
                <a href="blog.html#/portal/">Sign up</a>
              </li>
              <li className="nav-get-started">
                <a href="https://console.supermemory.ai">Get Started</a>
              </li>
            </ul>
          </nav>
          <div className="gh-powered-by">
            <a href="https://ghost.org/" target="_blank" rel="noopener">
              Powered by Ghost
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
