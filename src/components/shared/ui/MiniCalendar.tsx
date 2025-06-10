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
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get the current month's dates
  const getCalendarDates = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      dates.push({
        date: i,
        dateString,
        available: availability[dateString] === true,
        isSelected: selectedDate === dateString
      });
    }
    return dates;
  };

  const dates = getCalendarDates(currentMonth);
  const monthName = currentMonth.toLocaleDateString('sv-SE', { month: 'short' });

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
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
          onClick={prevMonth}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        <h3 className="text-xs font-medium text-gray-900 dark:text-white">
          {monthName}
        </h3>
        <button 
          onClick={nextMonth}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
          <div key={day} className="text-center text-xs text-gray-500 dark:text-gray-400 font-medium">
            {day}
          </div>
        ))}
        
        {/* Calendar dates */}
        {dates.map(({ date, dateString, available, isSelected }) => (
          <button
            key={dateString}
            onClick={() => handleDateClick(dateString, available)}
            disabled={!available}
            className={`
              w-6 h-6 text-xs rounded text-center transition-colors
              ${available 
                ? 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40' 
                : 'text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
              }
              ${isSelected ? 'ring-2 ring-blue-500' : ''}
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
