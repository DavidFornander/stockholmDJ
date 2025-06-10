"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme/ThemeToggle";

const tabs = [
  { name: "Hitta DJs", path: "/djs" },
  { name: "Kommande Events", path: "/events" },
  { name: "Boka Schema", path: "/bokabeta3" },
  { name: "Konto Inställningar", path: "/account" },
  { name: "Hantera Bokning", path: "/bookings" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-black shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Stockholm.DJ
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                href={tab.path}
                className={`text-sm transition-colors ${
                  pathname === tab.path 
                    ? "text-blue-600 dark:text-blue-400 font-medium" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Registrera
            </button>
            <button className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
              Logga in
            </button>
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600 dark:text-gray-300">•••</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
