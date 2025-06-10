"use client";

import React from 'react';

interface HourSliderProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (hours: number) => void;
  hourlyRate: number;
  className?: string;
}

const HourSlider: React.FC<HourSliderProps> = ({ 
  value, 
  min = 1, 
  max = 12, 
  onChange, 
  hourlyRate,
  className = "" 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
  };

  const basePrice = hourlyRate * value;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
          Timmar
        </label>
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
          {value}h
        </span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        
        {/* Value indicators */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>{min}h</span>
          <span>{max}h</span>
        </div>
      </div>

      {/* Price display */}
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-600 dark:text-gray-400">
          {hourlyRate.toLocaleString('sv-SE')} kr/h
        </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {basePrice.toLocaleString('sv-SE')} kr
        </span>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-webkit-slider-track {
          background: #e5e7eb;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          background: #e5e7eb;
          border-radius: 4px;
        }

        .dark .slider::-webkit-slider-track {
          background: #374151;
        }

        .dark .slider::-moz-range-track {
          background: #374151;
        }
      `}</style>
    </div>
  );
};

export default HourSlider;
