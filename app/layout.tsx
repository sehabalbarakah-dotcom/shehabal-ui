import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sehab Albarakah — Wholesale Supplier Dubai, UAE",
    template: "%s | Sehab Albarakah",
  },
  description:
    "Sehab Albarakah is a trusted wholesale supplier of laundry consumables, foodstuffs, and nuts & spices in Dubai, UAE — serving hotels, restaurants, catering companies, laundries, and retailers across all seven Emirates.",
  keywords: [
    "wholesale supplier Dubai",
    "laundry consumables UAE",
    "foodstuffs wholesale Dubai",
    "nuts spices supplier UAE",
    "hotel supplies Dubai",
    "catering supplies UAE",
    "wholesale trading UAE",
  ],
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
        <SmoothScroll>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
