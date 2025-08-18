import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "supermemory - Unified memory for Claude",
  description:
    "supermemory connects to all your favourite apps and services to let you access your memories from anywhere.",
  keywords: ["AI", "memory", "Claude", "productivity", "second brain"],
  authors: [{ name: "supermemory.ai" }],
  openGraph: {
    title: "supermemory - Unified memory for Claude",
    description:
      "supermemory connects to all your favourite apps and services to let you access your memories from anywhere.",
    url: "https://supermemory.ai",
    siteName: "supermemory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "supermemory - Unified memory for Claude",
    description:
      "supermemory connects to all your favourite apps and services to let you access your memories from anywhere.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={`antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
