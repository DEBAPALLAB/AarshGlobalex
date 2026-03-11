import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Aarsh Globalex - Pharmaceutical Trader, Supplier & Exporter",
  description: "Leading trader and exporter of Pharmaceutical Tablets, Injections, Capsules, Anti Cancer Medicines, and more based in Nagpur, Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
