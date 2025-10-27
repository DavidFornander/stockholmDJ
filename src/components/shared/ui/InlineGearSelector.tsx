"use client";

import React from 'react';

import { gearOptions } from '@/types/dj';

interface SelectedGear {
  speakers?: { name: string; cost: number };
  djTable?: { name: string; cost: number };
  player?: { name: string; cost: number };
  microphone?: { name: string; cost: number };
}

interface InlineGearSelectorProps {
  compatibleGear: {
    speakers: string[];
    djTables: string[];
    players: string[];
    microphones: string[];
    additionalItems: string[];
  };
  selectedGear: SelectedGear;
  onGearChange: (gearType: keyof SelectedGear, option: { name: string; cost: number }) => void;
  className?: string;
}

const InlineGearSelector: React.FC<InlineGearSelectorProps> = ({ 
  compatibleGear, 
  selectedGear, 
  onGearChange,
  className = "" 
}) => {
  const getAvailableOptions = (gearType: keyof SelectedGear) => {
    let allOptions;
    let compatibleNames;
    
    switch (gearType) {
      case 'speakers':
        allOptions = gearOptions.speakers;
        compatibleNames = compatibleGear.speakers;
        break;
      case 'djTable':
        allOptions = gearOptions.djTables;
        compatibleNames = compatibleGear.djTables;
        break;
      case 'player':
        allOptions = gearOptions.players;
        compatibleNames = compatibleGear.players;
        break;
      case 'microphone':
        allOptions = gearOptions.microphones;
        compatibleNames = compatibleGear.microphones;
        break;
      default:
        return [];
    }
    
    return allOptions.filter(option => 
      option.cost === 0 || compatibleNames.includes(option.name)
    );
  };

  const renderSelector = (
    gearType: keyof SelectedGear, 
    label: string, 
    icon: string
  ) => {
    const options = getAvailableOptions(gearType);
    const selected = selectedGear[gearType];

    return (
      <div className="space-y-1">
        <label className="flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300">
          <span>{icon}</span>
          {label}
        </label>
        <select
          value={selected?.name || ''}
          onChange={(e) => {
            const option = options.find(opt => opt.name === e.target.value);
            if (option) {
              onGearChange(gearType, option);
            }
          }}
          className="w-full text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="">Välj...</option>
          {options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {option.cost > 0 && `(+${option.cost.toLocaleString('sv-SE')} kr)`}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {renderSelector('speakers', 'Ljud', '🔊')}
      {renderSelector('djTable', 'DJ-bord', '🎛️')}
      {renderSelector('player', 'Spelare', '💿')}
      {renderSelector('microphone', 'Mikrofon', '🎤')}
      
      {/* Total gear cost display */}
      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-600 dark:text-gray-400">Utrustning:</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            +{Object.values(selectedGear).reduce((sum, gear) => sum + (gear?.cost || 0), 0).toLocaleString('sv-SE')} kr
          </span>
        </div>
      </div>
    </div>
  );
};

export default InlineGearSelector;
