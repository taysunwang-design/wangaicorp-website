import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WANG CORP.",
  description: "International Industrial Coordination & Infrastructure",

  icons: {
    icon: "/logo11.png",
    shortcut: "/logo11.png",
    apple: "/logo11.png",
  },
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