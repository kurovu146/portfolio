import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuro | Web Developer",
  description:
    "Portfolio of Vu Duc Tuan (Kuro) - Web Developer, TypeScript & Go Developer, and Game Developer.",
  keywords: [
    "Kuro",
    "Vu Duc Tuan",
    "Web Developer",
    "TypeScript",
    "Go",
    "Rust",
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
