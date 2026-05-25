import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Helvetica Neue is the spec family; design.md substitutes Inter until the
// licensed webfont is provided. Exposed as --font-inter -> --font-sans.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyHeritage — Smith Family Site",
  description:
    "Build your family tree, discover your past, and connect with relatives on MyHeritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-page text-fg-100 antialiased">
        {children}
      </body>
    </html>
  );
}
