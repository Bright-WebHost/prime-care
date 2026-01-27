import type { Metadata } from "next";
import "./globals.css";
import { Barlow, Source_Sans_3 } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const headingFont = Barlow({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Care Trading & Services",
  description: "HVAC • Motors • Pumps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-white text-brand-gray antialiased">
        {/* 👇 Client-side smooth scrolling lives here */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
