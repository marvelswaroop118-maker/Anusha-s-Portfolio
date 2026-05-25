import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anusha Nalla | Legal Professional",
  description: "B.B.A. LL.B. (Hons.) student specializing in Intellectual Property, Tech Law, and Corporate Litigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#050B14] text-white selection:bg-[#C5A059]/30`}>
        <main className="relative w-full overflow-hidden">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}