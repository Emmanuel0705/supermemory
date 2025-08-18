export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0f1419]">
      <div
        className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm max-w-md w-full bg-[#1a1f2a] border-white/10"
        data-slot="card"
      >
        <div
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center"
          data-slot="card-header"
        >
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock w-8 h-8 text-orange-500"
              aria-hidden="true"
            >
              <path d="M12 6v6l4 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div className="text-2xl font-bold text-white" data-slot="card-title">
            You're on the waitlist!
          </div>
          <div
            className="text-sm text-white/60 mt-2"
            data-slot="card-description"
          >
            Thanks for your interest in supermemory. We'll notify you as soon as
            we're ready for you.
          </div>
        </div>
        <div className="px-6" data-slot="card-content">
          <div className="flex flex-col gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"
              data-slot="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-skip-forward w-4 h-4"
                aria-hidden="true"
              >
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" x2="19" y1="5" y2="19"></line>
              </svg>
              Skip the waitlist for $15
            </button>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/60 text-sm">
                We're working hard to bring you the best experience. In the
                meantime, you can:
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-white/80">
                  <span className="text-orange-500">•</span>
                  <a
                    className="hover:text-white transition-colors underline"
                    href="https://x.com/supermemoryai"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Follow our X for updates
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="text-orange-500">•</span>
                  <a
                    className="hover:text-white transition-colors underline"
                    href="https://supermemory.link/discord"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Join our community Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-4 text-center space-y-3">
              <p className="text-white/50 text-xs">
                Signed in as emmanuelloluwatobi@gmail.com
              </p>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 border-white/20 hover:bg-white/5"
                data-slot="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-log-out w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="m16 17 5-5-5-5"></path>
                  <path d="M21 12H9"></path>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                </svg>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
