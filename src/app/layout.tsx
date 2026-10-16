import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://paras-portfolio.vercel.app"
  ),
  title: "Paras",
  description:
    "Software engineer building concurrent systems, backend services, and production AI/ML across C++, Python, Java, and Kotlin.",
  openGraph: {
    title: "Paras",
    description:
      "Software engineer building concurrent systems, backend services, and production AI/ML.",
    url: "https://paras-portfolio.vercel.app",
    siteName: "Paras",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paras",
    description:
      "Software engineer building concurrent systems, backend services, and production AI/ML.",
    site: "@parascodes",
    creator: "@parascodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
