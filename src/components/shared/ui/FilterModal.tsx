"use client";

import { X } from 'lucide-react';
import React, { useEffect } from 'react';

const FilterModal = <T = unknown,>({
  isOpen,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
  dataSource,
  getItemCategories
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  dataSource: T[];
  getItemCategories: (item: T) => string[];
}) => {
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

  if (!isOpen) return null;

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

  const getOptionCount = (option: string) => {
    if (option === 'Alla') return dataSource.length;
    return dataSource.filter(item => 
      getItemCategories(item).includes(option)
    ).length;
  };

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    onClose();
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
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-slideIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Stäng filter"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Filter Options */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 text-left hover:scale-105 ${
                  selectedValue === option
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md'
                }`}
              >
                <div className="font-semibold">{option}</div>
                <div className={`text-xs mt-1 ${
                  selectedValue === option 
                    ? 'text-blue-100' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {getOptionCount(option)} DJs
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {selectedValue === 'Alla' ? 'Alla kategorier' : `Filtrerat: ${selectedValue}`}
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Använd filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
