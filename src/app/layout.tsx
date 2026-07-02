import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "High Strength CBD Patches & Topicals UK | UKCBDHQ",
  description:
    "Tired of low-dose CBD? Discover the UK's highest potency transdermal CBD patches & muscle recovery balms. 100% legal, shipped DDP. Reserve your 25% off.",
  keywords: [
    "CBD topicals UK",
    "CBD patches UK",
    "CBD balm UK",
    "CBD gel UK",
    "premium CBD UK",
    "Spanish CBD",
    "CBD skin care UK",
    "high strength CBD",
  ],
  authors: [{ name: "UKCBDHQ" }],
  creator: "UKCBDHQ",
  publisher: "UKCBDHQ",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.ukcbdhq.com",
    siteName: "UKCBDHQ",
    title: "High Strength CBD Patches & Topicals UK | UKCBDHQ",
    description:
      "Tired of low-dose CBD? Discover the UK's highest potency transdermal CBD patches & muscle recovery balms. 100% legal, shipped DDP. Reserve your 25% off.",
    images: [
      {
        url: "https://www.ukcbdhq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UKCBDHQ — High Strength CBD Patches & Topicals UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Strength CBD Patches & Topicals UK | UKCBDHQ",
    description:
      "Tired of low-dose CBD? Discover the UK's highest potency transdermal CBD patches & muscle recovery balms. 100% legal, shipped DDP. Reserve your 25% off.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.ukcbdhq.com"),
};

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />
      </body>
    </html>
  );
}
