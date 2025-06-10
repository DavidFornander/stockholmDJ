"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LaunchingSoonClient() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set a fixed launch date instead of relative to page load
  useEffect(() => {
    // Fixed launch date: December 15, 2025 (updated to future date)
    const launchDate = new Date('2025-12-15T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const counterBoxes = [
    { label: "Dagar", value: timeLeft.days },
    { label: "Timmar", value: timeLeft.hours },
    { label: "Minuter", value: timeLeft.minutes },
    { label: "Sekunder", value: timeLeft.seconds },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white px-4 transition-colors duration-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Launching Soon</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">We're working hard to bring you something amazing. Stay tuned!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {counterBoxes.map((box, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-center border border-gray-300 dark:border-gray-800">
              <p className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">{box.value}</p>
              <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">{box.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}