"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GroupImage from "../about/sections/groupimage/GroupImage";

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
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white px-4">
        <GroupImage />
        
        {/* Countdown Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-20">
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
                  className="bg-neutral-800 bg-opacity-90 p-4 rounded-lg text-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-2xl md:text-4xl font-bold text-orange-500">{box.value}</p>
                  <p className="text-sm md:text-lg">{box.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-md text-gray-300 mb-8">
                Medan vi förbereder den officiella lanseringen kan du redan nu:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/bokabeta3"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Testa Bokning (Beta)
                </Link>
                <Link 
                  href="/events"
                  className="border border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Se Kommande Events
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Vad väntar dig?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">3D Utrustningsval</h3>
                <p className="text-gray-300">
                  Interaktiv 3D-konfigurator för att välja perfekt DJ-setup för ditt event
                </p>
                <Link 
                  href="/bokabeta3" 
                  className="inline-block mt-4 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Prova nu →
                </Link>
              </div>
              
              <div className="p-6 bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Erfarna DJs</h3>
                <p className="text-gray-300">
                  100+ framgångsrika events på Stockholms bästa venues
                </p>
                <Link 
                  href="/about" 
                  className="inline-block mt-4 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Läs mer →
                </Link>
              </div>
              
              <div className="p-6 bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Premium Events</h3>
                <p className="text-gray-300">
                  Underground events och exklusiva klubbkvällar i Stockholm
                </p>
                <Link 
                  href="/events" 
                  className="inline-block mt-4 text-orange-500 hover:text-orange-400 transition-colors"
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
