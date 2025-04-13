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
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  link
}) => {
  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border border-gray-800">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-1">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-1">
          <ClockIcon className="h-4 w-4 mr-2" />
          <span>{time}</span>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <Link 
          href={link} 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Läs mer
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
