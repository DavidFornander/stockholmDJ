import React from 'react';
import PluginCard from './PluginCard';

// Sample plugin data - in a real app, this would come from an API or CMS
const pluginsData = [
  {
    id: '1',
    title: 'Serato DJ Pro',
    developer: 'Serato',
    category: 'DJ Software',
    description: 'Industry-standard DJ software with intuitive interface, perfect for beginners and professionals alike.',
    imageUrl: '/assets/plugins/plugin1.jpg',
    link: '/plugins/serato-dj-pro'
  },
  {
    id: '2',
    title: 'Rekordbox',
    developer: 'Pioneer DJ',
    category: 'DJ Software',
    description: 'Complete DJ software solution for track preparation, performance and library management.',
    imageUrl: '/assets/plugins/plugin2.jpg',
    link: '/plugins/rekordbox'
  },
  {
    id: '3',
    title: 'Traktor Pro',
    developer: 'Native Instruments',
    category: 'DJ Software',
    description: 'Professional DJ software with advanced features including powerful remix decks and effects.',
    imageUrl: '/assets/plugins/plugin3.jpg',
    link: '/plugins/traktor-pro'
  },
  {
    id: '4',
    title: 'Mixed In Key',
    developer: 'Mixed In Key',
    category: 'Analysis Tool',
    description: 'Essential tool for harmonic mixing that analyzes the musical key of your tracks to create seamless transitions.',
    imageUrl: '/assets/plugins/plugin4.jpg',
    link: '/plugins/mixed-in-key'
  }
];

const Plugins: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">DJ Plugins & Software</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover professional DJ software and plugins recommended by Stockholm.DJ. These tools help us create unforgettable musical experiences for every event.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pluginsData.map((plugin) => (
            <PluginCard key={plugin.id} {...plugin} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Need Professional DJ Services?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let Stockholm.DJ handle the music for your next event. Our experienced DJs create the perfect atmosphere for any occasion.
          </p>
          <a 
            href="/book" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Book a DJ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plugins;
