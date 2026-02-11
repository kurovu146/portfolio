import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuro | Software Developer",
  description:
    "Portfolio of Vu Duc Tuan (Kuro) - Software Developer, MERN Stack Developer, and Open Source Contributor.",
  keywords: [
    "Kuro",
    "Vu Duc Tuan",
    "Software Developer",
    "MERN Stack",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
