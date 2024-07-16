import type { Metadata } from "next";
import { ibmPlexMono, jetBrainsMono } from "@/data/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Branden Basche Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
    <head>
      <meta name='viewport' content="width=device-width, initial-scale=1.0" />
    </head>
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
