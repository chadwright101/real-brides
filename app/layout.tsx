import type { Metadata } from "next";

import "./globals.css";

import Header from "./_components/navigation/header";
import Footer from "./_components/navigation/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://realbrides.co.za"),
  title: "Real Brides Magazine",
  description:
    "Real Brides Magazine is all about the weddings of brides who are normal everyday people and that is the key.",
  keywords:
    "real brides, real brides magazine, brides, wedding, wedding magazine, real weddings",
  openGraph: {
    description:
      "Real Brides Magazine is all about the weddings of brides who are normal everyday people and that is the key.",
    type: "website",
    locale: "en_ZA",
    siteName: "Real Brides Magazine",
    images: [
      {
        url: "/assets/images/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Real Brides Magazine",
    url: "https://www.realbrides.co.za",
    logo: "/assets/real-brides-logo-black.png",
    description:
      "Real Brides Magazine is all about the weddings of brides who are normal everyday people and that is the key.",
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
