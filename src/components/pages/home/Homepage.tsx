"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Homepage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set countdown for official launch
  useEffect(() => {
    // Official launch date: December 15, 2025
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
    <>
      {/* Countdown Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white px-4 transition-colors duration-200">
        
        {/* Countdown Content */}
        <div className="flex flex-col items-center justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Officiell Lansering
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Stockholm.DJ förbereder något extraordinärt. Upplev framtiden av DJ-tjänster!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {counterBoxes.map((box, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-900 bg-opacity-90 p-4 rounded-lg text-center backdrop-blur-sm border border-gray-300 dark:border-gray-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{box.value}</p>
                  <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">{box.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
                Medan vi förbereder den officiella lanseringen kan du redan nu:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/djs"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Bläddra DJs
                </Link>
                <Link 
                  href="/bokabeta3"
                  className="border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Testa Bokning (Beta)
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Vad väntar dig?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Professionella DJs</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bläddra bland Stockholms bästa DJs. Välj bland olika musikstilar och expertnivåer för ditt event.
                </p>
                <Link 
                  href="/djs" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Bläddra DJs →
                </Link>
              </div>
              
              <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">3D Utrustningsval</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interaktiv 3D-konfigurator för att välja perfekt DJ-setup för ditt event
                </p>
                <Link 
                  href="/bokabeta3" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Prova nu →
                </Link>
              </div>
              
              <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Premium Events</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Underground events och exklusiva klubbkvällar i Stockholm
                </p>
                <Link 
                  href="/events" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Se events →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
