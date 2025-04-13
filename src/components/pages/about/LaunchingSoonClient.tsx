"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    // Fixed launch date: June 15, 2025
    const launchDate = new Date('2025-06-15T00:00:00');

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Launching Soon</h1>
          <p className="text-lg md:text-xl">We're working hard to bring you something amazing. Stay tuned!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {counterBoxes.map((box, index) => (
            <div key={index} className="bg-neutral-800 p-4 rounded-lg text-center">
              <p className="text-2xl md:text-4xl font-bold">{box.value}</p>
              <p className="text-sm md:text-lg">{box.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <Image
            src="/images/launching-soon.png"
            alt="Launching Soon"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </main>
  );
}