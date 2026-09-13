import type { Metadata } from "next";
import { Rajdhani, Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DTD Armory | The Division 2 Builds, Gear & Activities",
    template: "%s | DTD Armory",
  },

  description:
    "DTD Armory is a community companion for The Division 2. Explore gear, create and share builds, prepare for activities, and build smarter.",

  applicationName: "DTD Armory",

  authors: [
    {
      name: "DebugTheDay",
    },
  ],

  creator: "DebugTheDay",
  publisher: "DebugTheDay",

  keywords: [
    "DTD Armory",
    "DebugTheDay",
    "The Division 2",
    "Division 2 builds",
    "Division 2 gear",
    "Division 2 loadouts",
    "Division 2 build planner",
    "Division 2 database",
    "Division 2 activities",
    "Division 2 gear database",
    "Division 2 community",
  ],

  category: "gaming",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DTD Armory",
    title: "DTD Armory | The Division 2 Builds, Gear & Activities",
    description:
      "Explore gear, create and share builds, prepare for activities, and build smarter with DTD Armory.",
    images: [
      {
        url: "/images/og/dtd-armory-og.png",
        width: 1200,
        height: 630,
        alt: "DTD Armory — The Division 2 community companion",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DTD Armory | The Division 2 Builds, Gear & Activities",
    description:
      "Explore gear, create and share builds, prepare for activities, and build smarter with DTD Armory.",
    images: ["/images/og/dtd-armory-og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
      className={`${rajdhani.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
