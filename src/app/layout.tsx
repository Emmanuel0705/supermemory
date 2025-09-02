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
  title: "tau - Unified memory for Claude",
  description:
    "tau connects to all your favourite apps and services to let you access your memories from anywhere.",
  keywords: ["AI", "memory", "Claude", "productivity", "second brain"],
  authors: [{ name: "tau.network" }],
  openGraph: {
    title: "tau - Unified memory for Claude",
    description:
      "tau connects to all your favourite apps and services to let you access your memories from anywhere.",
    url: "https://tau.network",
    siteName: "tau",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tau - Unified memory for Claude",
    description:
      "tau connects to all your favourite apps and services to let you access your memories from anywhere.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
      <body className={`antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
