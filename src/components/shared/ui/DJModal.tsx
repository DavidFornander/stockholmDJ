"use client";

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, Music2, Star } from 'lucide-react';

import { useBasket } from '@/context/BasketContext';
import { DJ } from '@/types/dj';
import Compact3DViewer from './Compact3DViewer';
import HourSlider from './HourSlider';
import InlineGearSelector from './InlineGearSelector';
import MiniCalendar from './MiniCalendar';

interface DJModalProps {
  isOpen: boolean;
  onClose: () => void;
  dj: DJ | null;
}

const DJModal: React.FC<DJModalProps> = ({ isOpen, onClose, dj }) => {
  const { addItem, isItemInBasket, removeItem } = useBasket();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedGear, setSelectedGear] = useState({
    speakers: { name: 'Ljud finns i lokalen', cost: 0 },
    djTable: { name: 'Finns i lokalen', cost: 0 },
    player: { name: 'Digital', cost: 0 },
    microphone: { name: 'Nej, tack', cost: 0 }
  });
  const [selectedHours, setSelectedHours] = useState(4);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dj) {
      // Reset state when modal opens with a new DJ
      setCurrentImageIndex(0);
      setSelectedGear({
        speakers: { name: 'Ljud finns i lokalen', cost: 0 },
        djTable: { name: 'Finns i lokalen', cost: 0 },
        player: { name: 'Digital', cost: 0 },
        microphone: { name: 'Nej, tack', cost: 0 }
      });
      setSelectedHours(4);
      setSelectedDate('');
    }
  }, [isOpen, dj]);

  if (!isOpen || !dj) return null;

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="presentation"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src={dj.imageUrl}
                alt={dj.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {dj.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{dj.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Stäng modal"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Images and Info */}
            <div>
              {/* Image Carousel */}
              <div className="relative mb-6">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={availableImages[currentImageIndex]}
                    alt={`${dj.name} - bild ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                  />

                  {/* Navigation arrows */}
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

                  {/* Image indicators */}
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

              {/* DJ Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{dj.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Music2 className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{dj.experience}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-blue-500 text-blue-500" />
                  <span className="font-semibold text-gray-900 dark:text-white">{dj.rating}</span>
                  <span className="text-gray-600 dark:text-gray-400">({dj.reviewCount} recensioner)</span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Specialiteter</h3>
                  <div className="flex flex-wrap gap-2">
                    {dj.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Eventtyper</h3>
                  <div className="flex flex-wrap gap-2">
                    {dj.eventTypes.map((eventType, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full"
                      >
                        {eventType}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Utrustning</h3>
                  <p className="text-gray-600 dark:text-gray-400">{dj.equipment}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Controls */}
            <div className="space-y-6">
              {/* 3D Viewer and Calendar */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">3D Förhandsvisning</h3>
                  <div className="h-32">
                    <Compact3DViewer
                      modelPath={dj.model3D}
                      selectedGear={selectedGear}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tillgänglighet</h3>
                  <div className="h-32">
                    <MiniCalendar
                      availability={dj.availability}
                      selectedDate={selectedDate}
                      onDateSelect={setSelectedDate}
                      className="w-full h-full text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Gear Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Extra Utrustning</h3>
                <InlineGearSelector
                  compatibleGear={dj.compatibleGear}
                  selectedGear={selectedGear}
                  onGearChange={handleGearChange}
                />
              </div>

              {/* Hour Selection */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Antal Timmar</h3>
                <HourSlider
                  value={selectedHours}
                  onChange={setSelectedHours}
                  hourlyRate={dj.hourlyRate}
                  min={1}
                  max={8}
                />
              </div>

              {/* Price and Add to Basket */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {totalPrice.toLocaleString('sv-SE')} kr
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      för {selectedHours} timmar
                    </p>
                  </div>
                  <button
                    onClick={handleAddToBasket}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isInBasket
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isInBasket ? '✓ Tillagd i korgen' : 'Lägg till i korgen'}
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

export default DJModal;