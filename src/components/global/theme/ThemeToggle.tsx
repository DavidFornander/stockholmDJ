"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-12 h-6 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      {/* Toggle Track */}
      <div className="relative w-full h-full">
        {/* Sliding Handle */}
        <div
          className={`absolute top-0 left-0 w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {/* Icon inside the handle */}
          {theme === 'light' ? (
            <Sun className="w-3 h-3 text-yellow-500" />
          ) : (
            <Moon className="w-3 h-3 text-gray-700" />
          )}
        </div>
        
        {/* Background Icons (optional - for visual context) */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <Sun className="w-3 h-3 text-yellow-400 opacity-70" />
          <Moon className="w-3 h-3 text-blue-400 opacity-70" />
        </div>
      </div>
    </button>
  );
};
