import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UKCBDHQ — Premium CBD Topicals & Patches for the UK",
  description:
    "High-strength CBD topicals and patches, manufactured in Spain to EU standards. Launching in the UK. Join our VIP waitlist for early access to our premium external-use CBD range.",
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
    title: "UKCBDHQ — Premium CBD Topicals & Patches, Made in Spain",
    description:
      "Precision-formulated CBD topicals and targeted patches, crafted to European standards in Spain. Launching in the UK. Join the waitlist.",
    images: [
      {
        url: "https://www.ukcbdhq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UKCBDHQ — Premium CBD Topicals & Patches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKCBDHQ — Premium CBD Topicals & Patches for the UK",
    description:
      "High-strength CBD topicals and patches from Spain. Launching in the UK. Join the VIP waitlist.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
