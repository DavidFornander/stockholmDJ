"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, SlidersHorizontal, MapPin, Star, Music2, Clock } from 'lucide-react';
import { DJ } from '@/types/dj';
import { useBasket } from '@/context/BasketContext';
import MiniCalendar from '@/components/shared/ui/MiniCalendar';
import Compact3DViewer from '@/components/shared/ui/Compact3DViewer';
import InlineGearSelector from '@/components/shared/ui/InlineGearSelector';
import HourSlider from '@/components/shared/ui/HourSlider';

// Sample DJ data
const djsData: DJ[] = [
  {
    id: '1',
    name: 'Hugo Falck',
    title: 'House & Techno Specialist',
    price: 15000,
    rating: 4.9,
    reviewCount: 147,
    location: 'På Landet för fan',
    specialties: ['House', 'Techno', 'Deep House'],
    experience: '8+ år',
    imageUrl: '/assets/images/profiles/dj_image.jpg',
    available: true,
    duration: '1-9 timmar',
    equipment: 'Komplett ljudanläggning',
    hourlyRate: 2500,
    availability: {
      '2025-01-15': true,
      '2025-01-16': true,
      '2025-01-17': false,
      '2025-01-18': true,
      '2025-01-19': true,
      '2025-01-20': true,
      '2025-01-21': false
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar', '2x 15\' toppar + 1x 18\' sub', '2x 15\' toppar + 2x 18\' sub'],
      djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
      players: ['Digital', 'Vinyl'],
      microphones: ['Trådad', 'Trådlös', 'Trådlös (2st)'],
      additionalItems: ['Uplighting', 'Strobe', 'Ljuspelare', 'Rokmaskin']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
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
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-01.jpg',
    available: true,
    duration: '1-6 timmar',
    equipment: 'Premium ljudsystem',
    hourlyRate: 2000,
    availability: {
      '2025-01-15': true,
      '2025-01-16': false,
      '2025-01-17': true,
      '2025-01-18': true,
      '2025-01-19': false,
      '2025-01-20': true,
      '2025-01-21': true
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar', '2x 15\' toppar + 1x 18\' sub'],
      djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
      players: ['Digital'],
      microphones: ['Trådad', 'Trådlös', 'Trådlös (2st)'],
      additionalItems: ['Uplighting', 'Ljuspelare', 'Projektor']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
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
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-02.jpg',
    available: false,
    duration: '1-5 timmar',
    equipment: 'Professionell utrustning',
    hourlyRate: 3000,
    availability: {
      '2025-01-15': false,
      '2025-01-16': false,
      '2025-01-17': false,
      '2025-01-18': true,
      '2025-01-19': true,
      '2025-01-20': false,
      '2025-01-21': true
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar + 1x 18\' sub', '2x 15\' toppar + 2x 18\' sub'],
      djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
      players: ['Digital', 'Vinyl'],
      microphones: ['Trådlös', 'Trådlös (2st)'],
      additionalItems: ['Uplighting', 'Strobe', 'Ljuspelare', 'Rokmaskin', 'Projektor']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
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
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-03.jpg',
    available: true,
    duration: '1-4 timmar',
    equipment: 'Standardutrustning',
    hourlyRate: 2200,
    availability: {
      '2025-01-15': true,
      '2025-01-16': true,
      '2025-01-17': true,
      '2025-01-18': false,
      '2025-01-19': true,
      '2025-01-20': true,
      '2025-01-21': false
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar', '2x 15\' toppar + 1x 18\' sub'],
      djTables: ['Humpter B3 (Svart)'],
      players: ['Digital', 'Vinyl'],
      microphones: ['Trådad', 'Trådlös'],
      additionalItems: ['Uplighting', 'Strobe']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
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
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-04.jpg',
    available: true,
    duration: '1-6 timmar',
    equipment: 'Vintage vinyl setup',
    hourlyRate: 2800,
    availability: {
      '2025-01-15': true,
      '2025-01-16': true,
      '2025-01-17': true,
      '2025-01-18': true,
      '2025-01-19': false,
      '2025-01-20': false,
      '2025-01-21': true
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar', '2x 15\' toppar + 1x 18\' sub'],
      djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
      players: ['Vinyl'],
      microphones: ['Trådad', 'Trådlös'],
      additionalItems: ['Uplighting', 'Ljuspelare']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
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
    imageUrl: '/assets/images/profiles/glow__page--irl-looks-05.jpg',
    available: true,
    duration: '1-5 timmar',
    equipment: 'Diskret ljudsystem',
    hourlyRate: 2100,
    availability: {
      '2025-01-15': false,
      '2025-01-16': true,
      '2025-01-17': true,
      '2025-01-18': true,
      '2025-01-19': true,
      '2025-01-20': true,
      '2025-01-21': false
    },
    compatibleGear: {
      speakers: ['2x 15\' toppar'],
      djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
      players: ['Digital'],
      microphones: ['Trådad', 'Trådlös'],
      additionalItems: ['Uplighting', 'Projektor']
    },
    model3D: '/assets/models/Humpter_b3_v3.glb'
  }
];

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

  const DJCard: React.FC<{ dj: DJ }> = ({ dj }) => {
    const { addItem, isItemInBasket, removeItem } = useBasket();
    const [selectedGear, setSelectedGear] = useState({
      speakers: { name: 'Ljud finns i lokalen', cost: 0 },
      djTable: { name: 'Finns i lokalen', cost: 0 },
      player: { name: 'Digital', cost: 0 },
      microphone: { name: 'Nej, tack', cost: 0 }
    });
    const [selectedHours, setSelectedHours] = useState(4);
    const [selectedDate, setSelectedDate] = useState('');

    const handleGearChange = (gearType: keyof typeof selectedGear, option: { name: string; cost: number }) => {
      setSelectedGear(prev => ({
        ...prev,
        [gearType]: option
      }));
    };

    const gearCost = Object.values(selectedGear).reduce((sum, gear) => sum + gear.cost, 0);
    const totalPrice = (dj.hourlyRate * selectedHours) + gearCost;
    const isInBasket = isItemInBasket(dj.id);

    const handleAddToBasket = () => {
      if (isInBasket) {
        removeItem(dj.id);
      } else {
        const gearArray = Object.entries(selectedGear)
          .filter(([_, gear]) => gear.cost > 0)
          .map(([type, gear]) => ({
            id: `${dj.id}-${type}`,
            name: gear.name,
            cost: gear.cost,
            category: type
          }));

        addItem({
          type: 'dj',
          itemId: dj.id,
          itemName: dj.name,
          itemTitle: dj.title,
          selectedDate: selectedDate || new Date().toISOString().split('T')[0],
          selectedHours,
          selectedGear: gearArray,
          basePrice: dj.hourlyRate,
          djData: dj
        });
      }
    };

    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow duration-200">
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* DJ Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={dj.imageUrl}
                  alt={dj.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* DJ Info */}
            <div className="flex-grow min-w-0">
              {/* Name, 3D/Calendar, and Rating Row */}
              <div className="flex items-start">
                {/* Name Section */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{dj.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{dj.title}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {dj.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Music2 className="w-4 h-4" />
                      {dj.experience} erfarenhet
                    </div>
                  </div>
                </div>

                {/* 3D Model & Calendar Section - Centered */}
                <div className="flex gap-3 flex-shrink-0 justify-center flex-1">
                  <div className="w-[100px] h-[80px] hidden sm:block">
                    <Compact3DViewer
                      modelPath={dj.model3D}
                      selectedGear={selectedGear}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[120px] h-[80px]">
                    <MiniCalendar
                      availability={dj.availability}
                      selectedDate={selectedDate}
                      onDateSelect={setSelectedDate}
                      className="w-full h-full text-xs"
                    />
                  </div>
                  
                  {/* Mobile 3D Model - Below calendar on small screens */}
                  <div className="w-[100px] h-[80px] sm:hidden">
                    <Compact3DViewer
                      modelPath={dj.model3D}
                      selectedGear={selectedGear}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Rating */}
                <div className="text-right flex-shrink-0 flex-1 flex justify-end">
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">{dj.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{dj.reviewCount} recensioner</p>
                  </div>
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

              {/* Interactive Controls & Pricing - Mobile Responsive */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 gap-4">
                {/* Gear Selection */}
                <div className="flex-1 min-w-0">
                  <InlineGearSelector
                    compatibleGear={dj.compatibleGear}
                    selectedGear={selectedGear}
                    onGearChange={handleGearChange}
                  />
                </div>
                
                {/* Price and Controls */}
                <div className="flex-shrink-0 w-full lg:w-[140px] lg:text-right">
                  <div className="mb-3">
                    <HourSlider
                      value={selectedHours}
                      onChange={setSelectedHours}
                      hourlyRate={dj.hourlyRate}
                      min={1}
                      max={8}
                    />
                  </div>
                  
                  <div className="flex lg:flex-col justify-between lg:justify-start items-center lg:items-end">
                    <div className="lg:mb-1">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {totalPrice.toLocaleString('sv-SE')} kr
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 lg:mb-3">
                        för {selectedHours}h
                      </p>
                    </div>
                    
                    <button 
                      onClick={handleAddToBasket}
                      className={`px-4 py-2 rounded text-sm font-medium transition-colors lg:w-full ${
                        isInBasket
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isInBasket ? '✓ Tillagd' : 'Lägg till'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/assets/images/temp/2Q.png"
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

        {/* Search Form Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center divide-x divide-gray-200 dark:divide-gray-700">
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Plats"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              <input
                type="text"
                placeholder="Musikstil"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
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
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
              >
                <option value="">Eventtyp</option>
                <option value="wedding">Bröllop</option>
                <option value="corporate">Företagsevent</option>
                <option value="party">Privat fest</option>
                <option value="club">Klubb</option>
              </select>
            </div>
            <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors px-4">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
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
