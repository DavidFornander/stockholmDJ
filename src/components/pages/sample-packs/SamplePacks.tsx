import React from 'react';
import SamplePackCard from './SamplePackCard';

// Sample pack data - in a real app, this would come from an API or CMS
const samplePacksData = [
  {
    id: '1',
    title: 'Deep House Essentials',
    producer: 'Stockholm.DJ',
    genre: 'Deep House',
    description: 'Premium deep house samples including lush pads, warm basslines, and sophisticated percussion elements.',
    imageUrl: '/assets/sample-packs/pack1.jpg',
    link: '/sample-packs/deep-house-essentials'
  },
  {
    id: '2',
    title: 'Tech House Grooves',
    producer: 'Stockholm.DJ',
    genre: 'Tech House',
    description: 'Driving tech house loops and one-shots featuring tight drums, synth stabs, and rolling bass patterns.',
    imageUrl: '/assets/sample-packs/pack2.jpg',
    link: '/sample-packs/tech-house-grooves'
  },
  {
    id: '3',
    title: 'Melodic Techno Elements',
    producer: 'Stockholm.DJ',
    genre: 'Techno',
    description: 'Atmospheric techno samples with hypnotic sequences, textured drones, and precise percussion.',
    imageUrl: '/assets/sample-packs/pack3.jpg',
    link: '/sample-packs/melodic-techno-elements'
  },
  {
    id: '4',
    title: 'Organic House Loops',
    producer: 'Stockholm.DJ',
    genre: 'Organic House',
    description: 'Natural and organic house samples featuring live instruments, ethnic percussion, and warm analog textures.',
    imageUrl: '/assets/sample-packs/pack4.jpg',
    link: '/sample-packs/organic-house-loops'
  }
];

const SamplePacks: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sample Packs</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our collection of premium sample packs curated and created by Stockholm.DJ's professional producers. Elevate your productions with high-quality sounds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePacksData.map((pack) => (
            <SamplePackCard key={pack.id} {...pack} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Looking for Custom Samples?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We can create custom sample packs for your specific production needs or book one of our experienced DJs for your next event.
          </p>
          <a 
            href="/book" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SamplePacks;
