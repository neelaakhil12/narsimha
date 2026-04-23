import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/common/MobileNav";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayVago | Premium Multi-Vendor Hotel Booking",
  description: "Experience luxury and comfort at StayVago. Discover, book, and manage your stays with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans mb-20 md:mb-0 bg-background text-foreground">
        {children}
        <Footer />
        <WhatsAppButton />
        <MobileNav />
      </body>
    </html>
  );
}
