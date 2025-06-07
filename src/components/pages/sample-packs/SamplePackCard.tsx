import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Music, User, Headphones } from 'lucide-react';

interface SamplePackCardProps {
  id: string;
  title: string;
  producer: string;
  genre: string;
  description: string;
  imageUrl: string;
  link: string;
}

const SamplePackCard: React.FC<SamplePackCardProps> = ({
  id,
  title,
  producer,
  genre,
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
          <User className="h-4 w-4 mr-2" />
          <span>{producer}</span>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <Music className="h-4 w-4 mr-2" />
          <span>{genre}</span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <Link 
          href={link} 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Explore Pack
        </Link>
      </div>
    </div>
  );
};

export default SamplePackCard;
