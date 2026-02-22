import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { DirectionProvider } from "@/components/ui/direction";
import Navbar from "@/components/main/Navbar";
import FooterNew from "@/components/FooterNew";
import { App } from "@/lib/App";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "700"],
  style: "normal",
  preload: true,
  adjustFontFallback: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  applicationName: App.name,
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-AE">
      <body
        dir="rtl"
        className={`${rubik.className} antialiased max-w-350 mx-auto bg-primary/10`}
      >
        <DirectionProvider dir="rtl">
          <Navbar />
          {children}
          <FooterNew />
          <Toaster />
        </DirectionProvider>
      </body>
    </html>
  );
}
