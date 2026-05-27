import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WANG CORP.",
  description: "International Industrial Coordination & Infrastructure",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}