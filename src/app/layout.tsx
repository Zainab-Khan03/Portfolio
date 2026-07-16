import type { Metadata } from "next";
import { fraunces, caveat, inter } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zainab Gull Khan — A Working Journal",
  description:
    "An editorial portfolio: the story of a computer science graduate moving through algorithms, machine learning, and cybersecurity, told chapter by chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveat.variable} ${inter.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
