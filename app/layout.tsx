import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://xtremerpie-portfolio-oa3i.vercel.app"
  ),

  title: {
    default: "Xtremerpie — Independent Student Builder",
    template: "%s | Xtremerpie",
  },

  description:
    "Xtremerpie is an independent student builder exploring AI, software, automation, robotics, and game development.",

  authors: [
    {
      name: "Xtremerpie",
      url: "https://xtremerpie-portfolio-oa3i.vercel.app",
    },
  ],

  creator: "Xtremerpie",
  publisher: "Xtremerpie",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://xtremerpie-portfolio-oa3i.vercel.app",
    title: "Xtremerpie — Independent Student Builder",
    description:
      "AI, software, automation, robotics, and game development projects by Xtremerpie.",
    siteName: "Xtremerpie",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
