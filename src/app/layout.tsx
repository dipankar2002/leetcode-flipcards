import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeetCode Flipcards",
  description: "Revise DSA with interactive flipcards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}