import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Navbar } from '../components/global/navbar/Navbar'; // Adjust the import path as necessary
import Footer from '../components/global/footer/Footer'; // Adjust the import path as necessary
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stockholm.DJ | Professionella DJs för ditt event",
  description: "Boka professionella DJs för bröllop, företagsevent och privatfester i Stockholm. Skapa en oförglömlig upplevelse med Stockholm.DJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ...other meta tags... */}
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Navbar/>}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
