import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vanshkhotyan.dev"),
  title: "Vansh Khotyan | Data Analyst · Python · SQL · ML",
  description:
    "Portfolio of Vansh Khotyan, Data Analyst Intern and B.Tech (Data Science) student at Teerthanker Mahaveer University. Specializing in Python, SQL, exploratory data analysis, and machine learning.",
  keywords: [
    "Vansh Khotyan",
    "Data Analyst",
    "Data Science Intern",
    "Python",
    "SQL",
    "Machine Learning",
    "Exploratory Data Analysis",
    "Teerthanker Mahaveer University",
    "TMU Moradabad",
    "Edunet Foundation",
    "VOIS for Tech",
    "ISRO START",
  ],
  authors: [{ name: "Vansh Khotyan", url: "https://github.com/vanshkhotyan-cell" }],
  creator: "Vansh Khotyan",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/vk-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanshkhotyan.dev",
    title: "Vansh Khotyan | Data Analyst · Python · SQL · ML",
    description:
      "Data Analyst Intern & B.Tech Data Science student turning raw data into decisions. Explore projects, credentials, and real-world EDA work.",
    siteName: "Vansh Khotyan Portfolio",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vansh Khotyan - Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Khotyan | Data Analyst · Python · SQL · ML",
    description:
      "Data Analyst Intern & B.Tech Data Science student turning raw data into decisions.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-black text-[#E6EDF7] antialiased selection:bg-cyan-500/30 selection:text-white min-h-screen relative">
        {/* Subtle persistent grain overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none grain-overlay" aria-hidden="true" />
        
        {/* Floating Glass Navigation */}
        <Navbar />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
