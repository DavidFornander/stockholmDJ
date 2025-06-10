import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  link: string;
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  link,
  isPast = false
}) => {
  return (
    <div className={`bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border border-gray-800 ${isPast ? 'opacity-60' : ''}`}>
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {isPast && (
          <div className="absolute inset-0 bg-gray-500 bg-opacity-40"></div>
        )}
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${isPast ? 'text-gray-300' : 'text-white'}`}>{title}</h3>
        
        <div className={`flex items-center text-sm mb-1 ${isPast ? 'text-gray-500' : 'text-gray-400'}`}>
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <div className={`flex items-center text-sm mb-1 ${isPast ? 'text-gray-500' : 'text-gray-400'}`}>
          <ClockIcon className="h-4 w-4 mr-2" />
          <span>{time}</span>
        </div>
        
        <div className={`flex items-center text-sm mb-4 ${isPast ? 'text-gray-500' : 'text-gray-400'}`}>
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <p className={`mb-4 line-clamp-3 ${isPast ? 'text-gray-400' : 'text-gray-300'}`}>{description}</p>
        
        <Link 
          href={link} 
          className={`inline-block px-4 py-2 rounded-md transition-colors ${
            isPast 
              ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          Läs mer
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
