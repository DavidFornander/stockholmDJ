"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import StockholmDJLogo from "../logo/StockholmDJLogo";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const tabs = [
  { name: "Hem", path: "/" },
  { name: "Event", path: "/events" },
  { name: "Boka", path: "/bokabeta3" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const distance = pathname === "/" ? 400 : 0;
    setScrolled(latest > distance);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-50 w-full flex items-center justify-between p-4 px-8 lg:px-32 transition-colors duration-300",
        scrolled
          ? "bg-neutral-950 bg-opacity-95"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="flex-1 hidden text-xs text-neutral-50 text-center md:flex items-center uppercase">
        DJ-Workshop | Event | Lable  | Stockholm DJ
      </div>

      <div className="flex flex-col items-center z-50">
        <StockholmDJLogo />
      </div>

      <div className="flex-1 hidden md:flex justify-end gap-3 text-sm">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: pathname === tab.path ? 1 : 1.04 }}
            aria-label={`Navigate to ${tab.name}`}
          >
            <Link
              href={tab.path}
              className={twMerge(
                "text-neutral-50 leading-none hover:text-orange-500 transition-colors uppercase",
                pathname === tab.path ? "text-orange-500" : ""
              )}
            >
              {tab.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block md:hidden text-neutral-50 text-2xl z-10"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.2 }}
            className={twMerge(
              "absolute top-0 left-0 w-full bg-background z-5 md:hidden"
            )}
            id="mobile-menu"
            aria-live="polite"
          >
            <div className="px-2 pt-4 pb-3 space-y-1">
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${tab.name}`}
                >
                  <Link
                    href={tab.path}
                    className={twMerge(
                      "px-3 flex-col flex items-center py-2 text-base font-medium text-neutral-50 hover:text-orange-500 transition-colors uppercase",
                      pathname === tab.path ? "text-orange-500" : ""
                    )}
                  >
                    {tab.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
