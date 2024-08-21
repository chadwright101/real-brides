import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/navigation/header";
import Footer from "./_components/navigation/footer";
import Button from "./_components/utils/button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
