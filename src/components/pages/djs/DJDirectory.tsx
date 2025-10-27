"use client";

import { Search, SlidersHorizontal, MapPin, Star, Music2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Compact3DViewer from '@/components/shared/ui/Compact3DViewer';
import FilterModal from '@/components/shared/ui/FilterModal';
import HourSlider from '@/components/shared/ui/HourSlider';
import InlineGearSelector from '@/components/shared/ui/InlineGearSelector';
import MiniCalendar from '@/components/shared/ui/MiniCalendar';
import { useBasket } from '@/context/BasketContext';
import { DJ } from '@/types/dj';

// Lorem Picsum image utility functions
const getLoremPicsumImage = (width: number, height: number, seed: number) => {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

const getHeroImage = () => {
  // DJ/event themed hero image - using a fixed seed for consistency
  return getLoremPicsumImage(1920, 800, 1001);
};

const getDJProfileImages = (djId: string, count: number = 4) => {
  // Generate consistent images for each DJ based on their ID
  const baseSeeed = parseInt(djId) * 100;
  return Array.from({ length: count }, (_, index) => 
    getLoremPicsumImage(400, 300, baseSeeed + index + 1)
  );
};

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
    eventTypes: ['Klubb', 'Privat fest'],
    experience: '8+ år',
    imageUrl: getDJProfileImages('1', 1)[0],
    images: getDJProfileImages('1', 4),
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
    eventTypes: ['Bröllop', 'Företagsevent', 'Privat fest'],
    experience: '6+ år',
    imageUrl: getDJProfileImages('2', 1)[0],
    images: getDJProfileImages('2', 4),
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
    eventTypes: ['Klubb', 'Företagsevent'],
    experience: '10+ år',
    imageUrl: getDJProfileImages('3', 1)[0],
    images: getDJProfileImages('3', 4),
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
    eventTypes: ['Privat fest', 'Klubb'],
    experience: '5+ år',
    imageUrl: getDJProfileImages('4', 1)[0],
    images: getDJProfileImages('4', 4),
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
    eventTypes: ['Bröllop', 'Privat fest', 'Företagsevent'],
    experience: '12+ år',
    imageUrl: getDJProfileImages('5', 1)[0],
    images: getDJProfileImages('5', 4),
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
    eventTypes: ['Företagsevent', 'Privat fest'],
    experience: '7+ år',
    imageUrl: getDJProfileImages('6', 1)[0],
    images: getDJProfileImages('6', 4),
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
  const [eventDate, setEventDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price');
  const [selectedEventType, setSelectedEventType] = useState('Alla');
  const [selectedMusicStyle, setSelectedMusicStyle] = useState('Alla');
  const [showEventTypeModal, setShowEventTypeModal] = useState(false);
  const [showMusicStyleModal, setShowMusicStyleModal] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Get unique event types and music styles for filtering
  const eventTypes = ['Alla', ...Array.from(new Set(djsData.flatMap(dj => dj.eventTypes)))];
  const musicStyles = ['Alla', ...Array.from(new Set(djsData.flatMap(dj => dj.specialties)))];

  // Sort options
  const sortOptions = [
    { value: 'price', label: 'Sortera efter pris' },
    { value: 'rating', label: 'Sortera efter betyg' },
    { value: 'reviews', label: 'Sortera efter recensioner' }
  ];

  const getCurrentSortLabel = () => {
    return sortOptions.find(option => option.value === sortBy)?.label || 'Sortera';
  };
  // Filter and sort logic
  const filteredAndSortedDJs = djsData
    .filter(dj => {
      const matchesLocation = !searchFrom || dj.location.toLowerCase().includes(searchFrom.toLowerCase());
      const matchesEventType = selectedEventType === 'Alla' || dj.eventTypes.includes(selectedEventType);
      const matchesMusicStyle = selectedMusicStyle === 'Alla' || dj.specialties.includes(selectedMusicStyle);
      return matchesLocation && matchesEventType && matchesMusicStyle;
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
    const [showInteractive, setShowInteractive] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedGear, setSelectedGear] = useState({
      speakers: { name: 'Ljud finns i lokalen', cost: 0 },
      djTable: { name: 'Finns i lokalen', cost: 0 },
      player: { name: 'Digital', cost: 0 },
      microphone: { name: 'Nej, tack', cost: 0 }
    });
    const [selectedHours, setSelectedHours] = useState(4);
    const [selectedDate, setSelectedDate] = useState('');

    // Get available images (use images array if available, otherwise fall back to single imageUrl)
    const availableImages = dj.images && dj.images.length > 0 ? dj.images : [dj.imageUrl];

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % availableImages.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length);
    };

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
          .filter(([, gear]) => gear.cost > 0)
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
          {/* Image Carousel - Full width at top, optimized for card format */}
          <div className="relative mb-6 -mx-6 -mt-6">
            <div className="relative h-40 md:h-44 lg:h-48 overflow-hidden rounded-t-lg">
              <Image
                src={availableImages[currentImageIndex]}
                alt={`${dj.name} - bild ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
              />
              
              {/* Navigation arrows - only show if more than 1 image */}
              {availableImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Föregående bild"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Nästa bild"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              {/* Image indicators - only show if more than 1 image */}
              {availableImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {availableImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                      aria-label={`Visa bild ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Responsive Layout Container */}
          <div className="flex flex-col">
            {/* Name + Reviews Section - Unified for all screens */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{dj.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{dj.title}</p>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {dj.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Music2 className="w-4 h-4" />
                    {dj.experience}
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
              </div>
              
              <div className="w-20 text-right flex-shrink-0 ml-4">
                <div className="flex items-center justify-end gap-1 mb-1">
                  <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">{dj.rating}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{dj.reviewCount} recensioner</p>
                <button
                  onClick={() => setShowInteractive(!showInteractive)}
                  className="px-3 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  aria-label={showInteractive ? "Dölj interaktiva funktioner" : "Visa interaktiva funktioner"}
                >
                  {showInteractive ? 'Dölj' : 'Välj'}
                </button>
              </div>
            </div>

            {/* 3D & Calendar Section - Conditionally rendered for all screens */}
            {showInteractive && (
              <div className="mb-4 transition-all duration-300 ease-in-out">
                <div className="flex gap-3 justify-center">
                  <div className="w-[120px] h-[110px]">
                    <Compact3DViewer
                      modelPath={dj.model3D}
                      selectedGear={selectedGear}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[180px] h-[110px]">
                    <MiniCalendar
                      availability={dj.availability}
                      selectedDate={selectedDate}
                      onDateSelect={setSelectedDate}
                      className="w-full h-full text-xs"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Controls & Pricing - Conditionally rendered, optimized for grid layout */}
          {showInteractive && (
            <div className="flex flex-col justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 gap-4 transition-all duration-300 ease-in-out">
              {/* Gear Selection - Simplified for card format */}
              <div className="w-full">
                <InlineGearSelector
                  compatibleGear={dj.compatibleGear}
                  selectedGear={selectedGear}
                  onGearChange={handleGearChange}
                />
              </div>
              
              {/* Hour Slider */}
              <div className="w-full">
                <HourSlider
                  value={selectedHours}
                  onChange={setSelectedHours}
                  hourlyRate={dj.hourlyRate}
                  min={1}
                  max={8}
                />
              </div>
              
              {/* Price and Controls */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {totalPrice.toLocaleString('sv-SE')} kr
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    för {selectedHours}h
                  </p>
                </div>
                
                <button 
                  onClick={handleAddToBasket}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    isInBasket
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isInBasket ? '✓ Tillagd' : 'Lägg till'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showSortDropdown) {
        setShowSortDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showSortDropdown) {
        setShowSortDropdown(false);
      }
    };

    if (showSortDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showSortDropdown]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src={getHeroImage()}
          alt="DJ performing at event"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Välj DJ
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Upptäck Stockholms bästa DJs för ditt event
            </p>
          </div>
        </div>

        {/* Search Form Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-full shadow-md flex flex-col md:flex-row items-center md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="flex-1 px-4 py-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Plats"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <div className="flex-1 px-4 py-3 w-full md:w-auto border-t md:border-t-0 border-gray-200 dark:border-gray-700 md:border-none">
              <button
                type="button"
                onClick={() => setShowMusicStyleModal(true)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 flex items-center justify-between text-left"
              >
                <span className={selectedMusicStyle === 'Alla' ? 'text-gray-500 dark:text-gray-400' : ''}>
                  {selectedMusicStyle === 'Alla' ? 'Musikstil' : selectedMusicStyle}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="flex-1 px-4 py-3 w-full md:w-auto border-t md:border-t-0 border-gray-200 dark:border-gray-700 md:border-none">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex-1 px-4 py-3 w-full md:w-auto border-t md:border-t-0 border-gray-200 dark:border-gray-700 md:border-none">
              <button
                type="button"
                onClick={() => setShowEventTypeModal(true)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 flex items-center justify-between text-left"
              >
                <span className={selectedEventType === 'Alla' ? 'text-gray-500 dark:text-gray-400' : ''}>
                  {selectedEventType === 'Alla' ? 'Eventtyp' : selectedEventType}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="w-full md:w-auto p-3 border-t md:border-t-0 border-gray-200 dark:border-gray-700 md:border-none">
              <button className="w-full md:w-auto p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors px-4">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tillgängliga DJs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {filteredAndSortedDJs.length} DJs hittade
            </p>
            
            {/* Active Filters */}
            {(selectedMusicStyle !== 'Alla' || selectedEventType !== 'Alla' || searchFrom) && (
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-sm text-gray-500 dark:text-gray-400">Aktiva filter:</span>
                {searchFrom && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    Plats: {searchFrom}
                  </span>
                )}
                {selectedMusicStyle !== 'Alla' && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                    Musikstil: {selectedMusicStyle}
                  </span>
                )}
                {selectedEventType !== 'Alla' && (
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                    Eventtyp: {selectedEventType}
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchFrom('');
                    setEventDate('');
                    setSelectedEventType('Alla');
                    setSelectedMusicStyle('Alla');
                  }}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline ml-2"
                >
                  Rensa alla filter
                </button>
              </div>
            )}
          </div>
          
          {/* Sort and Filter Controls */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                {getCurrentSortLabel()}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Sort Dropdown */}
              {showSortDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                        sortBy === option.value 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300'
                      } ${option.value === sortOptions[0].value ? 'rounded-t-md' : ''} ${option.value === sortOptions[sortOptions.length - 1].value ? 'rounded-b-md' : ''}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                setEventDate('');
                setSelectedEventType('Alla');
                setSelectedMusicStyle('Alla');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Rensa sökning
            </button>
          </div>
        )}
      </div>

      {/* Filter Modals */}
      <FilterModal
        isOpen={showMusicStyleModal}
        onClose={() => setShowMusicStyleModal(false)}
        title="Filtrera efter musikstil"
        options={musicStyles}
        selectedValue={selectedMusicStyle}
        onSelect={setSelectedMusicStyle}
        dataSource={djsData}
        getItemCategories={(dj) => dj.specialties}
      />

      <FilterModal
        isOpen={showEventTypeModal}
        onClose={() => setShowEventTypeModal(false)}
        title="Filtrera efter eventtyp"
        options={eventTypes}
        selectedValue={selectedEventType}
        onSelect={setSelectedEventType}
        dataSource={djsData}
        getItemCategories={(dj) => dj.eventTypes}
      />
    </div>
  );
};

export default DJDirectory;
