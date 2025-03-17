import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inner Monologue Journal",
  description:
    "A minimalist journal app where users can record their thoughts as they come.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
