import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, Code, ExternalLink } from 'lucide-react';

interface PluginCardProps {
  id: string;
  title: string;
  developer: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
}

const PluginCard: React.FC<PluginCardProps> = ({
  id,
  title,
  developer,
  category,
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
          <Code className="h-4 w-4 mr-2" />
          <span>{developer}</span>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <Tag className="h-4 w-4 mr-2" />
          <span>{category}</span>
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <Link 
          href={link} 
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PluginCard;
