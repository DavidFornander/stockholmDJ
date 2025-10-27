"use client";

import { Search, MapPin, Star, Music2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useMemo } from 'react';

import { useTheme } from '@/components/global/theme/ThemeProvider';
import DJModal from '@/components/shared/ui/DJModal';
import FilterModal from '@/components/shared/ui/FilterModal';
import { DJ } from '@/types/dj';

// Lorem Picsum image utility functions
const getHeroImage = () => {
  // DJ/event themed hero image - using local image
  return '/assets/images/hero/dj-cool-1.jpg';
};

const getDJProfileImages = (djId: string, count: number = 4, theme: 'light' | 'dark' = 'light') => {
  // Use different profile images based on theme
  const tempImage = theme === 'light' 
    ? '/assets/images/profiles/temp-profile-light.jpg' 
    : '/assets/images/profiles/temp-profile.jpg';
  return Array.from({ length: count }, () => tempImage);
};

const DJDirectory: React.FC = () => {
  const { theme } = useTheme();
  const [searchFrom, setSearchFrom] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('Alla');
  const [selectedMusicStyle, setSelectedMusicStyle] = useState('Alla');
  const [showEventTypeModal, setShowEventTypeModal] = useState(false);
  const [showMusicStyleModal, setShowMusicStyleModal] = useState(false);
  const [selectedDJ, setSelectedDJ] = useState<DJ | null>(null);
  const [showDJModal, setShowDJModal] = useState(false);

  // Sample DJ data - memoized to only update when theme changes
  const djsData: DJ[] = useMemo(() => [
    {
      id: '1',
      name: 'Hugo Falck',
      title: 'House & Techno Specialist',
      price: 15000,
      rating: 4.9,
      reviewCount: 147,
      location: 'Enköping',
      specialties: ['House', 'Techno', 'Deep House'],
      eventTypes: ['Klubb', 'Privat fest'],
      experience: '5+ år',
      imageUrl: getDJProfileImages('1', 1, theme)[0],
      images: getDJProfileImages('1', 4, theme),
      available: true,
      active: true,
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
      name: 'David Fornander',
      title: 'DJ - Bröllop & Event',
      price: 12000,
      rating: 4.8,
      reviewCount: 89,
      location: 'Stockholm',
      specialties: ['Pop', 'Hits', 'Fest'],
      eventTypes: ['Bröllop', 'Privat fest', 'Företagsevent'],
      experience: '3+ år',
      imageUrl: getDJProfileImages('2', 1, theme)[0],
      images: getDJProfileImages('2', 4, theme),
      available: true,
      active: true,
      duration: '1-6 timmar',
      equipment: 'Digital',
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
        microphones: ['Trådad', 'Trådlös'],
        additionalItems: ['Uplighting', 'Ljuspelare', 'Projektor']
      },
      model3D: '/assets/models/Humpter_b3_v3.glb'
    },
    {
      id: '3',
      name: 'Sefan Ceccaldi',
      title: 'Saxophone & DJ',
      price: 25000,
      rating: 4.9,
      reviewCount: 203,
      location: 'Stockholm',
      specialties: ['Wedding', 'Party', 'Saxophone'],
      eventTypes: ['Företagsevent', 'Bröllop', 'Privat fest'],
      experience: '15+ år',
      imageUrl: getDJProfileImages('3', 1, theme)[0],
      images: getDJProfileImages('3', 4, theme),
      available: true,
      active: true,
      duration: '2-8 timmar',
      equipment: 'Professionell saxofon setup',
      hourlyRate: 4000,
      availability: {
        '2025-01-15': true,
        '2025-01-16': true,
        '2025-01-17': true,
        '2025-01-18': false,
        '2025-01-19': true,
        '2025-01-20': true,
        '2025-01-21': true
      },
      compatibleGear: {
        speakers: ['2x 15\' toppar', '2x 15\' toppar + 1x 18\' sub', '2x 15\' toppar + 2x 18\' sub'],
        djTables: ['Humpter B3 (Svart)', 'Humpter B3 (Vit)'],
        players: ['Digital', 'Vinyl'],
        microphones: ['Trådlös', 'Trådlös (2st)'],
        additionalItems: ['Uplighting', 'Strobe', 'Ljuspelare', 'Rokmaskin', 'Projektor']
      },
      model3D: '/assets/models/Humpter_b3_v3.glb'
    }
  ], [theme]);

  // Get unique event types and music styles for filtering
  const eventTypes = ['Alla', ...Array.from(new Set(djsData.flatMap(dj => dj.eventTypes)))];
  const musicStyles = ['Alla', ...Array.from(new Set(djsData.flatMap(dj => dj.specialties)))];

  // Filter logic
  const filteredAndSortedDJs = djsData
    .filter(dj => {
      const matchesLocation = !searchFrom || dj.location.toLowerCase().includes(searchFrom.toLowerCase());
      const matchesEventType = selectedEventType === 'Alla' || dj.eventTypes.includes(selectedEventType);
      const matchesMusicStyle = selectedMusicStyle === 'Alla' || dj.specialties.includes(selectedMusicStyle);
      const isActive = dj.active === true;
      return matchesLocation && matchesEventType && matchesMusicStyle && isActive;
    });

  const DJCard: React.FC<{ dj: DJ }> = ({ dj }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get available images (use images array if available, otherwise fall back to single imageUrl)
    const availableImages = dj.images && dj.images.length > 0 ? dj.images : [dj.imageUrl];

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % availableImages.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length);
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
            <div className="flex justify-between items-end mb-4">
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
                  onClick={() => {
                    setSelectedDJ(dj);
                    setShowDJModal(true);
                  }}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                  aria-label="Öppna DJ detaljer"
                >
                  Boka
                </button>
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
            <div className="flex-1 px-4 py-2">
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex-1 px-4 py-2">
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
            <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors px-3 mr-2">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Våra DJ:s</h2>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((eventType) => {
              const count = eventType === 'Alla' 
                ? djsData.filter(dj => dj.active).length 
                : djsData.filter(dj => dj.active && dj.eventTypes.includes(eventType)).length;
              return (
                <button
                  key={eventType}
                  onClick={() => setSelectedEventType(eventType)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedEventType === eventType
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {eventType} ({count})
                </button>
              );
            })}
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
      <FilterModal<DJ>
        isOpen={showMusicStyleModal}
        onClose={() => setShowMusicStyleModal(false)}
        title="Filtrera efter musikstil"
        options={musicStyles}
        selectedValue={selectedMusicStyle}
        onSelect={setSelectedMusicStyle}
        dataSource={djsData}
        getItemCategories={(dj) => dj.specialties}
      />

      <FilterModal<DJ>
        isOpen={showEventTypeModal}
        onClose={() => setShowEventTypeModal(false)}
        title="Filtrera efter eventtyp"
        options={eventTypes}
        selectedValue={selectedEventType}
        onSelect={setSelectedEventType}
        dataSource={djsData}
        getItemCategories={(dj) => dj.eventTypes}
      />

      {/* DJ Modal */}
      <DJModal
        isOpen={showDJModal}
        onClose={() => setShowDJModal(false)}
        dj={selectedDJ}
      />
    </div>
  );
};

export default DJDirectory;
