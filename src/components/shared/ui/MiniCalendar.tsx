"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MiniCalendarProps {
  availability: { [date: string]: boolean };
  selectedDate?: string;
  onDateSelect?: (date: string) => void;
  className?: string;
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ 
  availability, 
  selectedDate, 
  onDateSelect,
  className = "" 
}) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Monday
    const weekStart = new Date(today);
    weekStart.setDate(diff);
    return weekStart;
  });

  // Get the current week starting from Monday
  const getWeekDates = (referenceDate: Date) => {
    const startOfWeek = new Date(referenceDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Monday
    startOfWeek.setDate(diff);
    
    const dates = [];
    
    // Get the month we're primarily viewing (from Wednesday of the week)
    const weekMiddle = new Date(startOfWeek);
    weekMiddle.setDate(startOfWeek.getDate() + 3);
    const primaryMonth = weekMiddle.getMonth();
    const primaryYear = weekMiddle.getFullYear();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      // Check if this date is in the primary month being viewed
      const isCurrentMonth = month === primaryMonth && year === primaryYear;
      const isToday = date.toDateString() === new Date().toDateString();
      
      dates.push({
        date: day,
        dateString,
        available: availability[dateString] === true,
        isSelected: selectedDate === dateString,
        isCurrentMonth,
        isToday,
        fullDate: new Date(date)
      });
    }
    return dates;
  };

  const weekDates = getWeekDates(currentWeekStart);
  
  // Get month name from the middle of the current week (Wednesday)
  const weekMiddle = new Date(currentWeekStart);
  weekMiddle.setDate(currentWeekStart.getDate() + 3);
  const monthName = weekMiddle.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' });

  const nextWeek = () => {
    const nextWeekStart = new Date(currentWeekStart);
    nextWeekStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeekStart);
  };

  const prevWeek = () => {
    const prevWeekStart = new Date(currentWeekStart);
    prevWeekStart.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(prevWeekStart);
  };

  const handleDateClick = (dateString: string, available: boolean) => {
    if (available && onDateSelect) {
      onDateSelect(dateString);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-2 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={prevWeek}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        <h3 className="text-xs font-medium text-gray-900 dark:text-white">
          {monthName}
        </h3>
        <button 
          onClick={nextWeek}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map((day) => (
          <div key={day} className="text-center text-xs text-gray-500 dark:text-gray-400 font-medium">
            {day}
          </div>
        ))}
        
        {/* Calendar dates */}
        {weekDates.map(({ date, dateString, available, isSelected, isCurrentMonth, isToday }) => (
          <button
            key={dateString}
            onClick={() => handleDateClick(dateString, available)}
            disabled={!available}
            className={`
              w-5 h-5 text-xs rounded text-center transition-colors
              ${isCurrentMonth 
                ? available 
                  ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40' 
                  : 'text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
                : available
                  ? 'text-green-600/30 dark:text-green-400/30 bg-green-50/30 dark:bg-green-900/10 hover:bg-green-100/30 dark:hover:bg-green-900/20 opacity-60'
                  : 'text-gray-300/50 dark:text-gray-600/50 bg-gray-50/30 dark:bg-gray-800/30 cursor-not-allowed opacity-40'
              }
              ${isSelected ? 'ring-2 ring-blue-500' : ''}
              ${isToday && isCurrentMonth ? 'font-bold ring-1 ring-blue-300' : ''}
            `}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-400">Ledig</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-400">Upptagen</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
