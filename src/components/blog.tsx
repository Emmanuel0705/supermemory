"use client";

import React, { useState, useEffect } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  thumbnail?: string;
  categories: string[];
  author: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        // Replace 'YOUR_MEDIUM_USERNAME' with your actual Medium username
        const response = await fetch("/api/medium-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const extractThumbnail = (content: string) => {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : "/images/default-blog-thumbnail.jpg";
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").substring(0, 200) + "...";
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (loading) {
    return (
      <div className="viewport">
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
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="viewport">
        <header id="gh-head" className={`gh-head outer bg-background`}>
          <div className="gh-head-inner inner">
            <div className="gh-head-brand ">
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
                  strokeWidth="2"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  strokeWidth="2"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <p className="text-white text-lg mb-4">
                    Failed to load blog posts
                  </p>
                  <p className="text-white/60">{error}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="viewport">
      <div className="site-content">
        <div className="site-header-content outer z-10">
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
              {posts.map((post, index) => (
                <article key={index} className="post-card post keep-ratio">
                  <Link
                    className="post-card-image-link"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                      <img
                        className="post-card-image"
                        sizes="(max-width: 1000px) 400px, 800px"
                        src={extractThumbnail(post.content)}
                        alt={post.title}
                        loading="lazy"
                      />
                    </AspectRatio>
                  </Link>

                  <div className="post-card-content">
                    <a
                      className="post-card-content-link"
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="post-card-header">
                        <h2 className="text-2xl font-bold line-clamp-2">
                          {post.title}
                        </h2>
                      </div>
                      <div className="mt-2 line-clamp-3">
                        {stripHtml(post.content)}
                      </div>
                    </a>

                    <footer className="post-card-meta">
                      <time className="text-sm" dateTime={post.pubDate}>
                        {formatDate(post.pubDate)}
                      </time>
                      <span className="text-sm">
                        {estimateReadTime(post.content)}
                      </span>
                      <span className="text-sm">by {post.author}</span>
                    </footer>
                  </div>
                </article>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <p className="text-white text-lg">No blog posts found</p>
                  <p className="text-white/60">
                    Check back later for new content
                  </p>
                </div>
              </div>
            )}
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
            <a href="https://medium.com/" target="_blank" rel="noopener">
              Powered by Medium
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
