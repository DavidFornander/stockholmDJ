"use client";

import { Button } from "@/components/global/ui/button";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiSoundcloudLogo,
  PiTiktokLogo,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 transition-colors duration-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Stockholm.DJ</h2>
            <p className="text-sm mb-6">
              Stockholms främsta DJ-tjänst för alla typer av event. Vi erbjuder professionella DJs och modern utrustning för bröllop, företagsevent och privata fester.
            </p>
            <h3 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Följ oss</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/stockholmdj" passHref>
                <Button size="icon" variant="ghost" aria-label="Facebook">
                  <PiFacebookLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/@stockholmdj" passHref>
                <Button size="icon" variant="ghost" aria-label="TikTok">
                  <PiTiktokLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/stockholmdj" passHref>
                <Button size="icon" variant="ghost" aria-label="Instagram">
                  <PiInstagramLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://soundcloud.com/stockholmdj" passHref>
                <Button size="icon" variant="ghost" aria-label="Soundcloud">
                  <PiSoundcloudLogo className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Sidor</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/bookings"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Hantera Bokningar
                </Link>
              </li>
              <li>
                <Link
                  href="/djs"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Hitta DJs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Kommande Events
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Boka Schema
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Håll dig uppdaterad</h2>
            <Newsletter/>
            </div> */}
            
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Kontakt</h2>
            <div className="space-y-2 mb-6">
              <Link
                href="https://maps.app.goo.gl/WZQJWDUrwCTsraiP7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Nathorstvägen 46, 121 37 Johanneshov
              </Link>
              <Link
                href="mailto:info@stockholm.dj"
                className="flex items-center text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@stockholm.dj
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center transition-colors duration-200">
          <p className="text-sm">
            © {new Date().getFullYear()} Stockholm.DJ. All rights reserved.
          </p>
        </div>
          
        {/* spacer to prevent overlap */}
        <div className="h-16"></div>
      </div>
    </footer>
  );
}
