import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GTMWrapper from "@/components/GTMWrapper"; // GTM sebagai Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andara Imperial Terrace",
  description: "Andara Imperial Terrace App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="relative">
        <GTMWrapper /> {/* GTM dipindah ke Client Component */}
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
