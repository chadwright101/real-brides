import type { Metadata } from "next";

import "./globals.css";

import Header from "./_components/navigation/header";
import Footer from "./_components/navigation/footer";

export const metadata: Metadata = {
  title: "Real Brides Magazine",
  description:
    "Real Brides magazine is all about the weddings of brides who are normal everyday people and that is the key",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
