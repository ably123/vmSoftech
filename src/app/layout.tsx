import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";  
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { FaWhatsapp } from "react-icons/fa";
import SocialLinks from "@/components/SocialLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vasumatha Softech",
  description: "Created by VM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon (Title Image) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="80x80" href="/VM logo.png" />
        <link rel="icon" type="image/png" sizes="80x80" href="/VM logo.png" />
     
      

        {/* Open Graph / SEO Meta Tags */}
        <meta property="og:title" content="Vasumatha Softech" />
        <meta property="og:description" content="Created by VM" />
        <meta property="og:image" content="https://www.vasumathasoftech.com/website-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vasumathasoftech.com" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vasumatha Softech" />
        <meta name="twitter:description" content="Created by VM" />
        <meta name="twitter:image" content="https://www.vasumathasoftech.com/website-image.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <SocialLinks />
        {children}

        {/* WhatsApp Floating Button - Fixed on All Pages */}
        <a 
          href="https://wa.me/8969034555" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-2 animate-bounce right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
        >
          <FaWhatsapp className="text-xl" />
        </a>
        
        <Footer />
      </body>
    </html>
  );
}
