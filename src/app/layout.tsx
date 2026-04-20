import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CsDev | Portfolio",
  description: "Frontend & Mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
