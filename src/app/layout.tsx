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
  title: "UKCBDHQ | Premium CBD Topicals & Patches",
  description: "Specialist high-strength CBD patches and topicals for targeted external use. Formulated in Spain to strict European cosmetic compliance and quality standards.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "UKCBDHQ | Premium High-Strength CBD Topicals & Patches",
    description: "Discover a premium range of Spanish-crafted external CBD patches and topicals. Fully compliant, third-party lab tested, and engineered for targeted wellness.",
    type: "website",
    locale: "en_GB",
    siteName: "UKCBDHQ",
  },
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
