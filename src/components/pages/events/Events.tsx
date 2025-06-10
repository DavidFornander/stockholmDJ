"use client";

import React, { useState } from 'react';
import EventCard from './EventCard';
import Image from 'next/image';
import { Search } from 'lucide-react';

// Sample event data - in a real app, this would come from an API or CMS
const eventsData = [
  {
    id: '1',
    title: 'Deep Underground',
    date: '12 Februari 2025',
    time: '23:00 - 08:00',
    location: 'Bron, Stockholm',
    description: 'Rå underground house i Stockholms mörkaste källare. Minimal techno och deep house med internationella DJs från Berlins underjordiska scen.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-01.jpg',
    link: '/events/deep-underground'
  },
  {
    id: '2',
    title: 'Warehouse Sessions',
    date: '28 Mars 2025',
    time: '22:00 - 06:00',
    location: 'Secret Location, Södermalm',
    description: 'Warehouse party med bara 200 personer. Pure underground house från Chicago och Detroit. Location släpps 2h innan start.',
    imageUrl: '/assets/images/profiles/wink__page--gallery-02.jpg',
    link: '/events/warehouse-sessions'
  },
  {
    id: '3',
    title: 'Basement Collective',
    date: '15 April 2025',
    time: '00:00 - 10:00',
    location: 'Under, Gamla Stan',
    description: 'Mörk källarklubb med bara vinyl. Deep house, minimal och dub techno. Inga telefoner, bara ren musik och dans till gryningen.',
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-06.jpg',
    link: '/events/basement-collective'
  },
  {
    id: '4',
    title: 'Acid House Revival',
    date: '3 Maj 2025',
    time: '23:30 - 08:00',
    location: 'Industriområdet, Hammarby',
    description: '90-talets acid house lever igen. TB-303 synthesizers och äkta Chicago house i övergiven fabrikslokal. Endast 150 personer.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-05.jpg',
    link: '/events/acid-house-revival'
  },
  {
    id: '5',
    title: 'Rooftop Underground',
    date: '21 Juni 2025',
    time: '20:00 - 06:00',
    location: 'Secret Rooftop, Östermalm',
    description: 'Underground house under Stockholms himmel. Hemliga takfesten med utsikt över staden. Deep house och minimal när solen går upp.',
    imageUrl: '/assets/images/profiles/wink__page--gallery-08.jpg',
    link: '/events/rooftop-underground'
  }
];

const Events: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchEventType, setSearchEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [searchMusicStyle, setSearchMusicStyle] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/assets/images/temp/2Q.png"
          alt="Hitta Events Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hitta Events
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Upptäck Stockholms bästa events och evenemang
            </p>
          </div>
        </div>

        {/* Search Form Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center divide-x divide-gray-200 dark:divide-gray-700">
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Plats"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Eventtyp"
                value={searchEventType}
                onChange={(e) => setSearchEventType(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Musikstil"
                value={searchMusicStyle}
                onChange={(e) => setSearchMusicStyle(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors px-4">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Saknar du något?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Vi kan hjälpa dig arrangera ditt eget event, oavsett om det är en företagsfest, ett bröllop eller en privatfest.
          </p>
          <a 
            href="/book" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Boka DJ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
