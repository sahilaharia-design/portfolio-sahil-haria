import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sahil Haria, PhD | Portfolio",
  description: "A scrollytelling portfolio by Dr. Sahil Haria, PhD",
  applicationName: "Dr. Sahil Haria, PhD",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
