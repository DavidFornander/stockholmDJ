import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Navbar } from '../components/global/navbar/Navbar';
import Footer from '../components/global/footer/Footer';
import { ThemeProvider } from '../components/global/theme/ThemeProvider';
import { BasketProvider } from '../context/BasketContext';
import GlobalBasketFooter from '../components/shared/ui/GlobalBasketFooter';
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-200 pb-20`}
      >
        <ThemeProvider>
          <BasketProvider>
            <Navbar/>
            {children}
            <Footer/>
            <GlobalBasketFooter/>
          </BasketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
