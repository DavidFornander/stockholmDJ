import React from 'react';
import EventCard from './EventCard';

// Sample event data - in a real app, this would come from an API or CMS
const eventsData = [
  {
    id: '1',
    title: 'Deep Underground',
    date: '12 Februari 2025',
    time: '23:00 - 08:00',
    location: 'Bron, Stockholm',
    description: 'Rå underground house i Stockholms mörkaste källare. Minimal techno och deep house med internationella DJs från Berlins underjordiska scen.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/deep-underground'
  },
  {
    id: '2',
    title: 'Warehouse Sessions',
    date: '28 Mars 2025',
    time: '22:00 - 06:00',
    location: 'Secret Location, Södermalm',
    description: 'Warehouse party med bara 200 personer. Pure underground house från Chicago och Detroit. Location släpps 2h innan start.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/warehouse-sessions'
  },
  {
    id: '3',
    title: 'Basement Collective',
    date: '15 April 2025',
    time: '00:00 - 10:00',
    location: 'Under, Gamla Stan',
    description: 'Mörk källarklubb med bara vinyl. Deep house, minimal och dub techno. Inga telefoner, bara ren musik och dans till gryningen.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/basement-collective'
  },
  {
    id: '4',
    title: 'Acid House Revival',
    date: '3 Maj 2025',
    time: '23:30 - 08:00',
    location: 'Industriområdet, Hammarby',
    description: '90-talets acid house lever igen. TB-303 synthesizers och äkta Chicago house i övergiven fabrikslokal. Endast 150 personer.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/acid-house-revival'
  },
  {
    id: '5',
    title: 'Rooftop Underground',
    date: '21 Juni 2025',
    time: '20:00 - 06:00',
    location: 'Secret Rooftop, Östermalm',
    description: 'Underground house under Stockholms himmel. Hemliga takfesten med utsikt över staden. Deep house och minimal när solen går upp.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/rooftop-underground'
  }
];

const Events: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Kommande Events</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upptäck våra kommande evenemang och workshops. Stockholm.DJ arrangerar allt från företagsevent till klubbkvällar och musikaliska workshops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Saknar du något?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Vi kan hjälpa dig arrangera ditt eget event, oavsett om det är en företagsfest, ett bröllop eller en privatfest.
          </p>
          <a 
            href="/bokabeta3" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Boka DJ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
