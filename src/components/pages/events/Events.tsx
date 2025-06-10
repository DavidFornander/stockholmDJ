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
  },
  {
    id: '9',
    title: 'Summer Solstice Rave',
    date: '15 Juni 2025',
    time: '18:00 - 08:00',
    location: 'Skärgården, Stockholm',
    description: 'Midsommarfirande med elektronisk twist. Naturens egna danslokal under ljusa natten. Progressive house och ambient från svenska stjärnor.',
    imageUrl: '/assets/images/profiles/moda__page--lookbook-03.jpg',
    link: '/events/summer-solstice-rave'
  },
  {
    id: '10',
    title: 'Vinyl Only Marathon',
    date: '29 Juni 2025',
    time: '22:00 - 12:00',
    location: 'Record Store, Södermalm',
    description: '14 timmar av ren vinyl-magi. Bara skivspelare och äkta wax. Deep cuts från världens bästa vinyl-junkies och rare grooves.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-02.jpg',
    link: '/events/vinyl-only-marathon'
  },
  {
    id: '11',
    title: 'Techno Sunrise',
    date: '5 Juli 2025',
    time: '02:00 - 14:00',
    location: 'Strand, Långholmen',
    description: 'Dans fram till soluppgången och sedan vidare. 12 timmar av ren techno vid vattnet. Detroit legends möter svenska producers.',
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-08.jpg',
    link: '/events/techno-sunrise'
  },
  {
    id: '12',
    title: 'Underground Jazz & House',
    date: '18 Juli 2025',
    time: '21:00 - 05:00',
    location: 'Jazz Cellar, Gamla Stan',
    description: 'Fusion av jazz och elektronisk musik. Live-musiker jammar med house-producenter. Unik upplevelse för öppna sinnen.',
    imageUrl: '/assets/images/profiles/moda__page--lookbook-04.jpg',
    link: '/events/underground-jazz-house'
  },
  {
    id: '13',
    title: 'Minimalism Festival',
    date: '2 Augusti 2025',
    time: '20:00 - 10:00',
    location: 'Konstgalleri, Vasastan',
    description: 'Minimal techno i konstens tecken. Ljud- och ljusinstallationer skapar immersiv upplevelse. Europeiska minimal-mästare.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-03.jpg',
    link: '/events/minimalism-festival'
  },
  {
    id: '14',
    title: 'Breakbeat Revolution',
    date: '16 Augusti 2025',
    time: '23:00 - 07:00',
    location: 'Industrial Space, Nacka',
    description: 'Breakbeat och drum\'n\'bass revival. UK legends gästar Stockholm. Jungle, hardcore och liquid DnB i perfekt mix.',
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-07.jpg',
    link: '/events/breakbeat-revolution'
  },
  {
    id: '15',
    title: 'Ambient Soundscapes',
    date: '30 Augusti 2025',
    time: '19:00 - 03:00',
    location: 'Botaniska Trädgården',
    description: 'Ambient elektronika bland växterna. Meditativ ljudresa genom naturens harmoni. Brain Dance och chillout i grön miljö.',
    imageUrl: '/assets/images/profiles/moda__page--lookbook-05.jpg',
    link: '/events/ambient-soundscapes'
  },
  {
    id: '16',
    title: 'September Sessions',
    date: '12 September 2025',
    time: '22:30 - 06:30',
    location: 'Underground, Hornstull',
    description: 'Höstens första riktiga rave. Deep techno och progressive house när temperaturen sjunker. Kvalité över kvantitet.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-04.jpg',
    link: '/events/september-sessions'
  },
  // Past events
  {
    id: '6',
    title: 'Stockholm Summer Festival',
    date: '15 Maj 2025',
    time: '18:00 - 02:00',
    location: 'Djurgården, Stockholm',
    description: 'Sommarens största elektroniska musikfestival. Internationella headliners och svenska favoriter under öppna himlen.',
    imageUrl: '/assets/images/profiles/moda__page--lookbook-01.jpg',
    link: '/events/stockholm-summer-festival'
  },
  {
    id: '7',
    title: 'Midnight Techno',
    date: '2 Maj 2025',
    time: '00:00 - 08:00',
    location: 'Klubb Undergound, Södermalm',
    description: 'Hård techno hela natten. Detroit legends och Berlinsk underground i perfekt kombination.',
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-07.jpg',
    link: '/events/midnight-techno'
  },
  {
    id: '8',
    title: 'House Classics Night',
    date: '20 April 2025',
    time: '22:00 - 06:00',
    location: 'Café Opera, Stockholm',
    description: 'En hyllning till house-musikens guldålder. Klassiker från Chicago och New York som formade genren.',
    imageUrl: '/assets/images/profiles/trending__page--lookbook-02.jpg',
    link: '/events/house-classics-night'
  }
];

// Function to parse Swedish date format
const parseSwedishDate = (dateString: string): Date => {
  const monthMap: { [key: string]: number } = {
    'Januari': 0, 'Februari': 1, 'Mars': 2, 'April': 3,
    'Maj': 4, 'Juni': 5, 'Juli': 6, 'Augusti': 7,
    'September': 8, 'Oktober': 9, 'November': 10, 'December': 11
  };
  
  const parts = dateString.split(' ');
  if (parts.length !== 3) return new Date();
  
  const day = parseInt(parts[0]);
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2]);
  
  return new Date(year, month, day);
};

const Events: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchEventType, setSearchEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [searchMusicStyle, setSearchMusicStyle] = useState('');

  // Auto-categorize events based on current date
  const today = new Date();
  
  // Filter and categorize events
  const filterEvents = (events: typeof eventsData) => {
    return events.filter(event => {
      const matchesLocation = !searchLocation || event.location.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesEventType = !searchEventType || event.title.toLowerCase().includes(searchEventType.toLowerCase());
      const matchesMusicStyle = !searchMusicStyle || event.description.toLowerCase().includes(searchMusicStyle.toLowerCase());
      const matchesDate = !eventDate || event.date.includes(eventDate);
      
      return matchesLocation && matchesEventType && matchesMusicStyle && matchesDate;
    });
  };

  const filteredEvents = filterEvents(eventsData);
  
  // Sort upcoming events by proximity to current date (closest first)
  const upcomingEvents = filteredEvents
    .filter(event => parseSwedishDate(event.date) >= today)
    .sort((a, b) => parseSwedishDate(a.date).getTime() - parseSwedishDate(b.date).getTime());
  
  // Sort past events by recency (most recent first)
  const pastEvents = filteredEvents
    .filter(event => parseSwedishDate(event.date) < today)
    .sort((a, b) => parseSwedishDate(b.date).getTime() - parseSwedishDate(a.date).getTime());

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

      {/* Kommande Events Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Kommande Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {upcomingEvents.length} events hittade
            </p>
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} isPast={false} />
          ))}
        </div>

        {/* No Upcoming Events */}
        {upcomingEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Inga kommande events hittades
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Prova att ändra dina sökkriterier
            </p>
          </div>
        )}
      </div>

      {/* "Saknar du något?" Section */}
      <div className="text-center mt-16 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Saknar du något?</h2>
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

      {/* Avslutade Events Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Avslutade Events
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {pastEvents.length} events hittade
            </p>
          </div>
        </div>

        {/* Past Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <EventCard key={event.id} {...event} isPast={true} />
          ))}
        </div>

        {/* No Past Events */}
        {pastEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Inga avslutade events att visa
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Alla events visas i kommande events-sektionen
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
