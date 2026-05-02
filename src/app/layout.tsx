import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GEZDJK0P24"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GEZDJK0P24');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
