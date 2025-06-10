"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, SlidersHorizontal, MapPin, Star, Music2, Clock } from 'lucide-react';

// Sample DJ data
const djsData = [
  {
    id: '1',
    name: 'Alex Andersson',
    title: 'House & Techno Specialist',
    price: 15000,
    rating: 4.9,
    reviewCount: 147,
    location: 'Stockholm City',
    specialties: ['House', 'Techno', 'Deep House'],
    experience: '8+ år',
    imageUrl: '/assets/profiles/dj_image.jpg',
    available: true,
    duration: '4 timmar',
    equipment: 'Komplett ljudanläggning'
  },
  {
    id: '2',
    name: 'Emma Eriksson',
    title: 'Wedding & Event DJ',
    price: 12000,
    rating: 4.8,
    reviewCount: 203,
    location: 'Södermalm',
    specialties: ['Pop', 'RnB', 'Wedding'],
    experience: '6+ år',
    imageUrl: '/assets/events/event1.jpg',
    available: true,
    duration: '6 timmar',
    equipment: 'Premium ljudsystem'
  },
  {
    id: '3',
    name: 'Marcus Johansson',
    title: 'Electronic & Progressive',
    price: 18000,
    rating: 4.9,
    reviewCount: 189,
    location: 'Östermalm',
    specialties: ['Progressive', 'Trance', 'Electronic'],
    experience: '10+ år',
    imageUrl: '/assets/events/event2.jpg',
    available: false,
    duration: '5 timmar',
    equipment: 'Professionell utrustning'
  },
  {
    id: '4',
    name: 'Sofia Lindberg',
    title: 'Hip-Hop & Urban',
    price: 14000,
    rating: 4.7,
    reviewCount: 156,
    location: 'Vasastan',
    specialties: ['Hip-Hop', 'RnB', 'Urban'],
    experience: '5+ år',
    imageUrl: '/assets/events/event3.jpg',
    available: true,
    duration: '4 timmar',
    equipment: 'Standardutrustning'
  },
  {
    id: '5',
    name: 'David Forsberg',
    title: 'Vinyl & Classic House',
    price: 16000,
    rating: 5.0,
    reviewCount: 98,
    location: 'Gamla Stan',
    specialties: ['Vinyl', 'Classic House', 'Disco'],
    experience: '12+ år',
    imageUrl: '/assets/events/event4.jpg',
    available: true,
    duration: '6 timmar',
    equipment: 'Vintage vinyl setup'
  },
  {
    id: '6',
    name: 'Lisa Pettersson',
    title: 'Corporate & Private Events',
    price: 13000,
    rating: 4.8,
    reviewCount: 174,
    location: 'Norrmalm',
    specialties: ['Corporate', 'Jazz', 'Lounge'],
    experience: '7+ år',
    imageUrl: '/assets/events/event5.jpg',
    available: true,
    duration: '5 timmar',
    equipment: 'Diskret ljudsystem'
  }
];

interface DJ {
  id: string;
  name: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  specialties: string[];
  experience: string;
  imageUrl: string;
  available: boolean;
  duration: string;
  equipment: string;
}

const DJDirectory: React.FC = () => {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price');

  // Filter and sort logic
  const filteredAndSortedDJs = djsData
    .filter(dj => {
      const matchesLocation = !searchFrom || dj.location.toLowerCase().includes(searchFrom.toLowerCase());
      const matchesGenre = !searchTo || dj.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchTo.toLowerCase())
      );
      return matchesLocation && matchesGenre;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price': return a.price - b.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviewCount - a.reviewCount;
        default: return 0;
      }
    });

  const DJCard: React.FC<{ dj: DJ }> = ({ dj }) => (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* DJ Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={dj.imageUrl}
                alt={dj.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DJ Info */}
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{dj.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{dj.title}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {dj.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {dj.duration}
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                  <span className="font-semibold text-gray-900 dark:text-white">{dj.rating}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{dj.reviewCount} recensioner</p>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1 mt-3">
              {dj.specialties.slice(0, 3).map((specialty, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Equipment & Experience */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>{dj.equipment}</p>
                <p className="flex items-center gap-1 mt-1">
                  <Music2 className="w-4 h-4" />
                  {dj.experience} erfarenhet
                </p>
              </div>
              
              {/* Price and CTA */}
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {dj.price.toLocaleString('sv-SE')} kr
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">per event</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Välj DJ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/assets/temp/2Q.png"
          alt="DJ performing at event"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hitta DJs
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Upptäck Stockholms bästa DJs för ditt event
            </p>
          </div>
        </div>
      </div>

      {/* Header Search Section */}
      <div className="bg-white dark:bg-black shadow-sm transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 py-6">

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Från</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Plats/område"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Till</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Musikstil/genre"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                />
                <Music2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Datum</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Eventtyp</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Välj eventtyp</option>
                <option value="wedding">Bröllop</option>
                <option value="corporate">Företagsevent</option>
                <option value="party">Privat fest</option>
                <option value="club">Klubb</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
              <Search className="w-5 h-5" />
              Sök DJs
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tillgängliga DJs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {filteredAndSortedDJs.length} DJs hittade
            </p>
          </div>
          
          {/* Sort and Filter Controls */}
          <div className="flex items-center gap-4">
            <select
              className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price">Sortera efter pris</option>
              <option value="rating">Sortera efter betyg</option>
              <option value="reviews">Sortera efter recensioner</option>
            </select>
            
            <button
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* DJ Results */}
        <div className="space-y-4">
          {filteredAndSortedDJs.map((dj) => (
            <DJCard key={dj.id} dj={dj} />
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedDJs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Inga DJs hittades
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Prova att ändra dina sökkriterier
            </p>
            <button
              onClick={() => {
                setSearchFrom('');
                setSearchTo('');
                setEventDate('');
                setEventType('');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Rensa sökning
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DJDirectory;
