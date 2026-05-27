import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WANG CORP.",
  description: "International Industrial Coordination & Infrastructure",
  icons: {
    icon: [
      {
        url: "/favicon.png?v=4",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png?v=4",
    apple: "/favicon.png?v=4",
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
        <link rel="icon" type="image/png" href="/favicon.png?v=4" />
        <link rel="shortcut icon" href="/favicon.png?v=4" />
        <link rel="apple-touch-icon" href="/favicon.png?v=4" />
      </head>

      <body>{children}</body>
    </html>
  );
}