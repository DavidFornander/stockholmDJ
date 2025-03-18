"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiSoundcloudLogo,
  PiTiktokLogo,
} from "react-icons/pi";
import ScreenFitText from "../text/ScreenFitText";
//import Newsletter from "@/components/newsletter/newsletter";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Stockholm.DJ</h2>
            <p className="text-sm mb-6">
              Text om Stockholm.DJ. Lorem ipsum dolor sit amet, consectetur
            </p>
            <h3 className="text-md font-semibold mb-3">Följ oss</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/" passHref>
                <Button size="icon" variant="ghost" aria-label="Facebook">
                  <PiFacebookLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.tiktok.com/" passHref>
                <Button size="icon" variant="ghost" aria-label="TikTok">
                  <PiTiktokLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/" passHref>
                <Button size="icon" variant="ghost" aria-label="Instagram">
                  <PiInstagramLogo className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://soundcloud.com/" passHref>
                <Button size="icon" variant="ghost" aria-label="Soundcloud">
                  <PiSoundcloudLogo className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Sidor</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/book/wedding"
                  className="text-sm hover:text-gray-900"
                >
                  Bröllop
                </Link>
              </li>
              <li>
                <Link
                  href="/book/company"
                  className="text-sm hover:text-gray-900"
                >
                  Företagsevent
                </Link>
              </li>
              <li>
                <Link
                  href="/book/private"
                  className="text-sm hover:text-gray-900"
                >
                  Privatfest
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-900">
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
            
            <h2 className="text-lg font-semibold mb-4">Kontak</h2>
            <div className="space-y-2 mb-6">
              <Link
                href="https://maps.app.goo.gl/WZQJWDUrwCTsraiP7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-gray-900"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Nathorstvägen 46, 121 37 Johanneshov
              </Link>
              <Link
                href="mailto:info@platoon.se"
                className="flex items-center text-sm hover:text-gray-900"
              >
                <Mail className="h-4 w-4 mr-2" />
                david.fornander@hotmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="relative items-center flex w-full h-auto mb-8">
          <ScreenFitText
            text="Stockholm.DJ"
            repeat={undefined}
            repeatTimes={undefined}
            className={
              "bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-100"
            }
          />
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}  Echo Ventures. All rights reserved.
          </p>
        </div>
          

        {/* spacer to prevent overlap */}
        <div className="h-16"></div>
      </div>
    </footer>
  );
}
